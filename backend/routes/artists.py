from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Artist

router = APIRouter()

@router.get("/artists")
def get_artists(db: Session = Depends(get_db)):
    artists = db.query(Artist).all()
    return artists
