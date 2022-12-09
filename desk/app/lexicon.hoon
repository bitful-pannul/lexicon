::  
/-  *lexicon, membership, spaces-store
/+  default-agent, dbug, lexlib, verb
::
::
|%
+$  state-0
  $:  %0
      lex=lexicon
      :: =whitelist
  ==
::
+$  card     card:agent:gall
--
%-  agent:dbug
%+  verb  &
::
=|  state-0
=*  state  -
::
=<
::
^-  agent:gall

|_  =bowl:gall
+*  this  .
    def   ~(. (default-agent this %|) bowl)
    hc    ~(. +> [bowl ~])
    cc    |=(cards=(list card) ~(. +> [bowl cards]))
::
++  on-init
  ^-  (quip card _this)
  :_  this
  [%pass /spaces %agent [our.bowl %spaces] %watch /updates]~
::
++  on-save  !>(state)
::
++  on-load
  |=  ole=vase
  ^-  (quip card _this)
  =/  old=state-0  !<(state-0 ole)
  :_  this(state old)
  [%pass /spaces %agent [our.bowl %spaces] %watch /updates]~
::
:: 
:: 
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
      =/  def
        :*
          id=(sham [def.act src.bowl sentence.act related.act])
          def=def.act
          poster=src.bowl
          posted=now.bowl
          sentence=sentence.act
          related=related.act
          upvotes=*(set @p)
          downvotes=*(set @p)
        ==
      ::
      :: check for if it's ours to distribute or not
      ?:  =(-.space.act our.bowl)
        ::  (distribute-local def space)
        ::  
        ::
        =/  ismem  [%& ~]
          :: .^(view:membership %gx /(scot %p our.bowl)/spaces/(scot %da now.bowl)/[-.space.act]/[+.space.act]/is-member/(scot %p src.bowl)/membership-view)
        ?>  =(%.y +.ismem)
        ::
        :: 
        ?~  defs=(~(get by lex) space.act)
          ?>  =(src.bowl our.bowl)
          =/  new-defs  (malt ~[[word.act ~[def]]])
          :_  state(lex (~(put by lex) space.act new-defs))
          :~
            :*
              %give
              %fact
              ~[/[(scot %p -.space.act)]/[+.space.act]]
              %lexicon-reaction
              !>(`reaction`[%def-added space.act word.act def])
            ==
            :*
              %give
              %fact
              ~[/updates]
              %lexicon-reaction
              !>(`reaction`[%def-added space.act word.act def])
            ==
          ==
        ::
        =/  updated-list
        ?~  (~(get by u.defs) word.act)
            ~[def]
        (weld (~(got by u.defs) word.act) ~[def])
        :_  state(lex (~(put by lex) space.act (~(put by u.defs) word.act updated-list)))
        :~ 
          :*
            %give
            %fact
            ~[/[(scot %p -.space.act)]/[+.space.act]]
            %lexicon-reaction
            !>(`reaction`[%def-added space.act word.act def])
          ==
          :*
            %give
            %fact
            ~[/updates]
            %lexicon-reaction
            !>(`reaction`[%def-added space.act word.act def])
          ==
        ==
      ::
      :: (distribute-remote def space)
      :_  state
      :~ 
        :*
          %pass
          [/[(scot %p -.space.act)]/[+.space.act]]
          %agent
          [-.space.act %lexicon]
          %poke
          %lexicon-action
          !>(`action`[%add space.act word.act def.act sentence.act related.act])
        ==
      ==
    ::
        %delete
      ?~  defs=(~(get by lex) space.act)
        !!
      =/  def-list  (~(got by u.defs) word.act)
      =/  index  (need (find ~[id.act] (turn def-list |=(a=definition id.a))))
      =/  def  (snag index def-list)
      ?>  =(src.bowl poster.def)
      ?:  =(-.space.act our.bowl)
        ::
        =/  ismem  [%& ~]
          :: .^(view:membership %gx /(scot %p our.bowl)/spaces/(scot %da now.bowl)/[-.space.act]/[+.space.act]/is-member/(scot %p src.bowl)/membership-view)
        ?>  =(%.y +.ismem)
        ::
        =/  new-list  (oust [index 1] def-list)
        :_  
          %=    state
            lex  (~(gas by lex) ~[[space.act (~(gas by (need defs)) ~[[word.act new-list]])]])
          == 
        :~
          :*
            %give
            %fact
            ~[/[(scot %p -.space.act)]/[+.space.act]]
            %lexicon-reaction
            !>(`reaction`[%def-deleted space.act word.act id.act])
          ==
          :*
            %give
            %fact
            ~[/updates]
            %lexicon-reaction
            !>(`reaction`[%def-deleted space.act word.act id.act])
          ==
        ==
      :: pass remote
      :_  state
      :~
        :*
          %pass
          [/[(scot %p -.space.act)]/[+.space.act]]
          %agent
          [-.space.act %lexicon]
          %poke
          %lexicon-action
          !>(`action`[%delete space.act word.act id.act])
        ==
      ==
      ::
      ::  =/  def-list  (get-list:lexlib [lex path.act word.act])
         %vote
      =/  slex  (~(got by lex) space.act)
      =/  def-list  (~(gut by slex) word.act ~)
      =/  index  (need (find ~[id.act] (turn def-list |=(a=definition id.a))))
      =/  def  (snag index def-list)
        :: switch on action up/down and remote/local
      ?:  =(-.space.act our.bowl)
          ::
          =/  ismem  [%& ~]
            :: .^(view:membership %gx /(scot %p our.bowl)/spaces/(scot %da now.bowl)/[-.space.act]/[+.space.act]/is-member/(scot %p src.bowl)/membership-view)
          ?>  =(%.y +.ismem)
          ::
          =/  new-def
          ?:  =(vote-type.act %upvotes)
              def(upvotes (~(put in upvotes.def) src.bowl))
            def(downvotes (~(put in downvotes.def) src.bowl))
          =/  new-defs  (snap def-list index new-def)
            ::(malt ~[[word.act new-defs]])
          :_  state(lex (~(put by lex) space.act (~(put by slex) word.act new-defs)))
          :~
            :*
              %give
              %fact
              ~[/[(scot %p -.space.act)]/[+.space.act]]
              %lexicon-reaction
              !>(`reaction`[%voted space.act word.act id.act vote-type.act src.bowl])
            ==
            :*
              %give
              %fact
              ~[/updates]
              %lexicon-reaction
              !>(`reaction`[%voted space.act word.act id.act vote-type.act src.bowl])
            ==
          ==
      :: same thing but give poke
      :_  state
      :~
        :*
          %pass
          [/[(scot %p -.space.act)]/[+.space.act]]
          %agent
          [-.space.act %lexicon]
          %poke
          %lexicon-action
          !>(`action`[%vote space.act word.act id.act vote-type.act])
        ==
      ==
      ::
        %create-space
      ?>  =(-.space.act our.bowl)
      ::
      :_
        %=    state
          lex        (~(put by lex) space.act *definitions)
        ==
      :~
        [%give %fact ~[/updates] %lexicon-reaction !>(`reaction`[%space-created space.act])]
      ==
      ::
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
      ::  

      ::
      :: TODO, can't find scry for if space is public or not
      ::
      ::
      =/  sp  [(slav %p i.path) i.t.path]
        ::
      :: check flow for non-existing space, should crash with (need .) calls 
      =/  ismem  [%& ~]
        :: .^(view:membership %gx /(scot %p our.bowl)/spaces/(scot %da now.bowl)/(scot %p our.bowl)/[i.t.path]/is-member/(scot %p src.bowl)/membership-view)
      ?:  =(%.y +.ismem)
      ::?:  =(perms.info %public)
        =/  defs  (need (~(get by lex) sp))
        :_  this
        :~  
          [%give %fact ~ %lexicon-reaction !>(`reaction`[%defs sp defs])]
          :: if not handled in on-agent, and passed on to /updates manually... causes infinite loop
          :: not sure if 3 separate %facts, host -> joiner -> frontend are optimal...
          [%give %fact ~ %lexicon-reaction !>(`reaction`[%success "successfully joined: {<sp>} "])]
        ==
      :: %private
      :: 
      :_  this
      :~
        [%give %fact ~ %lexicon-reaction !>(`reaction`[%error "you do not have the permissions to join: {<sp>}"])]
      ==
    ::
    [%updates ~]
      :_  this
      :~  
        [%give %fact ~ %lexicon-reaction !>(`reaction`[%lex lex])]
        ::  [%give %fact ~ %lexicon-reaction !>(`reaction`[%whiteliste whitelist])]
      ==
  ==
 ::
