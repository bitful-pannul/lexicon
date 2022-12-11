/-  *lexicon, membership, spaces-store
/+  default-agent, dbug, verb
|%
+$  state-0  [%0 =lexicon]
+$  card     card:agent:gall
--
%-  agent:dbug
%+  verb  &
=|  state-0
=*  state  -
=<
^-  agent:gall
|_  =bowl:gall
+*  this  .
    def   ~(. (default-agent this %|) bowl)
    hc    ~(. +> [bowl ~])
    cc    |=(cards=(list card) ~(. +> [bowl cards]))
::
++  on-init
  ^-  (quip card _this)
  ?.  has-spaces:hc  ~|("ERROR: Must have %spaces installed." !!)
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
    =/  home  /updates
    ?-    -.act
        %add-word
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      =/  entry  (new-entry:hc definitions sentences related):[act .]
      =/  rxn  `reaction`[%word-added space.act word.act entry]
      =/  cards
        :~  [%give %fact ~[home] lexicon-reaction+!>(rxn)]
            [%give %fact ~[away] lexicon-reaction+!>(rxn)]
        ==
      abet:(add-entry:(cc cards) space.act word.act entry)
      ::
        %add-def
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act) 
      =/  [=id def=[@t votes stamp]]  (wrap-text:hc def.act)
      =.  definitions.entry  (~(put by definitions.entry) id def)
      =.  dict  (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      =/  rxn  `reaction`[%def-added space.act word.act id def]
      :~  [%give %fact ~[home] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
      ==
      ::
        %add-sen
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act) 
      =/  [=id sen=[@t votes stamp]]  (wrap-text:hc sen.act)
      =.  sentences.entry  (~(put by sentences.entry) id sen)
      =.  dict  (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      =/  rxn  `reaction`[%sen-added space.act word.act id sen]
      :~  [%give %fact ~[home] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
      ==
      ::
        %add-rel
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act) 
      =/  [=id rel=[@t votes stamp]]  (wrap-text:hc rel.act)
      =.  related.entry  (~(put by related.entry) id rel)
      =.  dict  (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      =/  rxn  `reaction`[%rel-added space.act word.act id rel]
      :~  [%give %fact ~[home] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
      ==
      ::
        %vote-word
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act)
      =.  votes.entry
        ?~  vote.act
          (~(del by votes.entry) src.bowl)
        (~(put by votes.entry) src.bowl u.vote.act)
      =.  dict   (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      :~  [%give %fact ~[home] lexicon-reaction+!>(act)]
          [%give %fact ~[away] lexicon-reaction+!>(act)]
      ==
      ::
        %vote-def
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act)
      =/  def  (~(got by definitions.entry) id.act)
      =.  votes.def
        ?~  vote.act
          (~(del by votes.def) src.bowl)
        (~(put by votes.def) src.bowl u.vote.act)
      =.  definitions.entry   (~(put by definitions.entry) id.act def)
      =.  dict    (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      :~  [%give %fact ~[home] lexicon-reaction+!>(act)]
          [%give %fact ~[away] lexicon-reaction+!>(act)]
      ==
      ::
        %vote-rel
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act)
      =/  def  (~(got by related.entry) id.act)
      =.  votes.def
        ?~  vote.act
          (~(del by votes.def) src.bowl)
        (~(put by votes.def) src.bowl u.vote.act)
      =.  related.entry   (~(put by related.entry) id.act def)
      =.  dict    (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      :~  [%give %fact ~[home] lexicon-reaction+!>(act)]
          [%give %fact ~[away] lexicon-reaction+!>(act)]
      ==
      ::
        %vote-sen
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act)
      =/  def  (~(got by sentences.entry) id.act)
      =.  votes.def
        ?~  vote.act
          (~(del by votes.def) src.bowl)
        (~(put by votes.def) src.bowl u.vote.act)
      =.  sentences.entry   (~(put by sentences.entry) id.act def)
      =.  dict    (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      :~  [%give %fact ~[home] lexicon-reaction+!>(act)]
          [%give %fact ~[away] lexicon-reaction+!>(act)]
      ==
    ==
  --
::
++  on-watch    
  |=  =path
  ^-  (quip card _this)
  ?+    path  (on-watch:def path)
      [@t @t ~]
    =/  space  (de-path path)
    =/  dict  (~(got by lexicon) space)
    =/  rxn  `reaction`[%dictionary dict]
    :_(this [%give %fact ~ lexicon-reaction+!>(rxn)]~)
    ::
      [%updates ~]
    :_(this [%give %fact ~ lexicon-reaction+!>(`reaction`[%lexicon lexicon])]~)
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
        %.  `this
        %-  slog
        :_  ~  
        leaf+"%lexicon-client: joining /{<i.wire>}/{<i.t.wire>} succeeded!"
      %.  `this
      %-  slog
      :_  u.p.sign
      leaf+"%lexicon-client: joining /{<i.wire>}/{<i.t.wire>} failed!"
    ::
        %kick
      ~&  "{<dap.bowl>}: got kick, resubscribing..."
      :_(this [%pass wire %agent [src.bowl dap.bowl] %watch wire]~)
    ::
        %fact
      =/  home  /updates
      =/  away  wire
      =/  path  (de-path wire) :: space-path from wire
      ?+    p.cage.sign  (on-agent:def wire sign)
          %lexicon-reaction
        =/  rxn  !<(reaction q.cage.sign)
        ?-    -.rxn
            %word-added  !!
            %def-added  !!
            %sen-added  !!
            %rel-added  !!
            %vote-word  !!
            %vote-def  !!
            %vote-sen  !!
            %vote-rel  !!
            %dictionary  !!
            %lexicon  !!
        == 
      ==
    ==
  ==
::
++  on-peek
  |=  =path
  ^-  (unit (unit cage))
  ?+    path  (on-peek:def path)
    [%x %dictionary %all ~]  ``lexicon+!>(lexicon)
      ::
      [%x %dictionary @t @t ~]
      =/  path  (de-path:hc t.t.path)
      =/  dict  (~(got by lexicon) path)
      ``view+!>([%dictionary dict])
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
++  en-path  |=(=space /[(scot %p -.space)]/[+.space])
++  de-path
  |=  path=[i=@ta t=[i=@ta t=~]]
  ^-  space
  [(slav %p i.path) i.t.path]
::
++  create-or-follow
  |=  =space
  ^-  _core
  ?:  =(-.space our.bowl)
    core(lexicon (~(put by lexicon) space *dictionary))
  =/  pite  /[(scot %p -.space)]/[+.space]
  (emit [%pass pite %agent [-.space %lexicon] %watch pite])
::
++  delete-or-leave
  |=  =space
  ^-  _core
  ?:  =(-.space our.bowl)
    core(lexicon (~(del by lexicon) space))
  =/  wire  /[(scot %p -.space)]/[+.space]
  (emit [%pass wire %agent [-.space %lexicon] %leave ~])
::
++  cof-many
  |=  spaces=(list space)
  ^-  _core
  ?~  spaces  core
  $(spaces t.spaces, core (create-or-follow:core i.spaces))
::
++  wrap-text
  |=  =@t
  ^-  [id @t votes stamp]
  =/  stamp  [src now]:bowl
  =/  =id  (sham [t stamp])
  [id t *votes stamp]
::
++  add-entry
  |=  [=space =word =entry]
  ^-  _core
  =/  dict   (~(gut by lexicon) space *dictionary)
  ?:  (~(has by dict) word)
    ~|("'{(trip word)}' already exists in dict." !!)
  =.  dict   (~(put by dict) word entry)
  core(lexicon (~(put by lexicon) space dict))
:: ::
++  new-entry
  |=  [def=(list @t) sen=(list @t) rel=(list @t)]
  ^-  entry
  =|  =entry
  %=  entry
    definitions  (~(gas by *definitions) (turn def wrap-text))
    sentences    (~(gas by *sentences) (turn sen wrap-text))
    related      (~(gas by *related) (turn rel wrap-text))
    stamp        [src now]:bowl
  ==
::
++  relay
  |=  [=ship =action]
  :_  state
  [%pass / %agent [ship dap.bowl] %poke lexicon-action+!>(action)]~
::
++  sour  (scot %p our.bowl)
++  snow  (scot %da now.bowl)
++  has-spaces  .^(? %gu /[sour]/spaces/[snow])
--
