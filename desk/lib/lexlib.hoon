:: json and other helpers
/-  *lexicon
::
|%
++  get-list
  |=  [lex=lexicon space=space word=word]
  =/  defs  (~(get by lex) space)
  ?~  defs  !!
  (need (~(get by (need defs)) word))
::  ++  vote  (specific id?)
::    |=  [lex=lexicon liker=@p path=path word=word vote=?(%up %down) id=@]
::    =/  def-list  (get-list [lex path word]
::    =/  index  (find ~[id] (turn def-list |=(a=definition id.a)))
::    ?=(vote %up)  :: switch on these.
::      =/  set  (need (find ~[index] def-list))
::      :: add msg.sender..? src.bowl to this too
::      
::
--

