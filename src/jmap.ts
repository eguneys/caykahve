import * as g from './graph';


export type JMap<A> = Map<A, number>

export function jmap<V, E>(graph: g.Graph<V, E>, goal: V): JMap<V> {

  let m = new Map();
  graph.nodes().forEach(_ => m.set(_, 99));
  m.set(goal, 0);

  let nochange = false;
  while (!nochange) {
    nochange = true;
    for (let v of m.keys()) {

      let lowest = graph.edgeList(v)?.reduce((lowest, [ev, edge]) => {
        let mev = m.get(ev);
        return Math.min(mev, lowest);
      }, 99);

      lowest = lowest === undefined ? 99 : lowest;

      let mv = m.get(v);
      if (mv > 1) {
        if (mv !== lowest + 1) {
          m.set(v, lowest + 1);
          nochange = false;
        }
      }
    }
  }

  return m;  
}
