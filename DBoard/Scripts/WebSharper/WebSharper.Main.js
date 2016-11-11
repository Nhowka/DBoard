(function()
{
 var Global=this;
 var WebSharper=Global.WebSharper=Global.WebSharper||{};
 var JavaScript=WebSharper.JavaScript=WebSharper.JavaScript||{};
 var JSModule=JavaScript.JSModule=JavaScript.JSModule||{};
 var Collections=WebSharper.Collections=WebSharper.Collections||{};
 var EqualityComparer=Collections.EqualityComparer=Collections.EqualityComparer||{};
 var MacroModule=WebSharper.MacroModule=WebSharper.MacroModule||{};
 var EquatableEqualityComparer=MacroModule.EquatableEqualityComparer=MacroModule.EquatableEqualityComparer||{};
 var BaseEqualityComparer=MacroModule.BaseEqualityComparer=MacroModule.BaseEqualityComparer||{};
 var Comparer=Collections.Comparer=Collections.Comparer||{};
 var ComparableComparer=MacroModule.ComparableComparer=MacroModule.ComparableComparer||{};
 var BaseComparer=MacroModule.BaseComparer=MacroModule.BaseComparer||{};
 var Pervasives=JavaScript.Pervasives=JavaScript.Pervasives||{};
 var Json=WebSharper.Json=WebSharper.Json||{};
 var Remoting=WebSharper.Remoting=WebSharper.Remoting||{};
 var XhrProvider=Remoting.XhrProvider=Remoting.XhrProvider||{};
 var AjaxRemotingProvider=Remoting.AjaxRemotingProvider=Remoting.AjaxRemotingProvider||{};
 var SC$1=Global.StartupCode$WebSharper_Main$Remoting=Global.StartupCode$WebSharper_Main$Remoting||{};
 var PrintfHelpers=WebSharper.PrintfHelpers=WebSharper.PrintfHelpers||{};
 var Concurrency=WebSharper.Concurrency=WebSharper.Concurrency||{};
 var AsyncBody=Concurrency.AsyncBody=Concurrency.AsyncBody||{};
 var Scheduler=Concurrency.Scheduler=Concurrency.Scheduler||{};
 var SC$2=Global.StartupCode$WebSharper_Main$Concurrency=Global.StartupCode$WebSharper_Main$Concurrency||{};
 var Enumerator=WebSharper.Enumerator=WebSharper.Enumerator||{};
 var T=Enumerator.T=Enumerator.T||{};
 var HtmlContentExtensions=WebSharper.HtmlContentExtensions=WebSharper.HtmlContentExtensions||{};
 var SingleNode=HtmlContentExtensions.SingleNode=HtmlContentExtensions.SingleNode||{};
 var Activator=WebSharper.Activator=WebSharper.Activator||{};
 var Arrays=WebSharper.Arrays=WebSharper.Arrays||{};
 var Seq=WebSharper.Seq=WebSharper.Seq||{};
 var List=WebSharper.List=WebSharper.List||{};
 var Arrays2D=WebSharper.Arrays2D=WebSharper.Arrays2D||{};
 var CancellationTokenSource=WebSharper.CancellationTokenSource=WebSharper.CancellationTokenSource||{};
 var Char=WebSharper.Char=WebSharper.Char||{};
 var Choice2=WebSharper.Choice2=WebSharper.Choice2||{};
 var Choice3=WebSharper.Choice3=WebSharper.Choice3||{};
 var Choice4=WebSharper.Choice4=WebSharper.Choice4||{};
 var Choice5=WebSharper.Choice5=WebSharper.Choice5||{};
 var Choice6=WebSharper.Choice6=WebSharper.Choice6||{};
 var Choice7=WebSharper.Choice7=WebSharper.Choice7||{};
 var Util=WebSharper.Util=WebSharper.Util||{};
 var DateUtil=WebSharper.DateUtil=WebSharper.DateUtil||{};
 var System=Global.System=Global.System||{};
 var Delegate=System.Delegate=System.Delegate||{};
 var MatchFailureException=WebSharper.MatchFailureException=WebSharper.MatchFailureException||{};
 var IndexOutOfRangeException=WebSharper.IndexOutOfRangeException=WebSharper.IndexOutOfRangeException||{};
 var OperationCanceledException=WebSharper.OperationCanceledException=WebSharper.OperationCanceledException||{};
 var ArgumentException=WebSharper.ArgumentException=WebSharper.ArgumentException||{};
 var ArgumentOutOfRangeException=WebSharper.ArgumentOutOfRangeException=WebSharper.ArgumentOutOfRangeException||{};
 var InvalidOperationException=WebSharper.InvalidOperationException=WebSharper.InvalidOperationException||{};
 var AggregateException=WebSharper.AggregateException=WebSharper.AggregateException||{};
 var TimeoutException=WebSharper.TimeoutException=WebSharper.TimeoutException||{};
 var FormatException=WebSharper.FormatException=WebSharper.FormatException||{};
 var Guid=WebSharper.Guid=WebSharper.Guid||{};
 var Lazy=WebSharper.Lazy=WebSharper.Lazy||{};
 var T$1=List.T=List.T||{};
 var Nullable=WebSharper.Nullable=WebSharper.Nullable||{};
 var Ref=WebSharper.Ref=WebSharper.Ref||{};
 var Operators=WebSharper.Operators=WebSharper.Operators||{};
 var Slice=WebSharper.Slice=WebSharper.Slice||{};
 var Option=WebSharper.Option=WebSharper.Option||{};
 var Queue=WebSharper.Queue=WebSharper.Queue||{};
 var Random=WebSharper.Random=WebSharper.Random||{};
 var Microsoft=Global.Microsoft=Global.Microsoft||{};
 var FSharp=Microsoft.FSharp=Microsoft.FSharp||{};
 var Core=FSharp.Core=FSharp.Core||{};
 var FSharpRef=Core.FSharpRef=Core.FSharpRef||{};
 var Control=WebSharper.Control=WebSharper.Control||{};
 var Stack=WebSharper.Stack=WebSharper.Stack||{};
 var Strings=WebSharper.Strings=WebSharper.Strings||{};
 var Task=WebSharper.Task=WebSharper.Task||{};
 var Task1=WebSharper.Task1=WebSharper.Task1||{};
 var TaskCompletionSource=WebSharper.TaskCompletionSource=WebSharper.TaskCompletionSource||{};
 var Unchecked=WebSharper.Unchecked=WebSharper.Unchecked||{};
 var IntelliFactory=Global.IntelliFactory;
 var Runtime=IntelliFactory&&IntelliFactory.Runtime;
 var String=Global.String;
 JSModule.LogMore=function(args)
 {
  if(Global.console)
   Global.console.log.apply(Global.console,args);
 };
 JSModule.Log=function(x)
 {
  if(Global.console)
   Global.console.log(x);
 };
 JSModule.ForEach=function(x,iter)
 {
  var k;
  for(var k$1 in x)if(iter(k$1))
   break;
 };
 JSModule.GetFieldValues=function(o)
 {
  var k;
  var r=[];
  for(var k$1 in o)r.push(o[k$1]);
  return r;
 };
 JSModule.GetFieldNames=function(o)
 {
  var k;
  var r=[];
  for(var k$1 in o)r.push(k$1);
  return r;
 };
 JSModule.GetFields=function(o)
 {
  var k;
  var r=[];
  for(var k$1 in o)r.push([k$1,o[k$1]]);
  return r;
 };
 JSModule.Delete=function(x,field)
 {
  return delete x[field];
 };
 EqualityComparer=Collections.EqualityComparer=Runtime.Class({
  CGetHashCode0:function(x)
  {
   return this.GetHashCode(x);
  },
  CEquals0:function(x,y)
  {
   return this.Equals(x,y);
  },
  CGetHashCode:function(x)
  {
   return this.GetHashCode(x);
  },
  CEquals:function(x,y)
  {
   return this.Equals(x,y);
  }
 },null,EqualityComparer);
 EqualityComparer.New=Runtime.Ctor(function()
 {
 },EqualityComparer);
 EquatableEqualityComparer=MacroModule.EquatableEqualityComparer=Runtime.Class({
  GetHashCode:function(x)
  {
   return Unchecked.Hash(x);
  },
  Equals:function(x,y)
  {
   return x.EEquals(y);
  }
 },EqualityComparer,EquatableEqualityComparer);
 EquatableEqualityComparer.New=Runtime.Ctor(function()
 {
  EqualityComparer.New.call(this);
  null;
 },EquatableEqualityComparer);
 BaseEqualityComparer=MacroModule.BaseEqualityComparer=Runtime.Class({
  GetHashCode:function(x)
  {
   return Unchecked.Hash(x);
  },
  Equals:function(x,y)
  {
   return Unchecked.Equals(x,y);
  }
 },EqualityComparer,BaseEqualityComparer);
 BaseEqualityComparer.New=Runtime.Ctor(function()
 {
  EqualityComparer.New.call(this);
  null;
 },BaseEqualityComparer);
 Comparer=Collections.Comparer=Runtime.Class({
  Compare0:function(x,y)
  {
   return this.Compare$1(x,y);
  },
  Compare:function(x,y)
  {
   return this.Compare$1(x,y);
  }
 },null,Comparer);
 Comparer.New=Runtime.Ctor(function()
 {
 },Comparer);
 ComparableComparer=MacroModule.ComparableComparer=Runtime.Class({
  Compare$1:function(x,y)
  {
   return x.CompareTo(y);
  }
 },Comparer,ComparableComparer);
 ComparableComparer.New=Runtime.Ctor(function()
 {
  Comparer.New.call(this);
  null;
 },ComparableComparer);
 BaseComparer=MacroModule.BaseComparer=Runtime.Class({
  Compare$1:function(x,y)
  {
   return Operators.Compare(x,y);
  }
 },Comparer,BaseComparer);
 BaseComparer.New=Runtime.Ctor(function()
 {
  Comparer.New.call(this);
  null;
 },BaseComparer);
 Pervasives.GetJS=function(x,items)
 {
  var x$1;
  x$1=x;
  var enumerator=Enumerator.Get(items);
  try
  {
   while(enumerator.MoveNext())
    x$1=x$1[enumerator.Current()];
  }
  finally
  {
   "Dispose"in enumerator?enumerator.Dispose():null;
  }
  return x$1;
 };
 Pervasives.NewFromSeq=function(fields)
 {
  var r={};
  var enumerator=Enumerator.Get(fields);
  try
  {
   while(enumerator.MoveNext())
    {
     var forLoopVar;
     forLoopVar=enumerator.Current();
     r[forLoopVar[0]]=forLoopVar[1];
    }
  }
  finally
  {
   "Dispose"in enumerator?enumerator.Dispose():null;
  }
  return r;
 };
 Json.Activate=function(json)
 {
  var $1,$2,decode,i,$3;
  var types=json.$TYPES;
  for(i=0,$3=Arrays.length(types)-1;i<=$3;i++)Arrays.set(types,i,Json.lookup(Arrays.get(types,i)));
  decode=function(x)
  {
   var o,ti,t,r,x$1;
   return Unchecked.Equals(x,null)?x:typeof x=="object"?x instanceof Global.Array?Json.shallowMap(decode,x):(o=Json.shallowMap(decode,x.$V),ti=x.$T,Unchecked.Equals(typeof ti,"undefined")?o:(t=Arrays.get(types,ti),t===Global.WebSharper.List.T?List.ofArray(o):(r=(x$1=Arrays.get(types,ti),new x$1()),JSModule.ForEach(o,function(k)
   {
    r[k]=o[k];
    return false;
   }),r))):x;
  };
  $2=decode(json.$DATA);
  return $2;
 };
 Json.shallowMap=function(f,x)
 {
  var r;
  return x instanceof Global.Array?Arrays.map(f,x):typeof x=="object"?(r={},JSModule.ForEach(x,function(y)
  {
   r[y]=f(x[y]);
   return false;
  }),r):x;
 };
 Json.lookup=function(x)
 {
  var r,i;
  var k=Arrays.length(x);
  r=Global;
  i=0;
  while(i<k)
   {
    var n,rn;
    n=Arrays.get(x,i);
    rn=r[n];
    !Unchecked.Equals(typeof rn,void 0)?(r=rn,void(i=i+1)):Operators.FailWith("Invalid server reply. Failed to find type: "+n);
   }
  return r;
 };
 XhrProvider=Remoting.XhrProvider=Runtime.Class({
  Sync:function(url,headers,data)
  {
   var res;
   res=[null];
   Remoting.ajax(false,url,headers,data,function(x)
   {
    res[0]=x;
   },function(e)
   {
    throw e;
   },function()
   {
    Remoting.ajax(false,url,headers,data,function(x)
    {
     res[0]=x;
    },function(e)
    {
     throw e;
    },void 0);
   });
   return res[0];
  },
  Async:function(url,headers,data,ok,err)
  {
   Remoting.ajax(true,url,headers,data,ok,err,function()
   {
    Remoting.ajax(true,url,headers,data,ok,err,void 0);
   });
  }
 },null,XhrProvider);
 XhrProvider.New=Runtime.Ctor(function()
 {
 },XhrProvider);
 AjaxRemotingProvider=Remoting.AjaxRemotingProvider=Runtime.Class({
  get_EndPoint:function()
  {
   return Remoting.EndPoint();
  },
  AsyncBase:function(m,data)
  {
   var $this,headers,payload;
   $this=this;
   headers=Remoting.makeHeaders(m);
   payload=Remoting.makePayload(data);
   return Concurrency.Delay(function()
   {
    var x;
    x=Concurrency.GetCT();
    return Concurrency.Bind(x,function($1)
    {
     return Concurrency.FromContinuations(function(a)
     {
      var ok,err,cc,waiting,reg,callback,arg00;
      ok=a[0];
      err=a[1];
      cc=a[2];
      waiting=[true];
      reg=(callback=function()
      {
       waiting[0]?(waiting[0]=false,cc(OperationCanceledException.New.call(this,Concurrency.noneCT()))):null;
      },Concurrency.Register($1,function()
      {
       callback();
      }));
      arg00=$this.get_EndPoint();
      Remoting.AjaxProvider().Async(arg00,headers,payload,function(x$1)
      {
       waiting[0]?(waiting[0]=false,reg.Dispose(),ok(Json.Activate(Global.JSON.parse(x$1)))):null;
      },function(e)
      {
       waiting[0]?(waiting[0]=false,reg.Dispose(),err(e)):null;
      });
     });
    });
   });
  },
  Send:function(m,data)
  {
   var $this,computation;
   $this=this;
   computation=Concurrency.Ignore($this.AsyncBase(m,data));
   Concurrency.Start(computation,null);
  },
  Task:function(m,data)
  {
   var $this,x;
   $this=this;
   x=$this.AsyncBase(m,data);
   return Concurrency.StartAsTask(x,null);
  },
  Async:function(m,data)
  {
   return this.AsyncBase(m,data);
  },
  Sync:function(m,data)
  {
   var data$1,arg00,arg10,arg20;
   data$1=(arg00=this.get_EndPoint(),arg10=Remoting.makeHeaders(m),arg20=Remoting.makePayload(data),Remoting.AjaxProvider().Sync(arg00,arg10,arg20));
   return Json.Activate(Global.JSON.parse(data$1));
  }
 },null,AjaxRemotingProvider);
 AjaxRemotingProvider.New=Runtime.Ctor(function()
 {
 },AjaxRemotingProvider);
 Remoting.ajax=function(async,url,headers,data,ok,err,csrf)
 {
  var xhr=new Global.XMLHttpRequest();
  var csrf$1=Global.document.cookie.replace(new Global.RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");
  xhr.open("POST",url,async);
  if(async==true)
   xhr.withCredentials=true;
  var h;
  for(var h$1 in headers)xhr.setRequestHeader(h$1,headers[h$1]);
  if(csrf$1)
   xhr.setRequestHeader("x-csrftoken",csrf$1);
  var k=function()
  {
   if(xhr.status==200)
    ok(xhr.responseText);
   else
    if(csrf&&xhr.status==403&&xhr.responseText=="CSRF")
     csrf();
    else
     {
      var msg="Response status is not 200: ";
      err(new Global.Error(msg+xhr.status));
     }
  };
  if("onload"in xhr)
   xhr.onload=xhr.onerror=xhr.onabort=k;
  else
   xhr.onreadystatechange=function()
   {
    if(xhr.readyState==4)
     k();
   };
  xhr.send(data);
 };
 Remoting.makePayload=function(data)
 {
  return Global.JSON.stringify(data);
 };
 Remoting.makeHeaders=function(m)
 {
  return{
   "x-websharper-rpc":m,
   "content-type":"application/json"
  };
 };
 Remoting.AjaxProvider=function()
 {
  SC$1.$cctor();
  return SC$1.AjaxProvider;
 };
 Remoting.set_AjaxProvider=function($1)
 {
  SC$1.$cctor();
  SC$1.AjaxProvider=$1;
 };
 Remoting.UseHttps=function()
 {
  var $1;
  try
  {
   var _this,_this$1;
   $1=!(_this=Global.window.location.href,Strings.StartsWith(_this,"https://"))?(Remoting.set_EndPoint((_this$1=Global.window.location.href,Strings.Replace(_this$1,"http://","https://"))),true):false;
  }
  catch(matchValue)
  {
   $1=false;
  }
  return $1;
 };
 Remoting.EndPoint=function()
 {
  SC$1.$cctor();
  return SC$1.EndPoint;
 };
 Remoting.set_EndPoint=function($1)
 {
  SC$1.$cctor();
  SC$1.EndPoint=$1;
 };
 SC$1.$cctor=Runtime.Cctor(function()
 {
  SC$1.EndPoint="?";
  SC$1.AjaxProvider=new XhrProvider.New();
 });
 PrintfHelpers.prettyPrint=function(o)
 {
  var t,x;
  return o===null?"null":(t=typeof o,t=="string"?"\""+o+"\"":t=="object"?o instanceof Global.Array?"[|"+(x=Arrays.map(PrintfHelpers.prettyPrint,o),Strings.concat("; ",x))+"|]":function(o$1)
  {
   var s,x$1,x$2,mapping;
   s=Global.String(o$1);
   return s==="[object Object]"?"{"+(x$1=(x$2=JSModule.GetFields(o$1),(mapping=function(a)
   {
    return a[0]+" = "+PrintfHelpers.prettyPrint(a[1]);
   },function(array)
   {
    return Arrays.map(mapping,array);
   })(x$2)),Strings.concat("; ",x$1))+"}":s;
  }(o):Global.String(o));
 };
 PrintfHelpers.printArray2D=function(p,o)
 {
  return o===null?"null":"[["+Strings.concat("][",Seq.delay(function()
  {
   var l2;
   l2=o.length?o[0].length:0;
   return Seq.map(function(i)
   {
    return Strings.concat("; ",Seq.delay(function()
    {
     return Seq.map(function(j)
     {
      return p(Arrays.get2D(o,i,j));
     },Operators.range(0,l2-1));
    }));
   },Operators.range(0,o.length-1));
  }))+"]]";
 };
 PrintfHelpers.printArray=function(p,o)
 {
  var x;
  return o===null?"null":"[|"+(x=Arrays.map(p,o),Strings.concat("; ",x))+"|]";
 };
 PrintfHelpers.printList=function(p,o)
 {
  return"["+Strings.concat("; ",Seq.map(p,o))+"]";
 };
 PrintfHelpers.padNumLeft=function(s,l)
 {
  var f,_this;
  f=Arrays.get(s,0);
  return((f===" "?true:f==="+")?true:f==="-")?f+(_this=s.substr(1),Strings.PadLeftWith(_this,l-1,48)):Strings.PadLeftWith(s,l,48);
 };
 PrintfHelpers.spaceForPos=function(n,s)
 {
  return 0<=n?" "+s:s;
 };
 PrintfHelpers.plusForPos=function(n,s)
 {
  return 0<=n?"+"+s:s;
 };
 PrintfHelpers.toSafe=function(s)
 {
  return s==null?"":s;
 };
 AsyncBody=Concurrency.AsyncBody=Runtime.Class({},null,AsyncBody);
 AsyncBody.New=function(k,ct)
 {
  return new AsyncBody({
   k:k,
   ct:ct
  });
 };
 Scheduler=Concurrency.Scheduler=Runtime.Class({
  tick:function()
  {
   var loop;
   var $this=this;
   var t=Global.Date.now();
   loop=true;
   while(loop)
    {
     var matchValue;
     matchValue=this.robin.length;
     matchValue===0?(this.idle=true,void(loop=false)):((this.robin.shift())(),Global.Date.now()-t>40?(Global.setTimeout(function()
     {
      $this.tick();
     },0),void(loop=false)):null);
    }
  },
  Fork:function(action)
  {
   var $this;
   $this=this;
   this.robin.push(action);
   this.idle?(this.idle=false,Global.setTimeout(function()
   {
    $this.tick();
   },0)):null;
  }
 },null,Scheduler);
 Scheduler.New=Runtime.Ctor(function()
 {
  this.idle=true;
  this.robin=[];
  null;
 },Scheduler);
 Concurrency.For=function(s,b)
 {
  return Concurrency.Using(Enumerator.Get(s),function(ie)
  {
   return Concurrency.While(function()
   {
    return ie.MoveNext();
   },Concurrency.Delay(function()
   {
    return b(ie.Current());
   }));
  });
 };
 Concurrency.While=function(g,c)
 {
  return g()?Concurrency.Bind(c,function()
  {
   return Concurrency.While(g,c);
  }):Concurrency.Return();
 };
 Concurrency.Using=function(x,f)
 {
  return Concurrency.TryFinally(f(x),function()
  {
   x.Dispose();
  });
 };
 Concurrency.TryCancelled=function(run,comp)
 {
  return Concurrency.checkCancel(function(c)
  {
   run(AsyncBody.New(function($1)
   {
    $1.$==2?(comp($1.$0),c.k($1)):c.k($1);
   },c.ct));
  });
 };
 Concurrency.OnCancel=function(action)
 {
  return Concurrency.checkCancel(function(c)
  {
   c.k({
    $:0,
    $0:Concurrency.Register(c.ct,action)
   });
  });
 };
 Concurrency.StartChild=function(r,t)
 {
  return Concurrency.checkCancel(function(c)
  {
   var inTime,cached,queue,tReg;
   inTime=[true];
   cached=[null];
   queue=[];
   tReg=(t!=null?t.$==1:false)?{
    $:1,
    $0:Global.setTimeout(function()
    {
     inTime[0]=false;
     var err={
      $:1,
      $0:new TimeoutException.New()
     };
     while(queue.length>0)
      (queue.shift())(err);
    },t.$0)
   }:null;
   Concurrency.scheduler().Fork(function()
   {
    r(AsyncBody.New(function(res)
    {
     if(inTime[0])
      {
       cached[0]={
        $:1,
        $0:res
       };
       (tReg!=null?tReg.$==1:false)?Global.clearTimeout(tReg.$0):null;
       while(queue.length>0)
        (queue.shift())(res);
      }
    },c.ct));
   });
   c.k({
    $:0,
    $0:Concurrency.checkCancel(function(c2)
    {
     var matchValue;
     inTime[0]?(matchValue=cached[0],matchValue==null?queue.push(c2.k):c2.k(matchValue.$0)):c2.k({
      $:1,
      $0:new TimeoutException.New()
     });
    })
   });
  });
 };
 Concurrency.Parallel=function(cs)
 {
  var cs$1;
  cs$1=Arrays.ofSeq(cs);
  return Arrays.length(cs$1)===0?Concurrency.Return([]):Concurrency.checkCancel(function(c)
  {
   var n,o,a,accept;
   n=cs$1.length;
   o=[n];
   a=new Global.Array(n);
   accept=Runtime.Curried2(function(i,x)
   {
    var $1;
    var matchValue=[o[0],x];
    switch(matchValue[0]===0?0:matchValue[0]===1?matchValue[1].$==0?1:($1=[matchValue[0],matchValue[1]],3):matchValue[1].$==0?2:($1=[matchValue[0],matchValue[1]],3))
    {
     case 0:
      break;
     case 1:
      Arrays.set(a,i,matchValue[1].$0);
      o[0]=0;
      c.k({
       $:0,
       $0:a
      });
      break;
     case 2:
      Arrays.set(a,i,matchValue[1].$0);
      o[0]=matchValue[0]-1;
      break;
     case 3:
      o[0]=0;
      c.k($1[1]);
      break;
    }
   });
   Arrays.iteri(Runtime.Curried2(function(i,run)
   {
    Concurrency.scheduler().Fork(function()
    {
     run(AsyncBody.New(accept(i),c.ct));
    });
   }),cs$1);
  });
 };
 Concurrency.Sleep=function(ms)
 {
  return Concurrency.checkCancel(function(c)
  {
   var pending,pending$1,creg,creg$1,pending$2,creg$2;
   pending=function()
   {
    return Global.setTimeout(function()
    {
     Lazy.Force(creg$1).Dispose();
     Concurrency.scheduler().Fork(function()
     {
      c.k({
       $:0,
       $0:null
      });
     });
    },ms);
   };
   pending$1=Lazy.Create(pending);
   creg=function()
   {
    return Concurrency.Register(c.ct,function()
    {
     var handle;
     handle=Lazy.Force(pending$1);
     Global.clearTimeout(handle);
     Concurrency.scheduler().Fork(function()
     {
      c.k({
       $:2,
       $0:new OperationCanceledException.New(c.ct)
      });
     });
    });
   };
   creg$1=Lazy.Create(creg);
   pending$2=Lazy.Force(pending$1);
   creg$2=Lazy.Force(creg$1);
  });
 };
 Concurrency.StartAsTask=function(c,ctOpt)
 {
  var tcs;
  tcs=new TaskCompletionSource.New();
  Concurrency.StartWithContinuations(c,function(arg00)
  {
   tcs.SetResult(arg00);
  },function(arg00)
  {
   tcs.SetException$1(arg00);
  },function()
  {
   tcs.SetCanceled();
  },ctOpt);
  return tcs.get_Task();
 };
 Concurrency.AwaitTask1=function(t)
 {
  return Concurrency.FromContinuations(function(a)
  {
   var ok,err,cc;
   ok=a[0];
   err=a[1];
   cc=a[2];
   Unchecked.Equals(t.get_Status(),0)?t.Start():null;
   t.ContinueWith$2(function(t$1)
   {
    return t$1.get_IsCanceled()?cc(OperationCanceledException.New.call(this,Concurrency.noneCT())):t$1.get_IsFaulted()?err(t$1.get_Exception()):ok(t$1.get_Result());
   });
  });
 };
 Concurrency.AwaitTask=function(t)
 {
  return Concurrency.FromContinuations(function(a)
  {
   var ok,err,cc;
   ok=a[0];
   err=a[1];
   cc=a[2];
   Unchecked.Equals(t.get_Status(),0)?t.Start():null;
   t.ContinueWith$2(function(t$1)
   {
    return t$1.get_IsCanceled()?cc(OperationCanceledException.New.call(this,Concurrency.noneCT())):t$1.get_IsFaulted()?err(t$1.get_Exception()):ok();
   });
  });
 };
 Concurrency.AwaitEvent=function(e,ca)
 {
  return Concurrency.checkCancel(function(c)
  {
   var sub,sub$1,creg,creg$1,sub$2,creg$2;
   sub=function()
   {
    return Util.subscribeTo(e,function(x)
    {
     Lazy.Force(sub$1).Dispose();
     Lazy.Force(creg$1).Dispose();
     Concurrency.scheduler().Fork(function()
     {
      c.k({
       $:0,
       $0:x
      });
     });
    });
   };
   sub$1=Lazy.Create(sub);
   creg=function()
   {
    return Concurrency.Register(c.ct,function()
    {
     (ca!=null?ca.$==1:false)?ca.$0():(Lazy.Force(sub$1).Dispose(),Concurrency.scheduler().Fork(function()
     {
      c.k({
       $:2,
       $0:new OperationCanceledException.New(c.ct)
      });
     }));
    });
   };
   creg$1=Lazy.Create(creg);
   sub$2=Lazy.Force(sub$1);
   creg$2=Lazy.Force(creg$1);
  });
 };
 Concurrency.Start=function(c,ctOpt)
 {
  Concurrency.StartWithContinuations(c,function()
  {
  },function(exn)
  {
   Global.console.log.apply(Global.console,["WebSharper: Uncaught asynchronous exception"].concat([exn]));
  },function()
  {
  },ctOpt);
 };
 Concurrency.StartWithContinuations=function(c,s,f,cc,ctOpt)
 {
  var ct;
  ct=Operators.DefaultArg(ctOpt,(Concurrency.defCTS())[0]);
  Concurrency.scheduler().Fork(function()
  {
   c(AsyncBody.New(function($1)
   {
    $1.$==1?f($1.$0):$1.$==2?cc($1.$0):s($1.$0);
   },ct));
  });
 };
 Concurrency.FromContinuations=function(subscribe)
 {
  return Concurrency.checkCancel(function(c)
  {
   var continued,once;
   continued=[false];
   once=function(cont)
   {
    continued[0]?Operators.FailWith("A continuation provided by Async.FromContinuations was invoked multiple times"):(continued[0]=true,Concurrency.scheduler().Fork(cont));
   };
   subscribe([function(a)
   {
    once(function()
    {
     c.k({
      $:0,
      $0:a
     });
    });
   },function(e)
   {
    once(function()
    {
     c.k({
      $:1,
      $0:e
     });
    });
   },function(e)
   {
    once(function()
    {
     c.k({
      $:2,
      $0:e
     });
    });
   }]);
  });
 };
 Concurrency.GetCT=function()
 {
  SC$2.$cctor();
  return SC$2.GetCT;
 };
 Concurrency.Catch=function(r)
 {
  return Concurrency.checkCancel(function(c)
  {
   try
   {
    r(AsyncBody.New(function($1)
    {
     $1.$==0?c.k({
      $:0,
      $0:new Choice2({
       $:0,
       $0:$1.$0
      })
     }):$1.$==1?c.k({
      $:0,
      $0:new Choice2({
       $:1,
       $0:$1.$0
      })
     }):c.k($1);
    },c.ct));
   }
   catch(e)
   {
    c.k({
     $:0,
     $0:new Choice2({
      $:1,
      $0:e
     })
    });
   }
  });
 };
 Concurrency.TryWith=function(r,f)
 {
  return Concurrency.checkCancel(function(c)
  {
   r(AsyncBody.New(function($1)
   {
    if($1.$==0)
     c.k({
      $:0,
      $0:$1.$0
     });
    else
     if($1.$==1)
      try
      {
       (f($1.$0))(c);
      }
      catch(e)
      {
       c.k($1);
      }
     else
      c.k($1);
   },c.ct));
  });
 };
 Concurrency.TryFinally=function(run,f)
 {
  return Concurrency.checkCancel(function(c)
  {
   run(AsyncBody.New(function(r)
   {
    try
    {
     f();
     c.k(r);
    }
    catch(e)
    {
     c.k({
      $:1,
      $0:e
     });
    }
   },c.ct));
  });
 };
 Concurrency.Delay=function(mk)
 {
  return Concurrency.checkCancel(function(c)
  {
   try
   {
    (mk(null))(c);
   }
   catch(e)
   {
    c.k({
     $:1,
     $0:e
    });
   }
  });
 };
 Concurrency.Ignore=function(r)
 {
  return Concurrency.Bind(r,function()
  {
   return Concurrency.Return();
  });
 };
 Concurrency.Combine=function(a,b)
 {
  return Concurrency.Bind(a,function()
  {
   return b;
  });
 };
 Concurrency.Bind=function(r,f)
 {
  return Concurrency.checkCancel(function(c)
  {
   r(AsyncBody.New(function($1)
   {
    var x;
    $1.$==0?(x=$1.$0,Concurrency.scheduler().Fork(function()
    {
     try
     {
      (f(x))(c);
     }
     catch(e)
     {
      c.k({
       $:1,
       $0:e
      });
     }
    })):Concurrency.scheduler().Fork(function()
    {
     c.k($1);
    });
   },c.ct));
  });
 };
 Concurrency.Return=function(x)
 {
  return Concurrency.checkCancel(function(c)
  {
   c.k({
    $:0,
    $0:x
   });
  });
 };
 Concurrency.checkCancel=function(r)
 {
  return function(c)
  {
   c.ct.c?c.k({
    $:2,
    $0:new OperationCanceledException.New(c.ct)
   }):r(c);
  };
 };
 Concurrency.defCTS=function()
 {
  SC$2.$cctor();
  return SC$2.defCTS;
 };
 Concurrency.scheduler=function()
 {
  SC$2.$cctor();
  return SC$2.scheduler;
 };
 Concurrency.Register=function(ct,callback)
 {
  var i;
  return ct===Concurrency.noneCT()?{
   Dispose:function()
   {
    return null;
   }
  }:(i=ct.r.push(callback)-1,{
   Dispose:function()
   {
    return Arrays.set(ct.r,i,function()
    {
    });
   }
  });
 };
 Concurrency.noneCT=function()
 {
  SC$2.$cctor();
  return SC$2.noneCT;
 };
 SC$2.$cctor=Runtime.Cctor(function()
 {
  SC$2.noneCT={
   c:false,
   r:[]
  };
  SC$2.scheduler=new Scheduler.New();
  SC$2.defCTS=[new CancellationTokenSource.New()];
  SC$2.GetCT=Concurrency.checkCancel(function(c)
  {
   c.k({
    $:0,
    $0:c.ct
   });
  });
 });
 T=Enumerator.T=Runtime.Class({
  Dispose:function()
  {
   this.d?this.d(this):null;
  },
  Current:function()
  {
   return this.c;
  },
  Current0:function()
  {
   return this.c;
  },
  MoveNext:function()
  {
   return this.n(this);
  }
 },null,T);
 T.New=Runtime.Ctor(function(s,c,n,d)
 {
  this.s=s;
  this.c=c;
  this.n=n;
  this.d=d;
  null;
 },T);
 Enumerator.Get0=function(x)
 {
  return x instanceof Global.Array?Enumerator.ArrayEnumerator(x):Unchecked.Equals(typeof x,"string")?Enumerator.StringEnumerator(x):"GetEnumerator0"in x?x.GetEnumerator0():x.GetEnumerator();
 };
 Enumerator.Get=function(x)
 {
  return x instanceof Global.Array?Enumerator.ArrayEnumerator(x):Unchecked.Equals(typeof x,"string")?Enumerator.StringEnumerator(x):x.GetEnumerator();
 };
 Enumerator.StringEnumerator=function(s)
 {
  return new T.New(0,null,function(e)
  {
   var i;
   i=e.s;
   return i<s.length?(e.c=s.charCodeAt(i),e.s=i+1,true):false;
  },void 0);
 };
 Enumerator.ArrayEnumerator=function(s)
 {
  return new T.New(0,null,function(e)
  {
   var i;
   i=e.s;
   return i<Arrays.length(s)?(e.c=Arrays.get(s,i),e.s=i+1,true):false;
  },void 0);
 };
 SingleNode=HtmlContentExtensions.SingleNode=Runtime.Class({
  ReplaceInDom:function(old)
  {
   this.node.parentNode.replaceChild(this.node,old);
  }
 },null,SingleNode);
 SingleNode.New=Runtime.Ctor(function(node)
 {
  this.node=node;
  null;
 },SingleNode);
 Activator.hasDocument=function()
 {
  return typeof Global.document!=="undefined";
 };
 Activator.Activate=function()
 {
  var meta,node;
  Activator.hasDocument()?(meta=Global.document.getElementById("websharper-data"),meta?(node=Global.document,Global.jQuery(node)).ready(function()
  {
   var text,obj,x,action;
   text=meta.getAttribute("content");
   obj=Json.Activate(Global.JSON.parse(text));
   x=JSModule.GetFields(obj);
   (action=function(a)
   {
    var p;
    p=a[1].Body();
    p.ReplaceInDom(Global.document.getElementById(a[0]));
   },function(array)
   {
    Arrays.iter(action,array);
   })(x);
  }):null):null;
 };
 Arrays.splitInto=function(count,arr)
 {
  var $1,startIndex;
  count<=0?Operators.FailWith("Count must be positive"):null;
  var len=Arrays.length(arr);
  if(len===0)
   $1=[];
  else
   {
    var count$1=Operators.Min(count,len);
    var res=Arrays.create(count$1,null);
    var minChunkSize=len/count$1>>0;
    startIndex=0;
    var i,$2;
    for(i=0,$2=len%count$1-1;i<=$2;i++){
     Arrays.set(res,i,Arrays.sub(arr,startIndex,minChunkSize+1));
     startIndex=startIndex+minChunkSize+1;
    }
    var i$1,$3;
    for(i$1=len%count$1,$3=count$1-1;i$1<=$3;i$1++){
     Arrays.set(res,i$1,Arrays.sub(arr,startIndex,minChunkSize));
     startIndex=startIndex+minChunkSize;
    }
    $1=res;
   }
  return $1;
 };
 Arrays.contains=function(item,arr)
 {
  var $1,c,i,$2;
  c=true;
  i=0;
  var l=Arrays.length(arr);
  while(c?i<l:false)
   Unchecked.Equals(Arrays.get(arr,i),item)?void(c=false):void(i=i+1);
  $2=!c;
  return $2;
 };
 Arrays.tryFindBack=function(f,arr)
 {
  var res,i;
  res=null;
  i=arr.length-1;
  while(i>0?res==null:false)
   {
    f(Arrays.get(arr,i))?void(res={
     $:1,
     $0:Arrays.get(arr,i)
    }):null;
    i=i-1;
   }
  return res;
 };
 Arrays.tryFindIndexBack=function(f,arr)
 {
  var res,i;
  res=null;
  i=arr.length-1;
  while(i>0?res==null:false)
   {
    f(Arrays.get(arr,i))?void(res={
     $:1,
     $0:i
    }):null;
    i=i-1;
   }
  return res;
 };
 Arrays.mapFold=function(f,zero,arr)
 {
  var a,acc;
  var r=(a=arr.length,new Global.Array(a));
  acc=zero;
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++){
   var patternInput;
   patternInput=(f(acc))(Arrays.get(arr,i));
   r[i]=patternInput[0];
   acc=patternInput[1];
  }
  return[r,acc];
 };
 Arrays.mapFoldBack=function(f,arr,zero)
 {
  var $1,a,acc,$2;
  var r=(a=arr.length,new Global.Array(a));
  acc=zero;
  var j,$3;
  var len=arr.length;
  for(j=1,$3=len;j<=$3;j++){
   var i,patternInput;
   i=len-j;
   patternInput=(f(Arrays.get(arr,i)))(acc);
   r[i]=patternInput[0];
   acc=patternInput[1];
  }
  $2=[r,acc];
  return $2;
 };
 Arrays.mapInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(arr[i]);
 };
 Arrays.mapiInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=(f(i))(arr[i]);
  return arr;
 };
 Arrays.sortInPlaceByDescending=function(f,arr)
 {
  var x,_this,f$1;
  x=(_this=Arrays.mapiInPlace(Runtime.Curried2(function(i,x$1)
  {
   return[x$1,[f(x$1),i]];
  }),arr),_this.sort(Runtime.CreateFuncWithArgs(function(a)
  {
   return-Operators.Compare(a[0][1],a[1][1]);
  })));
  (f$1=function(tuple)
  {
   return tuple[0];
  },function(arr$1)
  {
   Arrays.mapInPlace(f$1,arr$1);
  })(x);
 };
 Seq.tryHead=function(s)
 {
  var $1;
  var e=Enumerator.Get(s);
  try
  {
   $1=e.MoveNext()?{
    $:1,
    $0:e.Current()
   }:null;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.tryItem=function(i,s)
 {
  var $1,j;
  if(i<0)
   $1=null;
  else
   {
    j=0;
    var e=Enumerator.Get(s);
    try
    {
     var go;
     go=true;
     while(go?j<=i:false)
      e.MoveNext()?void(j=j+1):void(go=false);
     $1=go?{
      $:1,
      $0:e.Current()
     }:null;
    }
    finally
    {
     "Dispose"in e?e.Dispose():null;
    }
   }
  return $1;
 };
 Seq.tryLast=function(s)
 {
  var $1;
  var e=Enumerator.Get(s);
  try
  {
   var $2;
   if(e.MoveNext())
    {
     while(e.MoveNext())
      ;
     $2={
      $:1,
      $0:e.Current()
     };
    }
   else
    $2=null;
   $1=$2;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.chunkBySize=function(size,s)
 {
  size<=0?Operators.FailWith("Chunk size must be positive"):null;
  return{
   GetEnumerator:function()
   {
    var o,dispose;
    o=Enumerator.Get(s);
    dispose=function()
    {
     o.Dispose();
    };
    return new T.New(null,null,function(e)
    {
     var $1;
     if(o.MoveNext())
      {
       var res=[o.Current()];
       while(Arrays.length(res)<size?o.MoveNext():false)
        res.push(o.Current());
       e.c=res;
       $1=true;
      }
     else
      $1=false;
     return $1;
    },dispose);
   }
  };
 };
 Seq.compareWith=function(f,s1,s2)
 {
  var $1;
  var e1=Enumerator.Get(s1);
  try
  {
   var $2;
   var e2=Enumerator.Get(s2);
   try
   {
    var r,loop;
    r=0;
    loop=true;
    while(loop?r===0:false)
     {
      var matchValue;
      matchValue=[e1.MoveNext(),e2.MoveNext()];
      matchValue[0]?matchValue[1]?void(r=(f(e1.Current()))(e2.Current())):void(r=1):matchValue[1]?void(r=-1):void(loop=false);
     }
    $2=r;
   }
   finally
   {
    "Dispose"in e2?e2.Dispose():null;
   }
   $1=$2;
  }
  finally
  {
   "Dispose"in e1?e1.Dispose():null;
  }
  return $1;
 };
 Seq.countBy=function(f,s)
 {
  return Seq.delay(function()
  {
   var $1;
   var d={};
   var e=Enumerator.Get(s);
   try
   {
    var x,x$1,mapping;
    var keys=[];
    while(e.MoveNext())
     {
      var k,h;
      k=f(e.Current());
      h=Unchecked.Hash(k);
      d.hasOwnProperty(h)?void(d[h]=d[h]+1):(keys.push(k),void(d[h]=1));
     }
    $1=(x=(x$1=keys.slice(0),(mapping=function(k$1)
    {
     return[k$1,d[Unchecked.Hash(k$1)]];
    },function(array)
    {
     return Arrays.map(mapping,array);
    })(x$1)),Global.id(x));
   }
   finally
   {
    "Dispose"in e?e.Dispose():null;
   }
   return $1;
  });
 };
 Seq.distinct=function(s)
 {
  return Seq.distinctBy(Global.id,s);
 };
 Seq.distinctBy=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var o,seen,add,dispose;
    o=Enumerator.Get(s);
    seen=Global.Array.prototype.constructor.apply(Global.Array,[]);
    add=function(c)
    {
     var k,h,cont;
     k=f(c);
     h=Unchecked.Hash(k);
     cont=seen[h];
     return Unchecked.Equals(cont,void 0)?(seen[h]=[k],true):Arrays.contains(k,cont)?false:(cont.push(k),true);
    };
    dispose=function()
    {
     o.Dispose();
    };
    return new T.New(null,null,function(e)
    {
     var $1,cur,has;
     if(o.MoveNext())
      {
       cur=o.Current();
       has=add(cur);
       while(!has?o.MoveNext():false)
        {
         cur=o.Current();
         has=add(cur);
        }
       $1=has?(e.c=cur,true):false;
      }
     else
      $1=false;
     return $1;
    },dispose);
   }
  };
 };
 Seq.except=function(itemsToExclude,s)
 {
  return{
   GetEnumerator:function()
   {
    var dispose;
    var o=Enumerator.Get(s);
    var seen=Global.Array.prototype.constructor.apply(Global.Array,[]);
    var add=function(c)
    {
     var h,cont;
     h=Unchecked.Hash(c);
     cont=seen[h];
     return Unchecked.Equals(cont,void 0)?(seen[h]=[c],true):Arrays.contains(c,cont)?false:(cont.push(c),true);
    };
    var enumerator=Enumerator.Get(itemsToExclude);
    try
    {
     while(enumerator.MoveNext())
      add(enumerator.Current());
    }
    finally
    {
     "Dispose"in enumerator?enumerator.Dispose():null;
    }
    dispose=function()
    {
     o.Dispose();
    };
    return new T.New(null,null,function(e)
    {
     var $1,cur,has;
     if(o.MoveNext())
      {
       cur=o.Current();
       has=add(cur);
       while(!has?o.MoveNext():false)
        {
         cur=o.Current();
         has=add(cur);
        }
       $1=has?(e.c=cur,true):false;
      }
     else
      $1=false;
     return $1;
    },dispose);
   }
  };
 };
 List.skip=function(i,l)
 {
  var res;
  res=l;
  var j,$1;
  for(j=1,$1=i;j<=$1;j++)res.$==0?Operators.FailWith("Input list too short."):void(res=res.$1);
  return res;
 };
 Seq.groupBy=function(f,s)
 {
  return Seq.delay(function()
  {
   var $1;
   var d={};
   var keys=[];
   var e=Enumerator.Get(s);
   try
   {
    while(e.MoveNext())
     {
      var c,k,h;
      c=e.Current();
      k=f(c);
      h=Unchecked.Hash(k);
      !d.hasOwnProperty(h)?keys.push(k):null;
      ({}[h]=k);
      d.hasOwnProperty(h)?d[h].push(c):void(d[h]=[c]);
     }
    $1=Arrays.map(function(k$1)
    {
     return[k$1,d[Unchecked.Hash(k$1)]];
    },keys);
   }
   finally
   {
    "Dispose"in e?e.Dispose():null;
   }
   return $1;
  });
 };
 Seq.insufficient=function()
 {
  return Operators.FailWith("The input sequence has an insufficient number of elements.");
 };
 Seq.last=function(s)
 {
  var $1;
  var e=Enumerator.Get(s);
  try
  {
   var $2;
   if(!e.MoveNext())
    $2=Seq.insufficient();
   else
    {
     while(e.MoveNext())
      ;
     $2=e.Current();
    }
   $1=$2;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 List.map3=function(f,l1,l2,l3)
 {
  var x;
  x=Arrays.map2(Runtime.Curried2(function(func,arg1)
  {
   return func(arg1);
  }),Arrays.map2(f,Arrays.ofList(l1),Arrays.ofList(l2)),Arrays.ofList(l3));
  return List.ofArray(x);
 };
 Seq.contains=function(el,s)
 {
  var $1;
  var e=Enumerator.Get(s);
  try
  {
   var r;
   r=false;
   while(!r?e.MoveNext():false)
    r=Unchecked.Equals(e.Current(),el);
   $1=r;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.pairwise=function(s)
 {
  var x,mapping;
  x=Seq.windowed(2,s);
  return(mapping=function(x$1)
  {
   return[Arrays.get(x$1,0),Arrays.get(x$1,1)];
  },function(source)
  {
   return Seq.map(mapping,source);
  })(x);
 };
 List.skipWhile=function(predicate,list)
 {
  var rest;
  rest=list;
  while(!(rest.$==0)?predicate(List.head(rest)):false)
   rest=List.tail(rest);
  return rest;
 };
 Seq.unfold=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    return new T.New(s,null,function(e)
    {
     var matchValue;
     matchValue=f(e.s);
     return matchValue==null?false:(e.c=matchValue.$0[0],e.s=matchValue.$0[1],true);
    },void 0);
   }
  };
 };
 Seq.truncate=function(n,s)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator.Get(s),function(e)
   {
    var i;
    i=[0];
    return Seq.enumWhile(function()
    {
     return e.MoveNext()?i[0]<n:false;
    },Seq.delay(function()
    {
     Ref.incr(i);
     return[e.Current()];
    }));
   });
  });
 };
 Seq.nonNegative=function()
 {
  return Operators.FailWith("The input must be non-negative.");
 };
 Seq.windowed=function(windowSize,s)
 {
  windowSize<=0?Operators.FailWith("The input must be positive."):null;
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator.Get(s),function(e)
   {
    var q;
    q=[];
    return Seq.append(Seq.enumWhile(function()
    {
     return q.length<windowSize?e.MoveNext():false;
    },Seq.delay(function()
    {
     q.push(e.Current());
     return[];
    })),Seq.delay(function()
    {
     return q.length===windowSize?Seq.append([q.slice(0)],Seq.delay(function()
     {
      return Seq.enumWhile(function()
      {
       return e.MoveNext();
      },Seq.delay(function()
      {
       q.shift();
       q.push(e.Current());
       return[q.slice(0)];
      }));
     })):[];
    }));
   });
  });
 };
 Arrays.checkBounds=function(arr,n)
 {
  (n<0?true:n>=arr.length)?Operators.FailWith("Index was outside the bounds of the array."):null;
 };
 Arrays.checkBounds2D=function(arr,n1,n2)
 {
  if(((n1<0?true:n2<0)?true:n1>=arr.length)?true:n2>=(arr.length?arr[0].length:0))
   {
    var e=new IndexOutOfRangeException.New();
    throw e;
   }
 };
 Arrays.checkRange=function(arr,start,size)
 {
  ((size<0?true:start<0)?true:arr.length<start+size)?Operators.FailWith("Index was outside the bounds of the array."):null;
 };
 Arrays.set=function(arr,n,x)
 {
  Arrays.checkBounds(arr,n);
  arr[n]=x;
 };
 Arrays.get=function(arr,n)
 {
  Arrays.checkBounds(arr,n);
  return arr[n];
 };
 Arrays.sub=function(arr,start,length)
 {
  Arrays.checkRange(arr,start,length);
  return arr.slice(start,start+length);
 };
 Arrays.setSub=function(arr,start,len,src)
 {
  var i,$1;
  for(i=0,$1=len-1;i<=$1;i++)Arrays.set(arr,start+i,Arrays.get(src,i));
 };
 Arrays.get2D=function(arr,n1,n2)
 {
  Arrays.checkBounds2D(arr,n1,n2);
  return arr[n1][n2];
 };
 Arrays.set2D=function(arr,n1,n2,x)
 {
  Arrays.checkBounds2D(arr,n1,n2);
  arr[n1][n2]=x;
 };
 Arrays.zeroCreate2D=function(n,m)
 {
  var arr;
  arr=Arrays.init(n,function()
  {
   return Arrays.create(m,null);
  });
  arr.dims=2;
  return arr;
 };
 Arrays.sub2D=function(src,src1,src2,len1,len2)
 {
  var i,$1;
  var len1$1=len1<0?0:len1;
  var len2$1=len2<0?0:len2;
  var dst=Arrays.zeroCreate2D(len1$1,len2$1);
  for(i=0,$1=len1$1-1;i<=$1;i++){
   var j,$2;
   for(j=0,$2=len2$1-1;j<=$2;j++)Arrays.set2D(dst,i,j,Arrays.get2D(src,src1+i,src2+j));
  }
  return dst;
 };
 Arrays.setSub2D=function(dst,src1,src2,len1,len2,src)
 {
  var i,$1;
  for(i=0,$1=len1-1;i<=$1;i++){
   var j,$2;
   for(j=0,$2=len2-1;j<=$2;j++)Arrays.set2D(dst,src1+i,src2+j,Arrays.get2D(src,i,j));
  }
 };
 Arrays.length=function(arr)
 {
  return arr.dims===2?arr.length*arr.length:arr.length;
 };
 WebSharper.checkThis=function(_this)
 {
  return Unchecked.Equals(_this,null)?Operators.InvalidOp("The initialization of an object or value resulted in an object or value being accessed recursively before it was fully initialized."):_this;
 };
 Arrays.reverse=function(array,offset,length)
 {
  var a;
  a=Arrays.sub(array,offset,length).slice().reverse();
  Arrays.blit(a,0,array,offset,Arrays.length(a));
 };
 Arrays.sum=function(arr)
 {
  var sum=0;
  var i=0;
  for(;i<arr.length;i++)sum+=arr[i];
  return sum;
 };
 Arrays.sumBy=function(f,arr)
 {
  var sum=0;
  var i=0;
  for(;i<arr.length;i++)sum+=f(arr[i]);
  return sum;
 };
 Arrays.average=function(arr)
 {
  var x,x$1;
  return(x=Arrays.sum(arr),Global.Number(x))/(x$1=arr.length,Global.Number(x$1));
 };
 Arrays.averageBy=function(f,arr)
 {
  var x,x$1;
  return(x=Arrays.sumBy(f,arr),Global.Number(x))/(x$1=arr.length,Global.Number(x$1));
 };
 Arrays.blit=function(arr1,start1,arr2,start2,length)
 {
  Arrays.checkRange(arr1,start1,length);
  Arrays.checkRange(arr2,start2,length);
  var i,$1;
  for(i=0,$1=length-1;i<=$1;i++)arr2[start2+i]=arr1[start1+i];
 };
 Arrays.choose=function(f,arr)
 {
  var i,$1;
  var q=[];
  for(i=0,$1=arr.length-1;i<=$1;i++){
   var matchValue;
   matchValue=f(arr[i]);
   matchValue==null?null:q.push(matchValue.$0);
  }
  return q;
 };
 Arrays.collect=function(f,x)
 {
  var x$1;
  x$1=Arrays.map(f,x);
  return Global.Array.prototype.concat.apply([],x$1);
 };
 Arrays.concat=function(xs)
 {
  var x;
  x=Arrays.ofSeq(xs);
  return Global.Array.prototype.concat.apply([],x);
 };
 Arrays.create=function(size,value)
 {
  var i,$1;
  var r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=value;
  return r;
 };
 Arrays.exists2=function(f,arr1,arr2)
 {
  Arrays.checkLength(arr1,arr2);
  return Seq.exists2(f,arr1,arr2);
 };
 Arrays.fill=function(arr,start,length,value)
 {
  Arrays.checkRange(arr,start,length);
  var i,$1;
  for(i=start,$1=start+length-1;i<=$1;i++)arr[i]=value;
 };
 Arrays.filter=function(f,arr)
 {
  var i,$1;
  var r=[];
  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i])?r.push(arr[i]):null;
  return r;
 };
 Arrays.find=function(f,arr)
 {
  var matchValue;
  matchValue=Arrays.tryFind(f,arr);
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 Arrays.findINdex=function(f,arr)
 {
  var matchValue;
  matchValue=Arrays.tryFindIndex(f,arr);
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 Arrays.fold=function(f,zero,arr)
 {
  var acc;
  acc=zero;
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)acc=(f(acc))(arr[i]);
  return acc;
 };
 Arrays.fold2=function(f,zero,arr1,arr2)
 {
  var accum;
  Arrays.checkLength(arr1,arr2);
  accum=zero;
  var i,$1;
  for(i=0,$1=arr1.length-1;i<=$1;i++)accum=((f(accum))(arr1[i]))(arr2[i]);
  return accum;
 };
 Arrays.foldBack=function(f,arr,zero)
 {
  var $1,acc,$2;
  acc=zero;
  var i,$3;
  var len=arr.length;
  for(i=1,$3=len;i<=$3;i++)acc=(f(arr[len-i]))(acc);
  $2=acc;
  return $2;
 };
 Arrays.foldBack2=function(f,arr1,arr2,zero)
 {
  var $1,$2,accum;
  Arrays.checkLength(arr1,arr2);
  var len=arr1.length;
  accum=zero;
  var i,$3;
  for(i=1,$3=len;i<=$3;i++)accum=((f(arr1[len-i]))(arr2[len-i]))(accum);
  $2=accum;
  return $2;
 };
 Arrays.forall2=function(f,arr1,arr2)
 {
  Arrays.checkLength(arr1,arr2);
  return Seq.forall2(f,arr1,arr2);
 };
 Arrays.init=function(size,f)
 {
  size<0?Operators.FailWith("Negative size given."):null;
  var i,$1;
  var r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=f(i);
  return r;
 };
 Arrays.iter=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i]);
 };
 Arrays.iter2=function(f,arr1,arr2)
 {
  Arrays.checkLength(arr1,arr2);
  var i,$1;
  for(i=0,$1=arr1.length-1;i<=$1;i++)(f(arr1[i]))(arr2[i]);
 };
 Arrays.iteri=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)(f(i))(arr[i]);
 };
 Arrays.iteri2=function(f,arr1,arr2)
 {
  Arrays.checkLength(arr1,arr2);
  var i,$1;
  for(i=0,$1=arr1.length-1;i<=$1;i++)((f(i))(arr1[i]))(arr2[i]);
 };
 Arrays.map=function(f,arr)
 {
  var a,i,$1;
  var r=(a=arr.length,new Global.Array(a));
  for(i=0,$1=arr.length-1;i<=$1;i++)r[i]=f(arr[i]);
  return r;
 };
 Arrays.map2=function(f,arr1,arr2)
 {
  var a;
  Arrays.checkLength(arr1,arr2);
  var i,$1;
  var r=(a=arr2.length,new Global.Array(a));
  for(i=0,$1=arr2.length-1;i<=$1;i++)r[i]=(f(arr1[i]))(arr2[i]);
  return r;
 };
 Arrays.mapi=function(f,arr)
 {
  var a,i,$1;
  var y=(a=arr.length,new Global.Array(a));
  for(i=0,$1=arr.length-1;i<=$1;i++)y[i]=(f(i))(arr[i]);
  return y;
 };
 Arrays.mapi2=function(f,arr1,arr2)
 {
  var a;
  Arrays.checkLength(arr1,arr2);
  var i,$1;
  var res=(a=arr1.length,new Global.Array(a));
  for(i=0,$1=arr1.length-1;i<=$1;i++)res[i]=((f(i))(arr1[i]))(arr2[i]);
  return res;
 };
 Arrays.max=function(x)
 {
  return Arrays.reduce(Runtime.Curried2(Operators.Max),x);
 };
 Arrays.maxBy=function(f,arr)
 {
  return Arrays.reduce(Runtime.Curried2(function(x,y)
  {
   return Unchecked.Compare(f(x),f(y))===1?x:y;
  }),arr);
 };
 Arrays.min=function(x)
 {
  return Arrays.reduce(Runtime.Curried2(Operators.Min),x);
 };
 Arrays.minBy=function(f,arr)
 {
  return Arrays.reduce(Runtime.Curried2(function(x,y)
  {
   return Unchecked.Compare(f(x),f(y))===-1?x:y;
  }),arr);
 };
 Arrays.ofList=function(xs)
 {
  var l;
  var q=[];
  l=xs;
  while(!(l.$==0))
   {
    q.push(List.head(l));
    l=List.tail(l);
   }
  return q;
 };
 Arrays.ofSeq=function(xs)
 {
  var $1;
  if(xs instanceof Global.Array)
   $1=xs.slice();
  else
   if(xs instanceof T$1)
    $1=Arrays.ofList(xs);
   else
    {
     var q=[];
     var o=Enumerator.Get(xs);
     try
     {
      while(o.MoveNext())
       q.push(o.Current());
      $1=q;
     }
     finally
     {
      "Dispose"in o?o.Dispose():null;
     }
    }
  return $1;
 };
 Arrays.partition=function(f,arr)
 {
  var i,$1;
  var ret1=[];
  var ret2=[];
  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i])?ret1.push(arr[i]):ret2.push(arr[i]);
  return[ret1,ret2];
 };
 Arrays.permute=function(f,arr)
 {
  var a,i,$1;
  var ret=(a=arr.length,new Global.Array(a));
  for(i=0,$1=arr.length-1;i<=$1;i++)ret[f(i)]=arr[i];
  return ret;
 };
 Arrays.pick=function(f,arr)
 {
  var matchValue;
  matchValue=Arrays.tryPick(f,arr);
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 Arrays.reduce=function(f,arr)
 {
  var acc;
  Arrays.nonEmpty(arr);
  acc=arr[0];
  var i,$1;
  for(i=1,$1=arr.length-1;i<=$1;i++)acc=(f(acc))(arr[i]);
  return acc;
 };
 Arrays.reduceBack=function(f,arr)
 {
  var $1,$2,acc;
  Arrays.nonEmpty(arr);
  var len=arr.length;
  acc=arr[len-1];
  var i,$3;
  for(i=2,$3=len;i<=$3;i++)acc=(f(arr[len-i]))(acc);
  $2=acc;
  return $2;
 };
 Arrays.scan=function(f,zero,arr)
 {
  var a;
  var ret=(a=1+arr.length,new Global.Array(a));
  ret[0]=zero;
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)ret[i+1]=(f(ret[i]))(arr[i]);
  return ret;
 };
 Arrays.scanBack=function(f,arr,zero)
 {
  var len=arr.length;
  var ret=new Global.Array(1+len);
  ret[len]=zero;
  var i,$1;
  for(i=0,$1=len-1;i<=$1;i++)ret[len-i-1]=(f(arr[len-i-1]))(ret[len-i]);
  return ret;
 };
 Arrays.sort=function(arr)
 {
  var x,_this,mapping;
  x=(_this=Arrays.mapi(Runtime.Curried2(function(i,x$1)
  {
   return[x$1,i];
  }),arr),_this.sort(Runtime.CreateFuncWithArgs(function(a)
  {
   return Operators.Compare(a[0],a[1]);
  })));
  return(mapping=function(tuple)
  {
   return tuple[0];
  },function(array)
  {
   return Arrays.map(mapping,array);
  })(x);
 };
 Arrays.sortBy=function(f,arr)
 {
  var x,_this,mapping;
  x=(_this=Arrays.mapi(Runtime.Curried2(function(i,x$1)
  {
   return[x$1,[f(x$1),i]];
  }),arr),_this.sort(Runtime.CreateFuncWithArgs(function(a)
  {
   return Operators.Compare(a[0][1],a[1][1]);
  })));
  return(mapping=function(tuple)
  {
   return tuple[0];
  },function(array)
  {
   return Arrays.map(mapping,array);
  })(x);
 };
 Arrays.sortInPlace=function(arr)
 {
  var x,_this,f;
  x=(_this=Arrays.mapiInPlace(Runtime.Curried2(function(i,x$1)
  {
   return[x$1,i];
  }),arr),_this.sort(Runtime.CreateFuncWithArgs(function(a)
  {
   return Operators.Compare(a[0],a[1]);
  })));
  (f=function(tuple)
  {
   return tuple[0];
  },function(arr$1)
  {
   Arrays.mapInPlace(f,arr$1);
  })(x);
 };
 Arrays.sortInPlaceBy=function(f,arr)
 {
  var x,_this,f$1;
  x=(_this=Arrays.mapiInPlace(Runtime.Curried2(function(i,x$1)
  {
   return[x$1,[f(x$1),i]];
  }),arr),_this.sort(Runtime.CreateFuncWithArgs(function(a)
  {
   return Operators.Compare(a[0][1],a[1][1]);
  })));
  (f$1=function(tuple)
  {
   return tuple[0];
  },function(arr$1)
  {
   Arrays.mapInPlace(f$1,arr$1);
  })(x);
 };
 Arrays.sortInPlaceWith=function(comparer,arr)
 {
  arr.sort(Runtime.CreateFuncWithArgs(function(a)
  {
   return(comparer(a[0]))(a[1]);
  }));
 };
 Arrays.sortWith=function(comparer,arr)
 {
  var _this;
  _this=arr.slice();
  return _this.sort(Runtime.CreateFuncWithArgs(function(a)
  {
   return(comparer(a[0]))(a[1]);
  }));
 };
 Arrays.sortByDescending=function(f,arr)
 {
  var x,_this,mapping;
  x=(_this=Arrays.mapi(Runtime.Curried2(function(i,x$1)
  {
   return[x$1,[f(x$1),i]];
  }),arr),_this.sort(Runtime.CreateFuncWithArgs(function(a)
  {
   return-Operators.Compare(a[0][1],a[1][1]);
  })));
  return(mapping=function(tuple)
  {
   return tuple[0];
  },function(array)
  {
   return Arrays.map(mapping,array);
  })(x);
 };
 Arrays.sortDescending=function(arr)
 {
  var x,_this,mapping;
  x=(_this=Arrays.mapi(Runtime.Curried2(function(i,x$1)
  {
   return[x$1,i];
  }),arr),_this.sort(Runtime.CreateFuncWithArgs(function(a)
  {
   return-Operators.Compare(a[0],a[1]);
  })));
  return(mapping=function(tuple)
  {
   return tuple[0];
  },function(array)
  {
   return Arrays.map(mapping,array);
  })(x);
 };
 Arrays.tryFind=function(f,arr)
 {
  var res,i;
  res=null;
  i=0;
  while(i<arr.length?res==null:false)
   {
    f(arr[i])?void(res={
     $:1,
     $0:arr[i]
    }):null;
    i=i+1;
   }
  return res;
 };
 Arrays.tryFindIndex=function(f,arr)
 {
  var res,i;
  res=null;
  i=0;
  while(i<arr.length?res==null:false)
   {
    f(arr[i])?void(res={
     $:1,
     $0:i
    }):null;
    i=i+1;
   }
  return res;
 };
 Arrays.tryHead=function(arr)
 {
  return Arrays.length(arr)===0?null:{
   $:1,
   $0:arr[0]
  };
 };
 Arrays.tryItem=function(i,arr)
 {
  return(Arrays.length(arr)<=i?true:i<0)?null:{
   $:1,
   $0:arr[i]
  };
 };
 Arrays.tryLast=function(arr)
 {
  var len;
  len=Arrays.length(arr);
  return len===0?null:{
   $:1,
   $0:arr[len-1]
  };
 };
 Arrays.tryPick=function(f,arr)
 {
  var res,i;
  res=null;
  i=0;
  while(i<arr.length?res==null:false)
   {
    var matchValue;
    matchValue=f(arr[i]);
    (matchValue!=null?matchValue.$==1:false)?void(res=matchValue):null;
    i=i+1;
   }
  return res;
 };
 Arrays.unzip=function(arr)
 {
  var i,$1;
  var x=[];
  var y=[];
  for(i=0,$1=arr.length-1;i<=$1;i++){
   var patternInput;
   patternInput=arr[i];
   x.push(patternInput[0]);
   y.push(patternInput[1]);
  }
  return[x,y];
 };
 Arrays.unzip3=function(arr)
 {
  var i,$1;
  var x=[];
  var y=[];
  var z=[];
  for(i=0,$1=arr.length-1;i<=$1;i++){
   var matchValue;
   matchValue=arr[i];
   x.push(matchValue[0]);
   y.push(matchValue[1]);
   z.push(matchValue[2]);
  }
  return[x,y,z];
 };
 Arrays.zip=function(arr1,arr2)
 {
  Arrays.checkLength(arr1,arr2);
  var i,$1;
  var res=Arrays.create(arr1.length,null);
  for(i=0,$1=arr1.length-1;i<=$1;i++)res[i]=[arr1[i],arr2[i]];
  return res;
 };
 Arrays.zip3=function(arr1,arr2,arr3)
 {
  Arrays.checkLength(arr1,arr2);
  Arrays.checkLength(arr2,arr3);
  var i,$1;
  var res=Arrays.create(arr1.length,null);
  for(i=0,$1=arr1.length-1;i<=$1;i++)res[i]=[arr1[i],arr2[i],arr3[i]];
  return res;
 };
 Arrays.chunkBySize=function(size,array)
 {
  var x;
  x=Seq.chunkBySize(size,array);
  return Arrays.ofSeq(x);
 };
 Arrays.compareWith=function(f,a1,a2)
 {
  return Seq.compareWith(f,a1,a2);
 };
 Arrays.countBy=function(f,a)
 {
  var x;
  x=Seq.countBy(f,a);
  return Arrays.ofSeq(x);
 };
 Arrays.distinct=function(l)
 {
  var x;
  x=Seq.distinct(l);
  return Arrays.ofSeq(x);
 };
 Arrays.distinctBy=function(f,a)
 {
  return Arrays.ofSeq(Seq.distinctBy(f,a));
 };
 Arrays.except=function(itemsToExclude,a)
 {
  return Arrays.ofSeq(Seq.except(itemsToExclude,a));
 };
 Arrays.findBack=function(p,s)
 {
  var matchValue;
  matchValue=Arrays.tryFindBack(p,s);
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 Arrays.findIndexBack=function(p,s)
 {
  var matchValue;
  matchValue=Arrays.tryFindIndexBack(p,s);
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 Arrays.groupBy=function(f,a)
 {
  var x,x$1,mapping;
  x=(x$1=Seq.groupBy(f,a),Arrays.ofSeq(x$1));
  return(mapping=function(a$1)
  {
   return[a$1[0],Arrays.ofSeq(a$1[1])];
  },function(array)
  {
   return Arrays.map(mapping,array);
  })(x);
 };
 Arrays.head=function(ar)
 {
  return List.head(List.ofArray(ar));
 };
 Arrays.last=function(ar)
 {
  return Seq.last(ar);
 };
 Arrays.map3=function(f,arr1,arr2,arr3)
 {
  var a;
  Arrays.checkLength(arr1,arr2);
  Arrays.checkLength(arr1,arr3);
  var i,$1;
  var r=(a=arr3.length,new Global.Array(a));
  for(i=0,$1=arr3.length-1;i<=$1;i++)r[i]=((f(arr1[i]))(arr2[i]))(arr3[i]);
  return r;
 };
 Arrays.pairwise=function(a)
 {
  var x;
  x=Seq.pairwise(a);
  return Arrays.ofSeq(x);
 };
 Arrays.replicate=function(size,value)
 {
  return Arrays.create(size,value);
 };
 Arrays.indexed=function(ar)
 {
  return Arrays.mapi(Runtime.Curried2(function(a,b)
  {
   return[a,b];
  }),ar);
 };
 Arrays.skip=function(i,ar)
 {
  return i<0?Seq.nonNegative():i>Arrays.length(ar)?Seq.insufficient():ar.slice(i);
 };
 Arrays.skipWhile=function(predicate,ar)
 {
  var i;
  var len=Arrays.length(ar);
  i=0;
  while(i<len?predicate(ar[i]):false)
   i=i+1;
  return ar.slice(i);
 };
 Arrays.tail=function(ar)
 {
  return Arrays.skip(1,ar);
 };
 Arrays.take=function(n,ar)
 {
  return n<0?Seq.nonNegative():n>Arrays.length(ar)?Seq.insufficient():ar.slice(0,n);
 };
 Arrays.takeWhile=function(predicate,ar)
 {
  var i;
  var len=Arrays.length(ar);
  i=0;
  while(i<len?predicate(ar[i]):false)
   i=i+1;
  return ar.slice(0,i);
 };
 Arrays.truncate=function(n,ar)
 {
  return ar.slice(n);
 };
 Arrays.exactlyOne=function(ar)
 {
  return Arrays.length(ar)===1?ar[0]:Operators.FailWith("The input does not have precisely one element.");
 };
 Arrays.unfold=function(f,s)
 {
  return Arrays.ofSeq(Seq.unfold(f,s));
 };
 Arrays.windowed=function(windowSize,s)
 {
  var x;
  x=Seq.windowed(windowSize,s);
  return Arrays.ofSeq(x);
 };
 Arrays.splitAt=function(n,ar)
 {
  return[Arrays.take(n,ar),Arrays.skip(n,ar)];
 };
 Arrays.nonEmpty=function(arr)
 {
  arr.length===0?Operators.FailWith("The input array was empty."):null;
 };
 Arrays.checkLength=function(arr1,arr2)
 {
  arr1.length!==arr2.length?Operators.FailWith("The arrays have different lengths."):null;
 };
 Arrays2D.init=function(n,m,f)
 {
  var i,$1;
  var array=Arrays.zeroCreate2D(n,m);
  for(i=0,$1=n-1;i<=$1;i++){
   var j,$2;
   for(j=0,$2=m-1;j<=$2;j++)Arrays.set2D(array,i,j,(f(i))(j));
  }
  return array;
 };
 Arrays2D.iter=function(f,array)
 {
  var i,$1;
  var count1=array.length;
  var count2=array.length?array[0].length:0;
  for(i=0,$1=count1-1;i<=$1;i++){
   var j,$2;
   for(j=0,$2=count2-1;j<=$2;j++)f(Arrays.get2D(array,i,j));
  }
 };
 Arrays2D.iteri=function(f,array)
 {
  var i,$1;
  var count1=array.length;
  var count2=array.length?array[0].length:0;
  for(i=0,$1=count1-1;i<=$1;i++){
   var j,$2;
   for(j=0,$2=count2-1;j<=$2;j++)((f(i))(j))(Arrays.get2D(array,i,j));
  }
 };
 Arrays2D.map=function(f,array)
 {
  return Arrays2D.init(array.length,array.length?array[0].length:0,Runtime.Curried2(function(i,j)
  {
   return f(Arrays.get2D(array,i,j));
  }));
 };
 Arrays2D.mapi=function(f,array)
 {
  return Arrays2D.init(array.length,array.length?array[0].length:0,Runtime.Curried2(function(i,j)
  {
   return((f(i))(j))(Arrays.get2D(array,i,j));
  }));
 };
 Arrays2D.copy=function(array)
 {
  return Arrays2D.init(array.length,array.length?array[0].length:0,Runtime.Curried2(function(i,j)
  {
   return Arrays.get2D(array,i,j);
  }));
 };
 CancellationTokenSource=WebSharper.CancellationTokenSource=Runtime.Class({
  CancelAfter:function(delay)
  {
   var $this;
   $this=this;
   !this.c?(Option.iter(function(handle)
   {
    Global.clearTimeout(handle);
   },this.pending),this.pending={
    $:1,
    $0:Global.setTimeout(function()
    {
     $this.Cancel$1();
    },delay)
   }):null;
  },
  Cancel:function(throwOnFirstException)
  {
   var action;
   !throwOnFirstException?this.Cancel$1():!this.c?(this.c=true,(action=function(a)
   {
    a();
   },function(array)
   {
    Arrays.iter(action,array);
   })(this.r)):null;
  },
  Cancel$1:function()
  {
   var chooser;
   if(!this.c)
    {
     this.c=true;
     var errors=(chooser=function(a)
     {
      var $1;
      try
      {
       $1=(a(),null);
      }
      catch(e)
      {
       $1={
        $:1,
        $0:e
       };
      }
      return $1;
     },function(array)
     {
      return Arrays.choose(chooser,array);
     })(this.r);
     if(Arrays.length(errors)>0)
      {
       var e=new AggregateException.New$3(errors);
       throw e;
      }
    }
  }
 },null,CancellationTokenSource);
 CancellationTokenSource.CreateLinkedTokenSource=function(t1,t2)
 {
  return CancellationTokenSource.CreateLinkedTokenSource$1([t1,t2]);
 };
 CancellationTokenSource.CreateLinkedTokenSource$1=function(tokens)
 {
  var cts,action;
  cts=new CancellationTokenSource.New();
  (action=function(t)
  {
   var callback;
   callback=function()
   {
    cts.Cancel$1();
   };
   Concurrency.Register(t,function()
   {
    callback();
   });
  },function(array)
  {
   Arrays.iter(action,array);
  })(tokens);
  return cts;
 };
 CancellationTokenSource.New=Runtime.Ctor(function()
 {
  this.c=false;
  this.pending=null;
  this.r=[];
  null;
 },CancellationTokenSource);
 Char.IsWhiteSpace=function(c)
 {
  return Global.String.fromCharCode(c).match(new Global.RegExp("\\s"))!==null;
 };
 Char.Parse=function(s)
 {
  return s.length===1?s.charCodeAt(0):Operators.FailWith("String must be exactly one character long.");
 };
 Char.IsUpper=function(c)
 {
  return c>=65?c<=90:false;
 };
 Char.IsLower=function(c)
 {
  return c>=97?c<=122:false;
 };
 Char.IsLetterOrDigit=function(c)
 {
  return Char.IsLetter(c)?true:Char.IsDigit(c);
 };
 Char.IsLetter=function(c)
 {
  return(c>=65?c<=90:false)?true:c>=97?c<=122:false;
 };
 Char.IsDigit=function(c)
 {
  return c>=48?c<=57:false;
 };
 Char.IsControl=function(c)
 {
  return(c>=0?c<=31:false)?true:c>=128?c<=159:false;
 };
 Char.GetNumericValue=function(c)
 {
  return(c>=48?c<=57:false)?Global.Number(c)-Global.Number(48):-1;
 };
 Choice2=WebSharper.Choice2=Runtime.Class({},null,Choice2);
 Choice3=WebSharper.Choice3=Runtime.Class({},null,Choice3);
 Choice4=WebSharper.Choice4=Runtime.Class({},null,Choice4);
 Choice5=WebSharper.Choice5=Runtime.Class({},null,Choice5);
 Choice6=WebSharper.Choice6=Runtime.Class({},null,Choice6);
 Choice7=WebSharper.Choice7=Runtime.Class({},null,Choice7);
 Util.addListener=function(event,h)
 {
  event.Subscribe(Util.observer(h));
 };
 Util.subscribeTo=function(event,h)
 {
  return event.Subscribe(Util.observer(h));
 };
 Util.observer=function(h)
 {
  return{
   OnNext:h,
   OnError:function()
   {
    return null;
   },
   OnCompleted:function()
   {
    return null;
   }
  };
 };
 DateUtil.LongTime=function(d)
 {
  return(new Global.Date(d)).toLocaleTimeString({},{
   hour:"2-digit",
   minute:"2-digit",
   second:"2-digit",
   hour12:false
  });
 };
 DateUtil.ShortTime=function(d)
 {
  return(new Global.Date(d)).toLocaleTimeString({},{
   hour:"2-digit",
   minute:"2-digit",
   hour12:false
  });
 };
 DateUtil.LongDate=function(d)
 {
  return(new Global.Date(d)).toLocaleDateString({},{
   year:"numeric",
   month:"long",
   day:"numeric",
   weekday:"long"
  });
 };
 DateUtil.Parse=function(s)
 {
  var matchValue;
  matchValue=DateUtil.TryParse(s);
  return(matchValue!=null?matchValue.$==1:false)?matchValue.$0:Operators.FailWith("Failed to parse date string.");
 };
 DateUtil.TryParse=function(s)
 {
  var d;
  d=Global.Date.parse(s);
  return Global.isNaN(d)?null:{
   $:1,
   $0:d
  };
 };
 DateUtil.AddMonths=function(d,months)
 {
  var e,y,mo,d$1,h,m,s,ms;
  e=new Global.Date(d);
  return(y=e.getFullYear(),mo=e.getMonth()+months,d$1=e.getDate(),h=e.getHours(),m=e.getMinutes(),s=e.getSeconds(),ms=e.getMilliseconds(),new Global.Date(y,mo,d$1,h,m,s,ms)).getTime();
 };
 DateUtil.AddYears=function(d,years)
 {
  var e,y,mo,d$1,h,m,s,ms;
  e=new Global.Date(d);
  return(y=e.getFullYear()+years,mo=e.getMonth(),d$1=e.getDate(),h=e.getHours(),m=e.getMinutes(),s=e.getSeconds(),ms=e.getMilliseconds(),new Global.Date(y,mo,d$1,h,m,s,ms)).getTime();
 };
 DateUtil.TimePortion=function(d)
 {
  var e;
  e=new Global.Date(d);
  return(((24*0+e.getHours())*60+e.getMinutes())*60+e.getSeconds())*1000+e.getMilliseconds();
 };
 DateUtil.DatePortion=function(d)
 {
  var e,y,mo,d$1;
  e=new Global.Date(d);
  return(y=e.getFullYear(),mo=e.getMonth(),d$1=e.getDate(),new Global.Date(y,mo,d$1)).getTime();
 };
 Delegate.InvocationList=function(del)
 {
  return del.$Invokes||[del];
 };
 Delegate.RemoveAll=function(source,value)
 {
  var sourceInv,invokes,predicate;
  sourceInv=Delegate.InvocationList(source);
  Arrays.length(Delegate.InvocationList(value))>1?Operators.FailWith("TODO: Remove multicast delegates"):null;
  invokes=(predicate=function(i)
  {
   return!Unchecked.Equals(i,value);
  },function(array)
  {
   return Arrays.filter(predicate,array);
  })(sourceInv);
  return Runtime.CreateDelegate(invokes);
 };
 Delegate.Remove=function(source,value)
 {
  var $1,$2,found,invokes;
  var sourceInv=Delegate.InvocationList(source);
  Arrays.length(Delegate.InvocationList(value))>1?Operators.FailWith("TODO: Remove multicast delegates"):null;
  var resInv=[];
  found=false;
  var i,$3;
  for(i=Arrays.length(sourceInv)-1,$3=0;i>=$3;i--){
   var it;
   it=Arrays.get(sourceInv,i);
   (!found?Runtime.DelegateEqual(it,value):false)?void(found=true):Runtime.Apply(resInv,[]).unshift(it);
  }
  $2=(invokes=Runtime.Apply(resInv,[]),Runtime.CreateDelegate(invokes));
  return $2;
 };
 Delegate.DelegateTarget=function(del)
 {
  var inv;
  return!del?null:"$Target"in del?del.$Target:"$Invokes"in del?(inv=del.$Invokes,(Arrays.get(inv,Arrays.length(inv)-1))[1]):null;
 };
 MatchFailureException=WebSharper.MatchFailureException=Runtime.Class({},Global.Error,MatchFailureException);
 MatchFailureException.New=Runtime.Ctor(function(message,line,column)
 {
  this.message=message+" at "+Global.String(line)+":"+Global.String(column);
  null;
 },MatchFailureException);
 IndexOutOfRangeException=WebSharper.IndexOutOfRangeException=Runtime.Class({},Global.Error,IndexOutOfRangeException);
 IndexOutOfRangeException.New=Runtime.Ctor(function()
 {
  IndexOutOfRangeException.New$1.call(this,"Index was outside the bounds of the array.");
 },IndexOutOfRangeException);
 IndexOutOfRangeException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
  null;
 },IndexOutOfRangeException);
 OperationCanceledException=WebSharper.OperationCanceledException=Runtime.Class({},Global.Error,OperationCanceledException);
 OperationCanceledException.New=Runtime.Ctor(function(ct)
 {
  OperationCanceledException.New$1.call(this,"The operation was canceled.",null,ct);
 },OperationCanceledException);
 OperationCanceledException.New$1=Runtime.Ctor(function(message,inner,ct)
 {
  this.message=message;
  this.ct=ct;
  null;
 },OperationCanceledException);
 ArgumentException=WebSharper.ArgumentException=Runtime.Class({},Global.Error,ArgumentException);
 ArgumentException.New=Runtime.Ctor(function(argumentName,message)
 {
  ArgumentException.New$2.call(this,message+"\nParameter name: "+argumentName);
 },ArgumentException);
 ArgumentException.New$1=Runtime.Ctor(function()
 {
  ArgumentException.New$2.call(this,"Value does not fall within the expected range.");
 },ArgumentException);
 ArgumentException.New$2=Runtime.Ctor(function(message)
 {
  this.message=message;
  null;
 },ArgumentException);
 ArgumentOutOfRangeException=WebSharper.ArgumentOutOfRangeException=Runtime.Class({},Global.Error,ArgumentOutOfRangeException);
 ArgumentOutOfRangeException.New=Runtime.Ctor(function()
 {
  ArgumentOutOfRangeException.New$1.call(this,"Specified argument was out of the range of valid values.");
 },ArgumentOutOfRangeException);
 ArgumentOutOfRangeException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
  null;
 },ArgumentOutOfRangeException);
 InvalidOperationException=WebSharper.InvalidOperationException=Runtime.Class({},Global.Error,InvalidOperationException);
 InvalidOperationException.New=Runtime.Ctor(function()
 {
  InvalidOperationException.New$1.call(this,"Operation is not valid due to the current state of the object.");
 },InvalidOperationException);
 InvalidOperationException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
  null;
 },InvalidOperationException);
 AggregateException=WebSharper.AggregateException=Runtime.Class({},Global.Error,AggregateException);
 AggregateException.New=Runtime.Ctor(function(message,innerException)
 {
  AggregateException.New$4.call(this,message,[innerException]);
 },AggregateException);
 AggregateException.New$1=Runtime.Ctor(function(message,innerExceptions)
 {
  AggregateException.New$4.call(this,message,Arrays.ofSeq(innerExceptions));
 },AggregateException);
 AggregateException.New$2=Runtime.Ctor(function(innerExceptions)
 {
  AggregateException.New$4.call(this,"One or more errors occurred.",Arrays.ofSeq(innerExceptions));
 },AggregateException);
 AggregateException.New$3=Runtime.Ctor(function(innerExceptions)
 {
  AggregateException.New$4.call(this,"One or more errors occurred.",innerExceptions);
 },AggregateException);
 AggregateException.New$4=Runtime.Ctor(function(message,innerExceptions)
 {
  this.message=message;
  this.innerExceptions=innerExceptions;
  null;
 },AggregateException);
 TimeoutException=WebSharper.TimeoutException=Runtime.Class({},Global.Error,TimeoutException);
 TimeoutException.New=Runtime.Ctor(function()
 {
  TimeoutException.New$1.call(this,"The operation has timed out.");
 },TimeoutException);
 TimeoutException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
  null;
 },TimeoutException);
 FormatException=WebSharper.FormatException=Runtime.Class({},Global.Error,FormatException);
 FormatException.New=Runtime.Ctor(function()
 {
  FormatException.New$1.call(this,"One of the identified items was in an invalid format.");
 },FormatException);
 FormatException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
  null;
 },FormatException);
 Arrays.create2D=function(rows)
 {
  var arr,x,x$1;
  arr=(x=(x$1=Seq.map(Arrays.ofSeq,rows),Arrays.ofSeq(x$1)),Global.id(x));
  arr.dims=2;
  return arr;
 };
 Guid.NewGuid=function()
 {
  return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new Global.RegExp("[xy]","g"),function(c)
  {
   var r=Global.Math.random()*16|0;
   var v=c=="x"?r:r&3|8;
   return v.toString(16);
  });
 };
 Lazy.Force=function(x)
 {
  return x.e();
 };
 Lazy.CreateFromValue=function(v)
 {
  return{
   v:v,
   c:true,
   e:function()
   {
    return v;
   },
   e:function()
   {
    return v;
   }
  };
 };
 Lazy.Create=function(f)
 {
  var x;
  x={
   v:void 0,
   c:false,
   e:f
  };
  x.e=function()
  {
   return x.c?x.v:(x.c=true,x.v=f(),x.v);
  };
  return x;
 };
 T$1=List.T=Runtime.Class({
  GetSlice:function(start,finish)
  {
   var matchValue,$1,$2,i,x,x$1,count,i$1,$3,x$2,count$1;
   matchValue=[start,finish];
   return($1=matchValue[0],$1!=null?$1.$==1:false)?($2=matchValue[1],$2!=null?$2.$==1:false)?(i=matchValue[0].$0,x=(x$1=List.skip(i,this),(count=matchValue[1].$0-i+1,function(source)
   {
    return Seq.take(count,source);
   })(x$1)),List.ofSeq(x)):(i$1=matchValue[0].$0,List.skip(i$1,this)):($3=matchValue[1],$3!=null?$3.$==1:false)?(x$2=(count$1=matchValue[1].$0+1,function(source)
   {
    return Seq.take(count$1,source);
   })(this),List.ofSeq(x$2)):this;
  },
  get_Item:function(x)
  {
   return Seq.nth(x,this);
  },
  get_Length:function()
  {
   var r,i;
   r=this;
   i=0;
   while(r.$==1)
    {
     r=List.tail(r);
     i=i+1;
    }
   return i;
  },
  GetEnumerator:function()
  {
   return new T.New(this,null,function(e)
   {
    var matchValue;
    matchValue=e.s;
    return matchValue.$==0?false:(e.c=matchValue.$0,e.s=matchValue.$1,true);
   },void 0);
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get(this);
  }
 },null,T$1);
 T$1.Construct=function(head,tail)
 {
  return new T$1({
   $:1,
   $0:head,
   $1:tail
  });
 };
 T$1.Nil=function()
 {
  return new T$1({
   $:0
  });
 };
 List.append=function(x,y)
 {
  var $1,r,l,go;
  if(x.$==0)
   $1=y;
  else
   {
    var res=new T$1({
     $:0
    });
    r=res;
    l=x;
    go=true;
    while(go)
     {
      List.setValue(r,l.$0);
      l=l.$1;
      l.$==0?void(go=false):void(r=List.setTail(r,new T$1({
       $:0
      })));
     }
    List.setTail(r,y);
    $1=res;
   }
  return $1;
 };
 List.choose=function(f,l)
 {
  return List.ofSeq(Seq.choose(f,l));
 };
 List.collect=function(f,l)
 {
  return List.ofSeq(Seq.collect(f,l));
 };
 List.concat=function(s)
 {
  return List.ofSeq(Seq.concat(s));
 };
 List.exists2=function(p,l1,l2)
 {
  return Seq.exists2(p,l1,l2);
 };
 List.filter=function(p,l)
 {
  return List.ofSeq(Seq.filter(p,l));
 };
 List.fold2=function(f,s,l1,l2)
 {
  return Arrays.fold2(f,s,Arrays.ofList(l1),Arrays.ofList(l2));
 };
 List.foldBack=function(f,l,s)
 {
  return Arrays.foldBack(f,Arrays.ofList(l),s);
 };
 List.foldBack2=function(f,l1,l2,s)
 {
  return Arrays.foldBack2(f,Arrays.ofList(l1),Arrays.ofList(l2),s);
 };
 List.forall2=function(p,l1,l2)
 {
  return Arrays.forall2(p,Arrays.ofList(l1),Arrays.ofList(l2));
 };
 List.head=function(l)
 {
  return l.$==1?l.$0:List.listEmpty();
 };
 List.init=function(s,f)
 {
  return List.ofArray(Arrays.init(s,f));
 };
 List.iter=function(f,l)
 {
  var r;
  r=l;
  while(r.$==1)
   {
    f(List.head(r));
    r=List.tail(r);
   }
 };
 List.iter2=function(f,l1,l2)
 {
  var r1,r2;
  r1=l1;
  r2=l2;
  while(r1.$==1)
   {
    r2.$==0?List.badLengths():null;
    (f(List.head(r1)))(List.head(r2));
    r1=List.tail(r1);
    r2=List.tail(r2);
   }
  r2.$==1?List.badLengths():null;
 };
 List.iteri=function(f,l)
 {
  var r,i;
  r=l;
  i=0;
  while(r.$==1)
   {
    (f(i))(List.head(r));
    r=List.tail(r);
    i=i+1;
   }
 };
 List.iteri2=function(f,l1,l2)
 {
  var r1,r2,i;
  r1=l1;
  r2=l2;
  i=0;
  while(r1.$==1)
   {
    r2.$==0?List.badLengths():null;
    ((f(i))(List.head(r1)))(List.head(r2));
    r1=List.tail(r1);
    r2=List.tail(r2);
    i=i+1;
   }
  r2.$==1?List.badLengths():null;
 };
 List.map=function(f,x)
 {
  var r,l;
  var res=new T$1({
   $:0
  });
  r=res;
  l=x;
  while(l.$==1)
   {
    List.setValue(r,f(l.$0));
    r=List.setTail(r,new T$1({
     $:0
    }));
    l=l.$1;
   }
  return res;
 };
 List.map2=function(f,x1,x2)
 {
  var r,l1,l2;
  var res=new T$1({
   $:0
  });
  r=res;
  l1=x1;
  l2=x2;
  while(l1.$==1?l2.$==1:false)
   {
    List.setValue(r,(f(l1.$0))(l2.$0));
    r=List.setTail(r,new T$1({
     $:0
    }));
    l1=l1.$1;
    l2=l2.$1;
   }
  (l1.$==1?true:l2.$==1)?List.badLengths():null;
  return res;
 };
 List.mapi=function(f,x)
 {
  var r,l,i;
  var res=new T$1({
   $:0
  });
  r=res;
  l=x;
  i=0;
  while(l.$==1)
   {
    List.setValue(r,(f(i))(l.$0));
    r=List.setTail(r,new T$1({
     $:0
    }));
    l=l.$1;
    i=i+1;
   }
  return res;
 };
 List.mapi2=function(f,x1,x2)
 {
  var r,l1,l2,i;
  var res=new T$1({
   $:0
  });
  r=res;
  l1=x1;
  l2=x2;
  i=0;
  while(l1.$==1?l2.$==1:false)
   {
    List.setValue(r,((f(i))(l1.$0))(l2.$0));
    r=List.setTail(r,new T$1({
     $:0
    }));
    l1=l1.$1;
    l2=l2.$1;
    i=i+1;
   }
  (l1.$==1?true:l2.$==1)?List.badLengths():null;
  return res;
 };
 List.max=function(l)
 {
  return Seq.reduce(Runtime.Curried2(Operators.Max),l);
 };
 List.maxBy=function(f,l)
 {
  return Seq.reduce(Runtime.Curried2(function(x,y)
  {
   return Unchecked.Compare(f(x),f(y))===1?x:y;
  }),l);
 };
 List.min=function(l)
 {
  return Seq.reduce(Runtime.Curried2(Operators.Min),l);
 };
 List.minBy=function(f,l)
 {
  return Seq.reduce(Runtime.Curried2(function(x,y)
  {
   return Unchecked.Compare(f(x),f(y))===-1?x:y;
  }),l);
 };
 List.ofArray=function(arr)
 {
  var r;
  r=new T$1({
   $:0
  });
  var i,$1;
  for(i=Arrays.length(arr)-1,$1=0;i>=$1;i--)r=new T$1({
   $:1,
   $0:Arrays.get(arr,i),
   $1:r
  });
  return r;
 };
 List.ofSeq=function(s)
 {
  var $1,last;
  if(s instanceof T$1)
   $1=s;
  else
   if(s instanceof Global.Array)
    $1=List.ofArray(s);
   else
    {
     var res=new T$1({
      $:0
     });
     last=res;
     var e=Enumerator.Get(s);
     try
     {
      while(e.MoveNext())
       {
        List.setValue(last,e.Current());
        last=List.setTail(last,new T$1({
         $:0
        }));
       }
      last.$=0;
      $1=res;
     }
     finally
     {
      "Dispose"in e?e.Dispose():null;
     }
    }
  return $1;
 };
 List.partition=function(p,l)
 {
  var patternInput;
  patternInput=Arrays.partition(p,Arrays.ofList(l));
  return[List.ofArray(patternInput[0]),List.ofArray(patternInput[1])];
 };
 List.permute=function(f,l)
 {
  return List.ofArray(Arrays.permute(f,Arrays.ofList(l)));
 };
 List.reduceBack=function(f,l)
 {
  return Arrays.reduceBack(f,Arrays.ofList(l));
 };
 List.replicate=function(size,value)
 {
  return List.ofArray(Arrays.create(size,value));
 };
 List.rev=function(l)
 {
  var res,r;
  res=new T$1({
   $:0
  });
  r=l;
  while(r.$==1)
   {
    res=new T$1({
     $:1,
     $0:r.$0,
     $1:res
    });
    r=r.$1;
   }
  return res;
 };
 List.scan=function(f,s,l)
 {
  return List.ofSeq(Seq.scan(f,s,l));
 };
 List.scanBack=function(f,l,s)
 {
  return List.ofArray(Arrays.scanBack(f,Arrays.ofList(l),s));
 };
 List.sort=function(l)
 {
  var a;
  a=Arrays.ofList(l);
  Arrays.sortInPlace(a);
  return List.ofArray(a);
 };
 List.sortBy=function(f,l)
 {
  return List.sortWith(Runtime.Curried2(function(x,y)
  {
   return Operators.Compare(f(x),f(y));
  }),l);
 };
 List.sortByDescending=function(f,l)
 {
  return List.sortWith(Runtime.Curried2(function(x,y)
  {
   return-Operators.Compare(f(x),f(y));
  }),l);
 };
 List.sortDescending=function(l)
 {
  var a;
  a=Arrays.ofList(l);
  Arrays.sortInPlaceByDescending(Global.id,a);
  return List.ofArray(a);
 };
 List.sortWith=function(f,l)
 {
  var a;
  a=Arrays.ofList(l);
  Arrays.sortInPlaceWith(f,a);
  return List.ofArray(a);
 };
 List.tail=function(l)
 {
  return l.$==1?l.$1:List.listEmpty();
 };
 List.unzip=function(l)
 {
  var x=[];
  var y=[];
  var enumerator=Enumerator.Get(l);
  try
  {
   while(enumerator.MoveNext())
    {
     var forLoopVar;
     forLoopVar=enumerator.Current();
     x.push(forLoopVar[0]);
     y.push(forLoopVar[1]);
    }
  }
  finally
  {
   "Dispose"in enumerator?enumerator.Dispose():null;
  }
  return[List.ofArray(x.slice(0)),List.ofArray(y.slice(0))];
 };
 List.unzip3=function(l)
 {
  var x=[];
  var y=[];
  var z=[];
  var enumerator=Enumerator.Get(l);
  try
  {
   while(enumerator.MoveNext())
    {
     var forLoopVar;
     forLoopVar=enumerator.Current();
     x.push(forLoopVar[0]);
     y.push(forLoopVar[1]);
     z.push(forLoopVar[2]);
    }
  }
  finally
  {
   "Dispose"in enumerator?enumerator.Dispose():null;
  }
  return[List.ofArray(x.slice(0)),List.ofArray(y.slice(0)),List.ofArray(z.slice(0))];
 };
 List.zip=function(l1,l2)
 {
  return List.ofArray(Arrays.zip(Arrays.ofList(l1),Arrays.ofList(l2)));
 };
 List.zip3=function(l1,l2,l3)
 {
  return List.ofArray(Arrays.zip3(Arrays.ofList(l1),Arrays.ofList(l2),Arrays.ofList(l3)));
 };
 List.chunkBySize=function(size,list)
 {
  var x,x$1;
  x=(x$1=Seq.chunkBySize(size,list),List.ofSeq(x$1));
  return List.map(List.ofArray,x);
 };
 List.compareWith=function(f,l1,l2)
 {
  return Seq.compareWith(f,l1,l2);
 };
 List.countBy=function(f,l)
 {
  var x;
  x=Seq.countBy(f,l);
  return List.ofSeq(x);
 };
 List.distinct=function(l)
 {
  var x;
  x=Seq.distinct(l);
  return List.ofSeq(x);
 };
 List.distinctBy=function(f,l)
 {
  return List.ofSeq(Seq.distinctBy(f,l));
 };
 List.splitInto=function(count,list)
 {
  var x,x$1;
  x=(x$1=Arrays.splitInto(count,Arrays.ofList(list)),List.ofArray(x$1));
  return List.map(List.ofArray,x);
 };
 List.except=function(itemsToExclude,l)
 {
  return List.ofSeq(Seq.except(itemsToExclude,l));
 };
 List.tryFindBack=function(ok,l)
 {
  return Arrays.tryFindBack(ok,Arrays.ofList(l));
 };
 List.findBack=function(p,s)
 {
  var matchValue;
  matchValue=List.tryFindBack(p,s);
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 List.findIndexBack=function(p,s)
 {
  var matchValue;
  matchValue=Arrays.tryFindIndexBack(p,Arrays.ofList(s));
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 List.groupBy=function(f,l)
 {
  var x,x$1,mapping;
  x=(x$1=Seq.groupBy(f,l),List.ofSeq(x$1));
  return(mapping=function(a)
  {
   return[a[0],List.ofSeq(a[1])];
  },function(list)
  {
   return List.map(mapping,list);
  })(x);
 };
 List.last=function(list)
 {
  var r,t;
  list.$==0?List.listEmpty():null;
  r=list;
  t=r.$1;
  while(t.$==1)
   {
    r=t;
    t=r.$1;
   }
  return r.$0;
 };
 List.contains=function(el,l)
 {
  return Seq.contains(el,l);
 };
 List.mapFold=function(f,zero,list)
 {
  var x;
  x=Arrays.mapFold(f,zero,Arrays.ofList(list));
  return[List.ofArray(x[0]),x[1]];
 };
 List.mapFoldBack=function(f,list,zero)
 {
  var x;
  x=Arrays.mapFoldBack(f,Arrays.ofList(list),zero);
  return[List.ofArray(x[0]),x[1]];
 };
 List.pairwise=function(l)
 {
  var x;
  x=Seq.pairwise(l);
  return List.ofSeq(x);
 };
 List.indexed=function(list)
 {
  return List.mapi(Runtime.Curried2(function(a,b)
  {
   return[a,b];
  }),list);
 };
 List.singleton=function(x)
 {
  return List.ofArray([x]);
 };
 List.tryHead=function(list)
 {
  return list.$==0?null:{
   $:1,
   $0:list.$0
  };
 };
 List.tryItem=function(n,list)
 {
  return Seq.tryItem(n,list);
 };
 List.tryLast=function(list)
 {
  return Seq.tryLast(list);
 };
 List.exactlyOne=function(list)
 {
  var $1;
  return(list.$==1?list.$1.$==0?($1=list.$0,true):false:false)?$1:Operators.FailWith("The input does not have precisely one element.");
 };
 List.unfold=function(f,s)
 {
  return List.ofSeq(Seq.unfold(f,s));
 };
 List.windowed=function(windowSize,s)
 {
  var x,x$1;
  x=(x$1=Seq.windowed(windowSize,s),Seq.map(List.ofArray,x$1));
  return List.ofSeq(x);
 };
 List.splitAt=function(n,list)
 {
  var x;
  return[(x=Seq.take(n,list),List.ofSeq(x)),List.skip(n,list)];
 };
 List.setTail=function(l,t)
 {
  l.$1=t;
  return t;
 };
 List.setValue=function(l,v)
 {
  l.$=1;
  l.$0=v;
 };
 List.listEmpty=function()
 {
  return Operators.FailWith("The input list was empty.");
 };
 List.badLengths=function()
 {
  return Operators.FailWith("The lists have different lengths.");
 };
 Nullable.getOrValue=function(x,v)
 {
  return x==null?v:x;
 };
 Nullable.get=function(x)
 {
  return x==null?Operators.FailWith("Nullable object must have a value."):x;
 };
 Ref.decr=function(x)
 {
  x[0]--;
 };
 Ref.incr=function(x)
 {
  x[0]++;
 };
 Operators.range=function(min,max)
 {
  var count;
  count=1+max-min;
  return count<=0?[]:Seq.init(count,function(x)
  {
   return x+min;
  });
 };
 Operators.step=function(min,step,max)
 {
  var s,x,x$1,predicate;
  s=Operators.Sign(step);
  x=(x$1=Seq.initInfinite(function(k)
  {
   return min+k*step;
  }),(predicate=function(k)
  {
   return s*(max-k)>=0;
  },function(source)
  {
   return Seq.takeWhile(predicate,source);
  })(x$1));
  return Global.id(x);
 };
 Operators.KeyValue=function(kvp)
 {
  return[kvp.K,kvp.V];
 };
 Operators.Using=function(t,f)
 {
  var $1;
  try
  {
   $1=f(t);
  }
  finally
  {
   t.Dispose();
  }
  return $1;
 };
 Operators.Truncate=function(x)
 {
  return x<0?Global.Math.ceil(x):Global.Math.floor(x);
 };
 Operators.Sign=function(x)
 {
  return x===0?0:x<0?-1:1;
 };
 Operators.Pown=function(a,n)
 {
  var p;
  p=function(n$1)
  {
   var b;
   return n$1===1?a:n$1%2===0?(b=p(n$1/2>>0),b*b):a*p(n$1-1);
  };
  return p(n);
 };
 Operators.Min=function(a,b)
 {
  return Unchecked.Compare(a,b)===-1?a:b;
 };
 Operators.Max=function(a,b)
 {
  return Unchecked.Compare(a,b)===1?a:b;
 };
 Operators.InvalidArg=function(arg,msg)
 {
  var e=new ArgumentException.New(arg,msg);
  throw e;
 };
 Operators.InvalidOp=function(msg)
 {
  var e=new InvalidOperationException.New$1(msg);
  throw e;
 };
 Operators.FailWith=function(msg)
 {
  var e=Global.Error(msg);
  throw e;
 };
 Operators.DefaultArg=function(x,d)
 {
  return x==null?d:x.$0;
 };
 Operators.Compare=function(a,b)
 {
  return Unchecked.Compare(a,b);
 };
 Slice.string=function(source,start,finish)
 {
  var matchValue,$1;
  matchValue=[start,finish];
  return matchValue[0]==null?($1=matchValue[1],$1!=null?$1.$==1:false)?source.slice(0,matchValue[1].$0+1):"":matchValue[1]==null?source.slice(matchValue[0].$0):source.slice(matchValue[0].$0,matchValue[1].$0+1);
 };
 Slice.array=function(source,start,finish)
 {
  var matchValue,$1;
  matchValue=[start,finish];
  return matchValue[0]==null?($1=matchValue[1],$1!=null?$1.$==1:false)?source.slice(0,matchValue[1].$0+1):[]:matchValue[1]==null?source.slice(matchValue[0].$0):source.slice(matchValue[0].$0,matchValue[1].$0+1);
 };
 Slice.setArray=function(dst,start,finish,src)
 {
  var start$1,finish$1;
  start$1=(start!=null?start.$==1:false)?start.$0:0;
  finish$1=(finish!=null?finish.$==1:false)?finish.$0:dst.length-1;
  Arrays.setSub(dst,start$1,finish$1-start$1+1,src);
 };
 Slice.array2D=function(arr,start1,finish1,start2,finish2)
 {
  var start1$1,start2$1,finish1$1,finish2$1;
  start1$1=(start1!=null?start1.$==1:false)?start1.$0:0;
  start2$1=(start2!=null?start2.$==1:false)?start2.$0:0;
  finish1$1=(finish1!=null?finish1.$==1:false)?finish1.$0:arr.length-1;
  finish2$1=(finish2!=null?finish2.$==1:false)?finish2.$0:(arr.length?arr[0].length:0)-1;
  return Arrays.sub2D(arr,start1$1,start2$1,finish1$1-start1$1+1,finish2$1-start2$1+1);
 };
 Slice.array2Dfix1=function(arr,fixed1,start2,finish2)
 {
  var j,$1;
  var start2$1=(start2!=null?start2.$==1:false)?start2.$0:0;
  var finish2$1=(finish2!=null?finish2.$==1:false)?finish2.$0:(arr.length?arr[0].length:0)-1;
  var len2=finish2$1-start2$1+1;
  var dst=new Global.Array(len2);
  for(j=0,$1=len2-1;j<=$1;j++)Arrays.set(dst,j,Arrays.get2D(arr,fixed1,start2$1+j));
  return dst;
 };
 Slice.array2Dfix2=function(arr,start1,finish1,fixed2)
 {
  var i,$1;
  var start1$1=(start1!=null?start1.$==1:false)?start1.$0:0;
  var finish1$1=(finish1!=null?finish1.$==1:false)?finish1.$0:arr.length-1;
  var len1=finish1$1-start1$1+1;
  var dst=new Global.Array(len1);
  for(i=0,$1=len1-1;i<=$1;i++)Arrays.set(dst,i,Arrays.get2D(arr,start1$1+i,fixed2));
  return dst;
 };
 Slice.setArray2Dfix1=function(dst,fixed1,start2,finish2,src)
 {
  var j,$1;
  var start2$1=(start2!=null?start2.$==1:false)?start2.$0:0;
  var finish2$1=(finish2!=null?finish2.$==1:false)?finish2.$0:(dst.length?dst[0].length:0)-1;
  for(j=0,$1=finish2$1-start2$1+1-1;j<=$1;j++)Arrays.set2D(dst,fixed1,start2$1+j,Arrays.get(src,j));
 };
 Slice.setArray2Dfix2=function(dst,start1,finish1,fixed2,src)
 {
  var i,$1;
  var start1$1=(start1!=null?start1.$==1:false)?start1.$0:0;
  var finish1$1=(finish1!=null?finish1.$==1:false)?finish1.$0:dst.length-1;
  for(i=0,$1=finish1$1-start1$1+1-1;i<=$1;i++)Arrays.set2D(dst,start1$1+i,fixed2,Arrays.get(src,i));
 };
 Slice.setArray2D=function(dst,start1,finish1,start2,finish2,src)
 {
  var start1$1,start2$1,finish1$1,finish2$1;
  start1$1=(start1!=null?start1.$==1:false)?start1.$0:0;
  start2$1=(start2!=null?start2.$==1:false)?start2.$0:0;
  finish1$1=(finish1!=null?finish1.$==1:false)?finish1.$0:dst.length-1;
  finish2$1=(finish2!=null?finish2.$==1:false)?finish2.$0:(dst.length?dst[0].length:0)-1;
  Arrays.setSub2D(dst,start1$1,start2$1,finish1$1-start1$1+1,finish2$1-start2$1+1,src);
 };
 Option.bind=function(f,x)
 {
  return x==null?null:f(x.$0);
 };
 Option.exists=function(p,x)
 {
  return x==null?false:p(x.$0);
 };
 Option.fold=function(f,s,x)
 {
  return x==null?s:(f(s))(x.$0);
 };
 Option.foldBack=function(f,x,s)
 {
  return x==null?s:(f(x.$0))(s);
 };
 Option.forall=function(p,x)
 {
  return x==null?true:p(x.$0);
 };
 Option.iter=function(p,x)
 {
  x==null?null:p(x.$0);
 };
 Option.map=function(f,x)
 {
  return x==null?null:{
   $:1,
   $0:f(x.$0)
  };
 };
 Option.toArray=function(x)
 {
  return x==null?[]:[x.$0];
 };
 Option.toList=function(x)
 {
  return x==null?new T$1({
   $:0
  }):List.ofArray([x.$0]);
 };
 Option.ofObj=function(o)
 {
  return o==null?null:{
   $:1,
   $0:o
  };
 };
 Option.toObj=function(o)
 {
  return o==null?null:o.$0;
 };
 Option.ofNullable=function(o)
 {
  return o==null?null:{
   $:1,
   $0:Nullable.get(o)
  };
 };
 Option.toNullable=function(o)
 {
  return(o!=null?o.$==1:false)?o.$0:null;
 };
 Option.filter=function(f,o)
 {
  var v;
  return(o!=null?o.$==1:false)?(v=o.$0,f(v)?{
   $:1,
   $0:v
  }:null):null;
 };
 Queue.CopyTo=function(a,array,index)
 {
  Arrays.blit(a,0,array,index,Arrays.length(a));
 };
 Queue.Contains=function(a,el)
 {
  return Seq.exists(function(y)
  {
   return Unchecked.Equals(el,y);
  },a);
 };
 Queue.Clear=function(a)
 {
  a.splice(0,Arrays.length(a));
 };
 Random=WebSharper.Random=Runtime.Class({
  NextBytes:function(buffer)
  {
   var i,$1;
   for(i=0,$1=Arrays.length(buffer)-1;i<=$1;i++)Arrays.set(buffer,i,Global.Math.floor(Global.Math.random()*256));
  },
  Next:function(minValue,maxValue)
  {
   return minValue>maxValue?Operators.FailWith("'minValue' cannot be greater than maxValue."):minValue+Global.Math.floor(Global.Math.random()*(maxValue-minValue));
  },
  Next$1:function(maxValue)
  {
   return maxValue<0?Operators.FailWith("'maxValue' must be greater than zero."):Global.Math.floor(Global.Math.random()*maxValue);
  },
  Next$2:function()
  {
   return Global.Math.floor(Global.Math.random()*2147483648);
  }
 },null,Random);
 Random.New=Runtime.Ctor(function()
 {
 },Random);
 FSharpRef.New=function(contents)
 {
  return{
   "0":contents
  };
 };
 Seq.enumFinally=function(s,f)
 {
  return{
   GetEnumerator:function()
   {
    var _enum,dispose;
    try
    {
     _enum=Enumerator.Get(s);
    }
    catch(e)
    {
     f();
     throw e;
     _enum=void 0;
    }
    dispose=function()
    {
     _enum.Dispose();
     f();
    };
    return new T.New(null,null,function(e$1)
    {
     return _enum.MoveNext()?(e$1.c=_enum.Current(),true):false;
    },dispose);
   }
  };
 };
 Seq.enumUsing=function(x,f)
 {
  return{
   GetEnumerator:function()
   {
    var _enum,dispose;
    try
    {
     _enum=Enumerator.Get(f(x));
    }
    catch(e)
    {
     x.Dispose();
     throw e;
     _enum=void 0;
    }
    dispose=function()
    {
     _enum.Dispose();
     x.Dispose();
    };
    return new T.New(null,null,function(e$1)
    {
     return _enum.MoveNext()?(e$1.c=_enum.Current(),true):false;
    },dispose);
   }
  };
 };
 Seq.enumWhile=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var next;
    next=function(en)
    {
     var matchValue;
     matchValue=en.s;
     return Unchecked.Equals(matchValue,null)?f()?(en.s=Enumerator.Get(s),next(en)):false:matchValue.MoveNext()?(en.c=matchValue.Current(),true):(matchValue.Dispose(),en.s=null,next(en));
    };
    return new T.New(null,null,next,function(en)
    {
     var x;
     x=en.s;
     !Unchecked.Equals(x,null)?x.Dispose():null;
    });
   }
  };
 };
 Control.createEvent=function(add,remove,create)
 {
  return{
   Subscribe:function(r)
   {
    var h;
    h=create(Runtime.Curried2(function($1,args)
    {
     r.OnNext(args);
    }));
    add(h);
    return{
     Dispose:function()
     {
      return remove(h);
     }
    };
   },
   RemoveHandler:remove,
   AddHandler:add
  };
 };
 Seq.append=function(s1,s2)
 {
  return{
   GetEnumerator:function()
   {
    var e1,first;
    e1=Enumerator.Get(s1);
    first=[true];
    return new T.New(e1,null,function(x)
    {
     var x$1;
     return x.s.MoveNext()?(x.c=x.s.Current(),true):(x$1=x.s,!Unchecked.Equals(x$1,null)?x$1.Dispose():null,x.s=null,first[0]?(first[0]=false,x.s=Enumerator.Get(s2),x.s.MoveNext()?(x.c=x.s.Current(),true):(x.s.Dispose(),x.s=null,false)):false);
    },function(x)
    {
     var x$1;
     x$1=x.s;
     !Unchecked.Equals(x$1,null)?x$1.Dispose():null;
    });
   }
  };
 };
 Seq.average=function(s)
 {
  var patternInput,count;
  patternInput=Seq.fold(function(a)
  {
   var n,s$1;
   n=a[0];
   s$1=a[1];
   return function(x)
   {
    return[n+1,s$1+x];
   };
  },[0,0],s);
  count=patternInput[0];
  return count===0?Operators.InvalidArg("source","The input sequence was empty."):patternInput[1]/count;
 };
 Seq.averageBy=function(f,s)
 {
  var patternInput,count;
  patternInput=Seq.fold(function(a)
  {
   var n,s$1;
   n=a[0];
   s$1=a[1];
   return function(x)
   {
    return[n+1,s$1+f(x)];
   };
  },[0,0],s);
  count=patternInput[0];
  return count===0?Operators.InvalidArg("source","The input sequence was empty."):patternInput[1]/count;
 };
 Seq.cache=function(s)
 {
  var cache,o;
  cache=[];
  o=[Enumerator.Get(s)];
  return{
   GetEnumerator:function()
   {
    return new T.New(0,null,function(e)
    {
     var en;
     return e.s+1<cache.length?(e.s=e.s+1,e.c=cache[e.s],true):(en=o[0],Unchecked.Equals(en,null)?false:en.MoveNext()?(e.s=e.s+1,e.c=en.Current(),cache.push(e.c),true):(en.Dispose(),o[0]=null,false));
    },void 0);
   }
  };
 };
 Seq.choose=function(f,s)
 {
  var mapping;
  return(mapping=function(x)
  {
   var matchValue;
   matchValue=f(x);
   return matchValue==null?new T$1({
    $:0
   }):List.ofArray([matchValue.$0]);
  },function(source)
  {
   return Seq.collect(mapping,source);
  })(s);
 };
 Seq.collect=function(f,s)
 {
  return Seq.concat(Seq.map(f,s));
 };
 Seq.concat=function(ss)
 {
  return{
   GetEnumerator:function()
   {
    var next;
    var outerE=Enumerator.Get(ss);
    next=function(st)
    {
     var matchValue;
     matchValue=st.s;
     return Unchecked.Equals(matchValue,null)?outerE.MoveNext()?(st.s=Enumerator.Get(outerE.Current()),next(st)):(outerE.Dispose(),false):matchValue.MoveNext()?(st.c=matchValue.Current(),true):(st.Dispose(),st.s=null,next(st));
    };
    return new T.New(null,null,next,function(st)
    {
     var x;
     x=st.s;
     !Unchecked.Equals(x,null)?x.Dispose():null;
     !Unchecked.Equals(outerE,null)?outerE.Dispose():null;
    });
   }
  };
 };
 Seq.delay=function(f)
 {
  return{
   GetEnumerator:function()
   {
    return Enumerator.Get(f());
   }
  };
 };
 Seq.splitInto=function(count,s)
 {
  count<=0?Operators.FailWith("Count must be positive"):null;
  return Seq.delay(function()
  {
   var x;
   x=Arrays.splitInto(count,Arrays.ofSeq(s));
   return Global.id(x);
  });
 };
 Seq.exactlyOne=function(s)
 {
  var $1;
  var e=Enumerator.Get(s);
  try
  {
   var x;
   $1=e.MoveNext()?(x=e.Current(),e.MoveNext()?Operators.InvalidOp("Sequence contains more than one element"):x):Operators.InvalidOp("Sequence contains no elements");
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.exists=function(p,s)
 {
  var $1;
  var e=Enumerator.Get(s);
  try
  {
   var r;
   r=false;
   while(!r?e.MoveNext():false)
    r=p(e.Current());
   $1=r;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.exists2=function(p,s1,s2)
 {
  var $1;
  var e1=Enumerator.Get(s1);
  try
  {
   var $2;
   var e2=Enumerator.Get(s2);
   try
   {
    var r;
    r=false;
    while((!r?e1.MoveNext():false)?e2.MoveNext():false)
     r=(p(e1.Current()))(e2.Current());
    $2=r;
   }
   finally
   {
    "Dispose"in e2?e2.Dispose():null;
   }
   $1=$2;
  }
  finally
  {
   "Dispose"in e1?e1.Dispose():null;
  }
  return $1;
 };
 Seq.filter=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var o,dispose;
    o=Enumerator.Get(s);
    dispose=function()
    {
     o.Dispose();
    };
    return new T.New(null,null,function(e)
    {
     var loop,c,res;
     loop=o.MoveNext();
     c=o.Current();
     res=false;
     while(loop)
      f(c)?(e.c=c,res=true,void(loop=false)):o.MoveNext()?void(c=o.Current()):void(loop=false);
     return res;
    },dispose);
   }
  };
 };
 Seq.find=function(p,s)
 {
  var matchValue;
  matchValue=Seq.tryFind(p,s);
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 Seq.findIndex=function(p,s)
 {
  var matchValue;
  matchValue=Seq.tryFindIndex(p,s);
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 Seq.fold=function(f,x,s)
 {
  var $1,r;
  r=x;
  var e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    r=(f(r))(e.Current());
   $1=r;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.forall=function(p,s)
 {
  return!Seq.exists(function(x)
  {
   return!p(x);
  },s);
 };
 Seq.forall2=function(p,s1,s2)
 {
  return!Seq.exists2(Runtime.Curried2(function(x,y)
  {
   return!(p(x))(y);
  }),s1,s2);
 };
 Seq.head=function(s)
 {
  var $1;
  var e=Enumerator.Get(s);
  try
  {
   $1=e.MoveNext()?e.Current():Seq.insufficient();
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.init=function(n,f)
 {
  return Seq.take(n,Seq.initInfinite(f));
 };
 Seq.initInfinite=function(f)
 {
  return{
   GetEnumerator:function()
   {
    return new T.New(0,null,function(e)
    {
     e.c=f(e.s);
     e.s=e.s+1;
     return true;
    },void 0);
   }
  };
 };
 Seq.isEmpty=function(s)
 {
  var $1;
  var e=Enumerator.Get(s);
  try
  {
   $1=!e.MoveNext();
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.iter=function(p,s)
 {
  var e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    p(e.Current());
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
 };
 Seq.iter2=function(p,s1,s2)
 {
  var e1=Enumerator.Get(s1);
  try
  {
   var $1;
   var e2=Enumerator.Get(s2);
   try
   {
    while(e1.MoveNext()?e2.MoveNext():false)
     (p(e1.Current()))(e2.Current());
    $1=void 0;
   }
   finally
   {
    "Dispose"in e2?e2.Dispose():null;
   }
  }
  finally
  {
   "Dispose"in e1?e1.Dispose():null;
  }
 };
 Seq.iteri=function(p,s)
 {
  var i;
  i=0;
  var e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    {
     (p(i))(e.Current());
     i=i+1;
    }
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
 };
 Seq.length=function(s)
 {
  var $1,i;
  i=0;
  var e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    i=i+1;
   $1=i;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.map=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var en,dispose;
    en=Enumerator.Get(s);
    dispose=function()
    {
     en.Dispose();
    };
    return new T.New(null,null,function(e)
    {
     return en.MoveNext()?(e.c=f(en.Current()),true):false;
    },dispose);
   }
  };
 };
 Seq.mapi=function(f,s)
 {
  return Seq.map2(f,Seq.initInfinite(Global.id),s);
 };
 Seq.map2=function(f,s1,s2)
 {
  return{
   GetEnumerator:function()
   {
    var e1,e2,dispose;
    e1=Enumerator.Get(s1);
    e2=Enumerator.Get(s2);
    dispose=function()
    {
     e1.Dispose();
     e2.Dispose();
    };
    return new T.New(null,null,function(e)
    {
     return(e1.MoveNext()?e2.MoveNext():false)?(e.c=(f(e1.Current()))(e2.Current()),true):false;
    },dispose);
   }
  };
 };
 Seq.maxBy=function(f,s)
 {
  return Seq.reduce(Runtime.Curried2(function(x,y)
  {
   return Unchecked.Compare(f(x),f(y))>=0?x:y;
  }),s);
 };
 Seq.minBy=function(f,s)
 {
  return Seq.reduce(Runtime.Curried2(function(x,y)
  {
   return Unchecked.Compare(f(x),f(y))<=0?x:y;
  }),s);
 };
 Seq.max=function(s)
 {
  return Seq.reduce(Runtime.Curried2(function(x,y)
  {
   return Unchecked.Compare(x,y)>=0?x:y;
  }),s);
 };
 Seq.min=function(s)
 {
  return Seq.reduce(Runtime.Curried2(function(x,y)
  {
   return Unchecked.Compare(x,y)<=0?x:y;
  }),s);
 };
 Seq.nth=function(index,s)
 {
  var $1,pos;
  index<0?Operators.FailWith("negative index requested"):null;
  pos=-1;
  var e=Enumerator.Get(s);
  try
  {
   while(pos<index)
    {
     !e.MoveNext()?Seq.insufficient():null;
     pos=pos+1;
    }
   $1=e.Current();
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.pick=function(p,s)
 {
  var matchValue;
  matchValue=Seq.tryPick(p,s);
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 Seq.readOnly=function(s)
 {
  return{
   GetEnumerator:function()
   {
    return Enumerator.Get(s);
   }
  };
 };
 Seq.reduce=function(f,source)
 {
  var $1;
  var e=Enumerator.Get(source);
  try
  {
   var r;
   !e.MoveNext()?Operators.FailWith("The input sequence was empty"):null;
   r=e.Current();
   while(e.MoveNext())
    r=(f(r))(e.Current());
   $1=r;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.scan=function(f,x,s)
 {
  return{
   GetEnumerator:function()
   {
    var en,dispose;
    en=Enumerator.Get(s);
    dispose=function()
    {
     en.Dispose();
    };
    return new T.New(false,null,function(e)
    {
     return e.s?en.MoveNext()?(e.c=(f(e.c))(en.Current()),true):false:(e.c=x,e.s=true,true);
    },dispose);
   }
  };
 };
 Seq.skip=function(n,s)
 {
  return{
   GetEnumerator:function()
   {
    var o;
    o=Enumerator.Get(s);
    return new T.New(true,null,function(e)
    {
     if(e.s)
      {
       var i,$1;
       for(i=1,$1=n;i<=$1;i++)!o.MoveNext()?Seq.insufficient():null;
       e.s=false;
      }
     return o.MoveNext()?(e.c=o.Current(),true):false;
    },function()
    {
     o.Dispose();
    });
   }
  };
 };
 Seq.skipWhile=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var o;
    o=Enumerator.Get(s);
    return new T.New(true,null,function(e)
    {
     var $1,go,empty;
     if(e.s)
      {
       go=true;
       empty=false;
       while(go)
        o.MoveNext()?!f(o.Current())?void(go=false):null:(go=false,void(empty=true));
       e.s=false;
       $1=empty?false:(e.c=o.Current(),true);
      }
     else
      $1=o.MoveNext()?(e.c=o.Current(),true):false;
     return $1;
    },function()
    {
     o.Dispose();
    });
   }
  };
 };
 Seq.sort=function(s)
 {
  return Seq.sortBy(Global.id,s);
 };
 Seq.sortBy=function(f,s)
 {
  return Seq.delay(function()
  {
   var array;
   array=Arrays.ofSeq(s);
   Arrays.sortInPlaceBy(f,array);
   return array;
  });
 };
 Seq.sortByDescending=function(f,s)
 {
  return Seq.delay(function()
  {
   var array;
   array=Arrays.ofSeq(s);
   Arrays.sortInPlaceByDescending(f,array);
   return array;
  });
 };
 Seq.sortDescending=function(s)
 {
  return Seq.sortByDescending(Global.id,s);
 };
 Seq.sum=function(s)
 {
  return Seq.fold(Runtime.Curried2(function(s$1,x)
  {
   return s$1+x;
  }),0,s);
 };
 Seq.sumBy=function(f,s)
 {
  return Seq.fold(Runtime.Curried2(function(s$1,x)
  {
   return s$1+f(x);
  }),0,s);
 };
 Seq.take=function(n,s)
 {
  n<0?Seq.nonNegative():null;
  return{
   GetEnumerator:function()
   {
    var e;
    e=[Enumerator.Get(s)];
    return new T.New(0,null,function(o)
    {
     var en;
     o.s=o.s+1;
     return o.s>n?false:(en=e[0],Unchecked.Equals(en,null)?Seq.insufficient():en.MoveNext()?(o.c=en.Current(),o.s===n?(en.Dispose(),void(e[0]=null)):null,true):(en.Dispose(),e[0]=null,Seq.insufficient()));
    },function()
    {
     var x;
     x=e[0];
     !Unchecked.Equals(x,null)?x.Dispose():null;
    });
   }
  };
 };
 Seq.takeWhile=function(f,s)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator.Get(s),function(e)
   {
    return Seq.enumWhile(function()
    {
     return e.MoveNext()?f(e.Current()):false;
    },Seq.delay(function()
    {
     return[e.Current()];
    }));
   });
  });
 };
 Seq.tryFind=function(ok,s)
 {
  var $1;
  var e=Enumerator.Get(s);
  try
  {
   var r;
   r=null;
   while(r==null?e.MoveNext():false)
    {
     var x;
     x=e.Current();
     ok(x)?void(r={
      $:1,
      $0:x
     }):null;
    }
   $1=r;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.findBack=function(p,s)
 {
  var matchValue;
  matchValue=Arrays.tryFindBack(p,Arrays.ofSeq(s));
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 Seq.tryFindIndex=function(ok,s)
 {
  var $1;
  var e=Enumerator.Get(s);
  try
  {
   var loop,i;
   loop=true;
   i=0;
   while(loop?e.MoveNext():false)
    ok(e.Current())?void(loop=false):void(i=i+1);
   $1=loop?null:{
    $:1,
    $0:i
   };
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.findIndexBack=function(p,s)
 {
  var matchValue;
  matchValue=Arrays.tryFindIndexBack(p,Arrays.ofSeq(s));
  return matchValue==null?Operators.FailWith("KeyNotFoundException"):matchValue.$0;
 };
 Seq.tryPick=function(f,s)
 {
  var $1;
  var e=Enumerator.Get(s);
  try
  {
   var r;
   r=null;
   while(Unchecked.Equals(r,null)?e.MoveNext():false)
    r=f(e.Current());
   $1=r;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Seq.zip=function(s1,s2)
 {
  return Seq.map2(Runtime.Curried2(function(x,y)
  {
   return[x,y];
  }),s1,s2);
 };
 Seq.zip3=function(s1,s2,s3)
 {
  return Seq.map2(Runtime.Curried2(function(x,a)
  {
   return[x,a[0],a[1]];
  }),s1,Seq.zip(s2,s3));
 };
 Seq.fold2=function(f,s,s1,s2)
 {
  return Arrays.fold2(f,s,Arrays.ofSeq(s1),Arrays.ofSeq(s2));
 };
 Seq.foldBack=function(f,s,state)
 {
  return Arrays.foldBack(f,Arrays.ofSeq(s),state);
 };
 Seq.foldBack2=function(f,s1,s2,s)
 {
  return Arrays.foldBack2(f,Arrays.ofSeq(s1),Arrays.ofSeq(s2),s);
 };
 Seq.iteri2=function(f,s1,s2)
 {
  var i;
  i=0;
  var e1=Enumerator.Get(s1);
  try
  {
   var $1;
   var e2=Enumerator.Get(s2);
   try
   {
    while(e1.MoveNext()?e2.MoveNext():false)
     {
      ((f(i))(e1.Current()))(e2.Current());
      i=i+1;
     }
    $1=void 0;
   }
   finally
   {
    "Dispose"in e2?e2.Dispose():null;
   }
  }
  finally
  {
   "Dispose"in e1?e1.Dispose():null;
  }
 };
 Seq.map3=function(f,s1,s2,s3)
 {
  return{
   GetEnumerator:function()
   {
    var e1,e2,e3,dispose;
    e1=Enumerator.Get(s1);
    e2=Enumerator.Get(s2);
    e3=Enumerator.Get(s3);
    dispose=function()
    {
     e1.Dispose();
     e2.Dispose();
     e3.Dispose();
    };
    return new T.New(null,null,function(e)
    {
     return((e1.MoveNext()?e2.MoveNext():false)?e3.MoveNext():false)?(e.c=((f(e1.Current()))(e2.Current()))(e3.Current()),true):false;
    },dispose);
   }
  };
 };
 Seq.mapi2=function(f,s1,s2)
 {
  return Seq.map3(f,Seq.initInfinite(Global.id),s1,s2);
 };
 Seq.mapFold=function(f,zero,s)
 {
  var x;
  x=Arrays.mapFold(f,zero,Arrays.ofSeq(s));
  return[x[0],x[1]];
 };
 Seq.mapFoldBack=function(f,s,zero)
 {
  var x;
  x=Arrays.mapFoldBack(f,Arrays.ofSeq(s),zero);
  return[x[0],x[1]];
 };
 Seq.permute=function(f,s)
 {
  return Seq.delay(function()
  {
   return Arrays.permute(f,Arrays.ofSeq(s));
  });
 };
 Seq.reduceBack=function(f,s)
 {
  return Arrays.reduceBack(f,Arrays.ofSeq(s));
 };
 Seq.replicate=function(size,value)
 {
  size<0?Seq.nonNegative():null;
  return Seq.delay(function()
  {
   return Seq.map(function()
   {
    return value;
   },Operators.range(0,size-1));
  });
 };
 Seq.rev=function(s)
 {
  return Seq.delay(function()
  {
   var x;
   x=Arrays.ofSeq(s).slice().reverse();
   return Global.id(x);
  });
 };
 Seq.scanBack=function(f,l,s)
 {
  return Seq.delay(function()
  {
   return Arrays.scanBack(f,Arrays.ofSeq(l),s);
  });
 };
 Seq.indexed=function(s)
 {
  return Seq.mapi(Runtime.Curried2(function(a,b)
  {
   return[a,b];
  }),s);
 };
 Seq.sortWith=function(f,s)
 {
  return Seq.delay(function()
  {
   var a;
   a=Arrays.ofSeq(s);
   Arrays.sortInPlaceWith(f,a);
   return a;
  });
 };
 Seq.tail=function(s)
 {
  return Seq.skip(1,s);
 };
 Stack.CopyTo=function(stack,array,index)
 {
  Arrays.blit(array,0,array,index,Arrays.length(stack));
 };
 Stack.Contains=function(stack,el)
 {
  return Seq.exists(function(y)
  {
   return Unchecked.Equals(el,y);
  },stack);
 };
 Stack.Clear=function(stack)
 {
  stack.splice(0,Arrays.length(stack));
 };
 Strings.RegexEscape=function(s)
 {
  return s.replace(new Global.RegExp("[-\\/\\\\^$*+?.()|[\\]{}]","g"),"\\$&");
 };
 Strings.SplitWith=function(str,pat)
 {
  return str.split(pat);
 };
 Strings.Join=function(sep,values)
 {
  return values.join(sep);
 };
 Strings.TrimEndWS=function(s)
 {
  return s.replace(new Global.RegExp("\\s+$"),"");
 };
 Strings.TrimStartWS=function(s)
 {
  return s.replace(new Global.RegExp("^\\s+"),"");
 };
 Strings.Trim=function(s)
 {
  return s.replace(new Global.RegExp("^\\s+"),"").replace(new Global.RegExp("\\s+$"),"");
 };
 Strings.StartsWith=function(t,s)
 {
  return t.substring(0,s.length)==s;
 };
 Strings.Substring=function(s,ix,ct)
 {
  return s.substr(ix,ct);
 };
 Strings.ReplaceOnce=function(string,search,replace)
 {
  return string.replace(search,replace);
 };
 Strings.Remove=function(x,ix,ct)
 {
  return x.substring(0,ix)+x.substring(ix+ct);
 };
 Strings.PadRightWith=function(s,n,c)
 {
  return n>s.length?s+Global.Array(n-s.length+1).join(Global.String.fromCharCode(c)):s;
 };
 Strings.PadLeftWith=function(s,n,c)
 {
  return n>s.length?Global.Array(n-s.length+1).join(Global.String.fromCharCode(c))+s:s;
 };
 Strings.LastIndexOf=function(s,c,i)
 {
  return s.lastIndexOf(Global.String.fromCharCode(c),i);
 };
 Strings.IsNullOrWhiteSpace=function(x)
 {
  return x==null||(new Global.RegExp("^\\s*$")).test(x);
 };
 Strings.IsNullOrEmpty=function(x)
 {
  return x==null||x=="";
 };
 Strings.Insert=function(x,index,s)
 {
  return x.substring(0,index-1)+s+x.substring(index);
 };
 Strings.IndexOf=function(s,c,i)
 {
  return s.indexOf(Global.String.fromCharCode(c),i);
 };
 Strings.EndsWith=function(x,s)
 {
  return x.substring(x.length-s.length)==s;
 };
 Strings.collect=function(f,s)
 {
  return Arrays.init(s.length,function(i)
  {
   return f(s.charCodeAt(i));
  }).join("");
 };
 Strings.concat=function(separator,strings)
 {
  return Arrays.ofSeq(strings).join(separator);
 };
 Strings.exists=function(f,s)
 {
  return Seq.exists(f,Strings.protect(s));
 };
 Strings.forall=function(f,s)
 {
  return Seq.forall(f,Strings.protect(s));
 };
 Strings.init=function(count,f)
 {
  return Arrays.init(count,f).join("");
 };
 Strings.iter=function(f,s)
 {
  Seq.iter(f,Strings.protect(s));
 };
 Strings.iteri=function(f,s)
 {
  Seq.iteri(f,Strings.protect(s));
 };
 Strings.length=function(s)
 {
  return Strings.protect(s).length;
 };
 Strings.map=function(f,s)
 {
  return Strings.collect(function(x)
  {
   return String.fromCharCode(f(x));
  },Strings.protect(s));
 };
 Strings.mapi=function(f,s)
 {
  return Arrays.ofSeq(Seq.mapi(Runtime.Curried2(function(i,x)
  {
   return String.fromCharCode((f(i))(x));
  }),s)).join("");
 };
 Strings.replicate=function(count,s)
 {
  return Strings.init(count,function()
  {
   return s;
  });
 };
 Strings.protect=function(s)
 {
  return s===null?"":s;
 };
 Strings.SFormat=function(format,args)
 {
  var pattern,replace;
  pattern=new Global.RegExp("{(0|[1-9]\\d*)(?:,(-?[1-9]\\d*|0))?(?::(.*?))?}","g");
  return(replace=function($1,i,w)
  {
   var r,w1,w2;
   r=String(Arrays.get(args,+i));
   return!Unchecked.Equals(w,void 0)?(w1=+w,w2=Global.Math.abs(w1),w2>r.length?w1>0?Strings.PadLeft(r,w2):Strings.PadRight(r,w2):r):r;
  },function(text)
  {
   return text.replace(pattern,replace);
  })(format);
 };
 Strings.Filter=function(f,s)
 {
  var x,chooser;
  return(x=(chooser=function(c)
  {
   return f(c)?{
    $:1,
    $0:String.fromCharCode(c)
   }:null;
  },function(source)
  {
   return Seq.choose(chooser,source);
  })(s),Arrays.ofSeq(x)).join("");
 };
 Strings.SplitStrings=function(s,sep,opts)
 {
  var re;
  re=Strings.concat("|",Arrays.map(Strings.RegexEscape,sep));
  return Strings.Split(s,new Global.RegExp(re),opts);
 };
 Strings.SplitChars=function(s,sep,opts)
 {
  var re;
  re="["+Strings.RegexEscape(Global.String.fromCharCode.apply(void 0,sep))+"]";
  return Strings.Split(s,new Global.RegExp(re),opts);
 };
 Strings.Split=function(s,pat,opts)
 {
  var res;
  res=Strings.SplitWith(s,pat);
  return opts===1?Arrays.filter(function(x)
  {
   return x!=="";
  },res):res;
 };
 Strings.TrimEnd=function(s,t)
 {
  var $1,i,go,ct;
  if(Unchecked.Equals(t,null)?true:t.length==0)
   $1=Strings.TrimEndWS(s);
  else
   {
    i=s.length-1;
    go=true;
    while(i>=0?go:false)
     (function()
     {
      var c,predicate;
      c=s.charCodeAt(i);
      return(predicate=function(y)
      {
       return c===y;
      },function(array)
      {
       return Seq.exists(predicate,array);
      })(t)?void(i=i-1):void(go=false);
     }());
    $1=(ct=i+1,Strings.Substring(s,0,ct));
   }
  return $1;
 };
 Strings.TrimStart=function(s,t)
 {
  var $1,i,go;
  if(Unchecked.Equals(t,null)?true:t.length==0)
   $1=Strings.TrimStartWS(s);
  else
   {
    i=0;
    go=true;
    while(i<s.length?go:false)
     (function()
     {
      var c,predicate;
      c=s.charCodeAt(i);
      return(predicate=function(y)
      {
       return c===y;
      },function(array)
      {
       return Seq.exists(predicate,array);
      })(t)?void(i=i+1):void(go=false);
     }());
    $1=s.substring(i);
   }
  return $1;
 };
 Strings.ToCharArrayRange=function(s,startIndex,length)
 {
  return Arrays.init(length,function(i)
  {
   return s.charCodeAt(startIndex+i);
  });
 };
 Strings.ToCharArray=function(s)
 {
  return Arrays.init(s.length,function(x)
  {
   return s.charCodeAt(x);
  });
 };
 Strings.ReplaceChar=function(s,oldC,newC)
 {
  return Strings.Replace(s,String.fromCharCode(oldC),String.fromCharCode(newC));
 };
 Strings.Replace=function(subject,search,replace)
 {
  var replaceLoop;
  replaceLoop=function(subj)
  {
   var index,replaced,nextStartIndex,ct;
   index=subj.indexOf(search);
   return index!==-1?(replaced=Strings.ReplaceOnce(subj,search,replace),nextStartIndex=index+replace.length,(ct=index+replace.length,Strings.Substring(replaced,0,ct))+replaceLoop(replaced.substring(nextStartIndex))):subj;
  };
  return replaceLoop(subject);
 };
 Strings.PadRight=function(s,n)
 {
  return Strings.PadRightWith(s,n,32);
 };
 Strings.PadLeft=function(s,n)
 {
  return Strings.PadLeftWith(s,n,32);
 };
 Strings.CopyTo=function(s,o,d,off,ct)
 {
  Arrays.blit(Strings.ToCharArray(s),o,d,off,ct);
 };
 Strings.Compare=function(x,y)
 {
  return Operators.Compare(x,y);
 };
 Task=WebSharper.Task=Runtime.Class({
  Execute:function()
  {
   this.action();
  },
  Start:function()
  {
   var $this;
   $this=this;
   Unchecked.Equals(this.status,0)?(this.status=2,Concurrency.scheduler().Fork(function()
   {
    $this.status=3;
    try
    {
     $this.Execute();
     $this.status=5;
    }
    catch(matchValue)
    {
     var $1;
     (matchValue instanceof OperationCanceledException?Unchecked.Equals(matchValue.ct,$this.token)?($1=matchValue,true):false:false)?(Global.console.log.apply(Global.console,["Task cancellation caught:"].concat([$1])),$this.exc=new AggregateException.New$3([$1]),$this.status=6):(Global.console.log.apply(Global.console,["Task error caught:"].concat([matchValue])),$this.exc=new AggregateException.New$3([matchValue]),$this.status=7);
    }
    $this.RunContinuations();
   })):Operators.InvalidOp("Task not in initial state");
  },
  StartContinuation:function()
  {
   var $this;
   $this=this;
   Unchecked.Equals(this.status,1)?(this.status=2,Concurrency.scheduler().Fork(function()
   {
    if(Unchecked.Equals($this.status,2))
     {
      $this.status=3;
      try
      {
       $this.Execute();
       $this.status=5;
      }
      catch(e)
      {
       $this.exc=new AggregateException.New$3([e]);
       $this.status=7;
      }
      $this.RunContinuations();
     }
   })):null;
  },
  ContinueWith:function(func,ct)
  {
   var $this,res;
   $this=this;
   res=new Task1.New(function()
   {
    return func($this);
   },ct,1,null,void 0);
   this.get_IsCompleted()?res.StartContinuation():this.continuations.push(res);
   return res;
  },
  ContinueWith$1:function(action,ct)
  {
   var $this,res;
   $this=this;
   res=new Task.New$2(function()
   {
    action($this);
   },ct,1,null);
   this.get_IsCompleted()?res.StartContinuation():this.continuations.push(res);
   return res;
  },
  ContinueWith$2:function(action)
  {
   return this.ContinueWith$1(action,Concurrency.noneCT());
  },
  RunContinuations:function()
  {
   var idx,$1;
   var arr=this.continuations;
   for(idx=0,$1=arr.length-1;idx<=$1;idx++)Arrays.get(arr,idx).StartContinuation();
  },
  OnCompleted:function(cont)
  {
   this.get_IsCompleted()?cont():(Unchecked.Equals(this.get_Status(),0)?this.Start():null,this.ContinueWith$2(cont));
  },
  get_Status:function()
  {
   return this.status;
  },
  get_IsFaulted:function()
  {
   return Unchecked.Equals(this.status,7);
  },
  get_IsCompleted:function()
  {
   return(Unchecked.Equals(this.status,5)?true:Unchecked.Equals(this.status,7))?true:Unchecked.Equals(this.status,6);
  },
  get_IsCanceled:function()
  {
   return Unchecked.Equals(this.status,6);
  },
  get_Exception:function()
  {
   return this.exc;
  }
 },null,Task);
 Task.WhenAll=function(tasks)
 {
  var i,$1;
  var target=Arrays.length(tasks);
  var completed=[0];
  var results=new Global.Array(target);
  var tcs=new TaskCompletionSource.New();
  for(i=0,$1=target-1;i<=$1;i++)(function(i$1)
  {
   return Arrays.get(tasks,i).ContinueWith$2(function(t)
   {
    return t.get_IsFaulted()?tcs.TrySetException$1(t.get_Exception()):t.get_IsCanceled()?tcs.TrySetCanceled$1():(Ref.incr(completed),results[i$1]=t.get_Result(),completed[0]===target?tcs.SetResult(results):null);
   });
  }(i));
  return tcs.get_Task();
 };
 Task.WhenAll$1=function(tasks)
 {
  var i,$1;
  var target=Arrays.length(tasks);
  var completed=[0];
  var tcs=new TaskCompletionSource.New();
  for(i=0,$1=target-1;i<=$1;i++)Arrays.get(tasks,i).ContinueWith$2(function(t)
  {
   return t.get_IsFaulted()?tcs.TrySetException$1(t.get_Exception()):t.get_IsCanceled()?tcs.TrySetCanceled$1():(Ref.incr(completed),completed[0]===target?tcs.TrySetResult():null);
  });
  return tcs.get_Task();
 };
 Task.WhenAny=function(tasks)
 {
  var idx,$1;
  var tcs=new TaskCompletionSource.New();
  for(idx=0,$1=tasks.length-1;idx<=$1;idx++){
   var t;
   t=Arrays.get(tasks,idx);
   t.ContinueWith(function(t$1)
   {
    return tcs.TrySetResult(t$1);
   },Concurrency.noneCT());
  }
  return tcs.get_Task();
 };
 Task.WhenAny$1=function(tasks)
 {
  var idx,$1;
  var tcs=new TaskCompletionSource.New();
  for(idx=0,$1=tasks.length-1;idx<=$1;idx++){
   var t;
   t=Arrays.get(tasks,idx);
   t.ContinueWith$2(function(t$1)
   {
    return tcs.TrySetResult(t$1);
   });
  }
  return tcs.get_Task();
 };
 Task.Delay=function(time,ct)
 {
  var a;
  a=Concurrency.Sleep(time);
  return Concurrency.StartAsTask(a,{
   $:1,
   $0:ct
  });
 };
 Task.Delay$1=function(time)
 {
  var a;
  a=Concurrency.Sleep(time);
  return Concurrency.StartAsTask(a,null);
 };
 Task.Run=function(func,ct)
 {
  var task;
  task=func();
  return ct.c?Task.FromCanceled(ct):(Unchecked.Equals(task.get_Status(),0)?task.Start():null,task);
 };
 Task.Run$1=function(func,ct)
 {
  var res;
  res=new Task1.New(func,ct,0,null,void 0);
  res.Start();
  return res;
 };
 Task.Run$2=function(func,ct)
 {
  var task;
  task=func();
  return ct.c?Task.FromCanceled$1(ct):(Unchecked.Equals(task.get_Status(),0)?task.Start():null,task);
 };
 Task.Run$3=function(action,ct)
 {
  var res;
  res=new Task.New$2(action,ct,0,null);
  res.Start();
  return res;
 };
 Task.FromResult=function(res)
 {
  return new Task1.New(null,Concurrency.noneCT(),5,null,res);
 };
 Task.FromException=function(exc)
 {
  return new Task1.New(null,Concurrency.noneCT(),7,new AggregateException.New$3([exc]),null);
 };
 Task.FromException$1=function(exc)
 {
  return new Task.New$2(null,Concurrency.noneCT(),7,new AggregateException.New$3([exc]));
 };
 Task.FromCanceled=function(ct)
 {
  return new Task1.New(null,ct,6,null,null);
 };
 Task.FromCanceled$1=function(ct)
 {
  return new Task.New$2(null,ct,6,null);
 };
 Task.New=Runtime.Ctor(function(action,ct)
 {
  Task.New$2.call(this,action,ct,0,null);
 },Task);
 Task.New$1=Runtime.Ctor(function(action)
 {
  Task.New$2.call(this,action,Concurrency.noneCT(),0,null);
 },Task);
 Task.New$2=Runtime.Ctor(function(action,token,status,exc)
 {
  this.action=action;
  this.token=token;
  this.status=status;
  this.continuations=[];
  this.exc=exc;
  null;
 },Task);
 Task1=WebSharper.Task1=Runtime.Class({
  get_Result:function()
  {
   return this.result;
  },
  Execute:function()
  {
   this.result=this.func();
  }
 },Task,Task1);
 Task1.New=Runtime.Ctor(function(func,token,status,exc,result)
 {
  Task.New$2.call(this,null,token,status,exc);
  this.func=func;
  this.result=result;
  null;
 },Task1);
 TaskCompletionSource=WebSharper.TaskCompletionSource=Runtime.Class({
  TrySetResult:function(res)
  {
   return!this.task.get_IsCompleted()?(this.task.status=5,this.task.result=res,this.task.RunContinuations(),true):false;
  },
  TrySetException:function(exs)
  {
   return this.TrySetException$1(new AggregateException.New$2(exs));
  },
  TrySetException$1:function(exc)
  {
   return!this.task.get_IsCompleted()?(this.task.status=7,this.task.exc=new AggregateException.New$3([exc]),this.task.RunContinuations(),true):false;
  },
  TrySetCanceled:function(ct)
  {
   return!this.task.get_IsCompleted()?(this.task.status=6,this.task.RunContinuations(),true):false;
  },
  TrySetCanceled$1:function()
  {
   return!this.task.get_IsCompleted()?(this.task.status=6,this.task.RunContinuations(),true):false;
  },
  SetResult:function(res)
  {
   this.task.get_IsCompleted()?Operators.FailWith("Task already completed."):null;
   this.task.status=5;
   this.task.result=res;
   this.task.RunContinuations();
  },
  SetException:function(exs)
  {
   this.SetException$1(new AggregateException.New$2(exs));
  },
  SetException$1:function(exc)
  {
   this.task.get_IsCompleted()?Operators.FailWith("Task already completed."):null;
   this.task.status=7;
   this.task.exc=new AggregateException.New$3([exc]);
   this.task.RunContinuations();
  },
  SetCanceled:function()
  {
   this.task.get_IsCompleted()?Operators.FailWith("Task already completed."):null;
   this.task.status=6;
   this.task.RunContinuations();
  },
  get_Task:function()
  {
   return this.task;
  }
 },null,TaskCompletionSource);
 TaskCompletionSource.New=Runtime.Ctor(function()
 {
  this.task=new Task1.New(null,Concurrency.noneCT(),1,null,void 0);
  null;
 },TaskCompletionSource);
 Unchecked.Hash=function(o)
 {
  var matchValue;
  matchValue=typeof o;
  return matchValue=="function"?0:matchValue=="boolean"?o?1:0:matchValue=="number"?o:matchValue=="string"?Unchecked.hashString(o):matchValue=="object"?o==null?0:o instanceof Global.Array?Unchecked.hashArray(o):Unchecked.hashObject(o):0;
 };
 Unchecked.hashObject=function(o)
 {
  var _______,h;
  return"GetHashCode"in o?o.GetHashCode():(_______=Runtime.Curried2(Unchecked.hashMix),h=[0],JSModule.ForEach(o,function(key)
  {
   h[0]=(_______((_______(h[0]))(Unchecked.hashString(key))))(Unchecked.Hash(o[key]));
   return false;
  }),h[0]);
 };
 Unchecked.hashString=function(s)
 {
  var $1,hash;
  if(s===null)
   $1=0;
  else
   {
    hash=5381;
    var i,$2;
    for(i=0,$2=s.length-1;i<=$2;i++)hash=Unchecked.hashMix(hash,s.charCodeAt(i)<<0);
    $1=hash;
   }
  return $1;
 };
 Unchecked.hashArray=function(o)
 {
  var h;
  h=-34948909;
  var i,$1;
  for(i=0,$1=Arrays.length(o)-1;i<=$1;i++)h=Unchecked.hashMix(h,Unchecked.Hash(Arrays.get(o,i)));
  return h;
 };
 Unchecked.hashMix=function(x,y)
 {
  return(x<<5)+x+y;
 };
 Unchecked.Equals=function(a,b)
 {
  var matchValue;
  return a===b?true:(matchValue=typeof a,matchValue=="object"?(((a===null?true:a===void 0)?true:b===null)?true:b===void 0)?false:"Equals"in a?a.Equals(b):(a instanceof Global.Array?b instanceof Global.Array:false)?Unchecked.arrayEquals(a,b):(a instanceof Global.Date?b instanceof Global.Date:false)?Unchecked.dateEquals(a,b):((Runtime.Curried2(function(a$1,b$1)
  {
   var eqR;
   eqR=[true];
   JSModule.ForEach(a$1,function(k)
   {
    eqR[0]=!a$1.hasOwnProperty(k)?true:b$1.hasOwnProperty(k)?Unchecked.Equals(a$1[k],b$1[k]):false;
    return!eqR[0];
   });
   eqR[0]?JSModule.ForEach(b$1,function(k)
   {
    eqR[0]=!b$1.hasOwnProperty(k)?true:a$1.hasOwnProperty(k);
    return!eqR[0];
   }):null;
   return eqR[0];
  }))(a))(b):matchValue=="function"?"$Func"in a?a.$Func===b.$Func?a.$Target===b.$Target:false:("$Invokes"in a?"$Invokes"in b:false)?Unchecked.arrayEquals(a.$Invokes,b.$Invokes):false:false);
 };
 Unchecked.dateEquals=function(a,b)
 {
  return a.getTime()===b.getTime();
 };
 Unchecked.arrayEquals=function(a,b)
 {
  var $1,eq,i;
  if(Arrays.length(a)===Arrays.length(b))
   {
    eq=true;
    i=0;
    while(eq?i<Arrays.length(a):false)
     {
      !Unchecked.Equals(Arrays.get(a,i),Arrays.get(b,i))?void(eq=false):null;
      i=i+1;
     }
    $1=eq;
   }
  else
   $1=false;
  return $1;
 };
 Unchecked.Compare=function(a,b)
 {
  var $1,$2;
  if(a===b)
   $1=0;
  else
   {
    var matchValue=typeof a;
    switch(matchValue=="function"?1:matchValue=="boolean"?2:matchValue=="number"?2:matchValue=="string"?2:matchValue=="object"?3:0)
    {
     case 0:
      $1=typeof b=="undefined"?0:-1;
      break;
     case 1:
      $1=Operators.FailWith("Cannot compare function values.");
      break;
     case 2:
      $1=a<b?-1:1;
      break;
     case 3:
      $1=a===null?-1:b===null?1:"CompareTo"in a?a.CompareTo(b):"CompareTo0"in a?a.CompareTo0(b):(a instanceof Global.Array?b instanceof Global.Array:false)?Unchecked.compareArrays(a,b):(a instanceof Global.Date?b instanceof Global.Date:false)?Unchecked.compareDates(a,b):((Runtime.Curried2(function(a$1,b$1)
      {
       var cmp;
       cmp=[0];
       JSModule.ForEach(a$1,function(k)
       {
        return!a$1.hasOwnProperty(k)?false:!b$1.hasOwnProperty(k)?(cmp[0]=1,true):(cmp[0]=Unchecked.Compare(a$1[k],b$1[k]),cmp[0]!==0);
       });
       cmp[0]===0?JSModule.ForEach(b$1,function(k)
       {
        return!b$1.hasOwnProperty(k)?false:!a$1.hasOwnProperty(k)?(cmp[0]=-1,true):false;
       }):null;
       return cmp[0];
      }))(a))(b);
      break;
    }
   }
  return $1;
 };
 Unchecked.compareDates=function(a,b)
 {
  return Operators.Compare(a.getTime(),b.getTime());
 };
 Unchecked.compareArrays=function(a,b)
 {
  var $1,cmp,i;
  if(Arrays.length(a)<Arrays.length(b))
   $1=-1;
  else
   if(Arrays.length(a)>Arrays.length(b))
    $1=1;
   else
    {
     cmp=0;
     i=0;
     while(cmp===0?i<Arrays.length(a):false)
      {
       cmp=Unchecked.Compare(Arrays.get(a,i),Arrays.get(b,i));
       i=i+1;
      }
     $1=cmp;
    }
  return $1;
 };
}());
