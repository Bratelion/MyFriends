import "reflect-metadata";
import {createConnection} from "typeorm";
import {Friend} from "./entity/Friend";

createConnection().then(async connection => {

    console.log("Inserting a new Friend into the database...");
    const friend = new Friend();
    friend.first_name = "Mathew";
    friend.last_name = "Ribble";
    await connection.manager.save(friend);
    console.log("Saved a new Friend with id: " + friend.id);

    console.log("Loading Friends from the database...");
    const Friends = await connection.manager.find(Friend);
    console.log("Loaded Friends: ", Friends);

    console.log("Here you can setup and run express/koa/any other framework.");

    

}).catch(error => console.log(error));
