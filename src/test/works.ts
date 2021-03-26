import { qed, it } from 'tiqed';
import { nt, f, db, p } from 'nefs';
import { b, dt, disp } from 'tschess';
import * as route from '../route';
import * as visit from '../visit';
import * as jm from '../jmap';
import * as g from '../graph';
import * as v from '../visual';
import { pieses, pis, ps } from '../db';


// a1
// a2         b1         b2
// a3 b2 b3   c1 b2 c2   b3 c2 c3

export default function() {

  it ('has', () => {
    let bnlongest = 'N7/3k4/8/8/1B6/8/8/5K2 w - - 0 1';
    let { board, turn } = f.situation(bnlongest) as nt.Situation;
    qed('4 actors', b.actors(board).size, 4);
  });

  it('projects routes', () => {

    let res = route.pjroutes(pieses.get(pis.wR, ps.a8));

    for (let r of res) {
      qed('1', [...res].filter(_ => route.isPREqual(_, r)).length, 1);
    }

  });

  it('builds visit tree', () => {
    
    let res = visit.visitsR(pis.wN);

    console.log(res.edges(ps.a7));

  });

  it('builds jmap', () => {
    let graph = visit.visitsR(pis.wN);

    let jmap = jm.jmap(graph, ps.a8);

    console.log(jmap);
  });

  it('finds jmap and paths', () => {
    let graph = visit.visits(pis.bB);
    let jmap = jm.jmap(graph, ps.b6);


    let paths = visit.paths(pis.bB, ps.a7, ps.b6);
    console.log(paths?.map(_ => v.path(_)));
  });


  it('finds paths with a graph', () => {
    let graph = visit.visitsR(pis.wR);

    let paths = visit.pathsG(graph, ps.a7, ps.b6);
    console.log(paths?.map(_ => v.path(_)));    
  });

  it.only('finds paths between multiple positions', () => {
    let graph = visit.visits(pis.wN);

    let paths = visit.pathsM(graph, [ps.a1, ps.g7, ps.e6]);
    console.log(paths.map(_ => !_ ? '' :_.map(_ => v.path(_))));
  });

  it('finds attacks', () => {
    console.log(visit.attacks(pis.wQ, [ps.f7, ps.f6, ps.f5]).map(v.proute));
  });
  
}
