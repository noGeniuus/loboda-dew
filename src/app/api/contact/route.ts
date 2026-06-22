import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

type LeadPayload = {
  name: string;
  email: string;
  telegram?: string;
  task: string;
  budget?: string;
};

async function sendViaFormSubmit(data: LeadPayload) {
  const message = [
    `Имя: ${data.name}`,
    `Email: ${data.email}`,
    `Telegram: ${data.telegram || "—"}`,
    `Бюджет: ${data.budget || "—"}`,
    "",
    "Задача:",
    data.task,
  ].join("\n");

  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      telegram: data.telegram || "",
      budget: data.budget || "",
      message,
      _subject: `Новая заявка с портфолио: ${data.name}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.success === false) {
    throw new Error("FormSubmit failed");
  }
  return json;
}

async function sendViaWeb3Forms(data: LeadPayload, accessKey: string) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Новая заявка: ${data.name}`,
      from_name: "Loboda Portfolio",
      name: data.name,
      email: data.email,
      telegram: data.telegram,
      budget: data.budget,
      message: data.task,
    }),
  });
  if (!res.ok) throw new Error("Web3Forms failed");
  const json = await res.json();
  if (!json.success) throw new Error("Web3Forms rejected");
  return json;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    if (!body.name?.trim() || !body.email?.trim() || !body.task?.trim()) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      await sendViaWeb3Forms(body, web3Key);
    } else {
      await sendViaFormSubmit(body);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
