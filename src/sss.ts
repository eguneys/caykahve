export function union<A>(setA: Set<A>, setB: Set<A>): Set<A> {
  let _union = new Set(setA)
  for (let elem of setB) {
    _union.add(elem)
  }
  return _union
}

export function concat<A>(a: Array<A>, b: Array<A>, isEqual: (a: A, b: A) => boolean): Array<A> {
  let res = a.slice(0);
  
  for (let _b of b) {
    if (!res.find(_ => isEqual(_, _b))) {
      res.push(_b);
    }
  }

  return res;
}

export function partialIntersect<A>(a: Array<A>, b: Array<A>, isEqual: (a: A, b: A) => boolean): Array<A> {
  let res = [];
  
  for (let _a of a) {
    let _b = b.find(_ => isEqual(_, _a))
    if (_b) {
      res.push(_a);
    }
  }

  return res;
}

export function pairIn2<A>(los: Array<A>) {
  let res = [];
  for (let i = 0; i < los.length - 1; i++) {
    res.push([los[i], los[i+1]]);
  }
  return res;
}
