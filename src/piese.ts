import * as ck from './types';
import { pieses } from './db';
import { nt } from 'nefs';

export function boardPieses(board: nt.Board): Set<ck.Piese> {
  let res = [];
  for (let [pos, piece] of board) {
    res.push(pieses.get(piece, pos));
  }
  return new Set(res);
}
