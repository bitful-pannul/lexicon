|%
+$  space  [@p @t] 
+$  word  @t  
+$  definition  
  $:  id=@uv
      def=@t :: definition
      poster=@p :: the person who posted it
      posted=@da :: the time they posted it
      sentence=(list @t) :: example sentences
      related=(list word) :: related words
      upvotes=(set @p) :: approval from others
      downvotes=(set @p) :: disapproval, disappoint!
  ==
+$  definitions  (map word (list definition))
+$  lexicon  (map space definitions)
+$  perms     ?(%public %private)
+$  members    (set @p)
+$  whitelist  (map space [=perms =members])
::
::  <- combine action itself with a space
+$  action
  $%  ::
      ::
      :: ====================================
      :: CORE FUNCTIONALITY
      :: ====================================
      [%add =space =word def=@t sentence=(list @t) related=(list word)]
      [%delete =space =word id=@uv]
      [%vote =space =word id=@uv vote-type=?(%upvotes %downvotes)]
      ::
      :: ====================================
      :: MANAGE MEMBERSHIP
      :: ====================================
      [%add-whitelist =space member=@p]
      [%remove-whitelist =space member=@p]
      ::
      :: ====================================
      :: MANAGE SPACES
      :: ====================================
      [%create-space =space =perms members=(set @p)]
      [%join-space =space]
      [%leave-space =space]
  ==
::
:: action/reaction; just idiosyncratic take on action/update
:: for a single on-watch to /updates to return all reactions, they need
:: their space context within the reaction
+$  reaction
::
  $%  
      [%def-added =space =word def=definition]
      [%def-deleted =space =word id=@uv]
      [%whitelist-added =whitelist]
      $:  %voted
          =space
          =word
          id=@uv
          vote-type=?(%upvotes %downvotes)
          voter=@p
      ==
      :: without this, lexlib won't compile?
      [%test =space =word]
      [%defs =space =definitions]
      [%lex =lexicon]
      [%whiteliste =whitelist]
      [%error message=tape]
      [%success message=tape]
  ==
--
