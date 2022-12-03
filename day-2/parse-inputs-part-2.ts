import { readFile } from "node:fs/promises";
import { MatchPart2 } from "./match-part-2";
import { AbcThrowTypes, XyzMatchOutcomes } from "./types";

const THEIR_THROW_INDEX = 0;
const MY_THROW_INDEX = 1;

export async function parseInputsPart2(): Promise<MatchPart2[]> {
  const fileContents = await readFile("./day-2/strategy-guide.txt", {
    encoding: "utf-8",
  });

  const lines: string[] = fileContents.split("\n");

  return lines.map((oneLine) => {
    const inputs = oneLine.split(" ");
    const theirThrow = AbcThrowTypes[inputs[THEIR_THROW_INDEX]];
    const outcome = XyzMatchOutcomes[inputs[MY_THROW_INDEX]];
    return new MatchPart2(theirThrow, outcome);
  });
}
