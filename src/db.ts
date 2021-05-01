import * as ck from './types';
import { nt, db, color } from 'nefs';
import { disp } from 'tschess';
import { bd } from 'bdu';

let { poss, pieces } = db;


export const pieses = new bd.DB2<nt.Piece, nt.Pos, ck.Piese>(
  (piece, pos) => ({ piece, pos }),
  db.pieces.all,
  db.poss.all);

export const validPieses = pieses.all.filter((piese: ck.Piese) =>
  !(piese.piece.role === 'p' && 
    piese.pos[1] === disp.pawnPromoteRanks[color.opposite[piese.piece.color]]));
