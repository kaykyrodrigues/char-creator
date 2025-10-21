import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "node:process";

type Role = "Hero" | "Villain";

type PowerStyle = "Pshyical" | "Magical" | "Mental";

export class Character {
  nickname!: string;
  role!: Role;
  powerName!: string;
  powerStyle!: PowerStyle;
  powerDescription!: string;

  async createCharacter() {
    const rl = readline.createInterface({ input, output });

    this.nickname = await rl.question("[CHARACTER NAME]: ");

    let answerRole = (await rl.question(
      "[CHARACTER ROLE {'Hero' | 'Villain'}]: "
    )) as Role;

    if (answerRole === "Hero" || answerRole === "Villain") {
      this.role = answerRole;
    } else {
      for (let i = 0; answerRole !== "Hero" && answerRole !== "Villain"; i++) {
        console.log(
          `${answerRole} it's not a valid value, make sure to enter a correct one: ['Hero' | 'Villain'].`
        );

        answerRole = (await rl.question(
          "[CHARACTER ROLE {'Hero' | 'Villain'}]: "
        )) as Role;
        this.role = answerRole;
      }
    }

    this.powerName = await rl.question("[POWER NAME]: ");

    let answerStyle = (await rl.question(
      "[POWER STYLE: {'Pshyical' | 'Magical' | 'Mental'}]: "
    )) as PowerStyle;

    if (
      answerStyle === "Pshyical" ||
      answerStyle === "Mental" ||
      answerStyle === "Magical"
    ) {
      this.powerStyle = answerStyle;
    } else {
      for (
        let i = 0;
        answerStyle !== "Pshyical" &&
        answerStyle !== "Magical" &&
        answerStyle !== "Mental";
        i++
      ) {
        console.log(
          `${answerStyle} it's not a valid value, make sure to enter a correct one: ['Pshyical' | 'Magical' | 'Mental'].`
        );

        answerStyle = (await rl.question(
          "[POWER STYLE: {'Pshyical' | 'Magical' | 'Mental'}]: "
        )) as PowerStyle;
        this.powerStyle = answerStyle;
      }
    }

    this.powerDescription = await rl.question("[POWER DESCRIPTION]: ");

    rl.close();
  }
}
