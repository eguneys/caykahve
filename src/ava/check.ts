import test from 'ava';
import { f, ts } from './_exports';
import { safe } from '../filter';

test('safe king', t => {
  let Kg8 = '7k/8/7Q/8/3K4/8/8/8 b - - 0 1';
  let ms_h7 = ts.sit.moves(f.situation(Kg8)!).get(ts.db.ps.h8)!;
  let fms = ms_h7.filter(safe(ts.db.ps.h8));
  t.is(fms.length, 1);
  t.is(ts.m.san(fms[0]!), 'Kg8');
});

test('safe king with knight', t => {
  let Nh7 = '7k/8/5n1Q/8/3K4/8/8/8 b - - 0 1';
  let ms_f6 = ts.sit.moves(f.situation(Nh7)!).get(ts.db.ps.f6)!;
  let fms = ms_f6.filter(safe(ts.db.ps.h8));
  t.is(fms.length, 1);
  t.is(ts.m.san(fms[0]!), 'Nh7');
});
