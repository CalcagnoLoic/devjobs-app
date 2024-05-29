import os
from pymysql import IntegrityError, InterfaceError
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv


dotenv_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".env"))
load_dotenv(dotenv_path)

MARIADB_USER = os.getenv("MARIADB_USER")
MARIADB_PASSWORD = os.getenv("MARIADB_PASSWORD")
MARIADB_DATABASE = os.getenv("MARIADB_DATABASE")

engine = create_engine(
    f"mysql+pymysql://{MARIADB_USER}:{MARIADB_PASSWORD}@database/{MARIADB_DATABASE}"
)
Session = sessionmaker(engine)
session = Session()
