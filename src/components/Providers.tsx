"use client";

import { I18nProvider } from "@/lib/i18n/context";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollToHash from "@/components/layout/ScrollToHash";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <ScrollToHash />
      <CustomCursor />
      {children}
    </I18nProvider>
  );
}
