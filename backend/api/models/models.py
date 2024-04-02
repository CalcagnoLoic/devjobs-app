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


class Company(Base):
    __tablename__ = "company"

    company_name = Column("companyName", String(128), primary_key=True)
    website = Column("website", String(128))
    role_id = Column("roleId", Integer, ForeignKey("role.id"))
    requirements_id = Column("requirementsId", Integer, ForeignKey("requirements.id"))

    role = relationship(Role)
    requirements = relationship(Requirements)

    def __init__(self, company_name, website, role_id, requirements_id):
        self.company_name = company_name
        self.website = website
        self.role_id = role_id
        self.requirements_id = requirements_id


class Offer(Base):
    __tablename__ = "offer"

    id = Column(Integer, primary_key=True, autoincrement=True)
    company_id = Column("companyId", String(128), ForeignKey("company.companyName"))
    role_id = Column("roleId", Integer, ForeignKey("role.id"))
    requirements_id = Column("requirementsId", Integer, ForeignKey("requirements.id"))
    contract = Column("contract", String(32))
    location = Column("location", String(64))
    position = Column("position", String(128))
    posted_at = Column("postedAt", String(32))
    description = Column("description", String(1000))
    apply = Column("apply", String(128))
    logo = Column("logo", String(250))
    logo_background = Column("logoBackground", String(64))

    role = relationship(Role)
    requirements = relationship(Requirements)
    company = relationship(Company)

    def __init__(
        self,
        company_id,
        role_id,
        requirements_id,
        contract,
        location,
        position,
        posted_at,
        description,
        apply,
        logo,
        logo_background,
    ):
        self.company_id = company_id
        self.role_id = role_id
        self.requirements_id = requirements_id
        self.contract = contract
        self.location = location
        self.position = position
        self.posted_at = posted_at
        self.description = description
        self.apply = apply
        self.logo = logo
        self.logo_background = logo_background


scootOffer = Offer(
    "Scoot",
    1,
    1,
    "Full Time",
    "United Kingdom",
    "Senior Software Engineer",
    "5h ago",
    "Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.",
    "https://example.com/scoot/apply",
    "./public/assets/img/logos/scoot.svg",
    "hsl(36, 87%, 49%)",
)

scootCompany = Company("Scoot", "https://example.com/scoot", 1, 1)

scootRequirements = Requirements(
    1,
    "The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.",
    [
        "5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate significant impact that your work has had on the product and/or the team.",
        "Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.",
        "Extremely data-driven.",
        "Ability to debug complex systems.",
    ],
)

scootRole = Role(
    1,
    "We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.",
    [
        "This role is for someone who is excited about the early stage - you’ll be responsible for turning the platform vision into reality through smart, efficient building and testing.",
        "Translate the product roadmap into engineering requirements and own the engineering roadmap",
        "Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.",
        "Collaborate with product, design, and external engineering teammates as needed.",
    ],
)

