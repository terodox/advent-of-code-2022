import { MatchPart1 } from "./match-part-1";
import { MatchPart2 } from "./match-part-2";
import { parseInputsPart1 } from "./parse-inputs-part-1";
import { parseInputsPart2 } from "./parse-inputs-part-2";
import {
  GameOutcomeValues,
  LosingOutcomes,
  Outcomes,
  ThrowTypes,
  ThrowValues,
  WinningOutcomes,
} from "./types";

export async function solve() {
  const matchesPart1 = await parseInputsPart1();

  const totalOfAllMatchesPart1 = matchesPart1.reduce(
    (acc: number, match: MatchPart1) => {
      const throwValue = ThrowValues[match.myThrow];
      const matchOutcomeValue = getValueOfMatchOutcome(match);
      return acc + throwValue + matchOutcomeValue;
    },
    0
  );

  console.log("Part 1:", totalOfAllMatchesPart1);

  const matchesPart2 = await parseInputsPart2();

  const totalOfAllMatchesPart2 = matchesPart2.reduce(
    (acc: number, match: MatchPart2) => {
      const myThrow = getMyThrow(match);
      const throwValue = ThrowValues[myThrow];
      const matchOutcomeValue = GameOutcomeValues[match.outcome];
      return acc + throwValue + matchOutcomeValue;
    },
    0
  );

  console.log("Part 2:", totalOfAllMatchesPart2);
}

function getValueOfMatchOutcome(match: MatchPart1): number {
  if (doesLeftWin(match.myThrow, match.theirThrow)) {
    return GameOutcomeValues.Win;
  } else if (doesLeftWin(match.theirThrow, match.myThrow)) {
    return GameOutcomeValues.Lose;
  }
  return GameOutcomeValues.Draw;
}

function doesLeftWin(left: ThrowTypes, right: ThrowTypes): boolean {
  return (
    (left === ThrowTypes.Rock && right === ThrowTypes.Scissors) ||
    (left === ThrowTypes.Paper && right === ThrowTypes.Rock) ||
    (left === ThrowTypes.Scissors && right === ThrowTypes.Paper)
  );
}

function getMyThrow(match: MatchPart2): ThrowTypes {
  if (match.outcome === Outcomes.Win) {
    return WinningOutcomes[match.theirThrow];
  } else if (match.outcome === Outcomes.Lose) {
    return LosingOutcomes[match.theirThrow];
  }
  return match.theirThrow;
}
