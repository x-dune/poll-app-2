# Poll App 2

A React/Next application with simple CRUD functionalities.

## Prerequisites
* Node.js
* NPM
* MongoDB Server

## Installing Dependencies

```bash
  $ npm install
```
## Database Credentials

Provide the `MONGO_URI` connection string through the environmental variable. This can be done through a `.env` file.

The connection string should be format as such: 
```
MONGO_URI=mongodb://username:password@host:port/db_name
```
Substitute the `username`, `password`, `host`, `port` and `db_name` with your database credentials.

## Running the App

#### Run in dev mode.

```bash
  $ npm run dev
```

#### Run in production mode. 

Requires `NODE_ENV=production`, and `MONGO_URI` to be supplied through the system environmental variables.

```bash
  $ npm start
```