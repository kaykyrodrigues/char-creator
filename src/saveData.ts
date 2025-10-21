import { promises as fs } from "fs";
import { Character } from "./character.js";

export async function saveCharacters(
  heroes: Character[],
  villains: Character[]
) {
  const data = {
    heroes,
    villains,
  };

  const json = JSON.stringify(data, null, 2);

  await fs.writeFile("characters.json", json, "utf-8")

  console.log("Data saved correctly in JSON!")
}

