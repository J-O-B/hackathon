# TheyThinkItsAllClover - [Visit Live Site](https://TheyThinkItsAllClover.Herokuapp.com)

![app logo](/static/Untitled.jpg)

- [Overview](#Overview)
- [User Stories](#Stories)
- [Design](#Design)
    - [Wireframes](#Wireframes)
- [Testing](#Testing)
- [Deployment](#Deployment)

<a name='Overview'></a>

## Overview

TheyThinkItsAllClover is a python flask web-app aiming to bring the world together on St Patrick's Day 2021 by scraping Happy Paddy's Day wishes from all over the world on Twitter and showing on a live map how, even though we are apart this year, we are all celebrating together!

<a name='Stories'></a>

![Image](/static/phones.jpg)

## User Stories

**As a visitor to the site, I want to:**

- See the frequency of Paddy's Day tweets being made
- See where in the world people are tweeting about Paddy's day
- See this information visualised on screen through a live map and tweet counter
- Be able to add to the tweet count by tweeting directly from the web app, '@'ing to my own twitter handle
- Have my tweet remain on the site while the app is open so I can see it
- Be able to easily use the app on mobile, tablet, or desktop

**As the site owner, I want:**

- To promote our hashtag and twitter account through the site
- To have the app and tweet map update live, encouraging people to keep the webpage open
- To encourage people to tweet directly from the app
- For there always to be some tweets displayed on the app, and not be a blank map
- For the app to be responsive so it is usable on mobile, tablet & desktop


<a name='Design'></a>

## Design

<a name='Wireframes'></a>

### Wireframes
> - [Wireframes](static/wireframe.pdf): A single page website.

<a name='Testing'></a>

## Testing

<a name='Deployment'></a>

## Deployment

This app is deployed on Heroku. The bot to scrape tweets has to be continuously run as it finds tweets in 
real time, rather than simply scraping any tweet with the correct hashtag.

To deploy to heroku an app "TheyThinkItsAllClover" was created. From gitpod, a remote connection to that 
app was created before pushing our completed project to the Heroku Master Branch. Environmental keys and 
API keys were added directly in the Heroku security tab on the Heroku website.

