/-  sur=lexicon
|%
++  space-rule
  ;~  plug  
    ;~(pfix sig fed:ag)
      ;~(pfix (jest '/') sym)
  ==
::
++  dejs
  =,  dejs:format
  |%
  ++  action
    ^-  $-(json action:sur)
    %-  of
    :~  :-  %add 
        %-  ot
        :~  [%path (su space-rule)]
            [%word so]
            [%def so]
            [%sentence (ar so)]
            [%related (ar so)]
        ==
        ::
        :-  %vote
        %-  ot
        :~  [%path (su space-rule)]
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
  ++  dict
  |=  dict=dictionary:sur
  ^-  json
  %-  pairs
  %+  turn  ~(tap by dict)
  |=  [=word:sur =entries:sur]
  ^-  [@t json]
  :-  word
  [%a (turn ~(val by entries) ent)]
  ::
  ++  ent
    |=  =entry:sur
    ^-  json
    %-  pairs
    :~  [%id %s (scot %uv id.entry)]
        [%poster (ship poster.entry)]
        [%posted (sect posted.entry)]
        [%definitions %a (turn definitions.entry (lead %s))]
        [%sentences %a (turn sentences.entry (lead %s))]
        [%related %a (turn related.entry (lead %s))]
        [%upvotes %a (turn ~(tap in upvotes.entry) ship)]
        [%downvotes %a (turn ~(tap in downvotes.entry) ship)]
    ==
    ::
  ++  lex
    |=  lex=lexicon:sur
    ^-  json
    %-  pairs
    %+  turn  ~(tap by lex)
    |=  [=path:sur =dictionary:sur]
    ^-  [@t json]
    :-  `@t`(rap 3 (scot %p ship.path) '/' space.path ~)  
    (dict dictionary)
    ::
  ++  reaction
    |=  rxn=reaction:sur
    ^-  json
    %+  frond  -.rxn
    ?-  -.rxn
      %entry-added  
    %-  pairs
    :~  [%path %s `@t`(rap 3 (scot %p ship.path.rxn) '/' space.path.rxn ~)]
        [%word %s word.rxn]
        [%entry (ent entry.rxn)]
    ==
    ::
      %dict
    %-  pairs
    :~  [%path %s `@t`(rap 3 (scot %p ship.path.rxn) '/' space.path.rxn ~)]
        [%dictionary (dict dictionary.rxn)]
    ==
      %voted
    %-  pairs
    :~  [%path %s `@t`(rap 3 (scot %p space.path.rxn) '/' space.path.rxn ~)]
        [%word %s word.rxn]
        [%id %s (scot %uv id.rxn)]
        [%vote-type %s (scot %tas vote-type.rxn)]   
        [%voter %s (scot %p voter.rxn)]  
    ==
    %lex
    (lex lexicon.rxn)
    ==
  -- 
--
