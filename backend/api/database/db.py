from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from backend.api.models.jobs import Job

engine = create_engine("mysql+pymysql://admin@devjobs:secretpw@database/devjobs")
Session = sessionmaker(engine)
session = Session()

Base = declarative_base()

scoot = Job(
    1,
    1,
    "Full Time",
    "United Kingdom",
    "Senior Software Engineer",
    "5h ago",
    "./public/assets/img/logos/scoot.svg",
    "hsl(36, 87%, 49%)",
)



Base.metadata.create_all(engine)
session.add(scoot)
session.commit()
