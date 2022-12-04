/-  *lexicon
/+  default-agent, dbug, verb, agentio, lexlib
|%
+$  card  card:agent:gall
+$  state-0
  $:  %0
      lex=lexicon
      =whitelist
  ==
--
::
%-  agent:dbug
%+  verb  &
::
=|  state-0
=*  state  -
=<
^-  agent:gall
|_  =bowl:gall
+*  this  .
    def   ~(. (default-agent this %|) bowl)
    io    ~(. agentio bowl)
    hc    ~(. +> bowl)
::
++  on-init
  ^-  (quip card _this)
  =/  intro-def
    :*  id=(sham [our.bowl 'our'])
        def='lexicon is a dictionary for your own space & others'
        poster=src.bowl
        posted=now.bowl
        sentence=~['based? ..based on what? just look it up on %lexicon']
        related=~['urban dictionary' 'gloss']
        upvotes=*(set @p)
        downvotes=*(set @p)
    ==
  :-  ~
  %=  this
    lex
      %+  ~(put by *lexicon)
        [our.bowl 'our']
      (~(put by *definitions) 'lexicon' ~[intro-def])
    whitelist
      %+  ~(put by whitelist)
        [our.bowl 'our']
      [%public (~(put in *members) our.bowl)]
  ==
::
++  on-save  !>(state)
::
++  on-load
  |=  ole=vase
  ^-  (quip card _this)
  =/  old=state-0  !<(state-0 ole)
  [~ this(state old)]
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
  ++  handle-poke  
    |=  act=action
    ^-  (quip card _state) 
    =/  hom  ~[/updates]
    ?-    -.act
        %add
      =/  way  ~[/[(scot %p -.space.act)]/[+.space.act]]
      =*  poke-other  ~(poke-other pass:hc -.way)
      =/  def
        :*  id=(sham [def.act src.bowl sentence.act related.act])
            def=def.act
            poster=src.bowl
            posted=now.bowl 
            sentence=sentence.act
            related=related.act
            upvotes=*(set @p)
            downvotes=*(set @p)
        ==
      ?.  =(-.space.act our.bowl)
        :_(state ~[(poke-other -.space.act lexicon-action+!>(act))])
      =/  rxn  `reaction`[%def-added space.act word.act def]
      :-  :~  (fact:io lexicon-reaction+!>(rxn) hom)
              (fact:io lexicon-reaction+!>(rxn) way)
          ==
      ?~  defs=(~(get by lex) space.act)
        ?>  =(src.bowl our.bowl)
        =/  new-defs  (~(put by *definitions) word.act ~[def])
        state(lex (~(put by lex) space.act new-defs))
      =/  dufs  (weld (~(gut by u.defs) word.act ~) ~[def])
      =/  new-defs  (~(put by *definitions) word.act dufs)
      state(lex (~(put by lex) space.act new-defs))
      ::
        %delete
      =/  way  ~[/[(scot %p -.space.act)]/[+.space.act]]
      =*  poke-other  ~(poke-other pass:hc -.way)
      =/  defs  (~(got by lex) space.act)
      =/  def-list  (~(got by defs) word.act)
      =/  index 
        %-  need
        %+  find
          ~[id.act]
        %+  turn
          def-list
        |=(a=definition id.a)
      =/  def  (snag index def-list)
      ?>  =(src.bowl poster.def)
      ?.  =(-.space.act our.bowl)
        :_(state ~[(poke-other -.space.act lexicon-action+!>(act))])
      =/  new-list  (oust [index 1] def-list)
      =/  new-defs  (~(put by defs) word.act new-list)
      :_  state(lex (~(put by lex) space.act new-defs))
      =/  rxn  `reaction`[%def-deleted [space word id]:act]
      :~  (fact:io lexicon-reaction+!>(rxn) hom)
          (fact:io lexicon-reaction+!>(rxn) way)
      ==
      ::
         %vote
      =/  way  ~[/[(scot %p -.space.act)]/[+.space.act]]
      =*  poke-other  ~(poke-other pass:hc -.way)
      =/  slex  (~(got by lex) space.act)
      =/  def-list  (~(gut by slex) word.act ~)
      =/  index
        %-  need
        %+  find
          ~[id.act]
        %+  turn
          def-list
        |=(a=definition id.a)
      =/  def  (snag index def-list)
      ?.  =(-.space.act our.bowl)
        :_(state ~[(poke-other -.space.act lexicon-action+!>(act))])
      =/  new-def
      ?:  =(vote-type.act %upvotes)
          def(upvotes (~(put in upvotes.def) src.bowl))
        def(downvotes (~(put in downvotes.def) src.bowl))
      =/  new-defs  (snap def-list index new-def)
      =/  new-slex  (~(put by slex) word.act new-defs)
      :_  state(lex (~(put by lex) space.act new-slex))
      =/  rxn
        ^-  reaction
        [%voted space word id vote-type src.bowl]:[act .]
      :~  (fact:io lexicon-reaction+!>(rxn) hom)
          (fact:io lexicon-reaction+!>(rxn) way)
      ==
      ::
        %create-space
      ?>  =(-.space.act our.bowl)
      =/  rxn
        ^-  reaction
        :-  %whitelist-added
        %+  ~(put by *^whitelist)
          space.act
        [perms.act members.act]
      :-  [(fact:io lexicon-reaction+!>(rxn) hom)]~
      %=  state
        lex  (~(put by lex) space.act *definitions)
        whitelist
          %+  ~(put by whitelist)
            space.act
          [perms.act members.act]
      ==
      ::
        %add-whitelist
      ?>  =(-.space.act our.bowl)
      =/  info  (~(got by whitelist) space.act)
      =/  new-mems  (~(put in members.info) member.act)
      :-  =/  rxn
            ^-  reaction
            [%success "added {<member.act>} to: {<space.act>}"]
          [(fact:io lexicon-reaction+!>(rxn) hom)]~
      %=  state
        whitelist
          %+  ~(put by whitelist)
            space.act
          [perms.info new-mems]
      ==
      ::
        %remove-whitelist
      ?>  =(-.space.act our.bowl)
      =/  info  (~(got by whitelist) space.act)
      =/  new-mems  (~(del in members.info) member.act)
      :-  =/  rxn
            ^-  reaction
            [%success "removed {<member.act>} from: {<space.act>}"]
          [(fact:io lexicon-reaction+!>(rxn) hom)]~
      %=  state
        whitelist
          %+  ~(put by whitelist)
            space.act
          [perms.info new-mems]
      ==
      ::
      :: this needs to be called before interacting with a spaces' lexicon. 
        %join-space
      =/  way  ~[/[(scot %p -.space.act)]/[+.space.act]]
      =*  watch-other  ~(watch-other pass:hc -.way)
      :_(state [(watch-other -.space.act -.way)]~)
      ::
        %leave-space
      =/  way  ~[/[(scot %p -.space.act)]/[+.space.act]]
      =*  leave-other  ~(leave-other pass:hc -.way)
      :_(state ~[(leave-other -.space.act)])
    ==
  --
