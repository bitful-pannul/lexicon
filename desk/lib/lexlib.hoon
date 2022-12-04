:: json and other helpers
/-  *lexicon
|%
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
        [%id (se %uv)]
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
        :-  %create-space
        %-  ot
        :~
          [%space (su space-rule)]
          [%perms (su (perk ~[%public %private]))]
          [%members (as (se %p))]
        ==
        ::
        :-  %add-whitelist
        %-  ot
        :~
          [%space (su space-rule)]
          [%member (su ;~(pfix sig fed:ag))]
        ==
        ::
        :-  %vote
        %-  ot
        :~
          [%space (su space-rule)]
          [%word so]
          [%id (se %uv)]
          [%vote-type (su (perk ~[%upvotes %downvotes]))]
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
      [%id %s (scot %uv id.def)]
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
  ++  whiteliste
    |=  w=whitelist
    ^-  json
    %-  pairs
    %+  turn  ~(tap by w)
    |=  [=space [=perms =members]]
    ^-  [@t json]
    :-  `@t`(rap 3 (scot %p -.space) '/' +.space ~)
    ::
    %-  pairs
    :~
      [%members %a (turn ~(tap in members) ship)]
      [%perms %s (scot %tas perms)]
    ==
    ::
  ++  reaction
    |=  rec=^reaction
    ^-  json
    %+  frond  -.rec
    ?+  -.rec  ~
      %def-added  
    ::  can I read which subscription the added def is coming from?
    ::  this needs to only be reactive for local adds, so we'll know the
    ::  specific space we're in deletions might need a proper
    ::  refresh&refetch on browser side
    %-  pairs
      :~
        [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
        [%word %s word.rec]
        [%def (def def.rec)]
      ==
    ::
      %defs
    %-  pairs
    :~
        [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
        [%definitions (defs definitions.rec)]
    ==
    ::
      %def-deleted
    %-  pairs
      :~
        [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
        [%word %s word.rec]
        [%id %s (scot %uv id.rec)]
      ==  
      %voted
    %-  pairs
      :~
        [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
        [%word %s word.rec]
        [%id %s (scot %uv id.rec)]
        [%vote-type %s (scot %tas vote-type.rec)]   
        [%voter %s (scot %p voter.rec)]  
      ==
      %lex
    (lex lexicon.rec)
    ::
      %whiteliste
    (whiteliste whitelist.rec)
      %success
    (tape message.rec)
    ::
      %error
    (tape message.rec)
    ::
      %whitelist-added
    (whiteliste whitelist.rec)
    ==
  -- 
--
