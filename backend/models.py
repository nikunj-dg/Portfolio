# Import required libraries -------------------------------

from sqlalchemy import Column, Integer, String, Text, DateTime, func, ARRAY

from .database import Base



# Define the data models ---------------------------------

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(127), nullable=False)
    surname = Column(String(127), nullable=False)
    username = Column(String(255), unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


