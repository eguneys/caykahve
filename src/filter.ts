import * as ck from './types';
import { nt } from 'nefs';
import { ts, sit, m } from 'tschess';

export type MoveFilter = (_: ts.Move) => boolean

export const pAll: MoveFilter = _ => true;
export const pEvery = (...fs: Array<MoveFilter>): MoveFilter => _ => fs.every(f => f(_));
export const pNot = (f: MoveFilter): MoveFilter => _ => !f(_);

export const pOrig = (pos: nt.Pos): MoveFilter => _ => _.orig === pos;
export const pDest = (pos: nt.Pos): MoveFilter => _ => _.dest === pos;

export const pCapture = (role: nt.Role = 'k'): MoveFilter => _ =>
  m.capturedPiece(_)?.role === role;

export const pCapturePos = (pos: nt.Pos): MoveFilter => _ => _.capture === pos;

export const aCounterMoves = (f: MoveFilter) => (_: ts.Move) =>
  [...sit.moves(m.situationAfter(_)).values()].flat()
    .filter(f);

export const noCounterMoves = (f: MoveFilter): MoveFilter => _ => aCounterMoves(f)(_).length === 0;

export const pExistsFollowup = (f: MoveFilter): MoveFilter => _ =>
  aCounterMoves(pAll)(_).some(_ => f(_));

export function safe(pos: nt.Pos) {
  return (_: ts.Move) => {
    let escapePos = _.orig === pos ? _.dest : pos;
    return noCounterMoves(pCapturePos(escapePos))(_);
  }
}

export const safeKing: MoveFilter = _ => {
  let pos = m.kingPosBefore(_);
  return !!pos && safe(pos)(_);
}


export function attack(attackPos: nt.Pos) {
  return pExistsFollowup(pCapturePos(attackPos));
}
