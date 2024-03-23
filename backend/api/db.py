import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


DB_USER = os.environ.get("DB_USER")


engine = create_engine("mysql+pymysql://{}:toto90@database/devops_jobs".format(DB_USER))

Session = sessionmaker(bind=engine)
session = Session()

Base = declarative_base()


class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True)
    title=Column('title', String(32))


