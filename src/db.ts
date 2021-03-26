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

export const pis = {
  wR: pieces.nget('R', 'R') as nt.Piece,
  wB: pieces.nget('B', 'B') as nt.Piece,
  wN: pieces.nget('N', 'N') as nt.Piece,
  wK: pieces.nget('K', 'K') as nt.Piece,
  wQ: pieces.nget('Q', 'Q') as nt.Piece,
  wP: pieces.nget('P', 'P') as nt.Piece,
  bR: pieces.nget('r', 'r') as nt.Piece,
  bB: pieces.nget('b', 'b') as nt.Piece,
  bN: pieces.nget('n', 'n') as nt.Piece,
  bK: pieces.nget('k', 'k') as nt.Piece,
  bQ: pieces.nget('q', 'q') as nt.Piece,
  bP: pieces.nget('p', 'p') as nt.Piece,
};

export const ps = {
  a1: poss.pget(1, 1) as nt.Pos,
  a2: poss.pget(1, 2) as nt.Pos,
  a3: poss.pget(1, 3) as nt.Pos,
  a4: poss.pget(1, 4) as nt.Pos,
  a5: poss.pget(1, 5) as nt.Pos,
  a6: poss.pget(1, 6) as nt.Pos,
  a7: poss.pget(1, 7) as nt.Pos,
  a8: poss.pget(1, 8) as nt.Pos,
  b1: poss.pget(2, 1) as nt.Pos,
  b2: poss.pget(2, 2) as nt.Pos,
  b3: poss.pget(2, 3) as nt.Pos,
  b4: poss.pget(2, 4) as nt.Pos,
  b5: poss.pget(2, 5) as nt.Pos,
  b6: poss.pget(2, 6) as nt.Pos,
  b7: poss.pget(2, 7) as nt.Pos,
  b8: poss.pget(2, 8) as nt.Pos,
  c1: poss.pget(3, 1) as nt.Pos,
  c2: poss.pget(3, 2) as nt.Pos,
  c3: poss.pget(3, 3) as nt.Pos,
  c4: poss.pget(3, 4) as nt.Pos,
  c5: poss.pget(3, 5) as nt.Pos,
  c6: poss.pget(3, 6) as nt.Pos,
  c7: poss.pget(3, 7) as nt.Pos,
  c8: poss.pget(3, 8) as nt.Pos,
  d1: poss.pget(4, 1) as nt.Pos,
  d2: poss.pget(4, 2) as nt.Pos,
  d3: poss.pget(4, 3) as nt.Pos,
  d4: poss.pget(4, 4) as nt.Pos,
  d5: poss.pget(4, 5) as nt.Pos,
  d6: poss.pget(4, 6) as nt.Pos,
  d7: poss.pget(4, 7) as nt.Pos,
  d8: poss.pget(4, 8) as nt.Pos,
  e1: poss.pget(5, 1) as nt.Pos,
  e2: poss.pget(5, 2) as nt.Pos,
  e3: poss.pget(5, 3) as nt.Pos,
  e4: poss.pget(5, 4) as nt.Pos,
  e5: poss.pget(5, 5) as nt.Pos,
  e6: poss.pget(5, 6) as nt.Pos,
  e7: poss.pget(5, 7) as nt.Pos,
  e8: poss.pget(5, 8) as nt.Pos,
  f1: poss.pget(6, 1) as nt.Pos,
  f2: poss.pget(6, 2) as nt.Pos,
  f3: poss.pget(6, 3) as nt.Pos,
  f4: poss.pget(6, 4) as nt.Pos,
  f5: poss.pget(6, 5) as nt.Pos,
  f6: poss.pget(6, 6) as nt.Pos,
  f7: poss.pget(6, 7) as nt.Pos,
  f8: poss.pget(6, 8) as nt.Pos,
  g1: poss.pget(7, 1) as nt.Pos,
  g2: poss.pget(7, 2) as nt.Pos,
  g3: poss.pget(7, 3) as nt.Pos,
  g4: poss.pget(7, 4) as nt.Pos,
  g5: poss.pget(7, 5) as nt.Pos,
  g6: poss.pget(7, 6) as nt.Pos,
  g7: poss.pget(7, 7) as nt.Pos,
  g8: poss.pget(7, 8) as nt.Pos,
  h1: poss.pget(8, 1) as nt.Pos,
  h2: poss.pget(8, 2) as nt.Pos,
  h3: poss.pget(8, 3) as nt.Pos,
  h4: poss.pget(8, 4) as nt.Pos,
  h5: poss.pget(8, 5) as nt.Pos,
  h6: poss.pget(8, 6) as nt.Pos,
  h7: poss.pget(8, 7) as nt.Pos,
  h8: poss.pget(8, 8) as nt.Pos
};
