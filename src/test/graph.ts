import { qed, it } from 'tiqed';
import * as v from './visual';
import * as g from '../graph';

export default function() {

  it('graph');

  it('adds node', () => {
    
    let graph = new g.Graph();

    graph.addNode(10);

    qed('nodes 10', graph.nodes(), [10]);
    
  });

  it('adds edge', () => {
    let graph = new g.Graph();

    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(10);
    graph.addNode(5);

    graph.addEdge(10, 3, '10-3');
    graph.addEdge(2, 5, '2-5');
    graph.addEdge(2, 4, '2-4');
    graph.addEdge(10, 2, '10-2');

    qed('edges 10', graph.edges(10), ['10-3', '10-2']);
    qed('edges 5', graph.edges(5), []);
    qed('edges 2', graph.edges(2), ['2-5', '2-4']);

  });

  it('finds paths', () => {
    let graph = new g.Graph();

    [1,2,3,4,5,6].forEach(_ => graph.addNode(_));

    graph.addEdge(1, 2, '1-2');
    graph.addEdge(2, 3, '2-3');
    graph.addEdge(2, 4, '2-4');
    graph.addEdge(2, 5, '2-5');
    graph.addEdge(3, 6, '3-6');
    graph.addEdge(4, 6, '4-6');

    qed('paths 1 6', graph.paths(1, 6, 3),
        [['1-2', '2-3', '3-6'],
         ['1-2', '2-4', '4-6']]);

    
  });
  
}
