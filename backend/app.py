from flask import Flask, request, jsonify
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
import os


app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///" + os.path.join(basedir, "characters.sqlite")
db = SQLAlchemy(app)
ma = Marshmallow(app)
CORS(app, resources={r'/*': {'origins': '*'}})


class Character(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(16), nullable = False)
    job = db.Column(db.String, nullable = False)
    level = db.Column(db.Integer, default = 1)
    xp = db.Column(db.Integer, default = 0)
    skill = db.Column(db.String, nullable = False)
    skill_two = db.Column(db.String, nullable = False)
    skill_three = db.Column(db.String, nullable = False)

    def __init__(self, name, job, skill, skill_two, skill_three):
        self.name = name
        self.job = job
        self.skill = skill
        self.skill_two = skill_two
        self.skill_three = skill_three

class CharacterSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "job", "level", "xp","skill", "skill_two", "skill_three")

character_schema = CharacterSchema()
characters_schema = CharacterSchema(many = True)




@app.route("/")
def homepage():
    return "string"

@app.route("/characters")
def get_over_here():
    characters = db.session.query(Character).all()

    return jsonify(characters_schema.dump(characters))

@app.route("/character", methods = ["POST"])
def just_pick_one():
    character_data = request.get_json()
    name = character_data.get("name")
    job = character_data.get("job")
    skill = character_data.get("skill")
    skill_two = character_data.get("skill_two")
    skill_three = character_data.get("skill_three")

    new_character = Character(name, job, skill, skill_two, skill_three)
    db.session.add(new_character)
    db.session.commit()
    return character_schema.jsonify(new_character)

@app.route("/character/<id>", methods = ["DELETE"])
def remove_me(id):
    character_to_delete = db.session.query(Character).filter(Character.id == id).first()
    db.session.delete(character_to_delete)
    db.session.commit()
    return jsonify("Your character has been deleted")


       


if __name__ == "__main__":
    app.run(debug = True)
