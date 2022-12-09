/-  sur=lexicon
/+  lib=lexicon, default-agent, dbug, verb, agentio
|%
+$  card  card:agent:gall
+$  state-0  [%0 lex=lexicon:sur]
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
    hc    ~(. +> [bowl ~])
    cc    |=(cards=(list card) ~(. +> [bowl cards]))
::
++  on-init
  ^-  (quip card _this)
  ?.  has-spaces:hc  ~|("ERROR: Must have %spaces installed." !!)
  :_  this
  [(~(watch-our pass:io /spaces) %spaces /updates)]~
::
++  on-save  !>(state)
::
++  on-load
  |=  ole=vase
  ^-  (quip card _this)
  =/  old=state-0  !<(state-0 ole)
  :_  this(state old)
  [(~(watch-our pass:io /spaces) %spaces /updates)]~
::
++  on-poke
  |=  [=mark =vase]
  ^-  (quip card _this)
  |^
  ?+    mark  (on-poke:def mark vase)
      %lexicon-action
    =^  cards  state
      (handle-poke !<(action:sur vase))
    [cards this]
  ==
  ++  handle-poke  
    |=  act=action:sur
    ^-  (quip card _state) 
    =/  home  /updates
    ?-    -.act
        %add
      =/  away  (en-path:hc path.act)
      =*  poke-other  ~(poke-other pass:hc away)
      ?.  =(ship.path.act our.bowl)
        :_(state ~[(poke-other ship.path.act lexicon-action+!>(act))])
      =/  entry
        (new-entry:hc ~[definition] sentences related bowl):[act .]
      =/  rxn  `reaction:sur`[%entry-added path.act word.act entry]
      =/  cards
        :~  (fact:io lexicon-reaction+!>(rxn) ~[home])
            (fact:io lexicon-reaction+!>(rxn) ~[away])
        ==
      abet:(add-entry:(cc cards) path.act word.act entry)
      ::
         %vote
      =/  away  (en-path path.act)
      =*  poke-other  ~(poke-other pass:hc away)
      ?.  =(ship.path.act our.bowl)
        :_(state ~[(poke-other ship.path.act lexicon-action+!>(act))])
      =/  dict  (~(got by lex) path.act)
      =/  entries  (~(got by dict) word.act)
      =/  entry  (~(got by entries) id.act)
      =.  entry  
        ?-    vote-type.act
            %upvotes
          entry(upvotes (~(put in upvotes.entry) src.bowl))
            %downvotes
          entry(downvotes (~(put in downvotes.entry) src.bowl))
        ==
      =.  entries  (~(put by entries) id.act entry)
      =.  dict  (~(put by dict) word.act entries)
      :_  state(lex (~(put by lex) path.act dict))
      =/  rxn
        ^-  reaction:sur
        [%voted path word id vote-type src.bowl]:[act .]
      :~  (fact:io lexicon-reaction+!>(rxn) ~[home])
          (fact:io lexicon-reaction+!>(rxn) ~[away])
      ==
    ==
  --
