import { parseInputs } from "./parse-input";

export async function solve() {
  console.log("Solving...");
  const elves = await parseInputs();
  elves.sort(
    (left, right) => right.getTotalCalories() - left.getTotalCalories()
  );
  console.log("Part 1:", elves[0].getTotalCalories());
  console.log(
    "Part 2:",
    elves[0].getTotalCalories() +
      elves[1].getTotalCalories() +
      elves[2].getTotalCalories()
  );
}
