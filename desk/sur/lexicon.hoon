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
  $%  [%follow-many spaces=(list space)]
      $:  %add-word
          =space
          =word
          definitions=(list @t)
          sentences=(list @t)
          related=(list word)
      ==
      [%del-word =space =word]
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
      [%word-deleted =space =word]
      [%def-added =space =word =entry]
      [%sen-added =space =word =entry]
      [%rel-added =space =word =entry]
      [%word-voted =space =word =votes]
      [%def-voted =space =word =id =votes]
      [%sen-voted =space =word =id =votes]
      [%rel-voted =space =word =id =votes]
      [%add-dict =space =dictionary]
      [%del-dict =space]
      [%dictionary =dictionary]
      [%lexicon =lexicon]
  ==
::
+$  view
  $%  [%dictionary =dictionary]
      [%am-admin am=?]
  ==
--
