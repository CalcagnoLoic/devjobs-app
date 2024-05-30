import os

from backend.controllers.controllers import read_all_offer, read_one_job
from backend.database.database import engine
from backend.errors.errors import register_handlers_errors
from backend.models.models import Base
from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy


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
    offers = read_all_offer(db)
    return offers


@app.route("/job-detail/<int:id>", methods=["GET"])
@cross_origin(origin="localhost", headers=["Content-Type", "Authorization"])
def get_specific_job(id):
    offer = read_one_job(db, id)
    return offer


if __name__ == "__main__":
    app.run()
