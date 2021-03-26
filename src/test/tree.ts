import { qed, it } from 'tiqed';
import { nt, f, db, p } from 'nefs';
import * as t from '../tree';
import * as v from './visual';

// a1
// a2         b1         b2
// a3 b2 b3   c1 b2 c2   b3 c2 c3

export default function() {

  it('tree');

  it('grows leaves', () => {
    let root = t.leaf(1);
    
    root = t.Grow(0, root, (root, child) => {
      return [child, child];
    });

    // console.log(v.vtree(t.map(root, _ => _ +  '')));

    root =  t.Grow(0, root, (root, child) => {
      return Array(child + 1).fill(child);
    });

    // console.log(v.vtree(t.map(root, _ => _ +  '')));


    root =  t.Grow(0, root, (root, child) => {
      return Array(child + 1).fill(child);
    });

    console.log(v.vtree(t.map(root, _ => _ +  '')));
    
  });

  it.only('grows', () => {

    let root = t.leaf(1);
    let i = 0;
    while (t.maxDepth(root) < 5) {
      root = t.Grow(0, root, (root, child) => {
        return Array(child + root).fill(child);
      });
    }

    console.log(v.vtree(t.map(root, _ => _ +  '')));


  });
  
}
