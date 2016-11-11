(function()
{
 var Global=this;
 var WebSharper=Global.WebSharper=Global.WebSharper||{};
 var Control=WebSharper.Control=WebSharper.Control||{};
 var Observer=Control.Observer=Control.Observer||{};
 var Message=Observer.Message=Observer.Message||{};
 var HotStream=Control.HotStream=Control.HotStream||{};
 var HotStream$1=HotStream.HotStream=HotStream.HotStream||{};
 var Observable=Control.Observable=Control.Observable||{};
 var Microsoft=Global.Microsoft=Global.Microsoft||{};
 var FSharp=Microsoft.FSharp=Microsoft.FSharp||{};
 var Control$1=FSharp.Control=FSharp.Control||{};
 var ObservableModule=Control$1.ObservableModule=Control$1.ObservableModule||{};
 var Event=Control.Event=Control.Event||{};
 var Event$1=Event.Event=Event.Event||{};
 var DelegateEvent=Control.DelegateEvent=Control.DelegateEvent||{};
 var DelegateEvent$1=DelegateEvent.DelegateEvent=DelegateEvent.DelegateEvent||{};
 var FSharpEvent=Control.FSharpEvent=Control.FSharpEvent||{};
 var FSharpDelegateEvent=Control.FSharpDelegateEvent=Control.FSharpDelegateEvent||{};
 var EventModule=Control$1.EventModule=Control$1.EventModule||{};
 var MailboxProcessor=Control.MailboxProcessor=Control.MailboxProcessor||{};
 var IntelliFactory=Global.IntelliFactory;
 var Runtime=IntelliFactory&&IntelliFactory.Runtime;
 var Util=WebSharper&&WebSharper.Util;
 var List=WebSharper&&WebSharper.List;
 var Ref=WebSharper&&WebSharper.Ref;
 var Option=WebSharper&&WebSharper.Option;
 var Unchecked=WebSharper&&WebSharper.Unchecked;
 var Seq=WebSharper&&WebSharper.Seq;
 var Arrays=WebSharper&&WebSharper.Arrays;
 var Collections=WebSharper&&WebSharper.Collections;
 var List$1=Collections&&Collections.List;
 var Concurrency=WebSharper&&WebSharper.Concurrency;
 var TimeoutException=WebSharper&&WebSharper.TimeoutException;
 var Operators=WebSharper&&WebSharper.Operators;
 var LinkedList=Collections&&Collections.LinkedList;
 Message=Observer.Message=Runtime.Class({},null,Message);
 Observer.New=function(f,e,c)
 {
  return{
   OnCompleted:c,
   OnError:e,
   OnNext:f
  };
 };
 Observer.Of=function(f)
 {
  return{
   OnCompleted:function()
   {
    return null;
   },
   OnError:function(x)
   {
    throw x;
   },
   OnNext:f
  };
 };
 HotStream$1=HotStream.HotStream=Runtime.Class({
  Trigger:function(v)
  {
   this.Latest[0]={
    $:1,
    $0:v
   };
   this.Event.event.Trigger(v);
  },
  Subscribe:function(o)
  {
   this.Latest[0]!=null?o.OnNext(this.Latest[0].$0):null;
   return Util.subscribeTo(this.Event.event,function(v)
   {
    o.OnNext(v);
   });
  }
 },null,HotStream$1);
 HotStream$1.New$1=function()
 {
  return HotStream$1.New([null],new FSharpEvent.New());
 };
 HotStream$1.New=function(Latest,Event$2)
 {
  return new HotStream$1({
   Latest:Latest,
   Event:Event$2
  });
 };
 Observable.Sequence=function(ios)
 {
  var sequence;
  sequence=function(ios$1)
  {
   var rest;
   return ios$1.$==1?(rest=sequence(ios$1.$1),Observable.CombineLatest(ios$1.$0,rest,Runtime.Curried2(function(x,y)
   {
    return new List.T({
     $:1,
     $0:x,
     $1:y
    });
   }))):Observable.Return(new List.T({
    $:0
   }));
  };
  return sequence(List.ofSeq(ios));
 };
 Observable.Aggregate=function(io,seed,fold)
 {
  return{
   Subscribe:function(o1)
   {
    var state;
    state=[seed];
    return io.Subscribe(Observer.New(function(v)
    {
     Observable.Protect(function()
     {
      return(fold(state[0]))(v);
     },function(s)
     {
      state[0]=s;
      o1.OnNext(s);
     },function(arg00)
     {
      o1.OnError(arg00);
     });
    },function(arg00)
    {
     o1.OnError(arg00);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Observable.SelectMany=function(io)
 {
  return{
   Subscribe:function(o)
   {
    var disp,d,dispose;
    disp=[function()
    {
    }];
    d=Util.subscribeTo(io,function(o1)
    {
     var d$1;
     d$1=Util.subscribeTo(o1,function(v)
     {
      o.OnNext(v);
     });
     disp[0]=function()
     {
      disp[0]();
      d$1.Dispose();
     };
    });
    dispose=function()
    {
     disp[0]();
     d.Dispose();
    };
    return{
     Dispose:dispose
    };
   }
  };
 };
 Observable.Switch=function(io)
 {
  return{
   Subscribe:function(o)
   {
    var index,disp;
    index=[0];
    disp=[null];
    return Util.subscribeTo(io,function(o1)
    {
     var currentIndex;
     Ref.incr(index);
     disp[0]!=null?disp[0].$0.Dispose():null;
     currentIndex=index[0];
     disp[0]={
      $:1,
      $0:Util.subscribeTo(o1,function(v)
      {
       currentIndex===index[0]?o.OnNext(v):null;
      })
     };
    });
   }
  };
 };
 Observable.CombineLatest=function(io1,io2,f)
 {
  return{
   Subscribe:function(o)
   {
    var lv1,lv2,update,d1,d2,dispose;
    lv1=[null];
    lv2=[null];
    update=function()
    {
     var matchValue,$1,$2,v1,v2;
     matchValue=[lv1[0],lv2[0]];
     ($1=matchValue[0],$1!=null?$1.$==1:false)?($2=matchValue[1],$2!=null?$2.$==1:false)?(v1=matchValue[0].$0,v2=matchValue[1].$0,Observable.Protect(function()
     {
      return(f(v1))(v2);
     },function(arg00)
     {
      o.OnNext(arg00);
     },function(arg00)
     {
      o.OnError(arg00);
     })):null:null;
    };
    d1=io1.Subscribe(Observer.New(function(x)
    {
     lv1[0]={
      $:1,
      $0:x
     };
     update();
    },function()
    {
    },function()
    {
    }));
    d2=io2.Subscribe(Observer.New(function(y)
    {
     lv2[0]={
      $:1,
      $0:y
     };
     update();
    },function()
    {
    },function()
    {
    }));
    dispose=function()
    {
     d1.Dispose();
     d2.Dispose();
    };
    return{
     Dispose:dispose
    };
   }
  };
 };
 Observable.Range=function(start,count)
 {
  return{
   Subscribe:function(o)
   {
    var dispose,i,$1;
    for(i=start,$1=start+count;i<=$1;i++)o.OnNext(i);
    dispose=function()
    {
    };
    return{
     Dispose:dispose
    };
   }
  };
 };
 Observable.Concat=function(io1,io2)
 {
  return{
   Subscribe:function(o)
   {
    var innerDisp,outerDisp;
    innerDisp=[null];
    outerDisp=io1.Subscribe(Observer.New(function(arg00)
    {
     o.OnNext(arg00);
    },function()
    {
    },function()
    {
     innerDisp[0]={
      $:1,
      $0:io2.Subscribe(o)
     };
    }));
    return{
     Dispose:function()
     {
      innerDisp[0]!=null?innerDisp[0].$0.Dispose():null;
      outerDisp.Dispose();
     }
    };
   }
  };
 };
 Observable.Merge=function(io1,io2)
 {
  return{
   Subscribe:function(o)
   {
    var completed1,completed2,disp1,disp2,dispose;
    completed1=[false];
    completed2=[false];
    disp1=io1.Subscribe(Observer.New(function(arg00)
    {
     o.OnNext(arg00);
    },function()
    {
    },function()
    {
     completed1[0]=true;
     (completed1[0]?completed2[0]:false)?o.OnCompleted():null;
    }));
    disp2=io2.Subscribe(Observer.New(function(arg00)
    {
     o.OnNext(arg00);
    },function()
    {
    },function()
    {
     completed2[0]=true;
     (completed1[0]?completed2[0]:false)?o.OnCompleted():null;
    }));
    dispose=function()
    {
     disp1.Dispose();
     disp2.Dispose();
    };
    return{
     Dispose:dispose
    };
   }
  };
 };
 Observable.Drop=function(count,io)
 {
  return{
   Subscribe:function(o1)
   {
    var index;
    index=[0];
    return io.Subscribe(Observer.New(function(v)
    {
     Ref.incr(index);
     index[0]>count?o1.OnNext(v):null;
    },function(arg00)
    {
     o1.OnError(arg00);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Observable.Choose=function(f,io)
 {
  return{
   Subscribe:function(o1)
   {
    return io.Subscribe(Observer.New(function(v)
    {
     var action;
     Observable.Protect(function()
     {
      return f(v);
     },(action=function(arg00)
     {
      o1.OnNext(arg00);
     },function(option)
     {
      Option.iter(action,option);
     }),function(arg00)
     {
      o1.OnError(arg00);
     });
    },function(arg00)
    {
     o1.OnError(arg00);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Observable.Filter=function(f,io)
 {
  return{
   Subscribe:function(o1)
   {
    return io.Subscribe(Observer.New(function(v)
    {
     var action;
     Observable.Protect(function()
     {
      return f(v)?{
       $:1,
       $0:v
      }:null;
     },(action=function(arg00)
     {
      o1.OnNext(arg00);
     },function(option)
     {
      Option.iter(action,option);
     }),function(arg00)
     {
      o1.OnError(arg00);
     });
    },function(arg00)
    {
     o1.OnError(arg00);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Observable.Map=function(f,io)
 {
  return{
   Subscribe:function(o1)
   {
    return io.Subscribe(Observer.New(function(v)
    {
     Observable.Protect(function()
     {
      return f(v);
     },function(arg00)
     {
      o1.OnNext(arg00);
     },function(arg00)
     {
      o1.OnError(arg00);
     });
    },function(arg00)
    {
     o1.OnError(arg00);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Observable.Protect=function(f,succeed,fail)
 {
  var matchValue;
  try
  {
   matchValue=new WebSharper.Choice2({
    $:0,
    $0:f()
   });
  }
  catch(e)
  {
   matchValue=new WebSharper.Choice2({
    $:1,
    $0:e
   });
  }
  return matchValue.$==1?fail(matchValue.$0):succeed(matchValue.$0);
 };
 Observable.Never=function()
 {
  return{
   Subscribe:function()
   {
    var dispose;
    dispose=function()
    {
    };
    return{
     Dispose:dispose
    };
   }
  };
 };
 Observable.Return=function(x)
 {
  return{
   Subscribe:function(o)
   {
    var dispose;
    o.OnNext(x);
    o.OnCompleted();
    dispose=function()
    {
    };
    return{
     Dispose:dispose
    };
   }
  };
 };
 Observable.Of=function(f)
 {
  return{
   Subscribe:function(o)
   {
    var dispose;
    dispose=f(function(x)
    {
     o.OnNext(x);
    });
    return{
     Dispose:dispose
    };
   }
  };
 };
 ObservableModule.Split=function(f,e)
 {
  var left,chooser,chooser$1;
  left=(chooser=function(x)
  {
   var matchValue;
   matchValue=f(x);
   return matchValue.$==0?{
    $:1,
    $0:matchValue.$0
   }:null;
  },function(source)
  {
   return Observable.Choose(chooser,source);
  })(e);
  return[left,(chooser$1=function(x)
  {
   var matchValue;
   matchValue=f(x);
   return matchValue.$==1?{
    $:1,
    $0:matchValue.$0
   }:null;
  },function(source)
  {
   return Observable.Choose(chooser$1,source);
  })(e)];
 };
 ObservableModule.Scan=function(fold,seed,e)
 {
  return{
   Subscribe:function(o1)
   {
    var state;
    state=[seed];
    return e.Subscribe(Observer.New(function(v)
    {
     Observable.Protect(function()
     {
      return(fold(state[0]))(v);
     },function(s)
     {
      state[0]=s;
      o1.OnNext(s);
     },function(arg00)
     {
      o1.OnError(arg00);
     });
    },function(arg00)
    {
     o1.OnError(arg00);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 ObservableModule.Partition=function(f,e)
 {
  var g;
  return[Observable.Filter(f,e),Observable.Filter((g=function(value)
  {
   return!value;
  },function(x)
  {
   return g(f(x));
  }),e)];
 };
 ObservableModule.Pairwise=function(e)
 {
  return{
   Subscribe:function(o1)
   {
    var last;
    last=[null];
    return e.Subscribe(Observer.New(function(v)
    {
     var matchValue;
     matchValue=last[0];
     (matchValue!=null?matchValue.$==1:false)?o1.OnNext([matchValue.$0,v]):null;
     last[0]={
      $:1,
      $0:v
     };
    },function(arg00)
    {
     o1.OnError(arg00);
    },function()
    {
     o1.OnCompleted();
    }));
   }
  };
 };
 Event$1=Event.Event=Runtime.Class({
  Subscribe$1:function(observer)
  {
   var $this,h,dispose;
   $this=this;
   h=function($1,x)
   {
    return observer.OnNext(x);
   };
   this.AddHandler$1(h);
   dispose=function()
   {
    $this.RemoveHandler$1(h);
   };
   return{
    Dispose:dispose
   };
  },
  RemoveHandler$1:function(h)
  {
   var x,predicate,action,objectArg;
   x=(predicate=function(y)
   {
    return Unchecked.Equals(h,y);
   },function(source)
   {
    return Seq.tryFindIndex(predicate,source);
   })(this.Handlers);
   (action=(objectArg=this.Handlers,function(arg00)
   {
    objectArg.RemoveAt(arg00);
   }),function(option)
   {
    Option.iter(action,option);
   })(x);
  },
  AddHandler$1:function(h)
  {
   this.Handlers.Add(h);
  },
  Trigger:function(x)
  {
   var idx,$1;
   var arr=this.Handlers.ToArray();
   for(idx=0,$1=arr.length-1;idx<=$1;idx++)(Arrays.get(arr,idx))(null,x);
  },
  RemoveHandler:function(x)
  {
   this.RemoveHandler$1(x);
  },
  AddHandler:function(x)
  {
   this.AddHandler$1(x);
  },
  Subscribe:function(observer)
  {
   return this.Subscribe$1(observer);
  },
  Dispose:function()
  {
  }
 },null,Event$1);
 Event$1.New=function(Handlers)
 {
  return new Event$1({
   Handlers:Handlers
  });
 };
 DelegateEvent$1=DelegateEvent.DelegateEvent=Runtime.Class({
  RemoveHandler$1:function(h)
  {
   var x,predicate,action,objectArg;
   x=(predicate=function(y)
   {
    return Unchecked.Equals(h,y);
   },function(source)
   {
    return Seq.tryFindIndex(predicate,source);
   })(this.Handlers);
   (action=(objectArg=this.Handlers,function(arg00)
   {
    objectArg.RemoveAt(arg00);
   }),function(option)
   {
    Option.iter(action,option);
   })(x);
  },
  AddHandler$1:function(h)
  {
   this.Handlers.Add(h);
  },
  Trigger:function(x)
  {
   var idx,$1;
   var arr=this.Handlers.ToArray();
   for(idx=0,$1=arr.length-1;idx<=$1;idx++)Arrays.get(arr,idx).apply(null,x);
  },
  RemoveHandler:function(x)
  {
   this.RemoveHandler$1(x);
  },
  AddHandler:function(x)
  {
   this.AddHandler$1(x);
  },
  Dispose:function()
  {
  }
 },null,DelegateEvent$1);
 DelegateEvent$1.New=function(Handlers)
 {
  return new DelegateEvent$1({
   Handlers:Handlers
  });
 };
 FSharpEvent=Control.FSharpEvent=Runtime.Class({},null,FSharpEvent);
 FSharpEvent.New=Runtime.Ctor(function()
 {
  this.event=Event$1.New(new List$1.New$2());
  null;
 },FSharpEvent);
 FSharpDelegateEvent=Control.FSharpDelegateEvent=Runtime.Class({},null,FSharpDelegateEvent);
 FSharpDelegateEvent.New=Runtime.Ctor(function()
 {
  this.event=DelegateEvent$1.New(new List$1.New$2());
  null;
 },FSharpDelegateEvent);
 EventModule.Split=function(f,e)
 {
  var chooser,chooser$1;
  return[(chooser=function(x)
  {
   var matchValue;
   matchValue=f(x);
   return matchValue.$==0?{
    $:1,
    $0:matchValue.$0
   }:null;
  },function(sourceEvent)
  {
   return EventModule.Choose(chooser,sourceEvent);
  })(e),(chooser$1=function(x)
  {
   var matchValue;
   matchValue=f(x);
   return matchValue.$==1?{
    $:1,
    $0:matchValue.$0
   }:null;
  },function(sourceEvent)
  {
   return EventModule.Choose(chooser$1,sourceEvent);
  })(e)];
 };
 EventModule.Scan=function(fold,seed,e)
 {
  var state;
  state=[seed];
  return EventModule.Map(function(value)
  {
   state[0]=(fold(state[0]))(value);
   return state[0];
  },e);
 };
 EventModule.Partition=function(f,e)
 {
  var g;
  return[EventModule.Filter(f,e),EventModule.Filter((g=function(value)
  {
   return!value;
  },function(x)
  {
   return g(f(x));
  }),e)];
 };
 EventModule.Pairwise=function(e)
 {
  var buf,ev;
  buf=[null];
  ev=Event$1.New(new List$1.New$2());
  Util.addListener(e,function(x)
  {
   var matchValue;
   matchValue=buf[0];
   (matchValue!=null?matchValue.$==1:false)?(buf[0]={
    $:1,
    $0:x
   },ev.Trigger([matchValue.$0,x])):void(buf[0]={
    $:1,
    $0:x
   });
  });
  return ev;
 };
 EventModule.Merge=function(e1,e2)
 {
  var r;
  r=Event$1.New(new List$1.New$2());
  Util.addListener(e1,function(arg00)
  {
   r.Trigger(arg00);
  });
  Util.addListener(e2,function(arg00)
  {
   r.Trigger(arg00);
  });
  return r;
 };
 EventModule.Map=function(f,e)
 {
  var r;
  r=Event$1.New(new List$1.New$2());
  Util.addListener(e,function(x)
  {
   r.Trigger(f(x));
  });
  return r;
 };
 EventModule.Filter=function(ok,e)
 {
  var r;
  r=Event$1.New(new List$1.New$2());
  Util.addListener(e,function(x)
  {
   ok(x)?r.Trigger(x):null;
  });
  return r;
 };
 EventModule.Choose=function(c,e)
 {
  var r;
  r=new FSharpEvent.New();
  Util.addListener(e,function(x)
  {
   var matchValue;
   matchValue=c(x);
   matchValue==null?null:r.event.Trigger(matchValue.$0);
  });
  return r.event;
 };
 MailboxProcessor=Control.MailboxProcessor=Runtime.Class({
  dequeue:function()
  {
   var f;
   f=this.mailbox.n.v;
   this.mailbox.RemoveFirst();
   return f;
  },
  resume:function()
  {
   var $this,matchValue;
   $this=this;
   matchValue=this.savedCont;
   (matchValue!=null?matchValue.$==1:false)?(this.savedCont=null,$this.startAsync(matchValue.$0)):null;
  },
  startAsync:function(a)
  {
   Concurrency.Start(a,this.token);
  },
  Scan:function(scanner,timeout)
  {
   var $this;
   $this=this;
   return Concurrency.Delay(function()
   {
    var x;
    x=$this.TryScan(scanner,timeout);
    return Concurrency.Bind(x,function($1)
    {
     var $2;
     if($1!=null?$1.$==1:false)
      $2=$1.$0;
     else
      {
       var e=new TimeoutException.New();
       throw e;
       $2=void 0;
      }
     return Concurrency.Return($2);
    });
   });
  },
  TryScan:function(scanner,timeout)
  {
   var $this,timeout$1;
   $this=this;
   timeout$1=Operators.DefaultArg(timeout,this.get_DefaultTimeout());
   return Concurrency.Delay(function()
   {
    var matchValue;
    matchValue=function()
    {
     var m,found;
     m=$this.mailbox.n;
     found=null;
     while(!Unchecked.Equals(m,null))
      {
       var matchValue$1;
       matchValue$1=scanner(m.v);
       matchValue$1==null?void(m=m.n):($this.mailbox.Remove$1(m),m=null,void(found=matchValue$1));
      }
     return found;
    }();
    return(matchValue!=null?matchValue.$==1:false)?Concurrency.Bind(matchValue.$0,function($1)
    {
     return Concurrency.Return({
      $:1,
      $0:$1
     });
    }):Concurrency.FromContinuations(function(a)
    {
     var scanNext,scanNext$1;
     var ok=a[0];
     if(timeout$1<0)
      {
       scanNext=function()
       {
        $this.savedCont={
         $:1,
         $0:Concurrency.Delay(function()
         {
          var matchValue$1;
          matchValue$1=scanner($this.mailbox.n.v);
          return(matchValue$1!=null?matchValue$1.$==1:false)?($this.mailbox.RemoveFirst(),Concurrency.Bind(matchValue$1.$0,function($1)
          {
           ok({
            $:1,
            $0:$1
           });
           return Concurrency.Return(null);
          })):(scanNext(),Concurrency.Return(null));
         })
        };
       };
       scanNext();
      }
     else
      {
       var waiting=[true];
       var pending=Global.setTimeout(function()
       {
        waiting[0]?(waiting[0]=false,$this.savedCont=null,ok(null)):null;
       },timeout$1);
       scanNext$1=function()
       {
        $this.savedCont={
         $:1,
         $0:Concurrency.Delay(function()
         {
          var matchValue$1;
          matchValue$1=scanner($this.mailbox.n.v);
          return(matchValue$1!=null?matchValue$1.$==1:false)?($this.mailbox.RemoveFirst(),Concurrency.Bind(matchValue$1.$0,function($1)
          {
           return waiting[0]?(waiting[0]=false,Global.clearTimeout(pending),ok({
            $:1,
            $0:$1
           }),Concurrency.Return(null)):Concurrency.Return(null);
          })):(scanNext$1(),Concurrency.Return(null));
         })
        };
       };
       scanNext$1();
      }
    });
   });
  },
  PostAndAsyncReply:function(msgf,timeout)
  {
   var $this;
   $this=this;
   return Concurrency.Delay(function()
   {
    var x;
    x=$this.PostAndTryAsyncReply(msgf,timeout);
    return Concurrency.Bind(x,function($1)
    {
     var $2;
     if($1!=null?$1.$==1:false)
      $2=$1.$0;
     else
      {
       var e=new TimeoutException.New();
       throw e;
       $2=void 0;
      }
     return Concurrency.Return($2);
    });
   });
  },
  PostAndTryAsyncReply:function(msgf,timeout)
  {
   var $this,timeout$1;
   $this=this;
   timeout$1=Operators.DefaultArg(timeout,this.get_DefaultTimeout());
   return Concurrency.FromContinuations(function(a)
   {
    var ok,f,waiting;
    ok=a[0];
    timeout$1<0?($this.mailbox.AddLast(msgf((f=function(arg0)
    {
     return{
      $:1,
      $0:arg0
     };
    },function(x)
    {
     return ok(f(x));
    }))),$this.resume()):(waiting=[true],$this.mailbox.AddLast(msgf(function(res)
    {
     waiting[0]?(waiting[0]=false,ok({
      $:1,
      $0:res
     })):null;
    })),$this.resume(),Global.setTimeout(function()
    {
     waiting[0]?(waiting[0]=false,ok(null)):null;
    },timeout$1));
   });
  },
  get_CurrentQueueLength:function()
  {
   return this.mailbox.c;
  },
  Receive:function(timeout)
  {
   var $this;
   $this=this;
   return Concurrency.Delay(function()
   {
    var x;
    x=$this.TryReceive(timeout);
    return Concurrency.Bind(x,function($1)
    {
     var $2;
     if($1!=null?$1.$==1:false)
      $2=$1.$0;
     else
      {
       var e=new TimeoutException.New();
       throw e;
       $2=void 0;
      }
     return Concurrency.Return($2);
    });
   });
  },
  TryReceive:function(timeout)
  {
   var $this,timeout$1;
   $this=this;
   timeout$1=Operators.DefaultArg(timeout,this.get_DefaultTimeout());
   return Concurrency.FromContinuations(function(a)
   {
    var ok,waiting,pending;
    ok=a[0];
    Unchecked.Equals($this.mailbox.n,null)?timeout$1<0?$this.savedCont={
     $:1,
     $0:Concurrency.Delay(function()
     {
      ok({
       $:1,
       $0:$this.dequeue()
      });
      return Concurrency.Return(null);
     })
    }:(waiting=[true],pending=Global.setTimeout(function()
    {
     waiting[0]?(waiting[0]=false,$this.savedCont=null,ok(null)):null;
    },timeout$1),$this.savedCont={
     $:1,
     $0:Concurrency.Delay(function()
     {
      return waiting[0]?(waiting[0]=false,Global.clearTimeout(pending),ok({
       $:1,
       $0:$this.dequeue()
      }),Concurrency.Return(null)):Concurrency.Return(null);
     })
    }):ok({
     $:1,
     $0:$this.dequeue()
    });
   });
  },
  Start:function()
  {
   var $this;
   $this=this;
   this.started?Operators.FailWith("The MailboxProcessor has already been started."):(this.started=true,$this.startAsync(Concurrency.Delay(function()
   {
    var a;
    a=Concurrency.Delay(function()
    {
     var x;
     x=$this.initial($this);
     return Concurrency.Bind(x,function()
     {
      return Concurrency.Return(null);
     });
    });
    return Concurrency.TryWith(a,function($1)
    {
     $this.errorEvent.event.Trigger($1);
     return Concurrency.Return(null);
    });
   })));
  },
  set_DefaultTimeout:function(v)
  {
   this["DefaultTimeout@"]=v;
  },
  get_DefaultTimeout:function()
  {
   return this["DefaultTimeout@"];
  },
  remove_Error:function(handler)
  {
   this.errorEvent.event.RemoveHandler(handler);
  },
  add_Error:function(handler)
  {
   this.errorEvent.event.AddHandler(handler);
  },
  get_Error:function()
  {
   return this.errorEvent.event;
  }
 },null,MailboxProcessor);
 MailboxProcessor.Start=function(initial,token)
 {
  var mb;
  mb=new MailboxProcessor.New(initial,token);
  mb.Start();
  return mb;
 };
 MailboxProcessor.New=Runtime.Ctor(function(initial,token)
 {
  var $this,matchValue,callback;
  $this=this;
  this.initial=initial;
  this.token=token;
  this.started=false;
  this.errorEvent=new FSharpEvent.New();
  this.mailbox=new LinkedList.New();
  this.savedCont=null;
  matchValue=this.token;
  matchValue==null?null:(callback=function()
  {
   $this.resume();
  },Concurrency.Register(matchValue.$0,function()
  {
   callback();
  }));
  this["DefaultTimeout@"]=-1;
  null;
 },MailboxProcessor);
}());
