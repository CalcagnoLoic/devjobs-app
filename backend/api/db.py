from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from models.jobs import Job

engine = create_engine("mysql+pymysql://admin@devjobs:secretpw@database/devjobs")
Session = sessionmaker(engine)
session = Session()

Base = declarative_base()

