from sqlalchemy import Column, Integer, String
from database import Base


class Schedule(Base):
    __tablename__ = "Agendamento"

    CPF = Column(Integer, primary_key=True, index=True)
    horario = Column(String)
    