import os
from flask import (
    Flask, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from twitterBot import *
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/", methods=["GET", "POST"])
def home():
    tweets = mongo.db.tweets.find().sort('time_posted', -1)
    count = mongo.db.tweets.count()
    StdOutListener()
    return render_template("index.html", tweets=tweets, count=count)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
    auth = OAuthHandler(API_KEY, API_SECRET_KEY)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
    # Listen for a stream
    listen = StdOutListener()
    stream = Stream(auth, listen)
    # Filter the stream to tweets containing #theyThinkItsAllClover:
    stream.filter(track=['#theyThinkItsAllClover'])
