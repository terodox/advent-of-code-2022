import { Rucksack } from "./rucksack";

export function findCompartmentOverlap(rucksack: Rucksack): string[] {
  const compartmentOneMap: { [key: string]: string } = {};
  const compartmentTwoMap: { [key: string]: string } = {};
  const allOverlaps: { [key: string]: string } = {};
  for (let index = 0; index < rucksack.compartmentOne.length; index++) {
    const compartmentOneEntry = rucksack.compartmentOne[index];
    const compartmentTwoEntry = rucksack.compartmentTwo[index];

    compartmentOneMap[compartmentOneEntry] = compartmentOneEntry;
    compartmentTwoMap[compartmentTwoEntry] = compartmentTwoEntry;

    if (compartmentOneMap[compartmentTwoEntry]) {
      allOverlaps[compartmentTwoEntry] = compartmentTwoEntry;
    }
    if (compartmentTwoMap[compartmentOneEntry]) {
      allOverlaps[compartmentOneEntry] = compartmentOneEntry;
    }
  }

  return Object.keys(allOverlaps);
}
