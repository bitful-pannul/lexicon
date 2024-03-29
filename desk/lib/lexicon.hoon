/-  *lexicon
|%
:: dejs for the pokes
:: enjs for the reactions and views
++  dejs
  =,  dejs:format
  |%
  ++  space-rule
    ;~  (glue fas)
      ;~(pfix sig fed:ag)
      (cook crip (star prn))
    ==
  ++  dejs-vote  |=(jon=json ?~(jon ~ (some (bo jon))))               
  ++  action
    ^-  $-(json ^action)
    %-  of
    :~  :-  %add-word
        %-  ot
        :~  [%space (su space-rule)]
            [%word so]
            [%definitions (ar so)]
            [%sentences (ar so)]
            [%related (ar so)]
        ==
        :-  %del-word
        %-  ot
        :~  [%space (su space-rule)]
            [%word so]
        ==
        :-  %add-def
        %-  ot
        :~  [%space (su space-rule)]
            [%word so]
            [%def so]
        ==
        :-  %add-sen
        %-  ot
        :~  [%space (su space-rule)]
            [%word so]
            [%sen so]
        ==
        :-  %add-rel
        %-  ot
        :~  [%space (su space-rule)]
            [%word so]
            [%rel so]
        ==
        :-  %vote-word
        %-  ot
        :~  [%space (su space-rule)]
            [%word so]
            [%vote dejs-vote]
        ==
        :-  %vote-def
        %-  ot
        :~  [%space (su space-rule)]
            [%word so]
            [%id (se %uv)]
            [%vote dejs-vote]
        ==
        :-  %vote-sen
        %-  ot
        :~  [%space (su space-rule)]
            [%word so]
            [%id (se %uv)]
            [%vote dejs-vote]
        ==
        :-  %vote-rel
        %-  ot
        :~  [%space (su space-rule)]
            [%word so]
            [%id (se %uv)]
            [%vote dejs-vote]
        ==
    ==
  --
::
++  sort-posted
  |=  =(list [word entry])
  ^-  (^list [word entry])
  %+  sort
    list
  |=  [a=[=word =entry] b=[=word =entry]]
  ^-  ?
  (gth posted.stamp.entry.a posted.stamp.entry.b)
::
++  enjs
  =,  enjs:format
  |%
  ++  enjs-dict
    |=  dict=dictionary
    ^-  json
    %-  pairs
    %+  turn  (sort-posted ~(tap by dict))
    |=  [=word =entry]
    ^-  [@t json]
    :-  word
    (enjs-entry entry)
  ::
  ++  enjs-wrapped
    |=  [=id =@t =votes =stamp]
    ^-  json
    %-  pairs
    :~  [%id %s (scot %uv id)]
        [%txt %s t]
        [%votes (enjs-votes votes)]
        [%stamp (enjs-stamp stamp)]
    ==
  ::
  ++  enjs-votes
    |=  =votes
    ^-  json
    :-  %a
    %+  turn  ~(tap by votes)
    |=  [=@p v=?]
    ^-  json
    %-  pairs
    :~  [%ship (ship:enjs:format p)]
        [%vote b+v]
    ==
  ::
  ++  enjs-stamp
    |=  =stamp
    ^-  json
    %-  pairs
    :~  [%poster (ship:enjs:format poster.stamp)]
        [%posted (sect posted.stamp)]
    ==
  ::
  ++  enjs-entry
    |=  =entry
    ^-  json
    %-  pairs
    :~  [%definitions a+(turn ~(tap by definitions.entry) enjs-wrapped)]
        [%sentences a+(turn ~(tap by sentences.entry) enjs-wrapped)]
        [%related a+(turn ~(tap by related.entry) enjs-wrapped)]
        [%votes (enjs-votes votes.entry)]
        [%stamp (enjs-stamp stamp.entry)]
    ==
    ::
  ++  enjs-lexicon
    |=  lex=lexicon
    ^-  json
    %-  pairs
    %+  turn  ~(tap by lex)
    |=  [=space =dictionary]
    ^-  [@t json]
    :-  `@t`(rap 3 (scot %p -.space) '/' +.space ~)  
    (enjs-dict dictionary)
  ::
  ++  view
    |=  vyu=^view
    ^-  json
    ?-  -.vyu
      %dictionary  (enjs-dict dictionary.vyu)
      %am-admin  b+am.vyu
    ==
    ::
  ++  reaction
    |=  rec=^reaction
    ^-  json
    %+  frond  -.rec
    ?-    -.rec
        %word-added
      %-  pairs
      :~  [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
          [%word %s word.rec]
          [%entry (enjs-entry entry.rec)]
      ==
        %word-deleted
      %-  pairs
      :~  [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
          [%word %s word.rec]
      ==
        %def-added
      %-  pairs
      :~  [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
          [%word %s word.rec]
          [%entry (enjs-entry entry.rec)]
      ==
        %sen-added
      %-  pairs
      :~  [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
          [%word %s word.rec]
          [%entry (enjs-entry entry.rec)]
      ==
        %rel-added
      %-  pairs
      :~  [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
          [%word %s word.rec]
          [%entry (enjs-entry entry.rec)]
      ==
        %word-voted
      %-  pairs
      :~  [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
          [%word %s word.rec]
          [%votes (enjs-votes votes.rec)]
      ==
        %def-voted
      %-  pairs
      :~  [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
          [%word %s word.rec]
          [%id %s (scot %uv id.rec)]
          [%votes (enjs-votes votes.rec)]
      ==
        %sen-voted
      %-  pairs
      :~  [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
          [%word %s word.rec]
          [%id %s (scot %uv id.rec)]
          [%votes (enjs-votes votes.rec)]
      ==
        %rel-voted
      %-  pairs
      :~  [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
          [%word %s word.rec]
          [%id %s (scot %uv id.rec)]
          [%votes (enjs-votes votes.rec)]
      ==
        %add-dict
      %-  pairs
      :~  [%space %s `@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)]
          [%dict (enjs-dict dictionary.rec)]
      ==
      %del-dict  s+`@t`(rap 3 (scot %p -.space.rec) '/' +.space.rec ~)
      %dictionary  (enjs-dict dictionary.rec)
      %lexicon  (enjs-lexicon lexicon.rec)
    ==
  --
--
