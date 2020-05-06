# Biker App

The following project is a Biker Weather API app built during the late April through mid-May 2020. The user creates a user to store in the database, then is allowed to login with credentials. [See requirments below](./README.md/#Requirements). 

I built the app while working remotely.

## Screenshots

### _Landing Page_
*Desktop Landing*

![landingPage](url)

*Mobile Landing*

![mobileLandingPage](url)

## Installation

Node JS and npm must be installed

An instance of MySQL must be running

### `sudo mysql -uroot -p`

login in to your root username and leave this running.

Open another bash terminal at the cloned KikiSaver directory.

### `npm install`

Install will pull in all required dependencies.

Next you must create your own copy of .env with the following code and insert your own user name and password:

```
export DB_USER=''
export DB_PASS=''    
```

Review the init.sql and confirm that your localhost username and password match your .env username and password variables.

Next return to your instance of MySQL.

### `source init.sql`

The queries should each return back 'OK'.

### `source .env`

Run this command, so app.js will connect correctly to your username and password variables.

### `node index.js`

Runs the app in the development mode.<br>
Open [http://localhost:8888](http://localhost:8888) to view it in the browser.

## Requirements

1. As a user, I would like to be able to use the app to tell me if today is a good day to ride a
bike.
2. As a user, I would like the app to tell me what day or days would be the best to ride in
the next seven days so I can plan to ride on those days.
3. As a user, I would like to be able to save the ride predictions so I can pull them up if I do
not have internet access.
4. As a user, I would like to be able to specify the criteria the app uses to determine if today
is a “good” day to ride so I can customize the app for my needs.
5. As a user, I would like to record how good today was after a ride so the app can track
what days are “good” days.
6. As a user, I would like the app to learn what I think “good” days are and use that
information to tell me what are the “best” days for me to ride.

### Users											
|id	| username	| first_name	|	last_name	password	| 	phone	| 	created_at	| 	deleted_at	| 	profile_pic	| 	city	| 	state	| 	country	| 
| 1	| 	eliot587@gmail.com	| 	Eliot	| 	Sanford	| 	0#@904987##$	| 	601-555-5555	| 	now()	| 	null	| 	| 	| 	| 
|--|--------|--------|----------|---------|-----|----------|----------|----------|----------|----------|
|||||||||		


## Technologies Used

### Languages and Frameworks
		* HTML5
		* CSS3
		* JS
        * NodeJS
        * ExpressJS
        
   
### API (none used)

## Photos
		* Courtesy of ...

Please offer report any feedback to me via Pull Request @techieEliot.

Thanks for reading thus far!