import { tMo, run } from 'tiqed';

import graph from './graph';
import tree from './tree';
import works from './works';
import jmap from './jmap';

export default function() {

  tMo(graph);
  tMo(tree);
  tMo.only(works);
  tMo(jmap);

  run();


}
