from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from database import Base

class Contact(Base):
    __tablename__ = "contacts"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    phone = Column(String(20))
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class Artist(Base):
    __tablename__ = "artists"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    specialty = Column(String(100))
    bio = Column(Text)
    image_url = Column(String(255))

class GalleryImage(Base):
    __tablename__ = "gallery_images"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100))
    image_url = Column(String(255), nullable=False)
    artist_id = Column(Integer)
    created_at = Column(DateTime, default=datetime.utcnow)
