from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

from api.devJob import devJob
from api.errors import register_handlers_errors


app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"

cors = CORS(app, resources={r"/": {"origins": "http://127.0.0.1:5000/"}})

register_handlers_errors(app)


@app.route("/")
@cross_origin(origin="localhost", headers=["Content-Type", "Authorization"])
def get_jobs():
    return jsonify(devJob)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
