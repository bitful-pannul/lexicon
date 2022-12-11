/-  spaces-store
|%
+$  space  space-path:spaces-store
+$  id     @uv
+$  word   @t
+$  stamp  [poster=ship posted=@da]
+$  votes  (map ship ?)
::
+$  definitions  (map id [=@t =votes =stamp])
+$  sentences    (map id [=@t =votes =stamp])
+$  related      (map id [=@t =votes =stamp])
::
+$  entry
  $:  =definitions
      =sentences
      =related
      =votes
      =stamp
  == 
::
+$  dictionary  (map word entry)
+$  lexicon     (map space dictionary)
::
+$  action
  $%  $:  %add-word
          =space
          =word
          definitions=(list @t)
          sentences=(list @t)
          related=(list word)
      ==
      [%add-def =space =word def=@t]
      [%add-sen =space =word sen=@t]
      [%add-rel =space =word rel=@t]
      [%vote-word =space =word vote=(unit ?)]
      [%vote-def =space =word =id vote=(unit ?)]
      [%vote-sen =space =word =id vote=(unit ?)]
      [%vote-rel =space =word =id vote=(unit ?)]
  ==
::
+$  reaction
  $%  [%word-added =space =word =entry]
      [%def-added =space =word =id def=@t =votes =stamp]
      [%sen-added =space =word =id sen=@t =votes =stamp]
      [%rel-added =space =word =id rel=@t =votes =stamp]
      $>(%vote-word action)
      $>(%vote-def action)
      $>(%vote-sen action)
      $>(%vote-rel action)
      [%dictionary =dictionary]
      [%lexicon =lexicon]
  ==
::
+$  view
  $%  [%dictionary =dictionary]
  ==
--