++  on-agent  
  |=  [=wire =sign:agent:gall]
  ^-  (quip card _this)
  ?+    wire  (on-agent:def wire sign)
      [%spaces ~]
    ?+    -.sign  (on-agent:def wire sign)
        %watch-ack
      ?~  p.sign
        =/  tang  [leaf+"%lexicon: subscribed to /updates from %spaces."]~
        ((slog tang) `this)
      =/  tang
        :_  u.p.sign
        leaf+"%lexicon: failed to subscribe to /updates from %spaces."
      ((slog tang) `this)
      ::
        %kick
      :_  this
      [%pass wire %agent [src.bowl %spaces] %watch /updates]~
      ::
        %fact
      ?.  =(p.cage.sign %spaces-reaction)  (on-agent:def wire sign)
      =/  rxn  !<(reaction:spaces-store q.cage.sign)
      ?-    -.rxn
          %initial
        =^  cards  state
          abet:(cof-many:hc ~(tap in ~(key by spaces.rxn)))
        [cards this]
          %add
        =^  cards  state
          abet:(create-or-follow:hc path.space.rxn)
        [cards this]
          %replace
        =^  cards  state
          abet:(create-or-follow:hc path.space.rxn)
        [cards this]
          %remote-space
        =^  cards  state
          abet:(create-or-follow:hc path.space.rxn)
        [cards this]
          %remove
        =^  cards  state
          abet:(delete-or-leave:hc path.rxn)
        [cards this]
      ==
    ==
      [@t @t ~]
    ?+    -.sign  (on-agent:def wire sign)
        %watch-ack
      ?~  p.sign
        ((slog leaf+"%lexicon-client: joining /{<i.wire>}/{<i.t.wire>} succeeded!" ~) `this)
      ((slog leaf+"%lexicon-client: joining /{<i.wire>}/{<i.t.wire>} failed!" u.p.sign) `this)
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
          :_  this(lex (~(put by lex) sp (~(put by u.sdefs) word.incoming updated-list)))
          :~
            :* 
              %give
              %fact
              ~[/updates]
              %lexicon-reaction
              !>(`reaction`[%def-added sp word.incoming def.incoming])
            == 
          ==
          ::
            %def-deleted
          ::  todo: deletion permissions/effects
          =/  sp  [(slav %p i.wire) i.t.wire]
          ?~  sdefs=(~(get by lex) sp)
            !!
          =/  def-list  (~(got by u.sdefs) word.incoming)
          =/  index  (need (find ~[id.incoming] (turn def-list |=(a=definition id.a))))
          =/  new-list  (oust [index 1] def-list) 
          :_  this(lex (~(gas by lex) ~[[sp (~(gas by u.sdefs) ~[[word.incoming new-list]])]]))
          :~
            :*
              %give
              %fact
              ~[/updates]
              %lexicon-reaction
              !>(`reaction`[%def-deleted space.incoming word.incoming id.incoming])
            ==
          ==
          ::
            %voted
            :: note space.incoming and space in wire both available
          =/  slex  (~(got by lex) space.incoming)
          =/  def-list  (fall (~(get by slex) word.incoming) ~)
          =/  index  (need (find ~[id.incoming] (turn def-list |=(a=definition id.a))))
          =/  def  (snag index def-list)
          ::
          =/  new-def
            ?:  =(vote-type.incoming %upvotes)
                def(upvotes (~(put in upvotes.def) voter.incoming))
                def(downvotes (~(put in downvotes.def) voter.incoming))
                ::
          =/  new-defs  (snap def-list index new-def)
          :_  this(lex (~(put by lex) space.incoming (~(put by slex) word.incoming new-defs)))
          :~
            :*
              %give
              %fact
              ~[/updates]
              %lexicon-reaction
              !>(`reaction`[%voted space.incoming word.incoming id.incoming vote-type.incoming voter.incoming])
            ==
          ==
          ::
            %defs
          =/  sp  [(slav %p i.wire) i.t.wire]
          ?~  (~(get by lex) sp)
            `this(lex (~(put by lex) sp definitions.incoming))
          `this(lex (~(put by lex) sp definitions.incoming))
             :: probably should concanate the map, if some kind of subscription weirdness arises.
          ::
            %success
          :_  this
          :~
            [%give %fact ~[/updates] %lexicon-reaction !>(`reaction`[%success message.incoming])]
          ==
          ::
            %error
          :_  this
          :~
            [%give %fact ~[/updates] %lexicon-reaction !>(`reaction`[%error message.incoming])]
          ==
          ::
            %space-created
          :_  this
          :~
            [%give %fact ~[/updates] %lexicon-reaction !>(`reaction`[%space-created space.incoming])]
          ==
        ==
      ==
    ==
  ==
