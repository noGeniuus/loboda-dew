from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import os

app = FastAPI(title="Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    task: str
    budget: str | None = None


leads_db: list[dict] = []


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/api/leads")
def create_lead(lead: LeadCreate):
    record = lead.model_dump()
    leads_db.append(record)
    # TODO: persist to PostgreSQL when DATABASE_URL is wired
    return {"ok": True, "id": len(leads_db)}


@app.get("/api/leads")
def list_leads():
    return leads_db
