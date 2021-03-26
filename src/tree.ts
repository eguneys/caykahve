export type Branch<A> = {
  data: A,
  children: Array<Tree<A>>
}

export type Leaf<A> = {
  data: A
}

export type Tree<A> = Branch<A> | Leaf<A>

export function isBranch<A>(_: Tree<A>): _ is Branch<A> {
  return ((_ as Branch<A>).children !== undefined);
}

export function isLeaf<A>(_: Tree<A>): _ is Leaf<A> {
  return ((_ as Branch<A>).children === undefined);
}

export function leaf<A>(a: A): Leaf<A> {
  return {
    data: a
  }
}

export function maxDepth<A>(root: Tree<A>): number {
  if (isBranch(root)) {
    if (root.children.length === 0) {
      return 0;
    }
    return root.children.map(_ => maxDepth(_)).sort()[0] + 1;
  } else {
    return 0;
  }
}

export function Grow<A>(seed: A, root: Tree<A>, fn: (__: A, _: A) => Array<A> | undefined): Tree<A> {
  if (isBranch(root)) {
    root.children = root.children.map(_ => Grow(root.data, _, fn));
  } else {
    let datas = fn(seed, root.data)
    if (datas) {
      root = {
        ...root,
        children: datas.map(_ => leaf(_))
      }
    }
  }
  return root;
}

export function growTree<A>(root: Tree<A>, children: Array<Tree<A>>): Branch<A> {
  if (isBranch(root)) {
    return growBranch(root, children);
  } else {
    return growLeaf(root, children);
  }
}

export function growBranch<A>(branch: Branch<A>, children: Array<Tree<A>>): Branch<A> {
  return {
    ...branch,
    children: branch.children.map(_ => growTree(_, children))
  };
}

export function growLeaf<A>(leaf: Leaf<A>, children: Array<Tree<A>>): Branch<A> {
  return {
    ...leaf,
    children
  }
}

export function pruneMap<A, B>(seed: B, root: Tree<A>, f: (b: B, _: A) => B | undefined): Tree<B> | undefined {
  let _data = f(seed, root.data)

  if (_data) {
    let data: B = _data;
    if (isBranch(root)) {
      return {
        data,
        children: root.children.flatMap(_ => {
          let c = pruneMap(data, _, f)
          if (c) {
            return [c]
          } else {
            return []
          }
        })
      }
    } else {
      return {
        data
      }
    }  
  }
}

export function map<A, B>(root: Tree<A>, f: (_: A) => B): Tree<B> {
  if (isBranch(root)) {
    return {
      data: f(root.data),
      children: root.children.map(_ => map(_, f))
    }
  } else {
    return {
      data: f(root.data)
    }
  }
}
