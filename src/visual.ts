import { nt, p } from 'nefs';
import * as t from './tree';
import * as route from './route';
import * as g from './graph';

export function path(e: g.Path<route.ProjectedRoute>) {
  return e.map(proute);
}

export function proute(proute: route.ProjectedRoute): string {
  return `${p.key(proute.orig)}->${p.key(proute.dest)}`
}

export function ptree(root: t.Tree<nt.Pos>): string {
  return stree(t.map(root, p.key));
}

export function stree(root: t.Tree<string>): string {
  if (t.isBranch(root)) {
    return '{' + root.data +
      ' [' + root.children.map(stree).join(' ') + '] ' + '}';
  } else {
    return root.data;
  }
}
