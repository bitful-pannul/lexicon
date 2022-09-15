::  
/-  *lexicon 
/+  default-agent, dbug, lexlib
::
::
::
|%
+$  state-0
  $:  %0
      lex=lexicon 
      :: subscription tracking.?
  ==
::
+$  card     card:agent:gall
--
%-  agent:dbug
::
=|  state-0
=*  state  -
::
^-  agent:gall

|_  =bowl:gall
+*  this  .
    def   ~(. (default-agent this %|) bowl)
::
++  on-init
  ^-  (quip card _this)
  :_  this
  :: perhaps join holium space first
  ::  :~  [%pass %watch]
  ~
::
++  on-save  !>(state)
::
++  on-load
  |=  ole=vase
  ^-  (quip card _this)
  =/  old=state-0  !<(state-0 ole)
  [~ this(state old)]
::
:: TODO
:: put poke/on-watch/on-agent in helper core
++  on-poke
  |=  [=mark =vase]
  ^-  (quip card _this)
  |^
  ?+    mark  (on-poke:def mark vase)
      %lexicon-action
    =^  cards  state
      (handle-poke !<(action vase))
    [cards this]
  ==
  ::
  ++  handle-poke  
    :: 
    |=  act=action
    ^-  (quip card _state) 
    ?-    -.act
      ::
        %add
      =/  def  [id=`@`eny.bowl def.act src.bowl sentence=sentence.act related=related.act upvotes=*(set @p) downvotes=*(set @p)]
      ::
      :: check for if it's ours to distribute or not
      ?:  =(-.space.act our.bowl)
        ::  (distribute-local def space)
        
        ?~  defs=(~(get by lex) space.act)
          =/  new-defs  (malt ~[[word.act ~[def]]])
          :_  state(lex (~(put by lex) space.act new-defs))
          :~  [%give %fact ~[/[(scot %p -.space.act)]/[+.space.act]] %lexicon-reaction !>(`reaction`[%def-added word.act def])]
          ==
        ::
        =/  updated-list
        ?~  (~(get by u.defs) word.act)
            ~[def]
        (weld (~(got by u.defs) word.act) ~[def])
        :_  state(lex (~(put by lex) space.act (~(put by u.defs) word.act updated-list)))
        :~  [%give %fact ~[/[(scot %p -.space.act)]/[+.space.act]] %lexicon-reaction !>(`reaction`[%def-added word.act def])]
        ==
      ::
      :: (distribute-remote def space)
      :_  state
      :~  [%pass [/[(scot %p -.space.act)]/[+.space.act]] %agent [-.space.act %lexicon] %poke %lexicon-action !>(`action`[%add space.act word.act def.act sentence.act related.act])]
      ==
    ::
        %delete
      :: add word to action, fetch list, find specific def by id, add
      :: sender to (set @p)
      =/  defs  (~(get by lex) space.act)
      ?~  defs  !! :: crash with error msg
      =/  def-list  (need (~(get by (need defs)) word.act))
      =/  index  (need (find ~[id.act] (turn def-list |=(a=definition id.a))))
      =/  new-list  (oust [index 1] def-list)
      :_  state(lex (~(gas by lex) ~[[space.act (~(gas by (need defs)) ~[[word.act new-list]])]]))
      ~
      ::  =/  def-list  (get-list:lexlib [lex path.act word.act])
      ::
         %vote
      =/  slex  (~(got by lex) space.act)
      =/  def-list  (~(gut by slex) word.act ~)
      =/  index  (need (find ~[id.act] (turn def-list |=(a=definition id.a))))
      =/  def  (snag index def-list)
        :: switch on action up/down and remote/local
      ?:  =(-.space.act our.bowl)
          =/  new-def
          ?:  =(vote-type.act %upvotes)
              def(upvotes (~(put in upvotes.def) src.bowl))
            def(downvotes (~(put in downvotes.def) src.bowl))
          =/  new-defs  (snap def-list index new-def)
            ::(malt ~[[word.act new-defs]])
          :_  state(lex (~(put by lex) space.act (~(put by slex) word.act new-defs)))
          :~  [%give %fact ~[/[(scot %p -.space.act)]/[+.space.act]] %lexicon-reaction !>(`reaction`[%voted space.act word.act id.act vote-type.act src.bowl])]
          ==
      :: same thing but give poke
      :_  state
      :~  [%pass [/[(scot %p -.space.act)]/[+.space.act]] %agent [-.space.act %lexicon] %poke %lexicon-action !>(`action`[%vote space.act word.act id.act vote-type.act])]
      ==
        ::
        :: this needs to be called before interacting with a spaces' lexicon. 
        %join-space
      :_  state  
      :~  [%pass /[(scot %p -.space.act)]/[+.space.act] %agent [-.space.act %lexicon] %watch /[(scot %p -.space.act)]/[+.space.act]]        
      ==
        %leave-space
        :: might be useful calling on frontend to refresh state properly
      :_  state
      :~  [%pass /[(scot %p -.space.act)]/[+.space.act] %agent [-.space.act %lexicon] %leave ~]
      ==
    ==
  --
