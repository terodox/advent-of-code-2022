import { readFile } from "node:fs/promises";
import { Match } from "./match";
import { ThrowTypes } from "./types";

const THEIR_THROW_INDEX = 0;
const MY_THROW_INDEX = 1;

export async function parseInputs() {
  const fileContents = await readFile("./day-2/strategy-guide.txt", {
    encoding: "utf-8",
  });

  const lines: string[] = fileContents.split("\n");
  const matches: Match[] = [];

  lines.forEach((oneLine) => {
    const throws = oneLine.split(" ");
  });
}
