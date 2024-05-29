from flask import jsonify


def handle_bad_request(e):
    return jsonify({"error": "Bad Request"}), 400


def handle_unauthorized(e):
    return jsonify({"error": "Unauthorized"}), 401


def handle_forbidden(e):
    return jsonify({"error": "Forbidden"}), 403


def handle_not_found(e):
    return jsonify({"error": "Not Found"}), 404


def handle_not_allowed(e):
    return jsonify({"error": "Not Allowed"}), 405


def handle_internal_server(e):
    return jsonify({"error": "Internal Server"}), 500


def handle_service_unavailable(e):
    return jsonify({"error": "Service Unavailable"}), 503


def register_handlers_errors(app):
    app.errorhandler(400)(handle_bad_request)
    app.errorhandler(401)(handle_unauthorized)
    app.errorhandler(403)(handle_forbidden)
    app.errorhandler(404)(handle_not_found)
    app.errorhandler(405)(handle_not_allowed)
    app.errorhandler(500)(handle_internal_server)
    app.errorhandler(503)(handle_service_unavailable)
