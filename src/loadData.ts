import { promises as fs } from "fs";
import { Character } from "./character.js";

export async function loadCharacters(): Promise<{
  heroes: Character[];
  villains: Character[];
}> {
  try {
    const data = await fs.readFile("characters.json", "utf-8");
    const parsed = JSON.parse(data);
    return parsed;
  } catch (error: any) {
    if (error.code === "ENOENT") {
      return { heroes: [], villains: [] };
    } else {
      throw error;
    }
  }
}
