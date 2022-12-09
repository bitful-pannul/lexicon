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
::  <- combine action itself with a space
+$  action
  $%  [%add =space =word def=@t sentence=(list @t) related=(list word)]
      [%delete space=space =word id=@uv]
      [%vote =space =word id=@uv vote-type=?(%upvotes %downvotes)]
      ::
      [%create-space =space]
      [%join-space =space]
      [%leave-space =space]
  ==
::
+$  reaction   :: for a single on-watch to /updates to return all reactions, they need their space context within the reaction
::
  $%  [%def-added =space =word def=definition]
      [%def-deleted =space =word id=@uv]
      [%space-created =space]
      [%voted =space =word id=@uv vote-type=?(%upvotes %downvotes) voter=@p]
      [%test =space =word]    :: without this, lexlib won't compile?
      [%defs =space =definitions]
      [%lex =lexicon]
      :: these are only sent out to frontend
      [%error message=tape]
      [%success message=tape]
  ==
::
+$  view
  $%  [%definitions-by-group group=space]
      [%definitions-by-word word]
  ==
--
