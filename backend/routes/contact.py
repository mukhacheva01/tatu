from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import get_db
from models import Contact

router = APIRouter()

class ContactCreate(BaseModel):
    name: str
    email: str
    phone: str = None
    message: str

@router.post("/contact")
def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    db_contact = Contact(**contact.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return {"message": "Contact saved successfully"}
