import { nt } from 'nefs';
import { ts } from 'tschess';

export type Piese = {
  piece: nt.Piece
  pos: nt.Pos
}

export type Moves = Array<ts.Move>
