from pymysql import IntegrityError, InterfaceError
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine("mysql+pymysql://admin@devjobs:secretpw@database/devjobs")
Session = sessionmaker(engine)
session = Session()
