from api.db import Base, session, Column, Integer, String, select


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name=Column('title', String(32))


def get_users():
    statement = select(User.id, User.name)
    rows = session.execute(statement).all()

    return rows

