from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

from api.devJob import devJob
from api.errors import register_handlers_errors
from api.db import engine, Base
from api.models.user import get_users


app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"

cors = CORS(app, resources={r"/": {"origins": "http://127.0.0.1:5000/"}})

register_handlers_errors(app)


@app.route("/")
@cross_origin(origin="localhost", headers=["Content-Type", "Authorization"])
def get_jobs():
    users = get_users()

    for user in users:
        print(user.name)

    return jsonify(devJob)


if __name__ == "__main__":
    Base.metadata.create_all(engine)
    app.run(host="0.0.0.0", port=5000, debug=True)