::
++  on-watch    
  |=  =path
  ^-  (quip card _this)
  ?+  path  (on-watch:def path)
    [@t @t ~]
      =/  path  (de-path path) :: path to space-path
      =/  dict  (~(got by lex) path)
      =/  rxn  `reaction:sur`[%dict path dict]
      :_(this [(fact:io lexicon-reaction+!>(rxn) ~)]~)
    ::
    [%updates ~]
      :_  this
      [(fact:io lexicon-reaction+!>(`reaction:sur`[%lex lex]) ~)]~
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
      =*  watch-other  ~(watch-other pass:hc wire)
      :_(this [(watch-other src.bowl wire)]~)
      ::
        %fact
      ?.  =(p.cage.sign %spaces-reaction)  (on-agent:def wire sign)
      =/  rxn  !<(spaces-reaction:sur q.cage.sign)
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
      :_(this [(watch-other src.bowl wire)]~)
    ::
        %fact
      =/  home  /updates  :: home updates to frontend
      =/  away  wire
      =/  path  (de-path wire)
      ?+    p.cage.sign  (on-agent:def wire sign)
          %lexicon-reaction
        =/  rxn  !<(reaction:sur q.cage.sign)
        ?+  -.rxn  (on-agent:def wire sign)
            %entry-added
          ?~  udict=(~(get by lex) path)
            =/  dict
              %+  ~(put by *dictionary:sur)  word.rxn
              (~(put by *entries:sur) id.entry.rxn entry.rxn)
            `this(lex (~(put by lex) path dict))
          =/  dict
            %+  ~(put by u.udict)  word.rxn
            %+  ~(put by (~(gut by u.udict) word.rxn *entries:sur))
              id.entry.rxn
            entry.rxn
          =/  rxn  `reaction:sur`[%entry-added path word.rxn entry.rxn]
          :_  this(lex (~(put by lex) path dict))
          [(fact:io lexicon-reaction+!>(rxn) ~[home])]~
          ::
            %voted
          =/  dict  (~(got by lex) path.rxn)
          =/  entries  (~(got by dict) word.rxn)
          =/  entry  (~(got by entries) id.rxn)
          =.  entry
            ?-    vote-type.rxn
                %upvotes
              entry(upvotes (~(put in upvotes.entry) voter.rxn))
                %downvotes
              entry(downvotes (~(put in downvotes.entry) voter.rxn))
            ==
          =.  entries  (~(put by entries) id.entry entry)
          =.  dict  (~(put by dict) word.rxn entries)
          :_  this(lex (~(put by lex) path.rxn dict))
          =/  rxn
            `reaction:sur`[%voted [path word id vote-type voter]:rxn]
          [(fact:io lexicon-reaction+!>(rxn) ~[home])]~
          ::
            %dict
          `this(lex (~(put by lex) path dictionary.rxn))
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
    [%x %dictionary %all ~]  ``lexicon+!>(lex)
      ::
      :: get dictionary from a space
      [%x %dictionary @t @t ~]
    =/  path  (de-path t.t.path)
    =/  sdefs  (~(got by lex) path)
    ``dictionary+!>(sdefs)
  ==
::
++  on-arvo   on-arvo:def
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
++  en-path  |=(=path:sur /[(scot %p ship.path)]/[space.path])
++  de-path
  |=  path=[i=@ta t=[i=@ta t=~]]
  ^-  path:sur
  [(slav %p i.path) i.t.path]
::
++  create-or-follow
  |=  =path:sur
  ^-  _core
  ?:  =(ship.path our.bowl)
    core(lex (~(put by lex) path *dictionary:sur))
  =/  pite  (en-path path)
  (emit (~(watch-other pass pite) ship.path pite))
::
++  delete-or-leave
  |=  =path:sur
  ^-  _core
  ?:  =(ship.path our.bowl)
    core(lex (~(del by lex) path))
  (emit (~(leave-other pass (en-path path)) ship.path))
::
++  cof-many
  |=  paths=(list path:sur)
  ^-  _core
  ?~  paths  core
  $(paths t.paths, core (create-or-follow:core i.paths))
::
++  add-entry
  |=  [=path:sur =word:sur =entry:sur]
  ^-  _core
  =/  dict  (~(gut by lex) path *dictionary:sur)
  =/  entries  (~(got by dict) word)
  =.  entries  (~(put by entries) id.entry entry)
  =.  dict  (~(put by dict) word entries)
  core(lex (~(put by lex) path dict))
::
++  new-entry
  |=  [def=(list @t) sen=(list @t) rel=(list @t) =bowl:gall]
  ^-  entry:sur
  =|  =entry:sur
  %=  entry
    id           (sham [def src.bowl sen rel])
    poster       src.bowl
    posted       now.bowl 
    definitions  def
    sentences    sen
    related      rel
  ==
::
++  sour  (scot %p our.bowl)
++  snow  (scot %da now.bowl)
++  has-spaces  .^(? %gu /[sour]/spaces/[snow])
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
  --
--
