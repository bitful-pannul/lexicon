:: json and other helpers
/-  *lexicon
:: /-  membership
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
:: ++  check-membership
::   |=  [joiner=@p =space t=@da]
::   ^-  ?
::   =/  res=
::   .^(view:membership %gx /(scot %p -.space)/spaces/(scot %da t)/(scot %p -.space)/[+.space]/is-member/(scot %p joiner)/membership-view)
::   is-member.res
::
++  space-rule
  ;~  plug  
    ;~(pfix sig fed:ag)
      ;~(pfix (jest '/') sym)
  ==
::
++  dejs  =,  dejs:format
  |%
    ++  def
      ^-  $-(json definition)
      %-  ot
      :~
        [%id (se %ud)]
        [%word so]
        [%poster (se %p)]
        [%posted (se %da)]
        [%sentence (ar so)]
        [%related (ar so)]
        [%upvotes (as (se %p))]
        [%downvotes (as (se %p))]
      ==
    ::
    ++  defs
    ^-  $-(json definitions)
    %-  om
    (ar def)
    ::
    ++  lex  (op space-rule defs)
    ::
    ++  action
      ^-  $-(json ^action)
      %-  of
      :~
        :-  %add 
        %-  ot
        :~
          [%space (su space-rule)]
          [%word so]
          [%def so]
          [%sentence (ar so)]
          [%related (ar so)]
        ==
        ::
        :-  %join-space
        %-  ot
        :~
          [%space (su space-rule)]
        ==
        ::
        :-  %leave-space
        %-  ot
        :~  
          [%space (su space-rule)]
        ==
        ::
        :-  %vote
        %-  ot
        :~
          [%space (su space-rule)]
          [%word so]
          [%id (se %ud)]
          [%vote-type (su (perk %upvotes %downvotes ~))]
        ==
      ==
  --
::
++  enjs  =,  enjs:format
  |%
  ++  ship
  |=  =@p 
  [%s (scot %p p)]
  ::
  ++  defs
  |=  defs=definitions
  ^-  json
  %-  pairs
  %+  turn  ~(tap by defs)
  |=  [=word =(list definition)]
  ^-  [@t json]
  :-  word
  [%a (turn list def)]
  ::
  ++  def
    |=  def=definition
    ^-  json
    %-  pairs
    :~
      [%id %s (scot %ud id.def)]
      [%def %s def.def]
      [%poster (ship poster.def)]
      [%posted (sect posted.def)]
      [%sentence %a (turn sentence.def (lead %s))]
      [%related %a (turn related.def (lead %s))]
      [%upvotes %a (turn ~(tap in upvotes.def) ship)]
      [%downvotes %a (turn ~(tap in downvotes.def) ship)]
    ==
    ::
  ++  lex
    |=  lex=lexicon
    ^-  json
    %-  pairs
    %+  turn  ~(tap by lex)
    |=  [=space =definitions]
    ^-  [@t json]
    :-  `@t`(rap 3 (scot %p -.space) '/' +.space ~)  
    (defs definitions)
    ::
  ++  reaction
    |=  rec=^reaction
    ^-  json
    %+  frond  -.rec
    ?+  -.rec  ~
      %def-added  ::  can I read which subscription the added def is coming from?
    ::  this needs to only be reactive for local adds, so we'll know the specific space we're in
    ::  deletions might need a proper refresh&refetch on browser side
    %-  pairs
      :~
        [%word %s word.rec]
        [%def (def def.rec)]
      ==
    ::
      %defs
    (defs definitions.rec)
    ::
      %voted
    %-  pairs
      :~
        [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
        [%word %s word.rec]
        [%id %s (scot %ud id.rec)]
        [%vote-type %s (scot %tas vote-type.rec)]     
      ==
    ==
  -- 
--