::
++  on-peek
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
    ::
    :: [%x %spaces %all ~]
    ::  =/  sps  .^(view:spaces-store %gx /(scot %p our.bowl)/spaces/(scot %da now.bowl)/all/spaces-view)
    ::  ``spaces-view+!>(sps)
    ::
    :: [%x %search @t ~]
    ::   =/  defs  ~(val by lex)
    ::   =/  match  (find `@t`i.t.t.path ~(key by defs))  
    ::   ``noun+!>(match)
      :: |-
      ::   %+  turn  defs
      ::   |=  [=word d=(list definition)]
      ::   ?:  
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
|_  [=bowl:gall cards=(list card)]
+*  core  .
    io    ~(. agentio bowl)
++  abet  [(flop cards) state]
++  emit  |=(=card core(cards [card cards]))
++  emil  |=(cadz=(list card) core(cards (weld cadz cards)))
::
++  create-or-follow
  |=  =space
  ^-  _core
  ?:  =(-.space our.bowl)
    core(lex (~(put by lex) space *definitions))
  =/  pite  /[(scot %p -.space)]/[+.space]
  (emit [%pass pite %agent [-.space %lexicon] %watch pite])
::
++  delete-or-leave
  |=  =space
  ^-  _core
  ?:  =(-.space our.bowl)
    core(lex (~(del by lex) space))
  =/  wire  /[(scot %p -.space)]/[+.space]
  (emit [%pass wire %agent [-.space %lexicon] %leave ~])
::
++  cof-many
  |=  spaces=(list space)
  ^-  _core
  ?~  spaces  core
  $(spaces t.spaces, core (create-or-follow:core i.spaces))
--
