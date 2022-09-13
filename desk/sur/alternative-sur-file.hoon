::  urban dictionary
::  TODO: permissions, 
|%
+$  state-0
  $:  lex=lexicon
      defs=(map @ux definition)
      words=(map [space word] (set @ux upvotes=(set @p) downvotes=(set @p)))
  ==
+$  lexicon  (map space (set word))          
+$  space  (pair @p term)
::  o+(malt (turn ~(tap by definitions) (en)) 
:: +$  definitions  (map word (set @ux upvotes=(set @p) downvotes=(set @p)))  :: change to set
+$  word  @t                                   :: change definitions to cords
+$  definition  [=word =ship def=@t sentences=(list @t) related=(list word)]
::
::

::
++  action
  =<  action
  |%
  +$  action
    $%  [%add =space definition]
        [%delete space=space =word id=@ux]
        [%upvote space=space =word id=@ux]
        [%downvote =space word id=@ux]
        [%sub =space]
    ==
  --
::
+$  reaction
  $%  [%def-added =ship definition]
      [%def-deleted space word]
      [%test space word]
      [%defs definitions]
  ==
::
+$  view
  $%  [%definitions-by-group group=space]
      [%definitions-by-word word]
  ==
--
