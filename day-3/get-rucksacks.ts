import { readFile } from "node:fs/promises";
import { Rucksack } from "./rucksack";

export async function getRucksacks(): Promise<Rucksack[]> {
  const fileContents = await readFile("day-3/rucksacks.txt", {
    encoding: "utf-8",
  });
  const unparsedRucksacks = fileContents.split("\n");

  return unparsedRucksacks.map((rucksackString) => {
    const halfSize = rucksackString.length / 2;
    const firstHalf = rucksackString.substring(0, halfSize);
    const secondHalf = rucksackString.substring(halfSize);

    return new Rucksack(firstHalf, secondHalf);
  });
}
