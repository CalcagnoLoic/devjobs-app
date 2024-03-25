from database.db import Base
from sqlalchemy import Integer, Column, String


class Job(Base):
    __tablename__ = "devjobs_job"

    id = Column(Integer, primary_key=True)
    id_company = Column("idCompany", Integer)
    id_offer = Column("idOffer", Integer)
    contract = Column("contract", String(32))
    location = Column("location", String(64))
    position = Column("position", String(128))
    posted_at = Column("postedAt", String(32))
    logo = Column("logo", String(250))
    logo_background = Column("logoBackground", String(64))

    def __init__(
        self,
        id_company,
        id_offer,
        contract,
        location,
        position,
        posted_at,
        logo,
        logo_background,
    ):
        self.id_company = id_company
        self.id_offer = id_offer
        self.contract = contract
        self.location = location
        self.position = position
        self.posted_at = posted_at
        self.logo = logo
        self.logo_background = logo_background

