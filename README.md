# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Run `docker-compose build` command
3. Run `docker-compose up` command

Start sending requests to fill up the database:

## GET /friends
Get list of all friends

## GET /friends/:friend_id
Get details about friend with id = :friend_id

## POST /friends
body {
	"first_name" : "STRING", // required
	"last_name" : "STRING", // required
	"nickname" : "STRING",
	"rating" : "INTEGER"
}

## DELETE /friends/:friend_id
Delete friend with id = :friend_id
