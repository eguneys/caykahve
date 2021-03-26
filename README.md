
    5Kbk/6pp/6P1/8/8/8/8/7R w - - 0 1

    k@h8 path g8 g7 h7
    g8 g7 is covered by K@f8
    h7 is blocked by p@h7
    h8 can be attacked by Pg7
    Pg7 is blocked by p@g7
    p@g7 can't move (Rh6 is possible)
    h8 can be attacked by Rxh7
    Rxh7 is covered by b@h8
    b@h8 can't move
    k@h8 can't move
    p@h7 must move
    p@h7 has ph6 and ph5
    Rh6 blocks ph6 and ph5
    black is in zugzwang.
    
    Restrict k@h8
     Restrict kg8
      ok K@f8
     Restrict kg7 
      ok K@f8
     Restrict kh7
      ok p@h7
    Attack k@h8
     Pg7
      cond move blocked by p@g7
     Rh_ and _-8 is empty
      cond Rxh7 covered by b@g8
    Put in zugzwang
     Restrict k@h8
     Restrict b@g8
       b@g8 covers Rxh7
       b@g8 can't move
     Restrict p@g7
       p@g7 blocks Pg7
       p@g7 can't move
     Restrict p@h7
       Restrict ph5
         ok Rxh5
       ph6
         
       




    Board = Pos -> Piece

    Actor = { Board Piece Pos }

    Posce = { pos: Pos, piece: Piece }

    Move0 = { actor: Posce, dest: Pos }

    Move1 = { move: Move0, 
              capture?: Pos,
              promote?: ct.Role }

    Castle = [Move0, Move0]
    
    Game = prune Board[] ~ Tree<Merit> ~ Tree<Board[]>

    
