import { readFile } from "node:fs/promises";
import { MatchPart1 } from "./match-part-1";
import { AbcThrowTypes, XyzThrowTypes } from "./types";

const THEIR_THROW_INDEX = 0;
const MY_THROW_INDEX = 1;

export async function parseInputsPart1(): Promise<MatchPart1[]> {
  const fileContents = await readFile("./day-2/strategy-guide.txt", {
    encoding: "utf-8",
  });

  const lines: string[] = fileContents.split("\n");

  return lines.map((oneLine) => {
    const throws = oneLine.split(" ");
    const theirThrow = AbcThrowTypes[throws[THEIR_THROW_INDEX]];
    const myThrow = XyzThrowTypes[throws[MY_THROW_INDEX]];
    return new MatchPart1(theirThrow, myThrow);
  });
}
