import { nt } from 'nefs';
import { dt, dir } from 'tschess';
import * as t from './tree';

export type Tempo = 1 | 2 | 3 | 4 | 5 | 6 | 7

export type Manuever0 = t.Leaf<dt.Displace1>
export type ManueverN = t.Tree<dt.Displace1>

export type ManueverPos = t.Tree<nt.Pos>

// export function mpath(orig: nt.Pos, root: ManueverN): ManueverPos | undefined {
//   return t.pruneMap(orig, root, (d1, prePos) => dir.ddir1(prePos, d1));
// }

// export function manuevern(tempo: Tempo, d2: dt.Displace2): Array<ManueverN> {
//   let mns: Array<ManueverN> = []

//   for (let d1 of d2) {
//     mns.push({
//       data: d1,
//       children: manuever0(d2)
//     });
//   }

//   for (let i = 1; i < tempo; i++) {
//     for (let imn in mns) {
//       mns[imn] = manuevernHelper(mns[imn], d2)
//     }
//   }
//   return mns;
// }

// export function manuevernHelper(root: ManueverN, d2: dt.Displace2): ManueverN {
//   if (t.isBranch(root)) {
//     return {
//       ...root,
//       children: root.children.map(_ => manuevernHelper(_, d2))
//     };
//   } else {
//     return t.grow(root, manuever0(d2));
//   }
// }

// export function manuever0(d2: dt.Displace2): Array<Manuever0> {
//   let res: Array<Manuever0> = []

//   for (let d1 of d2) {
//     res.push({
//       data: d1
//     });
//   }

//   return res;
// }
