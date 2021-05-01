import test from 'ava';
import { nt, f, ts } from './_exports';
import { movesOf, playMoves } from './_util';
import { safeKing, attack } from '../filter';

let { ps } = ts.db;

`
     Kbk
      pp
      P




      R
`
let mateIn3 = '5Kbk/6pp/6P1/8/8/8/8/7R w - - 0 1';

let moves2 = 'Rh6 gxh6';
test(`has no moves after ${moves2} g7#`, t => {
  let sit = playMoves(f.situation(mateIn3)!, moves2 + ' g7#');

  t.is(movesOf(sit, 'h8').filter(safeKing).length, 0);
});

test(`finds g7#`, t => {
  let sit = playMoves(f.situation(mateIn3)!, moves2);

  t.is(movesOf(sit, 'g6').filter(attack(ps.h8)).length, 1);
});
