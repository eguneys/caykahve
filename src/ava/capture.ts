import test from 'ava';
import { nt, f, ts } from './_exports';
import { MoveFilter, pCapture } from '../filter';

test('captures king', t => {
  let Kxh8 = '7k/7K/8/8/8/8/8/8 w - - 0 1'
  let ms_h7 = ts.sit.moves(f.situation(Kxh8)!).get(ts.db.ps.h7)!;
  let fms = ms_h7.filter(pCapture());
  t.is(fms.length, 1);
  t.is(ts.m.san(fms[0]), 'Kxh8');
});

test('captures only king', t => {
  let Qxd6 = '8/8/1p1k4/8/pQ1p4/8/Kp6/8 w - - 0 1';
  let ms_b4 = ts.sit.moves(f.situation(Qxd6)!).get(ts.db.ps.b4)!;
  let fms = ms_b4.filter(pCapture());
  t.is(fms.length, 1);
  t.is(ts.m.san(fms[0]), 'Qxd6');

  let pms = ms_b4.filter(pCapture('p'));
  t.is(pms.length, 4);
  
});
