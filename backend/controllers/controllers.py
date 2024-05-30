from flask import jsonify
from backend.models.models import Offer, Requirements, Role

def read_all_offer(database):
    offers = database.session.query(Offer).all()
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

def read_one_job(database, job_ib):
    offer = (
        database.session.query(Offer)
        .join(Requirements, Offer.requirements_id == Requirements.id)
        .join(Role, Offer.role_id == Role.id)
        .filter(Offer.id == job_ib)
        .first()
    )
    if offer:
        role = (
            database.session.query(Role.description, Role.roles)
            .filter(Role.id == offer.role_id)
            .first()
        )
        requirements = (
            database.session.query(Requirements.requirements, Requirements.description)
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