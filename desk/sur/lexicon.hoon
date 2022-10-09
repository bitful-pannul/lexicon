::  urban dictionary
::  TODO: permissions, 
|%
+$  lexicon  (map space definitions)
+$  space  [@p @t] 
+$  definitions  (map word (list definition))
+$  word  @t                :: change defs to cords, change sentences to lists
+$  definition  [id=@uv def=@t poster=@p posted=@da sentence=(list @t) related=(list word) upvotes=(set @p) downvotes=(set @p)]
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
      [%delete space=space =word id=@uv]
      [%vote space=space =word id=@uv vote-type=?(%upvotes %downvotes)]
      [%join-space =space]
      [%leave-space =space]
  ==
::
+$  reaction
  $%  [%def-added =word def=definition]
      [%def-deleted =word def=definition id=@uv]
      [%voted =space =word id=@uv vote-type=?(%upvotes %downvotes) voter=@p]
      [%test space word]    :: without this, won't compile...??
      [%defs =definitions]
      :: [%error   @t]
      :: [%success @t]

  ==
::
+$  view
  $%  [%definitions-by-group group=space]
      [%definitions-by-word word]
  ==
--
