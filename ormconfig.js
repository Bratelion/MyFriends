require("dotenv").config();

module.exports = {
   "type": "postgres",
   "host": process.env.POSTGRES_HOST || "localhost",
   "port": process.env.TYPEORM_PORT || 5433,
   "username": process.env.POSTGRES_USER,
   "password": process.env.POSTGRES_PASSWORD,
   "database": process.env.POSTGRES_DB,
   "synchronize": false,
   "entities": [
       "./src/entity/*.{ts,js}"
   ],
   "migrations": [
       "./src/migration/*.{ts,js}"
   ],
   "cli": {
       "entitiesDir": "./src/entity",
       "migrationsDir": "./src/migration"
   }
}
