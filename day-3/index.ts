import { calculatePriorityValue } from "./calculate-priority-value";
import { findCompartmentOverlap } from "./find-compartment-overlap";
import { getRucksacks } from "./get-rucksacks";

export async function solve() {
  const rucksacks = await getRucksacks();
  const totalValue = rucksacks
    .map(findCompartmentOverlap)
    .map(calculatePriorityValue)
    .reduce((acc, value) => acc + value, 0);

  console.log("Part 1:", totalValue);
}
