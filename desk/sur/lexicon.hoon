/-  spaces-store
|%
+$  path  space-path:spaces-store
+$  id  @uv
+$  word  @t
+$  entry
  $:  id=@uv
      poster=@p
      posted=@da
      definitions=(list @t)
      sentences=(list @t)
      related=(list word)
      upvotes=(set @p)
      downvotes=(set @p)
  ==
+$  entries  (map id entry)
+$  dictionary  (map word entries)
+$  lexicon  (map path dictionary)
::
+$  spaces-reaction  reaction:spaces-store
::
+$  action
  $%  $:  %add
          =path
          =word
          definition=@t
          sentences=(list @t)
          related=(list word)
      ==
      [%vote =path =word id=@uv vote-type=?(%upvotes %downvotes)]
  ==
::
+$  reaction
  $%  [%entry-added =path =word =entry]
      $:  %voted
          =path
          =word
          id=@uv
          vote-type=?(%upvotes %downvotes)
          voter=@p
      ==
      [%dict =path =dictionary]
      [%lex =lexicon]
  ==
--
