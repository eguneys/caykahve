import test from 'ava';
import { nt, f, ts } from './_exports';
import { attack } from '../filter';
import { movesOf } from './_util';

let Re8h4 = f.situation('2K4k/8/8/8/4R3/8/8/8 w - - 0 1')!;

test.failing('attacks h8', t => {
  let ms_e4 = movesOf(Re8h4, 'e4');
  let fms = ms_e4.filter(attack(ts.db.ps.h8));
  t.is(fms.length, 2);
  t.is(ts.m.san(fms[0]), 'Re8');
});
