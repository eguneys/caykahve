import { nt } from 'nefs';

export type Piese = {
  piece: nt.Piece
  pos: nt.Pos
}

export type Pieses = Set<Piese>;

export type PiesesSelection = [Piese, Set<Piese>]
