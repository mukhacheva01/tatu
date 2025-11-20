from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import GalleryImage

router = APIRouter()

@router.get("/gallery")
def get_gallery(db: Session = Depends(get_db)):
    images = db.query(GalleryImage).all()
    return images
