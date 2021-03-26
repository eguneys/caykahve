import * as sss from './sss';
import { nt, db } from 'nefs';
import { dir, disp } from 'tschess';
import * as ck from './types';
import * as db2 from './db';

export type ProjectedRoute = {
  orig: nt.Pos,
  dest: nt.Pos,
  path?: Array<nt.Pos>
}

export function prSameOrigin(a: ProjectedRoute, b: ProjectedRoute): boolean {
  return (a.orig === b.orig);
}

export function isPREqual(a: ProjectedRoute, b: ProjectedRoute): boolean {
  return (a.orig === b.orig && a.dest === b.dest);
}

export function pjdest(piece: nt.Piece, dest: nt.Pos): Set<ProjectedRoute> {
  let res: Array<ProjectedRoute> = []
  for (let piese of db2.validPieses.filter(_ => _.piece === piece)) {
    res = sss.concat(res, [...pjcaptures(piese)]
                            .filter(pj => pj.dest === dest),
                     isPREqual)
  }
  return new Set(res);
}

export function pjcaptures({ pos, piece }: ck.Piese): Set<ProjectedRoute> {
  let res: Array<ProjectedRoute> = [];
  let projection = disp.projection(pos, piece);

  let r1Captures = disp.route1Captures(pos, piece)
  
  for (let pj = 1; pj <= projection; pj++) {
    res = sss.concat(res, [...projectRoute1(pj as disp.Projection,
                                            r1Captures)], 
                    isPREqual);
  }
  return new Set(res);
}

export function pjroutes({ pos, piece }: ck.Piese): Set<ProjectedRoute> {
  let res: Array<ProjectedRoute> = [];
  let projection = disp.projection(pos, piece);
  let r1 = disp.route1(pos, piece);

  for (let pj = 1; pj <= projection; pj++) {
    res = sss.concat(res, [...projectRoute1(pj as disp.Projection, r1)], isPREqual);
  }
  return new Set(res);
}

export function projectRoute1(projection: disp.Projection, route1: dir.Route1<nt.Pos>): Set<ProjectedRoute> {

  let res = route1.flatMap(r0 => {
    let p = projectRoute0(projection, r0);
    if (p) {
      return [p];
    } else {
      return [];
    }
  });
  return new Set(res);
}

export function projectRoute0(projection: disp.Projection, route0: dir.Route0<nt.Pos>): ProjectedRoute | undefined  {
  let path1: Array<nt.Pos> = [];
  
  for (let i = 1; i < projection + 1; i++) {
    let to = route0[i]

    if (!to) {
      break;
    }
    
    path1 = [to, ...path1]
  }
  let orig = route0[0];
  let [dest, ...path] = path1;

  if (dest) {
    return {
      orig,
      dest,
      path: path
    };
  }
}
