import { EncodedThrowTypes, ThrowTypes } from "./types";

export class Match {
  constructor(
    private readonly theirThrow: typeof ThrowTypes,
    private readonly yourThrow: typeof EncodedThrowTypes
  ) {}
}
