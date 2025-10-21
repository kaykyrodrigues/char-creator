import { Character } from "./Character.js";
import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "node:process";

const heroList: Character[] = [];
const villainList: Character[] = [];
async function getMenu() {
  let validateInput: boolean = false;

  while (!validateInput) {
    const rl = readline.createInterface({ input, output });

    console.log();
    console.log("===== CREATION MENU =====");
    console.log("[0] - Register");
    console.log("[1] - List");
    console.log("[2] - Remove");
    console.log("[3] - Exit");
    let option = await rl.question(" ");

    const newCharacter = new Character();
    rl.close();

    console.log();

    try {
      switch (option) {
        case "0":
          await newCharacter.createCharacter();
          if (newCharacter.role === "Hero") {
            heroList.push(newCharacter);
          } else if (newCharacter.role === "Villain") {
            villainList.push(newCharacter);
          }

          break;
        case "1":
          console.log("=== HEROES ===");
          console.log(heroList);
          console.log("=== VILLAINS ===");
          console.log(villainList);

          break;
        case "2":
          const lr = readline.createInterface({ input, output });
          const nameToDelete = await lr.question(
            "Enter the name of the character to be deleted:"
          );
          lr.close();

          const heroIndex = heroList.findIndex(
            (char) => char.nickname === nameToDelete
          );
          const villainIndex = villainList.findIndex(
            (char) => char.nickname === nameToDelete
          );

          if (heroIndex !== -1) {
            heroList.splice(heroIndex, 1);
            console.log("Hero removed successfully!");
          } else if (villainIndex !== -1) {
            console.log("Villain removed successfully!");
          } else {
            console.log("Character not found.");
          }
          break;
        case "3":
          console.log("You left the creation menu.");
          validateInput = true;
          break;
      }
    } catch (error) {
      console.log("An error was identified:", error);
    }
  }
}

getMenu();
