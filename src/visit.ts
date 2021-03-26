import { nt, db, p } from 'nefs';
import * as sss from './sss';
import * as ck from './types';
import * as db2 from './db';
import * as route from './route';
import * as g from './graph';
import * as jm from './jmap';

export function paths(piece: nt.Piece, orig: nt.Pos, dest: nt.Pos) {
  let graph = visits(piece);
  return pathsG(graph, orig, dest);
}

export function pathsG(graph: JRouteGraph, orig: nt.Pos, dest: nt.Pos) {
  let jmap = jm.jmap(graph, dest);
  let cutOff = jmap.get(orig);

  if (cutOff === undefined || cutOff > 10) {
    cutOff = 1;
  }

  return graph.paths(orig, dest, cutOff);  
}

export function pathsM(graph: JRouteGraph, los: Array<nt.Pos>) {
  return sss.pairIn2(los)
    .map(_ => pathsG(graph, _[0], _[1]));
}

export type JRouteGraph = g.Graph<nt.Pos, route.ProjectedRoute>

export function attacks(piece: nt.Piece, nodes: Array<nt.Pos>) {
  let graph = visitsR(piece);

  let acc: Array<route.ProjectedRoute> = graph.edges(nodes[0]);
  return nodes.slice(1).reduce((acc, _) => {
    return sss.partialIntersect(acc, graph.edges(_), route.prSameOrigin);
  }, acc);
}

export function visits(piece: nt.Piece): g.Graph<nt.Pos, route.ProjectedRoute> {
  let graph = new g.Graph<nt.Pos, route.ProjectedRoute>();

  return db2.validPieses
    .filter(_ => _.piece === piece)
    .map(_ => route.pjroutes(_))
    .reduce((graph, routes) => {
      for (let route of routes) {
        graph.addNode(route.orig);
        graph.addNode(route.dest);
        graph.addEdge(route.orig, route.dest, route);
      }

      return graph;
    }, graph);
}

export function visitsR(piece: nt.Piece): g.Graph<nt.Pos, route.ProjectedRoute> {
  let graph = new g.Graph<nt.Pos, route.ProjectedRoute>();

  return db2.validPieses
    .filter(_ => _.piece === piece)
    .map(_ => route.pjroutes(_))
    .reduce((graph, routes) => {
      for (let route of routes) {
        graph.addNode(route.orig);
        graph.addNode(route.dest);
        graph.addEdge(route.dest, route.orig, route);
      }

      return graph;
    }, graph);
}
