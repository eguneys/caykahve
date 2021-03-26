import { qed, it } from 'tiqed';
import * as g from '../graph';
import * as jm from '../jmap';

export default function() {

  it('jmap');

  it('builds jmap', () => {
    let graph = new g.Graph();

    [1,2,3,4,5,6].forEach(_ => graph.addNode(_));

    graph.addEdge(1, 2, '1-2');
    graph.addEdge(2, 3, '2-3');
    graph.addEdge(2, 4, '2-4');
    graph.addEdge(2, 5, '2-5');
    graph.addEdge(3, 6, '3-6');
    graph.addEdge(4, 6, '4-6');


    let m = jm.jmap(graph, 6)

    console.log(m);

  });
  
}
