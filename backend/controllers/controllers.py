from flask import jsonify
from backend.models.models import Offer
from ..app import db


def get_all_offer():
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
            "description": offer.description,
            "apply": offer.apply,
            "companyWebsite": offer.company_website,
            "logo": offer.logo,
            "logoBackground": offer.logo_background,
        }
        response.append(offer_data)
    return jsonify(response)
