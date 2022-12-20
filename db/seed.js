import db from "./connection.js";
import Character from "../models/character.js";
import characters from "./character.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase()
  await Character.create(characters)
  await db.close()
};

insertData();
