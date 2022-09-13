::  
/-  *lexicon 
/+  default-agent, dbug, lexlib
::
::
::
::
|%
+$  state-0
  $:  %0
      lex=lexicon 
      :: subscription tracking too
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
::
=<
|_  =bowl:gall
+*  this  .
    lc-core  +>
    lc    ~(. lc bowl)
    def   ~(. (default-agent this %|) bowl)
::
++  on-init
  ^-  (quip card _this)
  :_  this
  :: [%pass /eyre/connect %arvo %e %connect [~ /[dap.bowl]] dap.bowl]~
  ~
::
++  on-save  !>(state)
::
::
++  on-load
  |=  old=vase
  ^-  (quip card _this)
  =/  old=(unit state-0)  (mule |.(!<(state-0 old)))
  ?~  old  `this
  [~ this(state u.old)]
::
:: TODO: add on-poke todos
:: separate gate getting specific lists/maps
:: separate gate modifying specific lists/maps
:: TODO: add create SPACE thing.
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
    ?-  -.act
        %add
      =^  cards  state  (on-def:lc sp +.incoming)
      [cards this]
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
      ::
      ::  =/  def-list  (get-list:lexlib [lex path.act word.act])
      ::
    ::
       %upvote
       !!
    ::
       %downvote
       !!
       %sub
         :_  state  :: change back to "this" when actually doing something
         :~  [%pass /[(scot %p -.space.act)]/[+.space.act] %agent [-.space.act %lexicon] %watch /[(scot %p -.space.act)]/[+.space.act]]        
         ==
    ==
  --
::
++  on-watch    
  |=  =path
  ~&  'in here '^path
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
      !!
    ::
        %fact
        :: update local lex.
      ?+    p.cage.sign  (on-agent:def wire sign)
          %lexicon-reaction
        ::  ~&  !<(reaction q.cage.sign)
        =/  incoming  !<(reaction q.cage.sign)
        ?+  -.incoming  (on-agent:def wire sign)
            %defs
          =/  sp  [(slav %p i.wire) i.t.wire]
          ?~  (~(get by lex) sp)  ::... this shouldn't really be defined ever
            `this(lex (~(put by lex) sp +.incoming))
          ::
          `this
        ==
      ::
          %def-added
        =/  sp  [(slav %p i.wire) i.t.wire]
        =^  cards  state  (on-def:lc sp +.incoming)
        [cards this]
      ==
    ==
  ==
::
++  on-peek
  :: peek updates here or elsewhere?
  |=  =path
  ^-  (unit (unit cage))
  ?+  path  (on-peek:def path)
    [%x %definitions %all ~]
    ``lexicon+!>(lex)
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
++  on-def
  |=  [=space definition]
  ^-  (quip card _state)
  =/  def=definition
    [def ship sentences related]
  =/  slex  (~(got by lex) space)
  =/  sdefs  (fall (~(get in slex) word) ~)
  =/  hd  (sham def)
  :-  ~
  %_    state
      defs  (~(put by defs) hd def)
      lex
    %+  ~(put by lex)  space
    (~(put in sdefs) hd ~ ~)
  ==
--
