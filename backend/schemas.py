# Import required libraries -------------------------------

from pydantic import BaseModel, ConfigDict
from typing import List, Optional
from datetime import datetime



# Define the schemas ---------------------------------------

# User schemas 

class UserBase(BaseModel):
    name: str
    surname: str
    username: str

class User(UserBase):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)

class UserLogin(BaseModel):
    username: str
    password: str

class UserCreate(UserBase):
    "Addidtional fields that are only for create"
    password: str

class UserUpdate(UserBase):
    "Addidtional fields that are only for create"
    pass


