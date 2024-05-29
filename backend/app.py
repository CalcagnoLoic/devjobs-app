from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

#from backend.controllers.controllers import get_all_offer
from backend.database.database import engine
from backend.errors.errors import register_handlers_errors
from backend.models.models import Base, Offer

Base.metadata.create_all(bind=engine)

app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
app.config["SQLALCHEMY_DATABASE_URI"] = (
    "mysql+pymysql://admin@devjobs:secretpw@database/devjobs"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

cors = CORS(app, resources={r"/": {"origins": "http://localhost:5000/"}})

register_handlers_errors(app)


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

@app.route('/job-detail/${id}')
def get_specific_job():
    pass

if __name__ == "__main__":
    app.run()
