# Import required libraries -------------------------------

import hashlib

from . import models, schemas, database



# Define the crud functions -------------------------------

# User functions 

def verify_user(user: schemas.UserCreate):
    db = database.SessionLocal()

    hashed_pass = hashlib.sha256(user.password.encode()).hexdigest()
    
    try:
        user_check = (
            db.query(models.User)
            .filter(models.User.username == user.username)
            .filter(models.User.hashed_password == hashed_pass)
            .first()
        )

        return user_check
    finally:
        db.close()

def check_username(username: str):
    db = database.SessionLocal()

    try:
        return db.query(models.User).filter(models.User.username == username).first()
    finally:
        db.close()
    
def create_user(user: schemas.UserCreate):
    db = database.SessionLocal()

    hashed_pass = hashlib.sha256(user.password.encode()).hexdigest()

    db_user = models.User(
        name=user.name,
        surname=user.surname,
        username=user.username,
        hashed_password=hashed_pass
    )

    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)

        return db_user
    finally:
        db.close()


