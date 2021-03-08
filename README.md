# TheyThinkItsAllClover - [Visit Live Site](https://TheyThinkItsAllClover.Herokuapp.com)

![app logo](/static/Untitled.jpg)

- [Overview](#Overview)
- [User Stories](#Stories)
- [Design](#Design)
    - [Wireframes](#Wireframes)
- [Testing](#Testing)
- [Deployment](#Deployment)
- [Features](#Features)

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

To test this project, JSHint and W3C Validator were used to check all html, css and javascript.
Although some errors show on the CSS check, all of these items are related to prefix's for cross browser compatability.

![test](/static/htmlCheck.jpg)


<a name='Deployment'></a>

## Deployment

This app is deployed on Heroku. The bot to scrape tweets has to be continuously run as it finds tweets in 
real time, rather than simply scraping any tweet with the correct hashtag.

To deploy to heroku an app "TheyThinkItsAllClover" was created. From gitpod, a remote connection to that 
app was created before pushing our completed project to the Heroku Master Branch. Environmental keys and 
API keys were added directly in the Heroku security tab on the Heroku website.


### Cloning This Project:
1. On GitHub, navigate to the main page of the repository.
2. Above the list of files, click the download Code icon. (a down arrow with a line under it)
3. To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the clipboard icon. To clone a repository using GitHub CLI, click Use GitHub CLI, then click the clipboard icon.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
7. Press Enter to create your local clone.
(Further information on cloning can be found at [GitHub Docs](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)


<a name='Features'></a>
## Features & How It Works

This project features a full stack development. Consisting of a GUI "Tweet Dashboard" as a front end, as well as a full MongoDB database back end.


### How It Works:
To make this project work, a Twitter Bot was created using the Twitter API to 'listen' for Tweets, once a Tweet containing our hashtag is posted 
our bot will automatically extract the data it wants, such as a name, link to their profile, picture, location and tweet message. This data is then fed 
into a MongoDB database. In a seperate flask front end development, Tweets are pulled from MongoDB through our flask app and onto the dashboard. From here 
our Leaflet JS based javascript in conjunction with jQuery loops through all of this data to add marker "pins" to the map.

*MongoDB & custom javascript were used due to other alternatives being paid subscription options (Apache Kafka, MapBox etc.)

### Features:
1. Twitter API
2. Automated Twitter Bot
3. MongoDB Database
4. Leaflet JS Map With Custom Markers
5. Bootstrap Mobile First Responsive Design
6. Modals
7. Cross Browser Compatible CSS
8. Defensive Programming Code
9. Buttons To Control How Big The Map Container Is

## Bugs

1. Locations render to preset default location (mid atlantic equator)

>    Fix: Split the location field (from MongoDB) into 2 seperate fields, and feed both Latitude and Longitude in seperately.
>        (Code: L.marker([lat, long])

2. Only Code Was Looping Through Data & Only Posting Latest Tweet On Map, Instead Of Multiple Pins.

>    Fix: Create a parent div with an ID, then each div created in FOR loop has same class and is child of the ID div. Now we can specify the block to find, the child div with its class name, and all the children of that div.
>        (Code: jQuery .each() & .children())

3. Responsive Text

>    Fix: More media queries!

4. Bot Crash On Location Attempt. Some Tweets Contain City Name, Others A Country Name, Some Have Nothing, & Some Have Coordinates

>    Fix: A "Try" / "Except" was added to prioritize what we wanted, so if coordinates are available, we scrape that data, if no coordinates then we will take city or country name, and if nothing exists then "No Location" is returned.


# Enjoy The App!

![Mockup1](/static/mockup.jpg)
![Mockup2](/static/mockup1.jpg)
![Mockup3](/static/mockup2.jpg)
    
