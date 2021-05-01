import { nt, ts, san } from './_exports';

export function movesOf(situation: nt.Situation, pos: nt.PosKey) {
  return ts.sit.moves(situation).get(ts.db.ps[pos])!;
};

export function playMoves(sit: nt.Situation, moves: string) {
  return moves.split(' ')
    .map(san.str2meta)
    .map(_ => _!)
    .reduce((sit, _) => ts.m.situationAfter(ts.san.moveOrCastle(_, sit)!), sit);
}
