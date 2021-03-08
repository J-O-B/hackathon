import os
from flask import (
    Flask, render_template)
from flask_pymongo import PyMongo
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")

mongo = PyMongo(app)


@app.errorhandler(404)
# inbuilt function which takes error as parameter
def not_found(e):
    # error page:
    return render_template("404.html")


@app.route("/", methods=["GET", "POST"])
def home():
    tweets = mongo.db.tweets.find().sort('time_posted', -1).limit(100)
    count = mongo.db.tweets.count()
    return render_template("index.html",
                           tweets=tweets, count=count)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
