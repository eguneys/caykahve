import { nt, p } from 'nefs';
import * as t from '../tree';
import * as g from '../graph';

export function vptree(root: t.Tree<nt.Pos>): string {
  return vtree(t.map(root, p.key));
}

export function vtree(root: t.Tree<string>): string {
  if (t.isBranch(root)) {
    return '{' + root.data +
      ' [' + root.children.map(vtree).join(' ') + '] ' + '}';
  } else {
    return root.data;
  }
}

