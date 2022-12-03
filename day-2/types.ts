export enum ThrowTypes {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}

export const AbcThrowTypes: { [key: string]: ThrowTypes } = {
  A: ThrowTypes.Rock,
  B: ThrowTypes.Paper,
  C: ThrowTypes.Scissors,
};

export const XyzThrowTypes: { [key: string]: ThrowTypes } = {
  X: ThrowTypes.Rock,
  Y: ThrowTypes.Paper,
  Z: ThrowTypes.Scissors,
};

export const Outcomes: { [key: string]: string } = {
  Lose: "Lose",
  Draw: "Draw",
  Win: "Win",
};

export const XyzMatchOutcomes: { [key: string]: string } = {
  X: Outcomes.Lose,
  Y: Outcomes.Draw,
  Z: Outcomes.Win,
};

export const LosingOutcomes = {
  [ThrowTypes.Paper]: ThrowTypes.Rock,
  [ThrowTypes.Rock]: ThrowTypes.Scissors,
  [ThrowTypes.Scissors]: ThrowTypes.Paper,
};

export const WinningOutcomes = {
  [ThrowTypes.Rock]: ThrowTypes.Paper,
  [ThrowTypes.Paper]: ThrowTypes.Scissors,
  [ThrowTypes.Scissors]: ThrowTypes.Rock,
};

export const ThrowValues = {
  [ThrowTypes.Rock]: 1,
  [ThrowTypes.Paper]: 2,
  [ThrowTypes.Scissors]: 3,
};

export const GameOutcomeValues = {
  [Outcomes.Win]: 6,
  [Outcomes.Draw]: 3,
  [Outcomes.Lose]: 0,
};
