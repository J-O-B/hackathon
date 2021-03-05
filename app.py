import os
from flask import (
    Flask, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from datetime import *
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = "mongodb+srv://test:test1988@clustertweet.cfvo1.mongodb.net/theythinkitsallclover?retryWrites=true&w=majority"
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/", methods=["GET", "POST"])
def home():
    tweets = mongo.db.tweets.find()
    return render_template("index.html", tweets=tweets)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)