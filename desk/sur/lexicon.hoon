::  urban dictionary
::  TODO: permissions, 
|%
+$  lexicon  (map space definitions)
+$  space  [@p @t] 
+$  definitions  (map word (list definition)) :: change list to set
+$  word  @t                :: change defs to cords, change sentences to lists
+$  definition  [id=@ @t @p sentence=(list @t) related=(list word) upvotes=(set @p) downvotes=(set @p)]
::
::  
::  +$  lexicon  (map space [=perms =definitions])
::  +$  perms  $%  [%mod ships=(set @p)]  [%admin ships=(set @p)]
:: OR
::  +$  permissions  (map space perms)
::
::  <- combine action itself with a space
+$  action
  $%  [%add =space =word def=@t sentence=(list @t) related=(list word)]
      [%delete space=space =word id=@]
      [%vote space=space =word id=@ vote=?(%upvotes %downvotes)]
      [%join-space =space]
  ==
::
+$  reaction
  $%  [%def-added =word def=definition]
      [%def-deleted space word definition @]
      [%voted =space =word id=@ vote=?(%upvotes %downvotes) voter=@p]
      [%test space word]
      [%defs definitions]
  ==
::
+$  view
  $%  [%definitions-by-group group=space]
      [%definitions-by-word word]
  ==
--
