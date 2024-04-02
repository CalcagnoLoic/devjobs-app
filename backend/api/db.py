from pymysql import IntegrityError, InterfaceError
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models.instances import *

engine = create_engine("mysql+pymysql://admin@devjobs:secretpw@database/devjobs")
Session = sessionmaker(engine)
session = Session()

if __name__ == "__main__":
    try:
        Base.metadata.drop_all(engine)
        Base.metadata.create_all(engine)

        session.add(scootOffer)
        session.add(scootRequirements)
        session.add(scootRole)

        session.add(blogrOffer)
        session.add(blogrRequirements)
        session.add(blogrRoles)

        session.add(vectorOffer)
        session.add(vectorRequirements)
        session.add(vectorRoles)

        session.add(officeLiteOffer)
        session.add(officeLiteRequirements)
        session.add(officeLiteRoles)

        session.add(podOffer)
        session.add(podRequirements)
        session.add(podRoles)

        session.add(creativeOffer)
        session.add(creativeRequirements)
        session.add(creativeRoles)

        session.add(pomodoroOffer)
        session.add(pomodoroRequirements)
        session.add(pomodoroRoles)

        session.add(makerOffer)
        session.add(makerRequirements)
        session.add(makerRoles)

        session.add(coffeeroastersOffer)
        session.add(coffeeroastersRequirements)
        session.add(coffeeroastersRole)

        session.add(mastercraftOffer)
        session.add(mastercraftRequirements)
        session.add(mastercraftRoles)

        session.add(crowdfundOffer)
        session.add(crowdfundRequirements)
        session.add(crowdfundRoles)

        session.add(typemasterOffer)
        session.add(typemasterRequirements)
        session.add(typemasterRoles)

        session.add(crowdfundOffer2)
        session.add(crowdfundRequirements2)
        session.add(crowdfundRoles2)

        session.add(coffeeroastersOffer2)
        session.add(coffeeroastersRequirements2)
        session.add(coffeeroastersRole2)

        session.add(blogrOffer2)
        session.add(blogrRequirements2)
        session.add(blogrRoles2)

    except (InterfaceError, IntegrityError) as erreur:
        print(f"L'erreur suivante s'est produite : {erreur}")
        if session:
            print("rollback...")
            session.rollback()

    finally:
        session.commit()
        if session:
            session.close()
