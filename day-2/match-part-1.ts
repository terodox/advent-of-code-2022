import { ThrowTypes } from "./types";

export class MatchPart1 {
  constructor(
    public readonly theirThrow: ThrowTypes,
    public readonly myThrow: ThrowTypes
  ) {}
}
