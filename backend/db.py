from pymysql import IntegrityError, InterfaceError
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from api.models.models import *

engine = create_engine("mysql+pymysql://admin@devjobs:secretpw@database/devjobs")
Session = sessionmaker(engine)
session = Session()

if __name__ == "__main__":
    try:
        Base.metadata.drop_all(engine)
        Base.metadata.create_all(engine)
        session.add(scootOffer)
        session.add(scootCompany)
        session.add(scootRequirements)
        session.add(scootRole)

    except (InterfaceError, IntegrityError) as erreur:
        print(f"L'erreur suivante s'est produite : {erreur}")
        if session:
            print("rollback...")
            session.rollback()

    finally:
        session.commit()
        if session:
            session.close()