::
++  on-watch    
  |=  =path
  ^-  (quip card _this)
  ?+  path  (on-watch:def path)
    [@t @t ~]
      ?>  |(=(our.bowl src.bowl) =(our.bowl (slav %p i.path)))
      =/  sp  [(slav %p i.path) i.t.path]
      =/  info  (~(got by whitelist) sp)
      ?:  ?&  =(perms.info %private)
              !(~(has in members.info) src.bowl)
          ==
        =/  msg  "you do not have the permissions to join: {<sp>}"
        =/  rxn  `reaction`[%error msg]
        :_(this [(fact:io lexicon-reaction+!>(rxn) ~)]~)
      =/  defs  (need (~(get by lex) sp))
      =/  def-rxn  `reaction`[%defs sp defs]
      =/  ses-rxn  `reaction`[%success "successfully joined: {<sp>} "]
      :_  this
      :~  (fact:io lexicon-reaction+!>(def-rxn) ~)
          (fact:io lexicon-reaction+!>(ses-rxn) ~)
      ==
    ::
    [%updates ~]
      :_  this
      :~  (fact:io lexicon-reaction+!>(`reaction`[%lex lex]) ~)
          (fact:io lexicon-reaction+!>(`reaction`[%whiteliste whitelist]) ~)
      ==
  ==
 ::
