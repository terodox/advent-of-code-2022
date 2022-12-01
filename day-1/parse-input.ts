import { readFile } from "node:fs/promises";
import { Elf } from "./elf";

export async function parseInputs(): Promise<Elf[]> {
  const fileContents = await readInputs();
  return bucketByElf(fileContents);
}

function bucketByElf(fileContents: string): Elf[] {
  const flattenedInput = fileContents.split("\n");

  const allElves: Elf[] = [];
  let currentElf: Elf = new Elf();
  do {
    const currentValue = flattenedInput.shift();
    if (currentValue === undefined) {
      throw new Error(
        "This should not be possible given the loop logic, but it makes typescript happy"
      );
    }
    if (currentValue === "") {
      allElves.push(currentElf);
      currentElf = new Elf();
    } else {
      const parsedValue = parseInt(currentValue);
      currentElf.addFood(parsedValue);
    }
  } while (flattenedInput.length > 0);

  allElves.push(currentElf);

  return allElves;
}

async function readInputs(): Promise<string> {
  const fileContents = readFile("./day-1/inputs.txt", { encoding: "utf-8" });
  return fileContents;
}
