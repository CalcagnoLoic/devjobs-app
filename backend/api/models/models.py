import json
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy import ARRAY, Integer, Column, String, ForeignKey, Text

Base = declarative_base()


class Role(Base):
    __tablename__ = "role"

    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column("description", String(624))
    roles = Column("roles", Text)

    def __init__(self, id, description, roles):
        self.id = id
        self.description = description
        self.roles = json.dumps(roles)


class Requirements(Base):
    __tablename__ = "requirements"

    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column("description", String(624))
    requirements = Column(Text)

    def __init__(self, id, description, requirements):
        self.id = id
        self.description = description
        self.requirements = json.dumps(requirements)


class Offer(Base):
    __tablename__ = "offer"

    id = Column(Integer, primary_key=True, autoincrement=True)
    company = Column("company", String(128))
    contract = Column("contract", String(32))
    location = Column("location", String(64))
    position = Column("position", String(128))
    posted_at = Column("postedAt", String(32))
    description = Column("description", String(1000))
    apply = Column("apply", String(128))
    company_website = Column("companyWebsite", String(64))
    logo = Column("logo", String(250))
    logo_background = Column("logoBackground", String(64))
    role_id = Column("roleId", Integer, ForeignKey("role.id"))
    requirements_id = Column("requirementsId", Integer, ForeignKey("requirements.id"))

    role = relationship(Role)
    requirements = relationship(Requirements)

    def __init__(
        self,
        company,
        role_id,
        requirements_id,
        contract,
        location,
        position,
        posted_at,
        description,
        apply,
        company_website,
        logo,
        logo_background,
    ):
        self.company = company
        self.role_id = role_id
        self.requirements_id = requirements_id
        self.contract = contract
        self.location = location
        self.position = position
        self.posted_at = posted_at
        self.description = description
        self.apply = apply
        self.company_website = company_website
        self.logo = logo
        self.logo_background = logo_background