++  on-agent  
  |=  [=wire =sign:agent:gall]
  ^-  (quip card _this)
  ?+    wire  (on-agent:def wire sign)
      [@t @t ~]
    ?+    -.sign  (on-agent:def wire sign)
        %watch-ack
      ?~  p.sign
        =/  tang
          :_  ~
          :-  %leaf
          "%lexicon-client: joining /{<i.wire>}/{<i.t.wire>} succeeded!"
        ((slog tang) `this)
      =/  tang
        :_  u.p.sign
        :-  %leaf
        "%lexicon-client: joining /{<i.wire>}/{<i.t.wire>} failed!"
      ((slog tang) `this)
    ::
        %kick
      =*  watch-other  ~(watch-other pass:hc wire)
      :_  this
      [(watch-other src.bowl wire)]~
    ::
        %fact
      =/  hom  ~[/updates]  :: home updates to frontend
      =/  way  ~[wire]
      =/  sp  [(slav %p i.wire) i.t.wire]
      ?+    p.cage.sign  (on-agent:def wire sign)
          %lexicon-reaction
        =/  incoming  !<(reaction q.cage.sign)
        ?+  -.incoming  (on-agent:def wire sign)
            %def-added
          ?~  sdefs=(~(get by lex) sp)
            =/  new-defs
              (~(put by *definitions) word.incoming ~[def.incoming])
            `this(lex (~(put by lex) sp new-defs))
          =/  dufs  (weld (~(gut by u.sdefs) word.incoming ~) ~[def.incoming])
          =/  new-defs  (~(put by u.sdefs) word.incoming dufs)
          =/  rxn  `reaction`[%def-added sp word.incoming def.incoming]
          :_  this(lex (~(put by lex) sp new-defs))
          [(fact:io lexicon-reaction+!>(rxn) hom)]~
          ::
            %def-deleted
          =/  sdefs  (~(got by lex) sp)
          =/  def-list  (~(got by sdefs) word.incoming)
          =/  index
            %-  need
            %+  find
              ~[id.incoming]
            (turn def-list |=(a=definition id.a))
          =/  new-list  (oust [index 1] def-list) 
          =/  new-defs  (~(put by sdefs) word.incoming new-list)
          =/  rxn
            ^-  reaction
            [%def-deleted space.incoming word.incoming id.incoming]
          :_  this(lex (~(put by lex) sp new-defs))
          [(fact:io lexicon-reaction+!>(rxn) hom)]~
          ::
            %voted
          =/  slex  (~(got by lex) space.incoming)
          =/  def-list  (fall (~(get by slex) word.incoming) ~)
          =/  index  
            %-  need
            %+  find
              ~[id.incoming]
            (turn def-list |=(a=definition id.a))
          =/  def  (snag index def-list)
          =/  new-def
            ?:  =(vote-type.incoming %upvotes)
                def(upvotes (~(put in upvotes.def) voter.incoming))
                def(downvotes (~(put in downvotes.def) voter.incoming))
          =/  def-list  (snap def-list index new-def)
          =/  new-defs  (~(put by slex) word.incoming def-list)
          =/  rxn
            `reaction`[%voted [space word id vote-type voter]:incoming]
          :_  this(lex (~(put by lex) space.incoming new-defs))
          [(fact:io lexicon-reaction+!>(rxn) hom)]~
          ::
            %defs
          ?~  (~(get by lex) sp)
            `this(lex (~(put by lex) sp definitions.incoming))
          `this(lex (~(put by lex) sp definitions.incoming))
          ::
            %success
          =/  rxn  `reaction`[%success message.incoming]
          :_(this [(fact:io lexicon-reaction+!>(rxn) hom)]~)
          ::
            %error
          =/  rxn  `reaction`[%error message.incoming]
          :_(this [(fact:io lexicon-reaction+!>(rxn) hom)]~)
          ::
            %whitelist-added
          =/  rxn  `reaction`[%whitelist-added whitelist.incoming]
          :_(this [(fact:io lexicon-reaction+!>(rxn) hom)]~)
        ==
      ==
    ==
  ==
::
++  on-peek
  |=  =path
  ^-  (unit (unit cage))
  ?+    path  (on-peek:def path)
    :: 
    :: return entire lexicon
    [%x %definitions %all ~]  ``lexicon+!>(lex)
      ::
      :: get all definitions from a space
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
|_  =bowl:gall
+*  io    ~(. agentio bowl)
::
++  pass
  |_  =wire
  ++  poke-other
    |=  [other=@p =cage]
    ^-  card
    (~(poke pass:io wire) [other dap.bowl] cage)
  ::
  ++  watch-other
    |=  [other=@p =path]
    ^-  card
    (~(watch pass:io wire) [other dap.bowl] path)
  ::
  ++  leave-other
    |=  other=@p
    ^-  card
    (~(leave pass:io wire) other dap.bowl)
  ::
  ++  watchif-our
    |=  [app=term =path]
    ^-  (unit card)
    ?:  (~(has by wex.bowl) [path our.bowl app])  ~
    (some (~(watch-our pass:io wire) app path))
  --
--
