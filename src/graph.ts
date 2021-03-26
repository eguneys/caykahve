export type Edge<V, E> = [V, E]
export type EdgeList<V, E> = Array<Edge<V, E>>
export type AdjacencyList<V, E> = Map<V, EdgeList<V, E>>
export type Path<E> = Array<E>

export class Graph<V, E> {
  
  adjacency: AdjacencyList<V, E>

  constructor() {
    this.adjacency = new Map();
  }

  pathsHelper(path: Path<Edge<V, E>>, end: V, cutOff: number): Array<Path<Edge<V, E>>> {
    if (path.length === 0) {
      return [];
    }

    let [x, ex] = path[path.length - 1];

    if (x === end) {
      return [path];
    }

    if (path.length >= cutOff) {
      return [];
    }

    let res: Array<Path<Edge<V, E>>> = [];

    let el = this.adjacency.get(x)
    if (el) {
      for (let ey of el) {
        let [y, edge] = ey;
        if (!path.find(_ => _[0] === y)) {
          if (y === end) {
            res.push([...path, ey]);
          } else {
            res = res.concat(this.pathsHelper([...path, ey], end, cutOff));
          }
        }
      }
    }

    return res;
  }


  paths(start: V, end: V, cutOff: number): Array<Path<E>> | undefined {
    let el = this.adjacency.get(start);
    if (el) {
      return el.flatMap(_ =>
        this.pathsHelper([_], end, cutOff)
          .map(_ => _.map(_ => _[1])));
    }
  }

  nodes(): Array<V> {
    return [...this.adjacency.keys()];
  }

  edges(node: V): Array<E> {
    let list = this.adjacency.get(node)
    if (list) {
      return list.map(_ => _[1]);
    }
    return [];
  }

  edgeList(node: V): EdgeList<V, E> | undefined {
    return this.adjacency.get(node);
  }

  addNode(node: V) {
    if (!this.adjacency.has(node)) {
      this.adjacency.set(node, []);
    }
  }

  addEdge(source: V, target: V, edge: E) {
    let slist = this.adjacency.get(source);
    // let tlist = this.adjacency.get(target);
    if (slist
      // && tlist
       ) {
      slist.push([target, edge]);
      //tlist.push([source, edge]);
      return edge;
    }
  }
  
}
