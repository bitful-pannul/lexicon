::  urban dictionary
|%
+$  lexicon  (map space definitions)
+$  space  [@p @t] 
+$  definitions  (map word (list definition))
+$  word  @t  
+$  definition  [id=@uv def=@t poster=@p posted=@da sentence=(list @t) related=(list word) upvotes=(set @p) downvotes=(set @p)]
::
::  
::
::
+$  perms     ?(%public %private)
+$  members    (set ship)
+$  whitelist  (map space [=perms =members])
::
::
::  <- combine action itself with a space
+$  action
  $%  [%add =space =word def=@t sentence=(list @t) related=(list word)]
      [%delete space=space =word id=@uv]
      [%vote =space =word id=@uv vote-type=?(%upvotes %downvotes)]
      ::
      [%create-space =space =perms members=(set ship)]
      [%add-whitelist =space =ship]
      [%remove-whitelist =space =ship]
      [%join-space =space]
      [%leave-space =space]
  ==
::
+$  reaction   :: for a single on-watch to /updates to return all reactions, they need their space context within the reaction
::
  $%  [%def-added =space =word def=definition]
      [%def-deleted =space =word id=@uv]
      [%voted =space =word id=@uv vote-type=?(%upvotes %downvotes) voter=@p]
      [%test =space =word]    :: without this, won't compile...??
      [%defs =space =definitions]
      [%lex =lexicon]
      [%whiteliste =whitelist]
      :: these are only sent out to frontend
      [%error message=@t]
      [%success message=@t]
  ==
::
+$  view
  $%  [%definitions-by-group group=space]
      [%definitions-by-word word]
  ==
--
