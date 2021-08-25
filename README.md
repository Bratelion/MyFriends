# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Run `docker-compose build` command
3. Run `docker-compose up` command

# Migration

1. Run `npm run migration:generate "NAME"` to generate new migration schema
2. Run `npm run migration:run` to run the migrations

Migrations are set to run prior to `npm start` inside Docker container, so your only job is entity changes and generation of migrations in CLI of app in docker

# Methods
Start sending requests to fill up the database:

## GET /friends
Get list of all friends

## GET /friends/:friend_id
Get details about friend with id = :friend_id

## POST /friends
Post a new friend into DB
	body {

		"first_name" : "STRING", // required
	
		"last_name" : "STRING", // required
	
		"nickname" : "STRING",
	
		"rating" : "INTEGER"
	
	}

## DELETE /friends/:friend_id
Delete friend with id = :friend_id


