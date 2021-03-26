import { nt } from 'nefs';

export type Berit = {
  merit: Merit,
  board: nt.Board
}

export enum Merit {
  Id = "id",
  Random = "random",
  Mate = "mate"
}

export const applicative = {
  [Merit.Id]: mrId,
  [Merit.Random]: mrRandom,
  [Merit.Mate]: mrMate
}

export function mrMate(b: Berit): Berit | undefined {
  return {
    ...b,
    merit: Merit.Mate
  };
}

export function mrRandom(b: Berit): Berit | undefined {
  return {
    ...b,
    merit: Merit.Random
  };
}

export function mrId(b: Berit): Berit | undefined {
  return b;
}
