import os
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from backend.database.database import engine
from backend.errors.errors import register_handlers_errors
from backend.models.models import Base, Offer, Requirements, Role
from dotenv import load_dotenv


dotenv_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".env"))
load_dotenv(dotenv_path)

MARIADB_USER = os.getenv("MARIADB_USER")
MARIADB_PASSWORD = os.getenv("MARIADB_PASSWORD")
MARIADB_DATABASE = os.getenv("MARIADB_DATABASE")

Base.metadata.create_all(bind=engine)

app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
app.config["SQLALCHEMY_DATABASE_URI"] = (
    f"mysql+pymysql://{MARIADB_USER}:{MARIADB_PASSWORD}@database/{MARIADB_DATABASE}"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

cors = CORS(app, resources={r"/": {"origins": "http://localhost:5000/"}})
register_handlers_errors(app)

db = SQLAlchemy(app)


@app.route("/", methods=["GET"])
@cross_origin(origin="localhost", headers=["Content-Type", "Authorization"])
def get_jobs():
    offers = db.session.query(Offer).all()
    response = []
    for offer in offers:
        offer_data = {
            "id": offer.id,
            "company": offer.company,
            "contract": offer.contract,
            "location": offer.location,
            "position": offer.position,
            "postedAt": offer.posted_at,
            "logo": offer.logo,
            "logoBackground": offer.logo_background,
        }
        response.append(offer_data)
    return jsonify(response)


@app.route("/job-detail/<int:id>", methods=["GET"])
@cross_origin(origin="localhost", headers=["Content-Type", "Authorization"])
def get_specific_job(id):
    offer = (
        db.session.query(Offer)
        .join(Requirements, Offer.requirements_id == Requirements.id)
        .join(Role, Offer.role_id == Role.id)
        .filter(Offer.id == id)
        .first()
    )
    if offer:
        role = (
            db.session.query(Role.description, Role.roles)
            .filter(Role.id == offer.role_id)
            .first()
        )
        requirements = (
            db.session.query(Requirements.requirements, Requirements.description)
            .filter(Requirements.id == offer.requirements_id)
            .first()
        )
        offer_dict = {
            "id": offer.id,
            "company": offer.company,
            "contract": offer.contract,
            "location": offer.location,
            "position": offer.position,
            "postedAt": offer.posted_at,
            "logo": offer.logo,
            "logoBackground": offer.logo_background,
            "description": offer.description,
            "apply": offer.apply,
            "website": offer.company_website,
            "roleDescription": role.description,
            "roles": role.roles,
            "requirements": requirements.requirements,
            "requirementsDescription": requirements.description,
        }
        return jsonify(offer_dict)


if __name__ == "__main__":
    app.run()
