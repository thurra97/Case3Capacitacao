from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, Field
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

models.Base.metadata.create_all(bind=engine)


def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

class Schedule(BaseModel):
    CPF: int = Field(gt=-1,)
    horario: str = Field(min_length=1)

@app.get("/")
def read_api(db: Session = Depends(get_db)):
    return db.query(models.Schedule).all()

@app.post("/")
def create_book(dado: Schedule, db: Session = Depends(get_db)):

    dado_model = models.Schedule()
    dado_model.CPF = dado.CPF
    dado_model.horario = dado.horario
    db.add(dado_model)
    db.commit()

    return dado

@app.delete("/")
def delete_book(CPF: int, db: Session = Depends(get_db)):

    book_model = db.query(models.Schedule).filter(models.Schedule.CPF == CPF).first()

    if book_model is None:
        raise HTTPException(
            status_code=404,
            detail=f"ID {CPF} : Does not exist"
        )

    db.query(models.Schedule).filter(models.Schedule.CPF == CPF).delete()

    db.commit()

# uvicorn main:app --reload