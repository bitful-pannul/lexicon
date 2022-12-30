/-  *lexicon, mem=membership, spaces-store
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
  =.  state  old
  =/  remote-spaces
    %+  murn
      ~(tap in ~(key by lexicon))
    |=(=space ?:(=(-.space our.bowl) ~ (some space)))
  =^  cards  state  abet:(leave-many:hc remote-spaces)
  =/  axn  [%follow-many remote-spaces]
  :_  this
  %+  welp  cards
  [%pass / %agent [our dap]:bowl %poke lexicon-action+!>(axn)]~
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
        %follow-many
      =^  cards  state  abet:(follow-many:hc spaces.act)
      [cards state]
      ::
        %add-word
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      ?>  (is-member:hc space.act src.bowl)
      ?<  ?|  =('' word.act)
              %+  levy
                definitions.act
              |=  def=@t
              =('' def)
          ==
      =/  entry  (new-entry:hc definitions sentences related):[act .]
      =/  dict   (~(gut by lexicon) space.act *dictionary)
      ?:  (~(has by dict) word.act)
        ~|("'{(trip word.act)}' already exists in dict." !!)
      =.  dict   (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      =/  rxn  `reaction`[%word-added space.act word.act entry]
      :~  [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
      ==
      ::
        %del-word
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      ?>  (is-admin:hc space.act src.bowl)
      =/  dict  (~(got by lexicon) space.act)
      =.  dict  (~(del by dict) word.act)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      =/  rxn  `reaction`[%word-deleted space.act word.act]
      :~  [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
      ==
      ::
        %add-def
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      ?>  (is-member:hc space.act src.bowl)
      ?<  =('' def.act)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act) 
      =/  [=id def=[@t votes stamp]]  (wrap-text:hc def.act)
      =.  definitions.entry  (~(put by definitions.entry) id def)
      =.  dict  (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      =/  rxn  `reaction`[%def-added space.act word.act entry]
      :~  [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
      ==
      ::
        %add-sen
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      ?>  (is-member:hc space.act src.bowl)
      ?<  =('' sen.act)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act) 
      =/  [=id sen=[@t votes stamp]]  (wrap-text:hc sen.act)
      =.  sentences.entry  (~(put by sentences.entry) id sen)
      =.  dict  (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      =/  rxn  `reaction`[%sen-added space.act word.act entry]
      :~  [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
      ==
      ::
        %add-rel
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      ?>  (is-member:hc space.act src.bowl)
      ?<  =('' rel.act)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act) 
      =/  [=id rel=[@t votes stamp]]  (wrap-text:hc rel.act)
      =.  related.entry  (~(put by related.entry) id rel)
      =.  dict  (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      =/  rxn  `reaction`[%rel-added space.act word.act entry]
      :~  [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
      ==
      ::
        %vote-word
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      ?>  (is-member:hc space.act src.bowl)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act)
      =.  votes.entry
        ?~  vote.act
          (~(del by votes.entry) src.bowl)
        (~(put by votes.entry) src.bowl u.vote.act)
      =.  dict   (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      =/  rxn  `reaction`[%word-voted [space word votes.entry]:[act .]]
      :~  [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
      ==
      ::
        %vote-def
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      ?>  (is-member:hc space.act src.bowl)
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
      =/  rxn  `reaction`[%def-voted [space word id votes.def]:[act .]]
      :~  [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
      ==
      ::
        %vote-rel
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      ?>  (is-member:hc space.act src.bowl)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act)
      =/  rel  (~(got by related.entry) id.act)
      =.  votes.rel
        ?~  vote.act
          (~(del by votes.rel) src.bowl)
        (~(put by votes.rel) src.bowl u.vote.act)
      =.  related.entry   (~(put by related.entry) id.act rel)
      =.  dict    (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      =/  rxn  `reaction`[%rel-voted [space word id votes.rel]:[act .]]
      :~  [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
      ==
      ::
        %vote-sen
      =/  away  (en-path:hc space.act)
      ?.  =(ship.space.act our.bowl)  (relay:hc ship.space.act act)
      ?>  (is-member:hc space.act src.bowl)
      =/  dict   (~(got by lexicon) space.act)
      =/  entry  (~(got by dict) word.act)
      =/  sen  (~(got by sentences.entry) id.act)
      =.  votes.sen
        ?~  vote.act
          (~(del by votes.sen) src.bowl)
        (~(put by votes.sen) src.bowl u.vote.act)
      =.  sentences.entry   (~(put by sentences.entry) id.act sen)
      =.  dict    (~(put by dict) word.act entry)
      :_  state(lexicon (~(put by lexicon) space.act dict))
      =/  rxn  `reaction`[%sen-voted [space word id votes.sen]:[act .]]
      :~  [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]
          [%give %fact ~[away] lexicon-reaction+!>(rxn)]
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
      ?+    p.cage.sign  `this
          %spaces-reaction
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
      =/  away  wire
      =/  space  (de-path wire) :: space-path from wire
      ?+    p.cage.sign  (on-agent:def wire sign)
          %lexicon-reaction
        =/  rxn  !<(reaction q.cage.sign)
        ?+    -.rxn  (on-agent:def wire sign)
            %dictionary
          `this(lexicon (~(put by lexicon) space dictionary.rxn))
            %word-added
          =/  dict  (~(got by lexicon) space)
          =.  dict  (~(put by dict) word.rxn entry.rxn)
          :_  this(lexicon (~(put by lexicon) space dict))
          [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]~
          ::
            %word-deleted
          =/  dict  (~(got by lexicon) space)
          =.  dict  (~(del by dict) word.rxn)
          :_  this(lexicon (~(put by lexicon) space dict))
          [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]~
          ::
            %def-added
          =/  dict   (~(got by lexicon) space)
          =.  dict  (~(put by dict) word.rxn entry.rxn)
          :_  this(lexicon (~(put by lexicon) space dict))
          [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]~
          ::
            %sen-added
          =/  dict   (~(got by lexicon) space)
          =.  dict  (~(put by dict) word.rxn entry.rxn)
          :_  this(lexicon (~(put by lexicon) space dict))
          [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]~
          ::
            %rel-added
          =/  dict   (~(got by lexicon) space)
          =.  dict  (~(put by dict) word.rxn entry.rxn)
          :_  this(lexicon (~(put by lexicon) space dict))
          [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]~
          ::
            %word-voted
          =/  dict   (~(got by lexicon) space)
          =/  entry  (~(got by dict) word.rxn)
          =.  votes.entry  votes.rxn
          =.  dict   (~(put by dict) word.rxn entry)
          :_  this(lexicon (~(put by lexicon) space dict))
          [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]~
          ::
            %def-voted
          =/  dict   (~(got by lexicon) space)
          =/  entry  (~(got by dict) word.rxn)
          =/  def  (~(got by definitions.entry) id.rxn)
          =.  votes.def  votes.rxn
          =.  definitions.entry   (~(put by definitions.entry) id.rxn def)
          =.  dict  (~(put by dict) word.rxn entry)
          :_  this(lexicon (~(put by lexicon) space dict))
          [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]~
          ::
            %sen-voted
          =/  dict   (~(got by lexicon) space)
          =/  entry  (~(got by dict) word.rxn)
          =/  sen  (~(got by sentences.entry) id.rxn)
          =.  votes.sen  votes.rxn
          =.  sentences.entry   (~(put by sentences.entry) id.rxn sen)
          =.  dict  (~(put by dict) word.rxn entry)
          :_  this(lexicon (~(put by lexicon) space dict))
          [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]~
          ::
            %rel-voted
          =/  dict   (~(got by lexicon) space)
          =/  entry  (~(got by dict) word.rxn)
          =/  rel  (~(got by related.entry) id.rxn)
          =.  votes.rel  votes.rxn
          =.  related.entry   (~(put by related.entry) id.rxn rel)
          =.  dict  (~(put by dict) word.rxn entry)
          :_  this(lexicon (~(put by lexicon) space dict))
          [%give %fact ~[/updates] lexicon-reaction+!>(rxn)]~
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
      [%x %am-admin @t @t ~]
    =/  space  (de-path:hc t.t.path)
    ``lexicon-view+!>([%am-admin (is-admin:hc space our.bowl)])
    ::
      [%x %dictionary @t @t ~]
    =/  space  (de-path:hc t.t.path)
    =/  dict  (~(got by lexicon) space)
    ``lexicon-view+!>([%dictionary dict])
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
++  create-space
  |=  =space
  ^-  _core
  ?>  =(-.space our.bowl)
  ?:  (~(has by lexicon) space)  core
  =.  lexicon  (~(put by lexicon) space *dictionary)
  =/  rxn  [%add-dict space *dictionary]
  (emit %give %fact ~[/updates] lexicon-reaction+!>(rxn))
::
++  follow-space
  |=  =space
  ^-  _core
  ?<  =(-.space our.bowl)
  =/  pite  /[(scot %p -.space)]/[+.space]
  (emit [%pass pite %agent [-.space %lexicon] %watch pite])
::
++  create-or-follow
  |=  =space
  ^-  _core
  ?:  =(-.space our.bowl)
    (create-space space)
  (follow-space space)
::
++  delete-space
  |=  =space
  ^-  _core
  ?>  =(-.space our.bowl)
  ?.  (~(has by lexicon) space)  core
  =.  lexicon  (~(del by lexicon) space)
  =/  rxn  [%del-dict space]
  (emit %give %fact ~[/updates] lexicon-reaction+!>(rxn))
::
++  leave-space
  |=  =space
  ^-  _core
  ?<  =(-.space our.bowl)
  =/  wire  /[(scot %p -.space)]/[+.space]
  (emit [%pass wire %agent [-.space %lexicon] %leave ~])
::
++  delete-or-leave
  |=  =space
  ^-  _core
  ?:  =(-.space our.bowl)
    (delete-space space)
  (leave-space space)
::
++  follow-many
  |=  spaces=(list space)
  ^-  _core
  ?~  spaces  core
  $(spaces t.spaces, core (follow-space:core i.spaces))
::
++  leave-many
  |=  spaces=(list space)
  ^-  _core
  ?~  spaces  core
  $(spaces t.spaces, core (leave-space:core i.spaces))
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
++  is-member
  |=  [=space =ship]
  ^-  ?
  =/  ship  (scot %p ship)
  =/  host  (scot %p -.space)
  =/  view 
    .^(view:mem %gx /[sour]/spaces/[snow]/[host]/[+.space]/is-member/[ship]/membership-view)
  ?+  -.view  !!
    %is-member  is-member.view
  ==
++  got-member
  |=  [=space =ship]
  ^-  member:mem
  =/  ship  (scot %p ship)
  =/  host  (scot %p -.space)
  =/  view 
    .^(view:mem %gx /[sour]/spaces/[snow]/[host]/[+.space]/members/[ship]/membership-view)
  ?+  -.view  !!
    %member  member.view
  ==
++  is-admin
  |=  [=space =ship]
  ^-  ?
  =/  =member:mem  (got-member space ship)
  (~(has in roles.member) %admin)
--
