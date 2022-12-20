import db from "./connection.js";
import Character from "../models/character.js";
import characters from "./characters.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase()
  await Character.create(characters.results)
  await db.close()
};

insertData();