::
++  on-watch    
  |=  =path
  ^-  (quip card _this)
  ?+  path  (on-watch:def path)
    [@t @t ~]
    ?>  |(=(our.bowl src.bowl) =(our.bowl (slav %p i.path)))
    =/  defs  (need (~(get by lex) [(slav %p i.path) i.t.path]))
    :_  this
    :~  [%give %fact ~ %lexicon-reaction !>(`reaction`[%defs defs])]
    ==
  ==
 ::
++  on-agent  
  |=  [=wire =sign:agent:gall]
  ^-  (quip card _this)
  ?+    wire  (on-agent:def wire sign)   :: /[(scot %p -.wire)]/[+.wire]
      [@t @t ~]
    ?+    -.sign  (on-agent:def wire sign)
        %watch-ack
      ?~  p.sign
        ((slog '%lexicon-client: joining [insert space here] succeeded!' ~) `this)
      ((slog '%lexicon-client: joining [insert space here] failed!' u.p.sign) `this)
    ::
        %kick
      :_  this
      :~  [%pass /[i.wire]/[i.t.wire] %agent [src.bowl dap.bowl] %watch /[i.wire]/[i.t.wire]]
      ==
    ::
        %fact
        :: update local lex.
      ?+    p.cage.sign  (on-agent:def wire sign)
          %lexicon-reaction
        =/  incoming  !<(reaction q.cage.sign)
        ?+  -.incoming  (on-agent:def wire sign)
            %defs
          =/  sp  [(slav %p i.wire) i.t.wire]
          ?~  (~(get by lex) sp)  ::... this shouldn't really be undefined ever
          `this(lex (~(put by lex) sp +.incoming))
          `this :: if space is defined after joining it...
          ::       probably should concanate the map, if some kind of subscription weirdness arises.
          ::
          ::
            %def-added
          =/  sp  [(slav %p i.wire) i.t.wire]
          ::  
          ::  make sure a space is created before you got by it
          ::
          ?~  sdefs=(~(get by lex) sp)   :: creating new word here. permissioned?
            =/  new-defs  (malt ~[[word.incoming ~[def.incoming]]])
            `this(lex (~(put by lex) sp new-defs))
          ::
          ::  here we know there's a space with some words & defs defined.
          =/  def-list  (~(gut by u.sdefs) word.incoming ~)
          =/  updated-list 
            ?~  def-list  
              ~[def.incoming]
            (weld def-list ~[def.incoming])
          `this(lex (~(put by lex) sp (~(put by u.sdefs) word.incoming updated-list)))
          ::
            %voted
            :: note space.incoming and space in wire both available...
          =/  slex  (~(got by lex) space.incoming)
          =/  def-list  (fall (~(get by slex) word.incoming) ~)
          =/  index  (need (find ~[id.incoming] (turn def-list |=(a=definition id.a))))
          =/  def  (snag index def-list)
          ::
          =/  new-def
            ?:  =(vote-type.incoming %upvotes)
                def(upvotes (~(put in upvotes.def) voter.incoming))
                def(downvotes (~(put in downvotes.def) voter.incoming))
          =/  new-defs  (snap def-list index new-def)
          `this(lex (~(put by lex) space.incoming (~(put by slex) word.incoming new-defs)))
              ::
            %def-deleted
            ::  todo: deletion permissions/effects
          !!
          ::
        ==
      ==
    ==
  ==
::
++  on-peek
  :: TODO: add searching by word functions
  :: also sorting by upvotes/downvotes
  |=  =path
  ^-  (unit (unit cage))
  ?+  path  (on-peek:def path)
    [%x %definitions %all ~]
      ``lexicon+!>(lex)
    ::
    [%x %definitions @t @t ~]
      =/  sp  [[(slav %p i.t.t.path) i.t.t.t.path]]
      =/  sdefs  (~(got by lex) sp)
      ``definitions+!>(sdefs)
  ==
::
++  on-arvo
  |=  [=wire =sign-arvo]
  ^-  (quip card _this)
  ?+  sign-arvo  (on-arvo:def wire sign-arvo)
      [%eyre %bound *]
    ~?  !accepted.sign-arvo
      [dap.bowl 'eyre bind rejected!' binding.sign-arvo]
    [~ this]
  ==
::
++  on-leave  on-leave:def
++  on-fail   on-fail:def
--

