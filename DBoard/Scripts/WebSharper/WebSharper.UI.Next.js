(function()
{
 var Global=this;
 var WebSharper=Global.WebSharper=Global.WebSharper||{};
 var UI=WebSharper.UI=WebSharper.UI||{};
 var Next=UI.Next=UI.Next||{};
 var Array=Next.Array=Next.Array||{};
 var String=Next.String=Next.String||{};
 var Abbrev=Next.Abbrev=Next.Abbrev||{};
 var Fresh=Abbrev.Fresh=Abbrev.Fresh||{};
 var HashSetModule=Abbrev.HashSetModule=Abbrev.HashSetModule||{};
 var Dict=Abbrev.Dict=Abbrev.Dict||{};
 var Slot=Abbrev.Slot=Abbrev.Slot||{};
 var Async=Abbrev.Async=Abbrev.Async||{};
 var Mailbox=Abbrev.Mailbox=Abbrev.Mailbox||{};
 var SC$1=Global.StartupCode$WebSharper_UI_Next$Abbrev=Global.StartupCode$WebSharper_UI_Next$Abbrev||{};
 var AppendListModule=Next.AppendListModule=Next.AppendListModule||{};
 var SC$2=Global.StartupCode$WebSharper_UI_Next$AppendList=Global.StartupCode$WebSharper_UI_Next$AppendList||{};
 var DomUtility=Next.DomUtility=Next.DomUtility||{};
 var InsertPos=DomUtility.InsertPos=DomUtility.InsertPos||{};
 var SC$3=Global.StartupCode$WebSharper_UI_Next$DomUtility=Global.StartupCode$WebSharper_UI_Next$DomUtility||{};
 var TrieModule=Next.TrieModule=Next.TrieModule||{};
 var LookupResult=TrieModule.LookupResult=TrieModule.LookupResult||{};
 var SC$4=Global.StartupCode$WebSharper_UI_Next$Trie=Global.StartupCode$WebSharper_UI_Next$Trie||{};
 var SnapModule=Next.SnapModule=Next.SnapModule||{};
 var View=Next.View=Next.View||{};
 var Var=Next.Var=Next.Var||{};
 var RefImpl=Next.RefImpl=Next.RefImpl||{};
 var ReactiveExtensions=Next.ReactiveExtensions=Next.ReactiveExtensions||{};
 var Submitter=Next.Submitter=Next.Submitter||{};
 var Key=Next.Key=Next.Key||{};
 var Model=Next.Model=Next.Model||{};
 var SerializerModule=Next.SerializerModule=Next.SerializerModule||{};
 var StorageModule=Next.StorageModule=Next.StorageModule||{};
 var ArrayStorage=StorageModule.ArrayStorage=StorageModule.ArrayStorage||{};
 var LocalStorageBackend=StorageModule.LocalStorageBackend=StorageModule.LocalStorageBackend||{};
 var ListModel=Next.ListModel=Next.ListModel||{};
 var ListModels=Next.ListModels=Next.ListModels||{};
 var RefImpl$1=Next.RefImpl$1=Next.RefImpl$1||{};
 var SC$5=Global.StartupCode$WebSharper_UI_Next$Models=Global.StartupCode$WebSharper_UI_Next$Models||{};
 var DoubleInterpolation=Next.DoubleInterpolation=Next.DoubleInterpolation||{};
 var Interpolation=Next.Interpolation=Next.Interpolation||{};
 var Easing=Next.Easing=Next.Easing||{};
 var Easings=Next.Easings=Next.Easings||{};
 var An=Next.An=Next.An||{};
 var Anims=Next.Anims=Next.Anims||{};
 var Trans=Next.Trans=Next.Trans||{};
 var SC$6=Global.StartupCode$WebSharper_UI_Next$Animation=Global.StartupCode$WebSharper_UI_Next$Animation||{};
 var AnimatedAttrNode=Next.AnimatedAttrNode=Next.AnimatedAttrNode||{};
 var DynamicAttrNode=Next.DynamicAttrNode=Next.DynamicAttrNode||{};
 var AttrProxy=Next.AttrProxy=Next.AttrProxy||{};
 var Client=Next.Client=Next.Client||{};
 var Attrs=Client.Attrs=Client.Attrs||{};
 var Dyn=Attrs.Dyn=Attrs.Dyn||{};
 var Attrs$1=Next.Attrs=Next.Attrs||{};
 var AttrModule=Next.AttrModule=Next.AttrModule||{};
 var SC$7=Global.StartupCode$WebSharper_UI_Next$Attr=Global.StartupCode$WebSharper_UI_Next$Attr||{};
 var DocNode=Client.DocNode=Client.DocNode||{};
 var DocElemNode=Next.DocElemNode=Next.DocElemNode||{};
 var Docs=Client.Docs=Client.Docs||{};
 var DomNodes=Docs.DomNodes=Docs.DomNodes||{};
 var NodeSet=Docs.NodeSet=Docs.NodeSet||{};
 var RunState=Docs.RunState=Docs.RunState||{};
 var Docs$1=Next.Docs=Next.Docs||{};
 var CheckedInput=Next.CheckedInput=Next.CheckedInput||{};
 var Doc=Next.Doc=Next.Doc||{};
 var Elt=Next.Elt=Next.Elt||{};
 var Flow=Next.Flow=Next.Flow||{};
 var FlowBuilder=Next.FlowBuilder=Next.FlowBuilder||{};
 var Html=Next.Html=Next.Html||{};
 var attr=Html.attr=Html.attr||{};
 var Route=Next.Route=Next.Route||{};
 var T=Route.T=Route.T||{};
 var Routing=Next.Routing=Next.Routing||{};
 var State=Routing.State=Routing.State||{};
 var RouteMap=Next.RouteMap=Next.RouteMap||{};
 var Router=Next.Router=Next.Router||{};
 var Input=Next.Input=Next.Input||{};
 var MousePosSt=Input.MousePosSt=Input.MousePosSt||{};
 var MouseBtnSt=Input.MouseBtnSt=Input.MouseBtnSt||{};
 var Mouse=Input.Mouse=Input.Mouse||{};
 var KeyListenerSt=Input.KeyListenerSt=Input.KeyListenerSt||{};
 var Keyboard=Input.Keyboard=Input.Keyboard||{};
 var SC$8=Global.StartupCode$WebSharper_UI_Next$Input=Global.StartupCode$WebSharper_UI_Next$Input||{};
 var IntelliFactory=Global.IntelliFactory;
 var Runtime=IntelliFactory&&IntelliFactory.Runtime;
 var Arrays=WebSharper&&WebSharper.Arrays;
 var Strings=WebSharper&&WebSharper.Strings;
 var Char=WebSharper&&WebSharper.Char;
 var Collections=WebSharper&&WebSharper.Collections;
 var HashSet=Collections&&Collections.HashSet;
 var Seq=WebSharper&&WebSharper.Seq;
 var Unchecked=WebSharper&&WebSharper.Unchecked;
 var Concurrency=WebSharper&&WebSharper.Concurrency;
 var List=WebSharper&&WebSharper.List;
 var Map=Collections&&Collections.Map;
 var Option=WebSharper&&WebSharper.Option;
 var FSharpMap=Collections&&Collections.FSharpMap;
 var Enumerator=WebSharper&&WebSharper.Enumerator;
 var List$1=Collections&&Collections.List;
 var Operators=WebSharper&&WebSharper.Operators;
 var Ref=WebSharper&&WebSharper.Ref;
 var Dictionary=Collections&&Collections.Dictionary;
 var Lazy=WebSharper&&WebSharper.Lazy;
 var Slice=WebSharper&&WebSharper.Slice;
 Array.MapReduce=function(f,z,re,a)
 {
  var loop;
  loop=Runtime.Curried2(function(off,len)
  {
   var $1,l2,a$1,b;
   return len<=0?z:(len===1?(off>=0?off<Arrays.length(a):false)?true:false:false)?f(Arrays.get(a,off)):(l2=len/2>>0,a$1=(loop(off))(l2),b=(loop(off+l2))(len-l2),(re(a$1))(b));
  });
  return(loop(0))(Arrays.length(a));
 };
 String.isBlank=function(s)
 {
  return Strings.forall(Char.IsWhiteSpace,s);
 };
 Fresh.Id=function()
 {
  Fresh.set_counter(Fresh.counter()+1);
  return"uid"+Global.String(Fresh.counter());
 };
 Fresh.Int=function()
 {
  Fresh.set_counter(Fresh.counter()+1);
  return Fresh.counter();
 };
 Fresh.counter=function()
 {
  SC$1.$cctor();
  return SC$1.counter;
 };
 Fresh.set_counter=function($1)
 {
  SC$1.$cctor();
  SC$1.counter=$1;
 };
 HashSetModule.Filter=function(ok,set)
 {
  var x;
  return new HashSet.New$2((x=HashSetModule.ToArray(set),Arrays.filter(ok,x)));
 };
 HashSetModule.Intersect=function(a,b)
 {
  var set;
  set=new HashSet.New$2(HashSetModule.ToArray(a));
  set.IntersectWith(HashSetModule.ToArray(b));
  return set;
 };
 HashSetModule.Except=function(excluded,included)
 {
  var set;
  set=new HashSet.New$2(HashSetModule.ToArray(included));
  set.ExceptWith(HashSetModule.ToArray(excluded));
  return set;
 };
 HashSetModule.ToArray=function(set)
 {
  var arr;
  arr=Arrays.create(set.get_Count(),void 0);
  set.CopyTo(arr);
  return arr;
 };
 Dict.ToValueArray=function(d)
 {
  var arr,action;
  arr=Arrays.create(d.count,void 0);
  (action=Runtime.Curried2(function(i,kv)
  {
   Arrays.set(arr,i,kv.V);
  }),function(source)
  {
   Seq.iteri(action,source);
  })(d);
  return arr;
 };
 Dict.ToKeyArray=function(d)
 {
  var arr,action;
  arr=Arrays.create(d.count,void 0);
  (action=Runtime.Curried2(function(i,kv)
  {
   Arrays.set(arr,i,kv.K);
  }),function(source)
  {
   Seq.iteri(action,source);
  })(d);
  return arr;
 };
 Slot=Abbrev.Slot=Runtime.Class({
  GetHashCode:function()
  {
   return Unchecked.Hash(this.key(this.value));
  },
  Equals:function(o)
  {
   return Unchecked.Equals(this.key(this.value),this.key(o.get_Value()));
  },
  get_Value:function()
  {
   return this.value;
  }
 },null,Slot);
 Slot.New=Runtime.Ctor(function(key,value)
 {
  this.key=key;
  this.value=value;
  null;
 },Slot);
 Slot.Create=function(key,value)
 {
  return new Slot.New(key,value);
 };
 Async.Schedule=function(f)
 {
  var x;
  x=Concurrency.Delay(function()
  {
   f();
   return Concurrency.Return(null);
  });
  Concurrency.Start(x,null);
 };
 Async.StartTo=function(comp,k)
 {
  Concurrency.StartWithContinuations(comp,k,function()
  {
  },function()
  {
  },null);
 };
 Mailbox.StartProcessor=function(proc)
 {
  var mail,isActive,work,start;
  mail=[];
  isActive=[false];
  work=Concurrency.Delay(function()
  {
   var a,b,b$1;
   a=(b=Concurrency.Delay(function()
   {
    var msg,x;
    msg=mail.shift();
    x=proc(msg);
    return Concurrency.Bind(x,function()
    {
     return Concurrency.Return(null);
    });
   }),Concurrency.While(function()
   {
    return mail.length>0;
   },b));
   b$1=Concurrency.Delay(function()
   {
    isActive[0]=false;
    return Concurrency.Return(null);
   });
   return Concurrency.Combine(a,b$1);
  });
  start=function()
  {
   !isActive[0]?(isActive[0]=true,Concurrency.Start(work,null)):null;
  };
  return function(msg)
  {
   mail.push(msg);
   start();
  };
 };
 SC$1.$cctor=Runtime.Cctor(function()
 {
  SC$1.counter=0;
 });
 AppendListModule.FromArray=function(xs)
 {
  var matchValue;
  matchValue=xs.length;
  return matchValue===0?{
   $:0
  }:matchValue===1?{
   $:1,
   $0:Arrays.get(xs,0)
  }:{
   $:3,
   $0:xs.slice()
  };
 };
 AppendListModule.ToArray=function(xs)
 {
  var loop;
  var out=[];
  loop=function(xs$1)
  {
   xs$1.$==1?out.push(xs$1.$0):xs$1.$==2?(loop(xs$1.$0),loop(xs$1.$1)):xs$1.$==3?Arrays.iter(function(v)
   {
    out.push(v);
   },xs$1.$0):null;
  };
  loop(xs);
  return out.slice(0);
 };
 AppendListModule.Single=function(x)
 {
  return{
   $:1,
   $0:x
  };
 };
 AppendListModule.Concat=function(xs)
 {
  var x,z,re;
  x=Arrays.ofSeq(xs);
  return(z=AppendListModule.Empty(),re=Runtime.Curried2(AppendListModule.Append),function(a)
  {
   return Array.MapReduce(Global.id,z,re,a);
  })(x);
 };
 AppendListModule.Append=function(x,y)
 {
  var matchValue;
  matchValue=[x,y];
  return matchValue[0].$==0?matchValue[1]:matchValue[1].$==0?matchValue[0]:{
   $:2,
   $0:x,
   $1:y
  };
 };
 AppendListModule.Empty=function()
 {
  SC$2.$cctor();
  return SC$2.Empty;
 };
 SC$2.$cctor=Runtime.Cctor(function()
 {
  SC$2.Empty={
   $:0
  };
 });
 InsertPos=DomUtility.InsertPos=Runtime.Class({},null,InsertPos);
 DomUtility.SetProperty=function(target,name,value)
 {
  return target.setProperty(name,value);
 };
 DomUtility.RemoveClass=function(element,cl)
 {
  Global.jQuery(element).removeClass(cl);
 };
 DomUtility.AddClass=function(element,cl)
 {
  Global.jQuery(element).addClass(cl);
 };
 DomUtility.InsertAt=function(parent,pos,node)
 {
  !(node.parentNode===parent?((Runtime.Curried2(function(p1,p2)
  {
   var matchValue;
   matchValue=[p1,p2];
   return matchValue[0].$==1?matchValue[1].$==1?matchValue[0].$0===matchValue[1].$0:false:matchValue[1].$==0?true:false;
  }))(pos))(function(node$1)
  {
   var matchValue;
   matchValue=node$1.nextSibling;
   return Unchecked.Equals(matchValue,null)?new InsertPos({
    $:0
   }):new InsertPos({
    $:1,
    $0:matchValue
   });
  }(node)):false)?pos.$==1?parent.insertBefore(node,pos.$0):parent.appendChild(node):null;
 };
 DomUtility.RemoveNode=function(parent,el)
 {
  el.parentNode===parent?parent.removeChild(el):null;
 };
 DomUtility.SetStyle=function(el,name,value)
 {
  DomUtility.SetProperty(el.style,name,value);
 };
 DomUtility.SetAttr=function(el,name,value)
 {
  el.setAttribute(name,value);
 };
 DomUtility.RemoveAttr=function(el,attrName)
 {
  el.removeAttribute(attrName);
 };
 DomUtility.CreateAttr=function(name,value)
 {
  var a;
  a=DomUtility.Doc().createAttribute(name);
  a.value=value;
  return a;
 };
 DomUtility.CreateText=function(s)
 {
  return DomUtility.Doc().createTextNode(s);
 };
 DomUtility.CreateSvgElement=function(name)
 {
  return DomUtility.Doc().createElementNS("http://www.w3.org/2000/svg",name);
 };
 DomUtility.CreateElement=function(name)
 {
  return DomUtility.Doc().createElement(name);
 };
 DomUtility.Clear=function(ctx)
 {
  while(ctx.hasChildNodes())
   ctx.removeChild(ctx.firstChild);
 };
 DomUtility.ClearAttrs=function(ctx)
 {
  while(ctx.hasAttributes())
   ctx.removeAttributeNode(ctx.attributes.item(0));
 };
 DomUtility.AppendTo=function(ctx,node)
 {
  ctx.appendChild(node);
 };
 DomUtility.Doc=function()
 {
  SC$3.$cctor();
  return SC$3.Doc;
 };
 SC$3.$cctor=Runtime.Cctor(function()
 {
  SC$3.Doc=Global.document;
 });
 LookupResult=TrieModule.LookupResult=Runtime.Class({},null,LookupResult);
 TrieModule.Empty=function()
 {
  SC$4.$cctor();
  return SC$4.Empty;
 };
 TrieModule.Lookup=function(trie,key)
 {
  return TrieModule.Look(List.ofSeq(key),trie);
 };
 TrieModule.Look=function(key,trie)
 {
  var $1,$2;
  var matchValue=[trie,key];
  switch(matchValue[0].$==2?($2=matchValue[0].$0,0):matchValue[0].$==0?matchValue[1].$==1?($2=[matchValue[1].$0,matchValue[1].$1,matchValue[0].$0],1):2:2)
  {
   case 0:
    $1=new LookupResult({
     $:0,
     $0:$2,
     $1:key
    });
    break;
   case 1:
    var matchValue$1;
    $1=(matchValue$1=Map.TryFind($2[0],$2[2]),matchValue$1==null?new LookupResult({
     $:1
    }):TrieModule.Look($2[1],matchValue$1.$0));
    break;
   case 2:
    $1=new LookupResult({
     $:1
    });
    break;
  }
  return $1;
 };
 TrieModule.ToArray=function(trie)
 {
  var all;
  all=[];
  TrieModule.Map(Runtime.Curried2(function($1,v)
  {
   all.push(v);
  }),trie);
  return all.slice(0);
 };
 TrieModule.Mapi=function(f,trie)
 {
  var counter,next;
  counter=[0];
  next=function()
  {
   var c;
   c=counter[0];
   counter[0]=c+1;
   return c;
  };
  return TrieModule.Map(f(next()),trie);
 };
 TrieModule.Map=function(f,trie)
 {
  return TrieModule.MapLoop(new List.T({
   $:0
  }),f,trie);
 };
 TrieModule.MapLoop=function(loc,f,trie)
 {
  var x,mapping;
  return trie.$==1?{
   $:1
  }:trie.$==2?{
   $:2,
   $0:(f(loc))(trie.$0)
  }:(x=(mapping=Runtime.Curried2(function(k,v)
  {
   return TrieModule.MapLoop(List.append(loc,List.ofArray([k])),f,v);
  }),function(table)
  {
   return Map.Map(mapping,table);
  })(trie.$0),TrieModule.TrieBranch(x));
 };
 TrieModule.Merge=function(ts)
 {
  var ts$1,matchValue,x,x$1,chooser;
  ts$1=Arrays.ofSeq(ts);
  matchValue=Arrays.length(ts$1);
  return matchValue===0?{
   $:1,
   $0:{
    $:1
   }
  }:matchValue===1?{
   $:1,
   $0:Arrays.get(ts$1,0)
  }:Seq.exists(TrieModule.IsLeaf,ts$1)?null:(x=(x$1=(chooser=function($1)
  {
   return $1.$==0?{
    $:1,
    $0:$1.$0
   }:null;
  },function(source)
  {
   return Seq.choose(chooser,source);
  })(ts$1),TrieModule.MergeMaps(TrieModule.Merge,x$1)),Option.map(TrieModule.TrieBranch,x));
 };
 TrieModule.IsLeaf=function(t)
 {
  return t.$==2?true:false;
 };
 TrieModule.MergeMaps=function(merge,maps)
 {
  var x,x$1,x$2,x$3,x$4,folder,state,mapping,mapping$1;
  x=(x$1=(x$2=(x$3=(x$4=Seq.collect(Map.ToSeq,maps),(folder=Runtime.Curried2(function(s,a)
  {
   return TrieModule.MultiAdd(a[0],a[1],s);
  }),state=new FSharpMap.New([]),function(source)
  {
   return Seq.fold(folder,state,source);
  })(x$4)),Map.ToSeq(x$3)),(mapping=function(a)
  {
   var k,x$5,mapping$2;
   k=a[0];
   x$5=merge(a[1]);
   return(mapping$2=function(v)
   {
    return[k,v];
   },function(option)
   {
    return Option.map(mapping$2,option);
   })(x$5);
  },function(source)
  {
   return Seq.map(mapping,source);
  })(x$2)),TrieModule.AllSome(x$1));
  return(mapping$1=function(elements)
  {
   return Map.OfArray(Arrays.ofSeq(elements));
  },function(option)
  {
   return Option.map(mapping$1,option);
  })(x);
 };
 TrieModule.AllSome=function(xs)
 {
  var ok;
  var e=Enumerator.Get(xs);
  var r=new List$1.New$2();
  ok=true;
  while(ok?e.MoveNext():false)
   {
    var matchValue;
    matchValue=e.Current();
    (matchValue!=null?matchValue.$==1:false)?r.Add(matchValue.$0):void(ok=false);
   }
  return ok?{
   $:1,
   $0:r.ToArray()
  }:null;
 };
 TrieModule.MultiAdd=function(key,value,map)
 {
  return map.Add(key,new List.T({
   $:1,
   $0:value,
   $1:TrieModule.MultiFind(key,map)
  }));
 };
 TrieModule.MultiFind=function(key,map)
 {
  return Operators.DefaultArg(Map.TryFind(key,map),new List.T({
   $:0
  }));
 };
 TrieModule.Prefix=function(key,trie)
 {
  return TrieModule.TrieBranch(new FSharpMap.New(List.ofArray([[key,trie]])));
 };
 TrieModule.Leaf=function(v)
 {
  return{
   $:2,
   $0:v
  };
 };
 TrieModule.TrieBranch=function(xs)
 {
  return xs.get_IsEmpty()?{
   $:1
  }:{
   $:0,
   $0:xs
  };
 };
 SC$4.$cctor=Runtime.Cctor(function()
 {
  SC$4.Empty={
   $:1
  };
 });
 SnapModule.MapAsync=function(fn,snap)
 {
  var res;
  res=SnapModule.Create();
  SnapModule.When(snap,function(v)
  {
   Async.StartTo(fn(v),function(v$1)
   {
    SnapModule.MarkDone(res,snap,v$1);
   });
  },function()
  {
   SnapModule.MarkObsolete(res);
  });
  return res;
 };
 SnapModule.SnapshotOn=function(sn1,sn2)
 {
  var res,v,triggered,cont;
  res=SnapModule.Create();
  v=[null];
  triggered=[false];
  cont=function()
  {
   var matchValue,$1;
   triggered[0]?(matchValue=v[0],((matchValue!=null?matchValue.$==1:false)?SnapModule.IsForever(sn1)?($1=matchValue.$0,true):false:false)?SnapModule.MarkForever(res,$1):(matchValue!=null?matchValue.$==1:false)?SnapModule.MarkReady(res,matchValue.$0):null):null;
  };
  SnapModule.When(sn1,function()
  {
   triggered[0]=true;
   cont();
  },function()
  {
   v[0]=null;
   SnapModule.MarkObsolete(res);
  });
  SnapModule.When(sn2,function(y)
  {
   v[0]={
    $:1,
    $0:y
   };
   cont();
  },function()
  {
  });
  return res;
 };
 SnapModule.Map3=function(fn,sn1,sn2,sn3)
 {
  function obs()
  {
   v1[0]=null;
   v2[0]=null;
   v3[0]=null;
   SnapModule.MarkObsolete(res);
  }
  var matchValue,x,y,x$1,z,x$2,y$1,z$1,y$2,z$2,res,v1,v2,v3,cont;
  matchValue=[sn1.State,sn2.State,sn3.State];
  return matchValue[0].$==0?matchValue[1].$==0?matchValue[2].$==0?SnapModule.CreateForever(((fn(matchValue[0].$0))(matchValue[1].$0))(matchValue[2].$0)):(x=matchValue[0].$0,y=matchValue[1].$0,SnapModule.Map((fn(x))(y),sn3)):matchValue[2].$==0?(x$1=matchValue[0].$0,z=matchValue[2].$0,SnapModule.Map(function(y$3)
  {
   return((fn(x$1))(y$3))(z);
  },sn2)):(x$2=matchValue[0].$0,SnapModule.Map2(Runtime.Curried2(function(y$3,z$3)
  {
   return((fn(x$2))(y$3))(z$3);
  }),sn2,sn3)):matchValue[1].$==0?matchValue[2].$==0?(y$1=matchValue[1].$0,z$1=matchValue[2].$0,SnapModule.Map(function(x$3)
  {
   return((fn(x$3))(y$1))(z$1);
  },sn1)):(y$2=matchValue[1].$0,SnapModule.Map2(Runtime.Curried2(function(x$3,z$3)
  {
   return((fn(x$3))(y$2))(z$3);
  }),sn1,sn3)):matchValue[2].$==0?(z$2=matchValue[2].$0,SnapModule.Map2(Runtime.Curried2(function(x$3,y$3)
  {
   return((fn(x$3))(y$3))(z$2);
  }),sn1,sn2)):(res=SnapModule.Create(),v1=[null],v2=[null],v3=[null],cont=function()
  {
   var matchValue$1,$1,$2,$3,x$3,y$3,z$3;
   matchValue$1=[v1[0],v2[0],v3[0]];
   ($1=matchValue$1[0],$1!=null?$1.$==1:false)?($2=matchValue$1[1],$2!=null?$2.$==1:false)?($3=matchValue$1[2],$3!=null?$3.$==1:false)?(x$3=matchValue$1[0].$0,y$3=matchValue$1[1].$0,z$3=matchValue$1[2].$0,((SnapModule.IsForever(sn1)?SnapModule.IsForever(sn2):false)?SnapModule.IsForever(sn3):false)?SnapModule.MarkForever(res,((fn(x$3))(y$3))(z$3)):SnapModule.MarkReady(res,((fn(x$3))(y$3))(z$3))):null:null:null;
  },SnapModule.When(sn1,function(x$3)
  {
   v1[0]={
    $:1,
    $0:x$3
   };
   cont();
  },obs),SnapModule.When(sn2,function(y$3)
  {
   v2[0]={
    $:1,
    $0:y$3
   };
   cont();
  },obs),SnapModule.When(sn3,function(z$3)
  {
   v3[0]={
    $:1,
    $0:z$3
   };
   cont();
  },obs),res);
 };
 SnapModule.Map2=function(fn,sn1,sn2)
 {
  function obs()
  {
   v1[0]=null;
   v2[0]=null;
   SnapModule.MarkObsolete(res);
  }
  var matchValue,y,res,v1,v2,cont;
  matchValue=[sn1.State,sn2.State];
  return matchValue[0].$==0?matchValue[1].$==0?SnapModule.CreateForever((fn(matchValue[0].$0))(matchValue[1].$0)):SnapModule.Map(fn(matchValue[0].$0),sn2):matchValue[1].$==0?(y=matchValue[1].$0,SnapModule.Map(function(x)
  {
   return(fn(x))(y);
  },sn1)):(res=SnapModule.Create(),v1=[null],v2=[null],cont=function()
  {
   var matchValue$1,$1,$2,x,y$1;
   matchValue$1=[v1[0],v2[0]];
   ($1=matchValue$1[0],$1!=null?$1.$==1:false)?($2=matchValue$1[1],$2!=null?$2.$==1:false)?(x=matchValue$1[0].$0,y$1=matchValue$1[1].$0,(SnapModule.IsForever(sn1)?SnapModule.IsForever(sn2):false)?SnapModule.MarkForever(res,(fn(x))(y$1)):SnapModule.MarkReady(res,(fn(x))(y$1))):null:null;
  },SnapModule.When(sn1,function(x)
  {
   v1[0]={
    $:1,
    $0:x
   };
   cont();
  },obs),SnapModule.When(sn2,function(y$1)
  {
   v2[0]={
    $:1,
    $0:y$1
   };
   cont();
  },obs),res);
 };
 SnapModule.MapCached=function(prev,fn,sn)
 {
  return SnapModule.Map(function(x)
  {
   var matchValue,$1,y;
   matchValue=prev[0];
   return((matchValue!=null?matchValue.$==1:false)?Unchecked.Equals(x,matchValue.$0[0])?($1=[matchValue.$0[0],matchValue.$0[1]],true):false:false)?$1[1]:(y=fn(x),prev[0]={
    $:1,
    $0:[x,y]
   },y);
  },sn);
 };
 SnapModule.Map=function(fn,sn)
 {
  var matchValue,res,g;
  matchValue=sn.State;
  return matchValue.$==0?SnapModule.CreateForever(fn(matchValue.$0)):(res=SnapModule.Create(),SnapModule.When(sn,(g=function(v)
  {
   SnapModule.MarkDone(res,sn,v);
  },function(x)
  {
   return g(fn(x));
  }),function()
  {
   SnapModule.MarkObsolete(res);
  }),res);
 };
 SnapModule.Sequence=function(snaps)
 {
  var res,snaps$1,c,d,vs,obs,cont,action;
  return Seq.isEmpty(snaps)?SnapModule.CreateForever([]):(res=SnapModule.Create(),snaps$1=Arrays.ofSeq(snaps),c=Arrays.length(snaps$1),d=[0],vs=[[]],obs=function()
  {
   d[0]=0;
   vs[0]=[];
   SnapModule.MarkObsolete(res);
  },cont=function()
  {
   d[0]===c?Seq.forall(SnapModule.IsForever,snaps$1)?SnapModule.MarkForever(res,vs[0]):SnapModule.MarkReady(res,vs[0]):null;
  },(action=Runtime.Curried2(function(i,s)
  {
   SnapModule.When(s,function(x)
   {
    vs[0][i]=x;
    Ref.incr(d);
    cont();
   },obs);
  }),function(array)
  {
   Arrays.iteri(action,array);
  })(snaps$1),res);
 };
 SnapModule.CreateForeverAsync=function(a)
 {
  var o,x;
  o=SnapModule.Make({
   $:3,
   $0:[],
   $1:[]
  });
  x=Concurrency.Delay(function()
  {
   return Concurrency.Bind(a,function($1)
   {
    SnapModule.MarkForever(o,$1);
    return Concurrency.Return(null);
   });
  });
  Concurrency.Start(x,null);
  return o;
 };
 SnapModule.Bind=function(f,snap)
 {
  var res,onObs;
  res=SnapModule.Create();
  onObs=function()
  {
   SnapModule.MarkObsolete(res);
  };
  SnapModule.When(snap,function(x)
  {
   var y;
   y=f(x);
   SnapModule.When(y,function(v)
   {
    (SnapModule.IsForever(y)?SnapModule.IsForever(snap):false)?SnapModule.MarkForever(res,v):SnapModule.MarkReady(res,v);
   },onObs);
  },onObs);
  return res;
 };
 SnapModule.When=function(snap,avail,obsolete)
 {
  var matchValue;
  matchValue=snap.State;
  matchValue.$==1?obsolete():matchValue.$==2?(matchValue.$1.push(obsolete),avail(matchValue.$0)):matchValue.$==3?(matchValue.$0.push(avail),matchValue.$1.push(obsolete)):avail(matchValue.$0);
 };
 SnapModule.MarkDone=function(res,sn,v)
 {
  SnapModule.IsForever(sn)?SnapModule.MarkForever(res,v):SnapModule.MarkReady(res,v);
 };
 SnapModule.MarkReady=function(sn,v)
 {
  var matchValue;
  matchValue=sn.State;
  matchValue.$==3?(sn.State={
   $:2,
   $0:v,
   $1:matchValue.$1
  },Seq.iter(function(k)
  {
   k(v);
  },matchValue.$0)):null;
 };
 SnapModule.MarkObsolete=function(sn)
 {
  var matchValue,$1;
  matchValue=sn.State;
  (matchValue.$==1?true:matchValue.$==2?($1=matchValue.$1,false):matchValue.$==3?($1=matchValue.$1,false):true)?null:(sn.State={
   $:1
  },Seq.iter(function(k)
  {
   k();
  },$1));
 };
 SnapModule.MarkForever=function(sn,v)
 {
  var matchValue;
  matchValue=sn.State;
  matchValue.$==3?(sn.State={
   $:0,
   $0:v
  },Seq.iter(function(k)
  {
   k(v);
  },matchValue.$0)):null;
 };
 SnapModule.IsObsolete=function(snap)
 {
  return snap.State.$==1?true:false;
 };
 SnapModule.IsForever=function(snap)
 {
  return snap.State.$==0?true:false;
 };
 SnapModule.CreateWithValue=function(v)
 {
  return SnapModule.Make({
   $:2,
   $0:v,
   $1:[]
  });
 };
 SnapModule.CreateForever=function(v)
 {
  return SnapModule.Make({
   $:0,
   $0:v
  });
 };
 SnapModule.Create=function()
 {
  return SnapModule.Make({
   $:3,
   $0:[],
   $1:[]
  });
 };
 SnapModule.Make=function(st)
 {
  return{
   State:st
  };
 };
 View=Next.View=Runtime.Class({},null,View);
 Var=Next.Var=Runtime.Class({
  get_View:function()
  {
   var $this;
   $this=this;
   return new View({
    $:0,
    $0:function()
    {
     return Var.Observe($this);
    }
   });
  },
  RId:function()
  {
   return"uinref"+Global.String(Var.GetId(this));
  },
  RView:function()
  {
   return this.get_View();
  },
  RUpdateMaybe:function(f)
  {
   var matchValue;
   matchValue=f(Var.Get(this));
   (matchValue!=null?matchValue.$==1:false)?Var.Set(this,matchValue.$0):null;
  },
  RUpdate:function(f)
  {
   Var.Update(this,f);
  },
  WebSharper_UI_Next_IRef_1$set_Value:function(v)
  {
   Var.Set(this,v);
  },
  WebSharper_UI_Next_IRef_1$get_Value:function()
  {
   return Var.Get(this);
  },
  RSet:function(v)
  {
   Var.Set(this,v);
  },
  RGet:function()
  {
   return Var.Get(this);
  }
 },null,Var);
 Var.New=function(Const,Current,Snap,Id)
 {
  return new Var({
   Const:Const,
   Current:Current,
   Snap:Snap,
   Id:Id
  });
 };
 Var.Lens=function(iref,get,update)
 {
  return new RefImpl.New(iref,get,update);
 };
 Var.Observe=function(_var)
 {
  return _var.Snap;
 };
 Var.GetId=function(_var)
 {
  return _var.Id;
 };
 Var.Update=function(_var,fn)
 {
  var arg10;
  arg10=fn(Var.Get(_var));
  Var.Set(_var,arg10);
 };
 Var.SetFinal=function(_var,value)
 {
  _var.Const?null:(_var.Const=true,_var.Current=value,_var.Snap=SnapModule.CreateForever(value));
 };
 Var.Set=function(_var,value)
 {
  _var.Const?null:(SnapModule.MarkObsolete(_var.Snap),_var.Current=value,_var.Snap=SnapModule.CreateWithValue(value));
 };
 Var.Get=function(_var)
 {
  return _var.Current;
 };
 Var.Create=function()
 {
  return Var.New(false,null,SnapModule.CreateWithValue(),Fresh.Int());
 };
 Var.Create$1=function(v)
 {
  return Var.New(false,v,SnapModule.CreateWithValue(v),Fresh.Int());
 };
 View.get_Do=function()
 {
  return{
   $:0
  };
 };
 View.Apply=function(fn,view)
 {
  return View.Map2(Runtime.Curried2(function(f,x)
  {
   return f(x);
  }),fn,view);
 };
 View.Sink=function(act,$1)
 {
  var loop;
  var observe=$1.$0;
  loop=function()
  {
   var sn;
   sn=observe();
   SnapModule.When(sn,act,function()
   {
    Async.Schedule(loop);
   });
  };
  Async.Schedule(loop);
 };
 View.TryFinally=function(f,$1)
 {
  var observe;
  observe=$1.$0;
  return View.CreateLazy(function()
  {
   var $2;
   try
   {
    $2=observe();
   }
   finally
   {
    f();
   }
   return $2;
  });
 };
 View.TryWith=function(f,$1)
 {
  var observe;
  observe=$1.$0;
  return View.CreateLazy(function()
  {
   var $2;
   try
   {
    $2=observe();
   }
   catch(exn)
   {
    $2=f(exn).$0();
   }
   return $2;
  });
 };
 View.ConstAsync=function(a)
 {
  var o;
  o=SnapModule.CreateForeverAsync(a);
  return new View({
   $:0,
   $0:function()
   {
    return o;
   }
  });
 };
 View.Const=function(x)
 {
  var o;
  o=SnapModule.CreateForever(x);
  return new View({
   $:0,
   $0:function()
   {
    return o;
   }
  });
 };
 View.Sequence=function(views)
 {
  return View.CreateLazy(function()
  {
   var x,mapping;
   x=(mapping=function($1)
   {
    return $1.$0();
   },function(source)
   {
    return Seq.map(mapping,source);
   })(views);
   return SnapModule.Sequence(x);
  });
 };
 View.Bind=function(fn,view)
 {
  return View.Join(View.Map(fn,view));
 };
 View.Join=function($1)
 {
  var observe;
  observe=$1.$0;
  return View.CreateLazy(function()
  {
   var x,___arg00___;
   x=observe();
   return(___arg00___=function($2)
   {
    return $2.$0();
   },function(___arg10___)
   {
    return SnapModule.Bind(___arg00___,___arg10___);
   })(x);
  });
 };
 View.MapSeqCachedView=function(conv,view)
 {
  return View.MapSeqCachedViewBy(Global.id,Runtime.Curried2(function($1,v)
  {
   return conv(v);
  }),view);
 };
 View.MapSeqCachedViewBy=function(key,conv,view)
 {
  var state;
  state=[new Dictionary.New$5()];
  return((Runtime.Curried2(View.Map))(function(xs)
  {
   var prevState,newState,result,x,mapping;
   prevState=state[0];
   newState=new Dictionary.New$5();
   result=(x=Arrays.ofSeq(xs),(mapping=function(x$1)
   {
    var k,node,n,arg00;
    k=key(x$1);
    node=prevState.ContainsKey(k)?(n=prevState.get_Item(k),Var.Set(n.NVar,x$1),n):(arg00=conv(k),View.ConvertSeqNode(arg00,x$1));
    newState.set_Item(k,node);
    return node.NValue;
   },function(array)
   {
    return Arrays.map(mapping,array);
   })(x));
   state[0]=newState;
   return result;
  }))(view);
 };
 View.ConvertSeqNode=function(conv,value)
 {
  var _var,view;
  _var=Var.Create$1(value);
  view=_var.get_View();
  return{
   NValue:conv(view),
   NVar:_var,
   NView:view
  };
 };
 View.MapSeqCached=function(conv,view)
 {
  return View.MapSeqCachedBy(Global.id,conv,view);
 };
 View.MapSeqCachedBy=function(key,conv,view)
 {
  var state;
  state=[new Dictionary.New$5()];
  return((Runtime.Curried2(View.Map))(function(xs)
  {
   var prevState,newState,result,x,mapping;
   prevState=state[0];
   newState=new Dictionary.New$5();
   result=(x=Arrays.ofSeq(xs),(mapping=function(x$1)
   {
    var k,res;
    k=key(x$1);
    res=prevState.ContainsKey(k)?prevState.get_Item(k):conv(x$1);
    newState.set_Item(k,res);
    return res;
   },function(array)
   {
    return Arrays.map(mapping,array);
   })(x));
   state[0]=newState;
   return result;
  }))(view);
 };
 View.UpdateWhile=function(def,v1,v2)
 {
  var value;
  value=[def];
  return View.Map2(Runtime.Curried2(function(pred,v)
  {
   pred?void(value[0]=v):null;
   return value[0];
  }),v1,v2);
 };
 View.SnapshotOn=function(def,$1,$2)
 {
  var o1,o2,sInit;
  o1=$1.$0;
  o2=$2.$0;
  sInit=SnapModule.CreateWithValue(def);
  return View.CreateLazy(function()
  {
   var s1,s2,s;
   s1=o1();
   s2=o2();
   return SnapModule.IsObsolete(sInit)?SnapModule.SnapshotOn(s1,s2):(s=SnapModule.SnapshotOn(s1,s2),SnapModule.When(s,function()
   {
   },function()
   {
    SnapModule.MarkObsolete(sInit);
   }),sInit);
  });
 };
 View.GetAsync=function(v)
 {
  return Concurrency.FromContinuations(function(a)
  {
   View.Get(a[0],v);
  });
 };
 View.Get=function(f,$1)
 {
  var obs;
  var observe=$1.$0;
  var ok=[false];
  obs=function()
  {
   SnapModule.When(observe(),function(v)
   {
    !ok[0]?(ok[0]=true,f(v)):null;
   },function()
   {
    !ok[0]?obs():null;
   });
  };
  obs();
 };
 View.MapAsync2=function(fn,v1,v2)
 {
  var x;
  x=View.Map2(fn,v1,v2);
  return((Runtime.Curried2(View.MapAsync))(Global.id))(x);
 };
 View.MapAsync=function(fn,$1)
 {
  var observe;
  observe=$1.$0;
  return View.CreateLazy(function()
  {
   var x;
   x=observe();
   return SnapModule.MapAsync(fn,x);
  });
 };
 View.Map2=function(fn,v1,v2)
 {
  return View.CreateLazy2(Runtime.Curried2(function(___arg10___,___arg20___)
  {
   return SnapModule.Map2(fn,___arg10___,___arg20___);
  }),v1,v2);
 };
 View.CreateLazy2=function(snapFn,$1,$2)
 {
  var o1,o2;
  o1=$1.$0;
  o2=$2.$0;
  return View.CreateLazy(function()
  {
   var s1,s2;
   s1=o1();
   s2=o2();
   return(snapFn(s1))(s2);
  });
 };
 View.MapCached=function(fn,$1)
 {
  var observe,vref;
  observe=$1.$0;
  vref=[null];
  return View.CreateLazy(function()
  {
   var x;
   x=observe();
   return SnapModule.MapCached(vref,fn,x);
  });
 };
 View.Map=function(fn,$1)
 {
  var observe;
  observe=$1.$0;
  return View.CreateLazy(function()
  {
   var x;
   x=observe();
   return SnapModule.Map(fn,x);
  });
 };
 View.CreateLazy=function(observe)
 {
  var cur;
  cur=[null];
  return new View({
   $:0,
   $0:function()
   {
    var matchValue,$1,sn;
    matchValue=cur[0];
    return((matchValue!=null?matchValue.$==1:false)?!SnapModule.IsObsolete(matchValue.$0)?($1=matchValue.$0,true):false:false)?$1:(sn=observe(),cur[0]={
     $:1,
     $0:sn
    },sn);
   }
  });
 };
 RefImpl=Next.RefImpl=Runtime.Class({
  RId:function()
  {
   return this.id;
  },
  RView:function()
  {
   var x;
   x=this.baseRef.RView();
   return((Runtime.Curried2(View.Map))(this.get))(x);
  },
  RUpdateMaybe:function(f)
  {
   var $this;
   $this=this;
   this.baseRef.RUpdateMaybe(function(t)
   {
    return Option.map($this.update(t),f($this.get(t)));
   });
  },
  RUpdate:function(f)
  {
   var $this;
   $this=this;
   this.baseRef.RUpdate(function(t)
   {
    return($this.update(t))(f($this.get(t)));
   });
  },
  WebSharper_UI_Next_IRef_1$set_Value:function(v)
  {
   var $this;
   $this=this;
   this.baseRef.RUpdate(function(t)
   {
    return($this.update(t))(v);
   });
  },
  WebSharper_UI_Next_IRef_1$get_Value:function()
  {
   return this.get(this.baseRef.RGet());
  },
  RSet:function(v)
  {
   var $this;
   $this=this;
   this.baseRef.RUpdate(function(t)
   {
    return($this.update(t))(v);
   });
  },
  RGet:function()
  {
   return this.get(this.baseRef.RGet());
  }
 },null,RefImpl);
 RefImpl.New=Runtime.Ctor(function(baseRef,get,update)
 {
  this.baseRef=baseRef;
  this.get=get;
  this.update=update;
  this.id=Fresh.Id();
  null;
 },RefImpl);
 ReactiveExtensions=Next.ReactiveExtensions=Runtime.Class({},null,ReactiveExtensions);
 ReactiveExtensions.New=Runtime.Ctor(function()
 {
 },ReactiveExtensions);
 Submitter=Next.Submitter=Runtime.Class({
  Trigger:function()
  {
   Var.Set(this["var"],null);
  }
 },null,Submitter);
 Submitter.New=Runtime.Ctor(function(input,init)
 {
  var arg10;
  this.input=input;
  this["var"]=Var.Create();
  this.view=(arg10=this["var"].get_View(),View.SnapshotOn(init,arg10,this.input));
  null;
 },Submitter);
 Submitter.CreateOption=function(input)
 {
  return new Submitter.New(View.Map(function(arg0)
  {
   return{
    $:1,
    $0:arg0
   };
  },input),null);
 };
 Key=Next.Key=Runtime.Class({},null,Key);
 Key.Fresh=function()
 {
  return new Key({
   $:0,
   $0:Fresh.Int()
  });
 };
 Model=Next.Model=Runtime.Class({
  get_View:function()
  {
   return this.view;
  },
  get_Var:function()
  {
   return this["var"];
  }
 },null,Model);
 Model.New=Runtime.Ctor(function(proj,init)
 {
  var _var,view,arg10;
  _var=Var.Create$1(init);
  view=(arg10=_var.get_View(),View.Map(proj,arg10));
  Model.New$1.call(this,_var,view);
 },Model);
 Model.New$1=Runtime.Ctor(function(_var,view)
 {
  this["var"]=_var;
  this.view=view;
  null;
 },Model);
 Model.View=function(m)
 {
  return m.get_View();
 };
 Model.Update=function(update,m)
 {
  var arg00;
  arg00=m.get_Var();
  Var.Update(arg00,function(x)
  {
   update(x);
   return x;
  });
 };
 Model.Create=function(proj,init)
 {
  return new Model.New(proj,init);
 };
 SerializerModule.Default=function()
 {
  SC$5.$cctor();
  return SC$5.Default;
 };
 ArrayStorage=StorageModule.ArrayStorage=Runtime.Class({
  SSet:function(coll)
  {
   return Arrays.ofSeq(coll);
  },
  SSetAt:function(idx,elem,arr)
  {
   Arrays.set(arr,idx,elem);
   return arr;
  },
  SRemoveIf:function(pred,arr)
  {
   return Arrays.filter(pred,arr);
  },
  SInit:function()
  {
   return this.init;
  },
  SPrependMany:function(is,arr)
  {
   arr.unshift.apply(arr,Arrays.ofSeq(is));
   return arr;
  },
  SPrepend:function(i,arr)
  {
   arr.unshift(i);
   return arr;
  },
  SAppendMany:function(is,arr)
  {
   arr.push.apply(arr,Arrays.ofSeq(is));
   return arr;
  },
  SAppend:function(i,arr)
  {
   arr.push(i);
   return arr;
  }
 },null,ArrayStorage);
 ArrayStorage.New=Runtime.Ctor(function(init)
 {
  this.init=init;
  null;
 },ArrayStorage);
 LocalStorageBackend=StorageModule.LocalStorageBackend=Runtime.Class({
  clear:function()
  {
   this.storage.removeItem(this.id);
  },
  set:function(arr)
  {
   var x,mapping;
   this.storage.setItem(this.id,(x=(mapping=this.serializer.Encode,function(array)
   {
    return Arrays.map(mapping,array);
   })(arr),Global.JSON.stringify(x)));
   return arr;
  },
  SSet:function(coll)
  {
   var $this;
   $this=this;
   return $this.set(Arrays.ofSeq(coll));
  },
  SSetAt:function(idx,elem,arr)
  {
   Arrays.set(arr,idx,elem);
   return this.set(arr);
  },
  SRemoveIf:function(pred,arr)
  {
   var $this;
   $this=this;
   return $this.set(Arrays.filter(pred,arr));
  },
  SInit:function()
  {
   var $1;
   var item=this.storage.getItem(this.id);
   if(item===null)
    $1=[];
   else
    try
    {
     var arr,mapping;
     $1=(arr=Global.JSON.parse(item),(mapping=this.serializer.Decode,function(array)
     {
      return Arrays.map(mapping,array);
     })(arr));
    }
    catch(matchValue)
    {
     $1=[];
    }
   return $1;
  },
  SPrependMany:function(is,arr)
  {
   arr.unshift.apply(arr,Arrays.ofSeq(is));
   return this.set(arr);
  },
  SPrepend:function(i,arr)
  {
   arr.unshift(i);
   return this.set(arr);
  },
  SAppendMany:function(is,arr)
  {
   arr.push.apply(arr,Arrays.ofSeq(is));
   return this.set(arr);
  },
  SAppend:function(i,arr)
  {
   arr.push(i);
   return this.set(arr);
  }
 },null,LocalStorageBackend);
 LocalStorageBackend.New=Runtime.Ctor(function(id,serializer)
 {
  this.id=id;
  this.serializer=serializer;
  this.storage=Global.window.localStorage;
  null;
 },LocalStorageBackend);
 StorageModule.LocalStorage=function(id,serializer)
 {
  return new LocalStorageBackend.New(id,serializer);
 };
 StorageModule.InMemory=function(init)
 {
  return new ArrayStorage.New(init);
 };
 ListModel=Next.ListModel=Runtime.Class({
  Wrap:function(extract,wrap,update)
  {
   return ListModel.Wrap(this,extract,wrap,update);
  },
  Lens:function(key)
  {
   var $this;
   $this=this;
   return $this.LensInto(Global.id,Runtime.Curried2(function($1,x)
   {
    return x;
   }),key);
  },
  LensInto:function(get,update,key)
  {
   return new RefImpl$1.New(this,key,get,update);
  },
  get_LengthAsView:function()
  {
   var x;
   x=this["var"].RView();
   return((Runtime.Curried2(View.Map))(Arrays.length))(x);
  },
  get_Length:function()
  {
   return Arrays.length(this["var"].WebSharper_UI_Next_IRef_1$get_Value());
  },
  Clear:function()
  {
   this["var"].WebSharper_UI_Next_IRef_1$set_Value(this.storage.SSet([]));
  },
  UpdateBy:function(fn,key)
  {
   var $this,v,matchValue,index,matchValue$1,objectArg;
   $this=this;
   v=this["var"].WebSharper_UI_Next_IRef_1$get_Value();
   matchValue=Arrays.tryFindIndex(function(it)
   {
    return Unchecked.Equals($this["key@150"](it),key);
   },v);
   (matchValue!=null?matchValue.$==1:false)?(index=matchValue.$0,matchValue$1=fn(Arrays.get(v,index)),(matchValue$1!=null?matchValue$1.$==1:false)?this["var"].WebSharper_UI_Next_IRef_1$set_Value(((objectArg=this.storage,(Runtime.Curried3(function(arg00,arg10,arg20)
   {
    return objectArg.SSetAt(arg00,arg10,arg20);
   }))(index))(matchValue$1.$0))(v)):null):null;
  },
  UpdateAll:function(fn)
  {
   var $this,objectArg;
   $this=this;
   objectArg=this["var"];
   objectArg.RUpdate(function(a)
   {
    var action;
    (action=Runtime.Curried2(function(i,x)
    {
     var x$1,action$1;
     x$1=fn(x);
     (action$1=function(y)
     {
      Arrays.set(a,i,y);
     },function(option)
     {
      Option.iter(action$1,option);
     })(x$1);
    }),function(array)
    {
     Arrays.iteri(action,array);
    })(a);
    return $this.storage.SSet(a);
   });
  },
  TryFindByKeyAsView:function(key)
  {
   var $this,x,predicate;
   $this=this;
   x=this["var"].RView();
   return((Runtime.Curried2(View.Map))((predicate=function(it)
   {
    return Unchecked.Equals($this["key@150"](it),key);
   },function(array)
   {
    return Arrays.tryFind(predicate,array);
   })))(x);
  },
  FindByKeyAsView:function(key)
  {
   var $this,x,predicate;
   $this=this;
   x=this["var"].RView();
   return((Runtime.Curried2(View.Map))((predicate=function(it)
   {
    return Unchecked.Equals($this["key@150"](it),key);
   },function(array)
   {
    return Arrays.find(predicate,array);
   })))(x);
  },
  TryFindByKey:function(key)
  {
   var $this;
   $this=this;
   return Arrays.tryFind(function(it)
   {
    return Unchecked.Equals($this["key@150"](it),key);
   },this["var"].WebSharper_UI_Next_IRef_1$get_Value());
  },
  FindByKey:function(key)
  {
   var $this;
   $this=this;
   return Arrays.find(function(it)
   {
    return Unchecked.Equals($this["key@150"](it),key);
   },this["var"].WebSharper_UI_Next_IRef_1$get_Value());
  },
  TryFindAsView:function(pred)
  {
   var x;
   x=this["var"].RView();
   return((Runtime.Curried2(View.Map))(function(array)
   {
    return Arrays.tryFind(pred,array);
   }))(x);
  },
  FindAsView:function(pred)
  {
   var x;
   x=this["var"].RView();
   return((Runtime.Curried2(View.Map))(function(array)
   {
    return Arrays.find(pred,array);
   }))(x);
  },
  TryFind:function(pred)
  {
   return Arrays.tryFind(pred,this["var"].WebSharper_UI_Next_IRef_1$get_Value());
  },
  Find:function(pred)
  {
   return Arrays.find(pred,this["var"].WebSharper_UI_Next_IRef_1$get_Value());
  },
  ContainsKeyAsView:function(key)
  {
   var $this,x,predicate;
   $this=this;
   x=this["var"].RView();
   return((Runtime.Curried2(View.Map))((predicate=function(it)
   {
    return Unchecked.Equals($this["key@150"](it),key);
   },function(array)
   {
    return Seq.exists(predicate,array);
   })))(x);
  },
  ContainsKey:function(key)
  {
   var $this;
   $this=this;
   return Seq.exists(function(it)
   {
    return Unchecked.Equals($this["key@150"](it),key);
   },this["var"].WebSharper_UI_Next_IRef_1$get_Value());
  },
  Set:function(lst)
  {
   this["var"].WebSharper_UI_Next_IRef_1$set_Value(this.storage.SSet(lst));
  },
  Iter:function(fn)
  {
   Arrays.iter(fn,this["var"].WebSharper_UI_Next_IRef_1$get_Value());
  },
  RemoveByKey:function(key)
  {
   var $this,objectArg;
   $this=this;
   this["var"].WebSharper_UI_Next_IRef_1$set_Value((objectArg=this.storage,(Runtime.Curried2(function(arg00,arg10)
   {
    return objectArg.SRemoveIf(arg00,arg10);
   }))(function(i)
   {
    return!Unchecked.Equals($this["key@150"](i),key);
   }))(this["var"].WebSharper_UI_Next_IRef_1$get_Value()));
  },
  RemoveBy:function(f)
  {
   var objectArg,g;
   this["var"].WebSharper_UI_Next_IRef_1$set_Value((objectArg=this.storage,(Runtime.Curried2(function(arg00,arg10)
   {
    return objectArg.SRemoveIf(arg00,arg10);
   }))((g=function(value)
   {
    return!value;
   },function(x)
   {
    return g(f(x));
   })))(this["var"].WebSharper_UI_Next_IRef_1$get_Value()));
  },
  Remove:function(item)
  {
   var $this,v,keyFn,k,objectArg;
   $this=this;
   v=this["var"].WebSharper_UI_Next_IRef_1$get_Value();
   ListModels.Contains($this["key@150"],item,v)?(keyFn=$this["key@150"],k=keyFn(item),this["var"].WebSharper_UI_Next_IRef_1$set_Value((objectArg=this.storage,(Runtime.Curried2(function(arg00,arg10)
   {
    return objectArg.SRemoveIf(arg00,arg10);
   }))(function(i)
   {
    return!Unchecked.Equals(keyFn(i),k);
   }))(v))):null;
  },
  PrependMany:function(items)
  {
   var $this,toPrepend,v,x,folder,objectArg;
   $this=this;
   toPrepend=new List$1.New$2();
   v=(x=this["var"].WebSharper_UI_Next_IRef_1$get_Value(),((folder=Runtime.Curried2(function(v$1,item)
   {
    var t,matchValue,objectArg$1;
    t=$this["key@150"](item);
    matchValue=Arrays.tryFindIndex(function(it)
    {
     return Unchecked.Equals($this["key@150"](it),t);
    },v$1);
    return matchValue==null?(toPrepend.Add(item),v$1):((objectArg$1=$this.storage,(Runtime.Curried3(function(arg00,arg10,arg20)
    {
     return objectArg$1.SSetAt(arg00,arg10,arg20);
    }))(matchValue.$0))(item))(v$1);
   }),Runtime.Curried2(function(state,source)
   {
    return Seq.fold(folder,state,source);
   }))(x))(items));
   this["var"].WebSharper_UI_Next_IRef_1$set_Value((objectArg=this.storage,(Runtime.Curried2(function(arg00,arg10)
   {
    return objectArg.SPrependMany(arg00,arg10);
   }))(toPrepend))(v));
  },
  Prepend:function(item)
  {
   var $this,v,t,matchValue,objectArg,objectArg$1;
   $this=this;
   v=this["var"].WebSharper_UI_Next_IRef_1$get_Value();
   t=this["key@150"](item);
   matchValue=Arrays.tryFindIndex(function(it)
   {
    return Unchecked.Equals($this["key@150"](it),t);
   },v);
   (matchValue!=null?matchValue.$==1:false)?this["var"].WebSharper_UI_Next_IRef_1$set_Value(((objectArg=this.storage,(Runtime.Curried3(function(arg00,arg10,arg20)
   {
    return objectArg.SSetAt(arg00,arg10,arg20);
   }))(matchValue.$0))(item))(v)):this["var"].WebSharper_UI_Next_IRef_1$set_Value((objectArg$1=this.storage,(Runtime.Curried2(function(arg00,arg10)
   {
    return objectArg$1.SPrepend(arg00,arg10);
   }))(item))(v));
  },
  AppendMany:function(items)
  {
   var $this,toAppend,v,x,folder,objectArg;
   $this=this;
   toAppend=new List$1.New$2();
   v=(x=this["var"].WebSharper_UI_Next_IRef_1$get_Value(),((folder=Runtime.Curried2(function(v$1,item)
   {
    var t,matchValue,objectArg$1;
    t=$this["key@150"](item);
    matchValue=Arrays.tryFindIndex(function(it)
    {
     return Unchecked.Equals($this["key@150"](it),t);
    },v$1);
    return matchValue==null?(toAppend.Add(item),v$1):((objectArg$1=$this.storage,(Runtime.Curried3(function(arg00,arg10,arg20)
    {
     return objectArg$1.SSetAt(arg00,arg10,arg20);
    }))(matchValue.$0))(item))(v$1);
   }),Runtime.Curried2(function(state,source)
   {
    return Seq.fold(folder,state,source);
   }))(x))(items));
   this["var"].WebSharper_UI_Next_IRef_1$set_Value((objectArg=this.storage,(Runtime.Curried2(function(arg00,arg10)
   {
    return objectArg.SAppendMany(arg00,arg10);
   }))(toAppend))(v));
  },
  Append:function(item)
  {
   var $this,v,t,matchValue,objectArg,objectArg$1;
   $this=this;
   v=this["var"].WebSharper_UI_Next_IRef_1$get_Value();
   t=this["key@150"](item);
   matchValue=Arrays.tryFindIndex(function(it)
   {
    return Unchecked.Equals($this["key@150"](it),t);
   },v);
   (matchValue!=null?matchValue.$==1:false)?this["var"].WebSharper_UI_Next_IRef_1$set_Value(((objectArg=this.storage,(Runtime.Curried3(function(arg00,arg10,arg20)
   {
    return objectArg.SSetAt(arg00,arg10,arg20);
   }))(matchValue.$0))(item))(v)):this["var"].WebSharper_UI_Next_IRef_1$set_Value((objectArg$1=this.storage,(Runtime.Curried2(function(arg00,arg10)
   {
    return objectArg$1.SAppend(arg00,arg10);
   }))(item))(v));
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get0(this["var"].WebSharper_UI_Next_IRef_1$get_Value());
  },
  GetEnumerator:function()
  {
   return Enumerator.Get(this["var"].WebSharper_UI_Next_IRef_1$get_Value());
  }
 },null,ListModel);
 ListModel.New=Runtime.Ctor(function(key,storage)
 {
  var _var,x,x$1;
  _var=(x=(x$1=Seq.distinctBy(key,storage.SInit()),Arrays.ofSeq(x$1)),Var.Create$1(x));
  ListModel.New$3.call(this,key,_var,storage);
 },ListModel);
 ListModel.New$1=Runtime.Ctor(function(key)
 {
  ListModel.New$2.call(this,key,[]);
 },ListModel);
 ListModel.New$2=Runtime.Ctor(function(key,init)
 {
  var init$1;
  init$1=Arrays.ofSeq(init);
  ListModel.New$3.call(this,key,Var.Create$1(init$1),StorageModule.InMemory(init$1));
 },ListModel);
 ListModel.New$3=Runtime.Ctor(function(key,_var,storage)
 {
  var $this,x;
  $this=this;
  this["key@150"]=key;
  this["var"]=_var;
  this.storage=storage;
  this.v=(x=this["var"].RView(),((Runtime.Curried2(View.Map))(function(x$1)
  {
   $this.storage.SSet(x$1);
   return x$1.slice();
  }))(x));
  null;
 },ListModel);
 ListModels.Contains=function(keyFn,item,xs)
 {
  var t;
  t=keyFn(item);
  return Seq.exists(function(it)
  {
   return Unchecked.Equals(keyFn(it),t);
  },xs);
 };
 RefImpl$1=Next.RefImpl$1=Runtime.Class({
  RId:function()
  {
   return this.id;
  },
  RView:function()
  {
   var x;
   x=this.m.FindByKeyAsView(this.key);
   return((Runtime.Curried2(View.Map))(this.get))(x);
  },
  RUpdateMaybe:function(f)
  {
   var $this,objectArg;
   $this=this;
   (objectArg=this.m,(Runtime.Curried2(function(arg00,arg10)
   {
    objectArg.UpdateBy(arg00,arg10);
   }))(function(i)
   {
    return Option.map($this.update(i),f($this.get(i)));
   }))(this.key);
  },
  RUpdate:function(f)
  {
   var $this,objectArg;
   $this=this;
   (objectArg=this.m,(Runtime.Curried2(function(arg00,arg10)
   {
    objectArg.UpdateBy(arg00,arg10);
   }))(function(i)
   {
    return{
     $:1,
     $0:($this.update(i))(f($this.get(i)))
    };
   }))(this.key);
  },
  WebSharper_UI_Next_IRef_1$set_Value:function(v)
  {
   this.RSet(v);
  },
  WebSharper_UI_Next_IRef_1$get_Value:function()
  {
   return this.RGet();
  },
  RSet:function(v)
  {
   var $this,objectArg;
   $this=this;
   (objectArg=this.m,(Runtime.Curried2(function(arg00,arg10)
   {
    objectArg.UpdateBy(arg00,arg10);
   }))(function(i)
   {
    return{
     $:1,
     $0:($this.update(i))(v)
    };
   }))(this.key);
  },
  RGet:function()
  {
   return this.get(this.m.FindByKey(this.key));
  }
 },null,RefImpl$1);
 RefImpl$1.New=Runtime.Ctor(function(m,key,get,update)
 {
  this.m=m;
  this.key=key;
  this.get=get;
  this.update=update;
  this.id=Fresh.Id();
  null;
 },RefImpl$1);
 ListModel.Key=function(m)
 {
  return m["key@150"];
 };
 ListModel.View=function(m)
 {
  return m.v;
 };
 ListModel.Wrap=function(underlying,extract,createItem,updateItem)
 {
  var state,init,x,mapping,_var,objectArg,g;
  state=[new Dictionary.New$5()];
  init=(x=underlying["var"].WebSharper_UI_Next_IRef_1$get_Value(),(mapping=function(u)
  {
   var t;
   t=createItem(u);
   state[0].set_Item(underlying["key@150"](u),t);
   return t;
  },function(array)
  {
   return Arrays.map(mapping,array);
  })(x));
  _var=(objectArg=underlying["var"],(Runtime.Curried2(function(arg00,arg10)
  {
   return Var.Lens(objectArg,arg00,arg10);
  }))(function(us)
  {
   var newState,ts,mapping$1;
   newState=new Dictionary.New$5();
   ts=(mapping$1=function(u)
   {
    var k,t;
    k=underlying["key@150"](u);
    t=state[0].ContainsKey(k)?(updateItem(state[0].get_Item(k)))(u):createItem(u);
    newState.set_Item(k,t);
    return t;
   },function(array)
   {
    return Arrays.map(mapping$1,array);
   })(us);
   state[0]=newState;
   return ts;
  }))(Runtime.Curried2(function(us,ts)
  {
   var newState,us$1,mapping$1;
   newState=new Dictionary.New$5();
   us$1=(mapping$1=function(t)
   {
    var u;
    u=extract(t);
    newState.set_Item(underlying["key@150"](u),t);
    return u;
   },function(array)
   {
    return Arrays.map(mapping$1,array);
   })(ts);
   state[0]=newState;
   return us$1;
  }));
  return new ListModel.New$3((g=underlying["key@150"],function(x$1)
  {
   return g(extract(x$1));
  }),_var,StorageModule.InMemory(init));
 };
 ListModel.FromSeq=function(init)
 {
  return ListModel.Create(Global.id,init);
 };
 ListModel.Create=function(key,init)
 {
  var arg10;
  arg10=StorageModule.InMemory(Arrays.ofSeq(init));
  return ListModel.CreateWithStorage(key,arg10);
 };
 ListModel.CreateWithStorage=function(key,storage)
 {
  return new ListModel.New(key,storage);
 };
 SC$5.$cctor=Runtime.Cctor(function()
 {
  SC$5.Default={
   Encode:Global.id,
   Decode:Global.id
  };
 });
 DoubleInterpolation=Next.DoubleInterpolation=Runtime.Class({
  Interpolate:function(t,x,y)
  {
   return x+t*(y-x);
  }
 },null,DoubleInterpolation);
 Interpolation.get_Double=function()
 {
  return new DoubleInterpolation({
   $:0
  });
 };
 Easing=Next.Easing=Runtime.Class({
  TransformTime:function(t)
  {
   return this.transformTime(t);
  }
 },null,Easing);
 Easing.get_CubicInOut=function()
 {
  return Easings.CubicInOut();
 };
 Easing.Custom=function(f)
 {
  return new Easing.New(f);
 };
 Easing.New=Runtime.Ctor(function(transformTime)
 {
  this.transformTime=transformTime;
  null;
 },Easing);
 Easings.CubicInOut=function()
 {
  SC$6.$cctor();
  return SC$6.CubicInOut;
 };
 An=Next.An=Runtime.Class({},null,An);
 An.get_Empty=function()
 {
  return new An({
   $:0,
   $0:AppendListModule.Empty()
  });
 };
 An.WhenDone=function(f,main)
 {
  return((Runtime.Curried2(An.Append))(new An({
   $:0,
   $0:AppendListModule.Single({
    $:0,
    $0:f
   })
  })))(main);
 };
 An.Run=function(k,anim)
 {
  var dur;
  dur=anim.Duration;
  return Concurrency.FromContinuations(function(a)
  {
   var loop;
   var ok=a[0];
   loop=Runtime.Curried2(function(start,now)
   {
    var t;
    t=now-start;
    anim.Compute(t);
    k();
    t<=dur?Global.requestAnimationFrame(function(t$1)
    {
     (loop(start))(t$1);
    }):ok();
   });
   Global.requestAnimationFrame(function(t)
   {
    (loop(t))(t);
   });
  });
 };
 An.Play=function(anim)
 {
  return Concurrency.Delay(function()
  {
   var x,x$1;
   x=(x$1=Anims.Actions(anim),((Runtime.Curried2(An.Run))(function()
   {
   }))(x$1));
   return Concurrency.Bind(x,function()
   {
    Anims.Finalize(anim);
    return Concurrency.Return(null);
   });
  });
 };
 An.Pack=function(anim)
 {
  return new An({
   $:0,
   $0:AppendListModule.Single({
    $:1,
    $0:anim
   })
  });
 };
 An.Map=function(f,anim)
 {
  var f$1;
  return Anims.Def(anim.Duration,(f$1=anim.Compute,function(x)
  {
   return f(f$1(x));
  }));
 };
 An.Delayed=function(inter,easing,dur,delay,x,y)
 {
  return{
   Compute:function(t)
   {
    return t<=delay?x:inter.Interpolate(easing.TransformTime((t-delay)/dur),x,y);
   },
   Duration:dur+delay
  };
 };
 An.Simple=function(inter,easing,dur,x,y)
 {
  return{
   Compute:function(t)
   {
    return inter.Interpolate(easing.TransformTime(t/dur),x,y);
   },
   Duration:dur
  };
 };
 An.Const=function(v)
 {
  return Anims.Const(v);
 };
 An.Concat=function(xs)
 {
  var x;
  x=AppendListModule.Concat(Seq.map(Anims.List,xs));
  return new An({
   $:0,
   $0:x
  });
 };
 An.Append=function($1,$2)
 {
  return new An({
   $:0,
   $0:AppendListModule.Append($1.$0,$2.$0)
  });
 };
 Anims.Actions=function($1)
 {
  var x,x$1,chooser;
  x=(x$1=AppendListModule.ToArray($1.$0),(chooser=function($2)
  {
   return $2.$==1?{
    $:1,
    $0:$2.$0
   }:null;
  },function(array)
  {
   return Arrays.choose(chooser,array);
  })(x$1));
  return Anims.ConcatActions(x);
 };
 Anims.ConcatActions=function(xs)
 {
  var xs$1,matchValue,dur,x,mapping,xs$2;
  xs$1=Arrays.ofSeq(xs);
  matchValue=Arrays.length(xs$1);
  return matchValue===0?Anims.Const():matchValue===1?Arrays.get(xs$1,0):(dur=(x=(mapping=function(anim)
  {
   return anim.Duration;
  },function(source)
  {
   return Seq.map(mapping,source);
  })(xs$1),Seq.max(x)),xs$2=Arrays.map(function(anim)
  {
   return Anims.Prolong(dur,anim);
  },xs$1),Anims.Def(dur,function(t)
  {
   Arrays.iter(function(anim)
   {
    anim.Compute(t);
   },xs$2);
  }));
 };
 Anims.Prolong=function(nextDuration,anim)
 {
  var comp,dur,last;
  comp=anim.Compute;
  dur=anim.Duration;
  last=Lazy.Create(function()
  {
   return anim.Compute(anim.Duration);
  });
  return{
   Compute:function(t)
   {
    return t>=dur?last.e():comp(t);
   },
   Duration:nextDuration
  };
 };
 Anims.Const=function(v)
 {
  return Anims.Def(0,function()
  {
   return v;
  });
 };
 Anims.Def=function(d,f)
 {
  return{
   Compute:f,
   Duration:d
  };
 };
 Anims.Finalize=function($1)
 {
  var x,action;
  x=AppendListModule.ToArray($1.$0);
  (action=function($2)
  {
   $2.$==0?$2.$0():null;
  },function(array)
  {
   Arrays.iter(action,array);
  })(x);
 };
 Anims.List=function($1)
 {
  return $1.$0;
 };
 Trans=Next.Trans=Runtime.Class({
  Copy:function(change,enter,exit,flags)
  {
   var $this,ch,en,ex,fl;
   $this=this;
   ch=Operators.DefaultArg(change,Runtime.Curried2(function(arg00,arg10)
   {
    return $this.TChange(arg00,arg10);
   }));
   en=Operators.DefaultArg(enter,this.get_TEnter());
   ex=Operators.DefaultArg(exit,this.get_TExit());
   fl=Operators.DefaultArg(flags,this.get_TFlags());
   return new Trans.New$3(function(delegateArg0,delegateArg1)
   {
    return(ch(delegateArg0))(delegateArg1);
   },en,ex,fl);
  },
  get_TFlags:function()
  {
   return this.flags;
  },
  get_TExit:function()
  {
   return this.exit;
  },
  get_TEnter:function()
  {
   return this.enter;
  },
  TChange:function(x,y)
  {
   return this.change(x,y);
  }
 },null,Trans);
 Trans.New=Runtime.Ctor(function(ch,enter,exit)
 {
  Trans.New$3.call(this,ch,Unchecked.Equals(enter,null)?An.Const:enter,Unchecked.Equals(exit,null)?An.Const:exit,1|(Unchecked.Equals(enter,null)?0:2)|(Unchecked.Equals(exit,null)?0:4));
 },Trans);
 Trans.New$1=Runtime.Ctor(function(ch)
 {
  Trans.New$3.call(this,ch,An.Const,An.Const,1);
 },Trans);
 Trans.New$2=Runtime.Ctor(function()
 {
  Trans.New$3.call(this,function(x,y)
  {
   return An.Const(y);
  },An.Const,An.Const,0);
 },Trans);
 Trans.New$3=Runtime.Ctor(function(change,enter,exit,flags)
 {
  this.change=change;
  this.enter=enter;
  this.exit=exit;
  this.flags=flags;
  null;
 },Trans);
 Trans.Exit=function(f,tr)
 {
  return tr.Copy(null,null,{
   $:1,
   $0:f
  },{
   $:1,
   $0:tr.get_TFlags()|4
  });
 };
 Trans.Enter=function(f,tr)
 {
  return tr.Copy(null,{
   $:1,
   $0:f
  },null,{
   $:1,
   $0:tr.get_TFlags()|2
  });
 };
 Trans.Change=function(ch,tr)
 {
  return tr.Copy({
   $:1,
   $0:ch
  },null,null,{
   $:1,
   $0:tr.get_TFlags()|1
  });
 };
 Trans.Create=function(ch)
 {
  return new Trans.New$1(function(delegateArg0,delegateArg1)
  {
   return(ch(delegateArg0))(delegateArg1);
  });
 };
 Trans.Trivial=function()
 {
  return new Trans.New$2();
 };
 Trans.CanAnimateExit=function(tr)
 {
  var copyOfStruct;
  copyOfStruct=tr.get_TFlags();
  return(copyOfStruct&4)!==0;
 };
 Trans.CanAnimateEnter=function(tr)
 {
  var copyOfStruct;
  copyOfStruct=tr.get_TFlags();
  return(copyOfStruct&2)!==0;
 };
 Trans.CanAnimateChange=function(tr)
 {
  var copyOfStruct;
  copyOfStruct=tr.get_TFlags();
  return(copyOfStruct&1)!==0;
 };
 Trans.AnimateExit=function(tr,x)
 {
  return(tr.get_TExit())(x);
 };
 Trans.AnimateEnter=function(tr,x)
 {
  return(tr.get_TEnter())(x);
 };
 Trans.AnimateChange=function(tr,x,y)
 {
  return tr.TChange(x,y);
 };
 SC$6.$cctor=Runtime.Cctor(function()
 {
  SC$6.CubicInOut=Easing.Custom(function(t)
  {
   var t2;
   t2=t*t;
   return 3*t2-2*(t2*t);
  });
 });
 AnimatedAttrNode=Next.AnimatedAttrNode=Runtime.Class({
  sync:function(p)
  {
   this.dirty?(Option.iter(this.push(p),this.logical),this.visible=this.logical,this.dirty=false):null;
  },
  pushVisible:function(el,v)
  {
   this.visible={
    $:1,
    $0:v
   };
   this.dirty=true;
   (this.push(el))(v);
  },
  NChanged:function()
  {
   return this.updates;
  },
  NInit:function(parent)
  {
  },
  NSync:function(parent)
  {
  },
  NGetExitAnim:function(parent)
  {
   var $this,x,matchValue,x$1,x$2;
   $this=this;
   x=(matchValue=this.visible,(matchValue!=null?matchValue.$==1:false)?(x$1=(x$2=Trans.AnimateExit(this.tr,matchValue.$0),((Runtime.Curried2(An.Map))((Runtime.Curried2(function(el,v)
   {
    $this.pushVisible(el,v);
   }))(parent)))(x$2)),An.Pack(x$1)):An.get_Empty());
   return((Runtime.Curried2(An.WhenDone))(function()
   {
    $this.dirty=true;
    $this.visible=null;
   }))(x);
  },
  NGetEnterAnim:function(parent)
  {
   var $this,x,matchValue,$1,$2,$3,x$1,x$2,$4,$5,x$3,x$4;
   $this=this;
   x=(matchValue=[this.visible,this.logical],(($2=matchValue[0],$2!=null?$2.$==1:false)?($3=matchValue[1],$3!=null?$3.$==1:false)?this.dirty?($1=[matchValue[1].$0,matchValue[0].$0],true):false:false:false)?(x$1=(x$2=Trans.AnimateChange(this.tr,$1[1],$1[0]),((Runtime.Curried2(An.Map))((Runtime.Curried2(function(el,v)
   {
    $this.pushVisible(el,v);
   }))(parent)))(x$2)),An.Pack(x$1)):(matchValue[0]==null?($5=matchValue[1],$5!=null?$5.$==1:false)?true:false:false)?(x$3=(x$4=Trans.AnimateEnter(this.tr,matchValue[1].$0),((Runtime.Curried2(An.Map))((Runtime.Curried2(function(el,v)
   {
    $this.pushVisible(el,v);
   }))(parent)))(x$4)),An.Pack(x$3)):An.get_Empty());
   return((Runtime.Curried2(An.WhenDone))(function()
   {
    $this.sync(parent);
   }))(x);
  },
  NGetChangeAnim:function(parent)
  {
   var $this,x,matchValue,$1,$2,$3,x$1,x$2;
   $this=this;
   x=(matchValue=[this.visible,this.logical],(($2=matchValue[0],$2!=null?$2.$==1:false)?($3=matchValue[1],$3!=null?$3.$==1:false)?this.dirty?($1=[matchValue[1].$0,matchValue[0].$0],true):false:false:false)?(x$1=(x$2=Trans.AnimateChange(this.tr,$1[1],$1[0]),((Runtime.Curried2(An.Map))((Runtime.Curried2(function(el,v)
   {
    $this.pushVisible(el,v);
   }))(parent)))(x$2)),An.Pack(x$1)):An.get_Empty());
   return((Runtime.Curried2(An.WhenDone))(function()
   {
    $this.sync(parent);
   }))(x);
  }
 },null,AnimatedAttrNode);
 AnimatedAttrNode.New=Runtime.Ctor(function(tr,view,push)
 {
  var $this;
  $this=this;
  this.tr=tr;
  this.push=push;
  this.logical=null;
  this.visible=null;
  this.dirty=true;
  this.updates=((Runtime.Curried2(View.Map))(function(x)
  {
   $this.logical={
    $:1,
    $0:x
   };
   $this.dirty=true;
  }))(view);
  null;
 },AnimatedAttrNode);
 DynamicAttrNode=Next.DynamicAttrNode=Runtime.Class({
  NInit:function(parent)
  {
   this.init(parent);
  },
  NChanged:function()
  {
   return this.updates;
  },
  NSync:function(parent)
  {
   this.dirty?((this.push(parent))(this.value),this.dirty=false):null;
  },
  NGetExitAnim:function(parent)
  {
   return An.get_Empty();
  },
  NGetEnterAnim:function(parent)
  {
   return An.get_Empty();
  },
  NGetChangeAnim:function(parent)
  {
   return An.get_Empty();
  }
 },null,DynamicAttrNode);
 DynamicAttrNode.New=Runtime.Ctor(function(view,init,push)
 {
  var $this;
  $this=this;
  this.init=init;
  this.push=push;
  this.value=void 0;
  this.dirty=true;
  this.updates=((Runtime.Curried2(View.Map))(function(x)
  {
   $this.value=x;
   $this.dirty=true;
  }))(view);
  null;
 },DynamicAttrNode);
 AttrProxy=Next.AttrProxy=Runtime.Class({},null,AttrProxy);
 AttrProxy.Handler=function(event,q)
 {
  return Attrs$1.Static(function(el)
  {
   el.addEventListener(event,q(el),false);
  });
 };
 AttrProxy.Concat=function(xs)
 {
  var x,z,re;
  x=Arrays.ofSeq(xs);
  return(z=Attrs$1.EmptyAttr(),re=Runtime.Curried2(AttrProxy.Append),function(a)
  {
   return Array.MapReduce(Global.id,z,re,a);
  })(x);
 };
 AttrProxy.Append=function(a,b)
 {
  return Attrs$1.Mk(a.Flags|b.Flags,Attrs$1.AppendTree(a.Tree,b.Tree));
 };
 AttrProxy.Create=function(name,value)
 {
  return Attrs$1.Static(function(el)
  {
   DomUtility.SetAttr(el,name,value);
  });
 };
 AttrProxy.New=function(Flags,Tree)
 {
  return new AttrProxy({
   Flags:Flags,
   Tree:Tree
  });
 };
 Dyn=Attrs.Dyn=Runtime.Class({},null,Dyn);
 Dyn.New=function(DynElem,DynFlags,DynNodes,OnAfterRender)
 {
  var $1;
  return new Dyn(($1={
   DynElem:DynElem,
   DynFlags:DynFlags,
   DynNodes:DynNodes
  },Runtime.SetOptional($1,"OnAfterRender",OnAfterRender),$1));
 };
 Attrs$1.Static=function(attr$1)
 {
  return Attrs$1.Mk(0,{
   $:3,
   $0:attr$1
  });
 };
 Attrs$1.Dynamic=function(view,init,set)
 {
  var x;
  x={
   $:1,
   $0:new DynamicAttrNode.New(view,init,set)
  };
  return Attrs$1.Mk(0,x);
 };
 Attrs$1.Animated=function(tr,view,set)
 {
  var node,flags;
  node=new AnimatedAttrNode.New(tr,view,set);
  flags=4;
  Trans.CanAnimateEnter(tr)?void(flags=flags|1):null;
  Trans.CanAnimateExit(tr)?void(flags=flags|2):null;
  return Attrs$1.Mk(flags,{
   $:1,
   $0:node
  });
 };
 Attrs$1.EmptyAttr=function()
 {
  SC$7.$cctor();
  return SC$7.EmptyAttr;
 };
 Attrs$1.Mk=function(flags,tree)
 {
  return AttrProxy.New(flags,tree);
 };
 Attrs$1.AppendTree=function(a,b)
 {
  var matchValue;
  matchValue=[a,b];
  return matchValue[0].$==0?matchValue[1]:matchValue[1].$==0?matchValue[0]:{
   $:2,
   $0:a,
   $1:b
  };
 };
 Attrs$1.GetChangeAnim=function(dyn)
 {
  return Attrs$1.GetAnim(dyn,Runtime.Curried2(function(n,arg00)
  {
   return n.NGetChangeAnim(arg00);
  }));
 };
 Attrs$1.GetExitAnim=function(dyn)
 {
  return Attrs$1.GetAnim(dyn,Runtime.Curried2(function(n,arg00)
  {
   return n.NGetExitAnim(arg00);
  }));
 };
 Attrs$1.GetEnterAnim=function(dyn)
 {
  return Attrs$1.GetAnim(dyn,Runtime.Curried2(function(n,arg00)
  {
   return n.NGetEnterAnim(arg00);
  }));
 };
 Attrs$1.GetAnim=function(dyn,f)
 {
  var x,mapping;
  x=(mapping=function(n)
  {
   return(f(n))(dyn.DynElem);
  },function(array)
  {
   return Arrays.map(mapping,array);
  })(dyn.DynNodes);
  return An.Concat(x);
 };
 Attrs$1.Updates=function(dyn)
 {
  var p,f,z;
  p=Runtime.Curried2(function(x,y)
  {
   return View.Map2(Runtime.Curried2(function()
   {
   }),x,y);
  });
  return(f=function(x)
  {
   return x.NChanged();
  },z=View.Const(),function(a)
  {
   return Array.MapReduce(f,z,p,a);
  })(dyn.DynNodes);
 };
 Attrs$1.Insert=function(elem,tree)
 {
  var loop,arr;
  var nodes=[];
  var oar=[];
  loop=function(node)
  {
   var n;
   node.$==1?(n=node.$0,n.NInit(elem),nodes.push(n)):node.$==2?(loop(node.$0),loop(node.$1)):node.$==3?node.$0(elem):node.$==4?oar.push(node.$0):null;
  };
  loop(tree.Tree);
  arr=nodes.slice(0);
  return Dyn.New(elem,tree.Flags,arr,oar.length===0?null:{
   $:1,
   $0:function(el)
   {
    Seq.iter(function(f)
    {
     f(el);
    },oar);
   }
  });
 };
 Attrs$1.Sync=function(elem,dyn)
 {
  var action;
  (action=function(d)
  {
   d.NSync(elem);
  },function(array)
  {
   Arrays.iter(action,array);
  })(dyn.DynNodes);
 };
 Attrs$1.HasExitAnim=function(attr$1)
 {
  return(attr$1.DynFlags&2)!==0;
 };
 Attrs$1.HasEnterAnim=function(attr$1)
 {
  return(attr$1.DynFlags&1)!==0;
 };
 Attrs$1.HasChangeAnim=function(attr$1)
 {
  return(attr$1.DynFlags&4)!==0;
 };
 AttrModule.ValidateForm=function()
 {
  return AttrModule.OnAfterRender(function(e)
  {
   Global.H5F?Global.H5F.setup(e):void 0;
  });
 };
 AttrModule.Value=function(_var)
 {
  var g;
  return AttrModule.CustomValue(_var,Global.id,(g=function(arg0)
  {
   return{
    $:1,
    $0:arg0
   };
  },function(x)
  {
   return g(Global.id(x));
  }));
 };
 AttrModule.ContentEditableHtml=function(_var)
 {
  var x;
  x=AttrModule.CustomVar(_var,Runtime.Curried2(function(e,v)
  {
   e.innerHTML=v;
  }),function(e)
  {
   return{
    $:1,
    $0:e.innerHTML
   };
  });
  return((Runtime.Curried2(AttrProxy.Append))(AttrProxy.Create("contenteditable","true")))(x);
 };
 AttrModule.ContentEditableText=function(_var)
 {
  var x;
  x=AttrModule.CustomVar(_var,Runtime.Curried2(function(e,v)
  {
   e.textContent=v;
  }),function(e)
  {
   return{
    $:1,
    $0:e.textContent
   };
  });
  return((Runtime.Curried2(AttrProxy.Append))(AttrProxy.Create("contenteditable","true")))(x);
 };
 AttrModule.CustomValue=function(_var,toString,fromString)
 {
  return AttrModule.CustomVar(_var,Runtime.Curried2(function(e,v)
  {
   e.value=toString(v);
  }),function(e)
  {
   return fromString(e.value);
  });
 };
 AttrModule.CustomVar=function(_var,set,get)
 {
  var onChange;
  onChange=Runtime.Curried2(function(el)
  {
   _var.RUpdateMaybe(function(v)
   {
    var matchValue,$1;
    matchValue=get(el);
    return((matchValue!=null?matchValue.$==1:false)?!Unchecked.Equals(matchValue.$0,v)?($1=[matchValue,matchValue.$0],true):false:false)?$1[0]:null;
   });
  });
  return AttrProxy.Concat([AttrModule.Handler("change",onChange),AttrModule.Handler("input",onChange),AttrModule.Handler("keypress",onChange),AttrModule.DynamicCustom(Runtime.Curried2(function(e,v)
  {
   var matchValue,$1;
   matchValue=get(e);
   ((matchValue!=null?matchValue.$==1:false)?Unchecked.Equals(matchValue.$0,v)?($1=matchValue.$0,true):false:false)?null:(set(e))(v);
  }),_var.RView())]);
 };
 AttrModule.DynamicProp=function(name,view)
 {
  return Attrs$1.Dynamic(view,function()
  {
  },Runtime.Curried2(function(el,v)
  {
   el[name]=v;
  }));
 };
 AttrModule.DynamicPred=function(name,predView,valView)
 {
  var tupleView;
  tupleView=View.Map2(Runtime.Curried2(function(pred,value)
  {
   return[pred,value];
  }),predView,valView);
  return Attrs$1.Dynamic(tupleView,function()
  {
  },Runtime.Curried2(function(el,a)
  {
   a[0]?DomUtility.SetAttr(el,name,a[1]):DomUtility.RemoveAttr(el,name);
  }));
 };
 AttrModule.DynamicClass=function(name,view,ok)
 {
  return Attrs$1.Dynamic(view,function()
  {
  },Runtime.Curried2(function(el,v)
  {
   ok(v)?DomUtility.AddClass(el,name):DomUtility.RemoveClass(el,name);
  }));
 };
 AttrModule.OnAfterRenderView=function(v,callback)
 {
  var id,arg00,arg10;
  id=Fresh.Id();
  arg00=AttrModule.OnAfterRender(function(el)
  {
   (callback(el))(el[id]);
  });
  arg10=AttrModule.DynamicCustom(Runtime.Curried2(function(el,x)
  {
   el[id]=x;
  }),v);
  return AttrProxy.Append(arg00,arg10);
 };
 AttrModule.OnAfterRender=function(callback)
 {
  return Attrs$1.Mk(0,{
   $:4,
   $0:callback
  });
 };
 AttrModule.HandlerView=function(name,view,callback)
 {
  return Attrs$1.Static(function(el)
  {
   var callback$1;
   callback$1=callback(el);
   el.addEventListener(name,function(ev)
   {
    var arg00;
    arg00=callback$1(ev);
    return View.Get(arg00,view);
   },false);
  });
 };
 AttrModule.Handler=function(name,callback)
 {
  return Attrs$1.Static(function(el)
  {
   el.addEventListener(name,callback(el),false);
  });
 };
 AttrModule.DynamicStyle=function(name,view)
 {
  return Attrs$1.Dynamic(view,function()
  {
  },Runtime.Curried2(function(el,v)
  {
   DomUtility.SetStyle(el,name,v);
  }));
 };
 AttrModule.DynamicCustom=function(set,view)
 {
  return Attrs$1.Dynamic(view,function()
  {
  },set);
 };
 AttrModule.Dynamic=function(name,view)
 {
  return Attrs$1.Dynamic(view,function()
  {
  },Runtime.Curried2(function(el,v)
  {
   DomUtility.SetAttr(el,name,v);
  }));
 };
 AttrModule.AnimatedStyle=function(name,tr,view,attr$1)
 {
  return Attrs$1.Animated(tr,view,Runtime.Curried2(function(el,v)
  {
   DomUtility.SetStyle(el,name,attr$1(v));
  }));
 };
 AttrModule.Animated=function(name,tr,view,attr$1)
 {
  return Attrs$1.Animated(tr,view,Runtime.Curried2(function(el,v)
  {
   DomUtility.SetAttr(el,name,attr$1(v));
  }));
 };
 AttrModule.Class=function(name)
 {
  return Attrs$1.Static(function(el)
  {
   DomUtility.AddClass(el,name);
  });
 };
 AttrModule.Style=function(name,value)
 {
  return Attrs$1.Static(function(el)
  {
   DomUtility.SetStyle(el,name,value);
  });
 };
 SC$7.$cctor=Runtime.Cctor(function()
 {
  SC$7.EmptyAttr=Attrs$1.Mk(0,{
   $:0
  });
 });
 DocNode=Client.DocNode=Runtime.Class({},null,DocNode);
 DocElemNode=Next.DocElemNode=Runtime.Class({
  GetHashCode:function()
  {
   return this.ElKey;
  },
  Equals:function(o)
  {
   return this.ElKey===o.ElKey;
  }
 },null,DocElemNode);
 DocElemNode.New=function(Attr,Children,Delimiters,El,ElKey,Render)
 {
  var $1;
  return new DocElemNode(($1={
   Attr:Attr,
   Children:Children,
   El:El,
   ElKey:ElKey
  },Runtime.SetOptional($1,"Delimiters",Delimiters),Runtime.SetOptional($1,"Render",Render),$1));
 };
 DomNodes=Docs.DomNodes=Runtime.Class({},null,DomNodes);
 DomNodes.FoldBack=function(f,$1,z)
 {
  return Arrays.foldBack(f,$1.$0,z);
 };
 DomNodes.Iter=function(f,$1)
 {
  Arrays.iter(f,$1.$0);
 };
 DomNodes.Except=function($1,$2)
 {
  var excluded,x,predicate;
  excluded=$1.$0;
  x=(predicate=function(n)
  {
   var predicate$1;
   return(predicate$1=function(k)
   {
    return!(n===k);
   },function(array)
   {
    return Seq.forall(predicate$1,array);
   })(excluded);
  },function(array)
  {
   return Arrays.filter(predicate,array);
  })($2.$0);
  return new DomNodes({
   $:0,
   $0:x
  });
 };
 DomNodes.DocChildren=function(node)
 {
  var loop;
  var q=[];
  loop=function(doc)
  {
   doc.$==2?loop(doc.$0.Current):doc.$==1?q.push(doc.$0.El):doc.$==3?null:doc.$==5?q.push(doc.$0):doc.$==4?q.push(doc.$0.Text):(loop(doc.$0),loop(doc.$1));
  };
  loop(node.Children);
  return new DomNodes({
   $:0,
   $0:q.slice(0)
  });
 };
 DomNodes.Children=function(elem,delims)
 {
  var $1,n,objectArg;
  if(delims!=null?delims.$==1:false)
   {
    var a=Global.Array.prototype.constructor.apply(Global.Array,[]);
    n=delims.$0[0].nextSibling;
    while(n!==delims.$0[1])
     {
      a.push(n);
      n=n.nextSibling;
     }
    $1=new DomNodes({
     $:0,
     $0:a
    });
   }
  else
   $1=new DomNodes({
    $:0,
    $0:Arrays.init(elem.childNodes.length,(objectArg=elem.childNodes,function(arg00)
    {
     return objectArg[arg00];
    }))
   });
  return $1;
 };
 NodeSet=Docs.NodeSet=Runtime.Class({},null,NodeSet);
 NodeSet.ToArray=function($1)
 {
  return HashSetModule.ToArray($1.$0);
 };
 NodeSet.get_Empty=function()
 {
  return new NodeSet({
   $:0,
   $0:new HashSet.New$3()
  });
 };
 NodeSet.IsEmpty=function($1)
 {
  return $1.$0.get_Count()===0;
 };
 NodeSet.Intersect=function($1,$2)
 {
  return new NodeSet({
   $:0,
   $0:HashSetModule.Intersect($1.$0,$2.$0)
  });
 };
 NodeSet.Except=function($1,$2)
 {
  var excluded;
  excluded=$1.$0;
  return new NodeSet({
   $:0,
   $0:HashSetModule.Except(excluded,$2.$0)
  });
 };
 NodeSet.FindAll=function(doc)
 {
  var loop;
  var q=[];
  loop=function(node)
  {
   var el;
   node.$==0?(loop(node.$0),loop(node.$1)):node.$==1?(el=node.$0,q.push(el),loop(el.Children)):node.$==2?loop(node.$0.Current):null;
  };
  loop(doc);
  return new NodeSet({
   $:0,
   $0:new HashSet.New$2(q.slice(0))
  });
 };
 NodeSet.Filter=function(f,$1)
 {
  return new NodeSet({
   $:0,
   $0:HashSetModule.Filter(f,$1.$0)
  });
 };
 RunState=Docs.RunState=Runtime.Class({},null,RunState);
 RunState.New=function(PreviousNodes,Top)
 {
  return new RunState({
   PreviousNodes:PreviousNodes,
   Top:Top
  });
 };
 Docs$1.UpdateTextNode=function(n,t)
 {
  n.Value=t;
  n.Dirty=true;
 };
 Docs$1.CreateTextNode=function()
 {
  return{
   Text:DomUtility.CreateText(""),
   Dirty:false,
   Value:""
  };
 };
 Docs$1.UpdateEmbedNode=function(node,upd)
 {
  node.Current=upd;
  node.Dirty=true;
 };
 Docs$1.CreateEmbedNode=function()
 {
  return{
   Current:new DocNode({
    $:3
   }),
   Dirty:false
  };
 };
 Docs$1.PerformAnimatedUpdate=function(st,doc)
 {
  return Concurrency.Delay(function()
  {
   var cur,change,enter,exit,x;
   cur=NodeSet.FindAll(doc);
   change=Docs$1.ComputeChangeAnim(st,cur);
   enter=Docs$1.ComputeEnterAnim(st,cur);
   exit=Docs$1.ComputeExitAnim(st,cur);
   x=An.Play(An.Append(change,exit));
   return Concurrency.Bind(x,function()
   {
    var x$1;
    Docs$1.SyncElemNode(st.Top);
    x$1=An.Play(enter);
    return Concurrency.Bind(x$1,function()
    {
     st.PreviousNodes=cur;
     return Concurrency.Return(null);
    });
   });
  });
 };
 Docs$1.ComputeEnterAnim=function(st,cur)
 {
  var x,x$1,x$2,x$3,mapping;
  x=(x$1=(x$2=(x$3=((Runtime.Curried2(NodeSet.Filter))(function(n)
  {
   return Attrs$1.HasEnterAnim(n.Attr);
  }))(cur),((Runtime.Curried2(NodeSet.Except))(st.PreviousNodes))(x$3)),NodeSet.ToArray(x$2)),(mapping=function(n)
  {
   return Attrs$1.GetEnterAnim(n.Attr);
  },function(array)
  {
   return Arrays.map(mapping,array);
  })(x$1));
  return An.Concat(x);
 };
 Docs$1.ComputeChangeAnim=function(st,cur)
 {
  var relevant,x,x$1,x$2,arg00,arg10,mapping;
  relevant=(Runtime.Curried2(NodeSet.Filter))(function(n)
  {
   return Attrs$1.HasChangeAnim(n.Attr);
  });
  x=(x$1=(x$2=(arg00=relevant(st.PreviousNodes),arg10=relevant(cur),NodeSet.Intersect(arg00,arg10)),NodeSet.ToArray(x$2)),(mapping=function(n)
  {
   return Attrs$1.GetChangeAnim(n.Attr);
  },function(array)
  {
   return Arrays.map(mapping,array);
  })(x$1));
  return An.Concat(x);
 };
 Docs$1.ComputeExitAnim=function(st,cur)
 {
  var x,x$1,x$2,x$3,mapping;
  x=(x$1=(x$2=(x$3=((Runtime.Curried2(NodeSet.Filter))(function(n)
  {
   return Attrs$1.HasExitAnim(n.Attr);
  }))(st.PreviousNodes),((Runtime.Curried2(NodeSet.Except))(cur))(x$3)),NodeSet.ToArray(x$2)),(mapping=function(n)
  {
   return Attrs$1.GetExitAnim(n.Attr);
  },function(array)
  {
   return Arrays.map(mapping,array);
  })(x$1));
  return An.Concat(x);
 };
 Docs$1.CreateDelimitedRunState=function(ldelim,rdelim,doc)
 {
  return RunState.New(NodeSet.get_Empty(),Docs$1.CreateDelimitedElemNode(ldelim,rdelim,Attrs$1.EmptyAttr(),doc));
 };
 Docs$1.CreateRunState=function(parent,doc)
 {
  return RunState.New(NodeSet.get_Empty(),Docs$1.CreateElemNode(parent,Attrs$1.EmptyAttr(),doc));
 };
 Docs$1.CreateDelimitedElemNode=function(ldelim,rdelim,attr$1,children)
 {
  var el,attr$2;
  el=ldelim.parentNode;
  Docs$1.LinkPrevElement(rdelim,children);
  attr$2=Attrs$1.Insert(el,attr$1);
  return DocElemNode.New(attr$2,children,{
   $:1,
   $0:[ldelim,rdelim]
  },el,Fresh.Int(),Runtime.GetOptional(attr$2.OnAfterRender));
 };
 Docs$1.CreateElemNode=function(el,attr$1,children)
 {
  var attr$2;
  Docs$1.LinkElement(el,children);
  attr$2=Attrs$1.Insert(el,attr$1);
  return DocElemNode.New(attr$2,children,null,el,Fresh.Int(),Runtime.GetOptional(attr$2.OnAfterRender));
 };
 Docs$1.SyncElemNode=function(el)
 {
  Docs$1.SyncElement(el);
  Docs$1.Sync(el.Children);
  Docs$1.AfterRender(el);
 };
 Docs$1.Sync=function(doc)
 {
  var sync;
  sync=function(doc$1)
  {
   var el,d;
   doc$1.$==1?(el=doc$1.$0,Docs$1.SyncElement(el),sync(el.Children),Docs$1.AfterRender(el)):doc$1.$==2?sync(doc$1.$0.Current):doc$1.$==3?null:doc$1.$==5?null:doc$1.$==4?(d=doc$1.$0,d.Dirty?(d.Text.nodeValue=d.Value,d.Dirty=false):null):(sync(doc$1.$0),sync(doc$1.$1));
  };
  sync(doc);
 };
 Docs$1.AfterRender=function(el)
 {
  var matchValue;
  matchValue=Runtime.GetOptional(el.Render);
  (matchValue!=null?matchValue.$==1:false)?(matchValue.$0(el.El),Runtime.SetOptional(el,"Render",null)):null;
 };
 Docs$1.LinkPrevElement=function(el,children)
 {
  Docs$1.InsertDoc(el.parentNode,children,new InsertPos({
   $:1,
   $0:el
  }));
 };
 Docs$1.LinkElement=function(el,children)
 {
  Docs$1.InsertDoc(el,children,new InsertPos({
   $:0
  }));
 };
 Docs$1.SyncElement=function(el)
 {
  Attrs$1.Sync(el.El,el.Attr);
  (function(el$1)
  {
   var dirty;
   dirty=function(doc)
   {
    var d;
    return doc.$==0?dirty(doc.$0)?true:dirty(doc.$1):doc.$==2?(d=doc.$0,d.Dirty?true:dirty(d.Current)):false;
   };
   return dirty(el$1.Children);
  }(el)?Docs$1.DoSyncElement(el):null);
 };
 Docs$1.DoSyncElement=function(el)
 {
  var ins,ch,x,x$1,parent,pos,matchValue;
  var parent$1=el.El;
  ins=Runtime.Curried2(function(doc,pos$1)
  {
   var d;
   return doc.$==1?new InsertPos({
    $:1,
    $0:doc.$0.El
   }):doc.$==2?(d=doc.$0,d.Dirty?(d.Dirty=false,Docs$1.InsertDoc(parent$1,d.Current,pos$1)):(ins(d.Current))(pos$1)):doc.$==3?pos$1:doc.$==4?new InsertPos({
    $:1,
    $0:doc.$0.Text
   }):doc.$==5?new InsertPos({
    $:1,
    $0:doc.$0
   }):(ins(doc.$0))((ins(doc.$1))(pos$1));
  });
  ch=DomNodes.DocChildren(el);
  x=(x$1=DomNodes.Children(el.El,Runtime.GetOptional(el.Delimiters)),((Runtime.Curried2(DomNodes.Except))(ch))(x$1));
  ((Runtime.Curried2(function(arg00,arg10)
  {
   DomNodes.Iter(arg00,arg10);
  }))((parent=el.El,function(el$1)
  {
   DomUtility.RemoveNode(parent,el$1);
  })))(x);
  pos=(matchValue=Runtime.GetOptional(el.Delimiters),(matchValue!=null?matchValue.$==1:false)?new InsertPos({
   $:1,
   $0:matchValue.$0[1]
  }):new InsertPos({
   $:0
  }));
  (ins(el.Children))(pos);
 };
 Docs$1.InsertDoc=function(parent,doc,pos)
 {
  var d;
  return doc.$==1?Docs$1.InsertNode(parent,doc.$0.El,pos):doc.$==2?(d=doc.$0,d.Dirty=false,Docs$1.InsertDoc(parent,d.Current,pos)):doc.$==3?pos:doc.$==4?Docs$1.InsertNode(parent,doc.$0.Text,pos):doc.$==5?Docs$1.InsertNode(parent,doc.$0,pos):Docs$1.InsertDoc(parent,doc.$0,Docs$1.InsertDoc(parent,doc.$1,pos));
 };
 Docs$1.InsertNode=function(parent,node,pos)
 {
  DomUtility.InsertAt(parent,pos,node);
  return new InsertPos({
   $:1,
   $0:node
  });
 };
 CheckedInput=Next.CheckedInput=Runtime.Class({
  get_Input:function()
  {
   return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
 },null,CheckedInput);
 Doc=Next.Doc=Runtime.Class({
  ReplaceInDom:function(elt)
  {
   var rdelim;
   rdelim=Global.document.createTextNode("");
   elt.parentNode.replaceChild(rdelim,elt);
   Doc.RunBefore(rdelim,this);
  }
 },null,Doc);
 Doc.Append=function(a,b)
 {
  var x,x$1,y;
  x=(x$1=a.updates,y=b.updates,(((Runtime.Curried3(View.Map2))(Runtime.Curried2(function()
  {
  })))(x$1))(y));
  return((Runtime.Curried2(Doc.Mk))(new DocNode({
   $:0,
   $0:a.docNode,
   $1:b.docNode
  })))(x);
 };
 Doc.Concat=function(xs)
 {
  var x,z,re;
  x=Arrays.ofSeq(xs);
  return(z=Doc.Empty(),re=Runtime.Curried2(Doc.Append),function(a)
  {
   return Array.MapReduce(Global.id,z,re,a);
  })(x);
 };
 Doc.Empty=function()
 {
  var arg00,arg10;
  arg00=new DocNode({
   $:3
  });
  arg10=View.Const();
  return Doc.Mk(arg00,arg10);
 };
 Doc.TextNode=function(v)
 {
  var arg00,arg10;
  arg00=new DocNode({
   $:5,
   $0:DomUtility.CreateText(v)
  });
  arg10=View.Const();
  return Doc.Mk(arg00,arg10);
 };
 Doc.Verbatim=function(html)
 {
  var a,matchValue,es,arg10;
  a=(matchValue=Global.jQuery.parseHTML(html),Unchecked.Equals(matchValue,null)?[]:matchValue);
  es=Array.MapReduce(function(e)
  {
   return new DocNode({
    $:1,
    $0:Docs$1.CreateElemNode(e,Attrs$1.EmptyAttr(),new DocNode({
     $:3
    }))
   });
  },new DocNode({
   $:3
  }),Runtime.Curried2(function(x,y)
  {
   return new DocNode({
    $:0,
    $0:x,
    $1:y
   });
  }),a);
  arg10=View.Const();
  return Doc.Mk(es,arg10);
 };
 Doc.SvgElementMixed=function(tagname,nodes)
 {
  var patternInput;
  patternInput=Doc.MixedNodes(nodes);
  return Doc.SvgElement(tagname,patternInput[0],patternInput[1]);
 };
 Doc.SvgElement=function(name,attr$1,children)
 {
  var attr$2,children$1,arg00;
  attr$2=AttrProxy.Concat(attr$1);
  children$1=Doc.Concat(children);
  arg00=DomUtility.CreateSvgElement(name);
  return Elt.New(arg00,attr$2,children$1);
 };
 Doc.ElementMixed=function(tagname,nodes)
 {
  var patternInput;
  patternInput=Doc.MixedNodes(nodes);
  return Doc.Element(tagname,patternInput[0],patternInput[1]);
 };
 Doc.ConcatMixed=function(elts)
 {
  return Doc.Concat(Seq.map(Doc.ToMixedDoc,elts));
 };
 Doc.MixedNodes=function(nodes)
 {
  var attrs=new List$1.New$2();
  var children=new List$1.New$2();
  var enumerator=Enumerator.Get(nodes);
  try
  {
   while(enumerator.MoveNext())
    {
     var n;
     n=enumerator.Current();
     n instanceof AttrProxy?attrs.Add(n):children.Add(Doc.ToMixedDoc(n));
    }
  }
  finally
  {
   "Dispose"in enumerator?enumerator.Dispose():null;
  }
  return[attrs,children];
 };
 Doc.ToMixedDoc=function(o)
 {
  var x,x$1,x$2,v;
  return o instanceof Doc?o:typeof o=="string"?Doc.TextNode(o):o instanceof Global.Element?(x=Doc.Static(o),Global.id(x)):o instanceof View?(x$1=Doc.EmbedView(View.Map(Doc.ToMixedDoc,o)),Global.id(x$1)):o instanceof Var?(x$2=Doc.EmbedView((v=o.get_View(),View.Map(Doc.ToMixedDoc,v))),Global.id(x$2)):Unchecked.Equals(o,null)?Doc.Empty():Doc.TextNode(Global.String(o));
 };
 Doc.Element=function(name,attr$1,children)
 {
  var attr$2,children$1,arg00;
  attr$2=AttrProxy.Concat(attr$1);
  children$1=Doc.Concat(children);
  arg00=DomUtility.CreateElement(name);
  return Elt.New(arg00,attr$2,children$1);
 };
 Doc.Radio=function(attrs,value,_var)
 {
  var el,predView,arg10,valAttr,________,attr$1,x,arg20;
  el=DomUtility.CreateElement("input");
  el.addEventListener("click",function()
  {
   return _var.RSet(value);
  },false);
  predView=(arg10=_var.RView(),View.Map(function(x$1)
  {
   return Unchecked.Equals(x$1,value);
  },arg10));
  valAttr=AttrModule.DynamicProp("checked",predView);
  ________=Runtime.Curried2(AttrProxy.Create);
  attr$1=(x=List.append(List.ofArray([(________("type"))("radio"),(________("name"))(_var.RId()),valAttr]),List.ofSeq(attrs)),AttrProxy.Concat(x));
  arg20=Doc.Empty();
  return Elt.New(el,attr$1,arg20);
 };
 Doc.LinkView=function(caption,attrs,view,action)
 {
  var evAttr,attrs$1,arg00,arg20;
  evAttr=AttrModule.HandlerView("click",view,Runtime.Curried2(function()
  {
   return action;
  }));
  attrs$1=AttrProxy.Concat(Seq.append([evAttr,AttrProxy.Create("href","#")],attrs));
  arg00=DomUtility.CreateElement("a");
  arg20=Doc.TextNode(caption);
  return Elt.New(arg00,attrs$1,arg20);
 };
 Doc.Link=function(caption,attrs,action)
 {
  var attrs$1,x,el,arg20;
  attrs$1=(x=AttrProxy.Concat(attrs),((Runtime.Curried2(AttrProxy.Append))(AttrProxy.Create("href","#")))(x));
  el=Doc.Clickable("a",action);
  arg20=Doc.TextNode(caption);
  return Elt.New(el,attrs$1,arg20);
 };
 Doc.ButtonView=function(caption,attrs,view,action)
 {
  var evAttr,attrs$1,arg00,arg20;
  evAttr=AttrModule.HandlerView("click",view,Runtime.Curried2(function()
  {
   return action;
  }));
  attrs$1=AttrProxy.Concat(Seq.append([evAttr],attrs));
  arg00=DomUtility.CreateElement("button");
  arg20=Doc.TextNode(caption);
  return Elt.New(arg00,attrs$1,arg20);
 };
 Doc.Button=function(caption,attrs,action)
 {
  var attrs$1,el,arg20;
  attrs$1=AttrProxy.Concat(attrs);
  el=Doc.Clickable("button",action);
  arg20=Doc.TextNode(caption);
  return Elt.New(el,attrs$1,arg20);
 };
 Doc.Clickable=function(elem,action)
 {
  var el;
  el=DomUtility.CreateElement(elem);
  el.addEventListener("click",function(ev)
  {
   ev.preventDefault();
   return action();
  },false);
  return el;
 };
 Doc.CheckBoxGroup=function(attrs,item,chk)
 {
  var rvi,updateList,checkedView,arg00,predicate,attrs$1,x,arg10,arg10$1,el,onClick,arg20;
  rvi=chk.RView();
  updateList=function(chkd)
  {
   chk.RUpdate(function(obs)
   {
    var obs$1,x$1;
    obs$1=chkd?List.append(obs,List.ofArray([item])):List.filter(function(x$2)
    {
     return!Unchecked.Equals(x$2,item);
    },obs);
    x$1=Seq.distinct(obs$1);
    return List.ofSeq(x$1);
   });
  };
  checkedView=(arg00=(predicate=function(x$1)
  {
   return Unchecked.Equals(x$1,item);
  },function(list)
  {
   return Seq.exists(predicate,list);
  }),View.Map(arg00,rvi));
  attrs$1=(x=List.append(List.ofArray([AttrProxy.Create("type","checkbox"),(arg10=chk.RId(),AttrProxy.Create("name",arg10)),(arg10$1=Fresh.Id(),AttrProxy.Create("value",arg10$1)),AttrModule.DynamicProp("checked",checkedView)]),List.ofSeq(attrs)),AttrProxy.Concat(x));
  el=DomUtility.CreateElement("input");
  onClick=function()
  {
   updateList(el.checked);
  };
  el.addEventListener("click",onClick,false);
  arg20=Doc.Empty();
  return Elt.New(el,attrs$1,arg20);
 };
 Doc.CheckBox=function(attrs,chk)
 {
  var el,onClick,attrs$1,arg20;
  el=DomUtility.CreateElement("input");
  onClick=function()
  {
   chk.RSet(el.checked);
  };
  el.addEventListener("click",onClick,false);
  attrs$1=AttrProxy.Concat(List.ofSeq(Seq.delay(function()
  {
   return Seq.append(attrs,Seq.delay(function()
   {
    return Seq.append([AttrProxy.Create("type","checkbox")],Seq.delay(function()
    {
     return[AttrModule.DynamicProp("checked",chk.RView())];
    }));
   }));
  })));
  arg20=Doc.Empty();
  return Elt.New(el,attrs$1,arg20);
 };
 Doc.SelectDynOptional=function(attrs,noneText,show,vOptions,current)
 {
  var arg20;
  arg20=((Runtime.Curried2(View.Map))(function(options)
  {
   return new List.T({
    $:1,
    $0:null,
    $1:List.map(function(arg0)
    {
     return{
      $:1,
      $0:arg0
     };
    },options)
   });
  }))(vOptions);
  return Doc.SelectDyn(attrs,function($1)
  {
   return($1!=null?$1.$==1:false)?show($1.$0):noneText;
  },arg20,current);
 };
 Doc.SelectOptional=function(attrs,noneText,show,options,current)
 {
  var arg20;
  arg20=new List.T({
   $:1,
   $0:null,
   $1:List.map(function(arg0)
   {
    return{
     $:1,
     $0:arg0
    };
   },options)
  });
  return Doc.Select(attrs,function($1)
  {
   return($1!=null?$1.$==1:false)?show($1.$0):noneText;
  },arg20,current);
 };
 Doc.Select=function(attrs,show,options,current)
 {
  return Doc.SelectImpl(attrs,show,function(rOptions)
  {
   var x,mapping;
   rOptions[0]=options;
   x=(mapping=Runtime.Curried2(function(i,o)
   {
    var arg10,arg20;
    arg10=List.ofArray([AttrProxy.Create("value",Global.String(i))]);
    arg20=List.ofArray([Doc.TextNode(show(o))]);
    return Doc.Element("option",arg10,arg20);
   }),function(list)
   {
    return List.mapi(mapping,list);
   })(options);
   return Doc.Concat(x);
  },current);
 };
 Doc.SelectDyn=function(attrs,show,vOptions,current)
 {
  return Doc.SelectImpl(attrs,show,function(options)
  {
   var x;
   x=((Runtime.Curried2(View.Map))(function(l)
   {
    var mapping;
    options[0]=l;
    return(mapping=Runtime.Curried2(function(i,x$1)
    {
     return[i,x$1];
    }),function(source)
    {
     return Seq.mapi(mapping,source);
    })(l);
   }))(vOptions);
   return((Runtime.Curried2(Doc.Convert))(function(a)
   {
    var arg10,arg20;
    arg10=List.ofArray([AttrProxy.Create("value",Global.String(a[0]))]);
    arg20=List.ofArray([Doc.TextNode(show(a[1]))]);
    return Doc.Element("option",arg10,arg20);
   }))(x);
  },current);
 };
 Doc.SelectImpl=function(attrs,show,optionElements,current)
 {
  var options,getIndex,setIndex,getSelectedItem,itemIndex,setSelectedItem,el,selectedItemAttr,x,onChange,attrs$1,x$1,x$2,arg20;
  options=[new List.T({
   $:0
  })];
  getIndex=function(el$1)
  {
   return el$1.selectedIndex;
  };
  setIndex=Runtime.Curried2(function(el$1,i)
  {
   el$1.selectedIndex=i;
  });
  getSelectedItem=function(el$1)
  {
   return options[0].get_Item(getIndex(el$1));
  };
  itemIndex=function(x$3)
  {
   return Seq.findIndex(function(y)
   {
    return Unchecked.Equals(x$3,y);
   },options[0]);
  };
  setSelectedItem=Runtime.Curried2(function(el$1,item)
  {
   (setIndex(el$1))(itemIndex(item));
  });
  el=DomUtility.CreateElement("select");
  selectedItemAttr=(x=current.RView(),AttrModule.DynamicCustom(setSelectedItem,x));
  onChange=function()
  {
   current.RUpdateMaybe(function(x$3)
   {
    var y;
    y=getSelectedItem(el);
    return Unchecked.Equals(x$3,y)?null:{
     $:1,
     $0:y
    };
   });
  };
  el.addEventListener("change",onChange,false);
  attrs$1=(x$1=(x$2=AttrProxy.Concat(attrs),((Runtime.Curried2(AttrProxy.Append))(selectedItemAttr))(x$2)),((Runtime.Curried2(AttrProxy.Append))(AttrModule.OnAfterRender(function(el$1)
  {
   (setSelectedItem(el$1))(current.RGet());
  })))(x$1));
  arg20=optionElements(options);
  return Elt.New(el,attrs$1,arg20);
 };
 Doc.InputArea=function(attr$1,_var)
 {
  return Doc.InputInternal("textarea",function()
  {
   return Seq.append(attr$1,[AttrModule.Value(_var)]);
  });
 };
 Doc.FloatInput=function(attr$1,_var)
 {
  var parseCheckedFloat;
  parseCheckedFloat=Runtime.Curried2(function(el,s)
  {
   var i;
   return{
    $:1,
    $0:String.isBlank(s)?(el.checkValidity?el.checkValidity():true)?new CheckedInput({
     $:2,
     $0:s
    }):new CheckedInput({
     $:1,
     $0:s
    }):(i=+s,Global.isNaN(i)?new CheckedInput({
     $:1,
     $0:s
    }):new CheckedInput({
     $:0,
     $0:i,
     $1:s
    }))
   };
  });
  return Doc.InputInternal("input",function(el)
  {
   return Seq.append(attr$1,[AttrModule.CustomValue(_var,function(i)
   {
    return i.get_Input();
   },parseCheckedFloat(el)),AttrProxy.Create("type","number")]);
  });
 };
 Doc.FloatInputUnchecked=function(attr$1,_var)
 {
  var parseFloat;
  parseFloat=function(s)
  {
   var pd;
   return String.isBlank(s)?{
    $:1,
    $0:0
   }:(pd=+s,Global.isNaN(pd)?null:{
    $:1,
    $0:pd
   });
  };
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attr$1,[_var.RGet()===0?AttrProxy.Create("value","0"):Attrs$1.EmptyAttr(),AttrModule.CustomValue(_var,Global.String,parseFloat),AttrProxy.Create("type","number")]);
  });
 };
 Doc.IntInput=function(attr$1,_var)
 {
  var parseCheckedInt;
  parseCheckedInt=Runtime.Curried2(function(el,s)
  {
   var i;
   return{
    $:1,
    $0:String.isBlank(s)?(el.checkValidity?el.checkValidity():true)?new CheckedInput({
     $:2,
     $0:s
    }):new CheckedInput({
     $:1,
     $0:s
    }):(i=+s,Global.isNaN(i)?new CheckedInput({
     $:1,
     $0:s
    }):new CheckedInput({
     $:0,
     $0:i,
     $1:s
    }))
   };
  });
  return Doc.InputInternal("input",function(el)
  {
   return Seq.append(attr$1,[AttrModule.CustomValue(_var,function(i)
   {
    return i.get_Input();
   },parseCheckedInt(el)),AttrProxy.Create("type","number"),AttrProxy.Create("step","1")]);
  });
 };
 Doc.IntInputUnchecked=function(attr$1,_var)
 {
  var parseInt;
  parseInt=function(s)
  {
   var pd;
   return String.isBlank(s)?{
    $:1,
    $0:0
   }:(pd=+s,pd!==pd>>0?null:{
    $:1,
    $0:pd
   });
  };
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attr$1,[_var.RGet()===0?AttrProxy.Create("value","0"):Attrs$1.EmptyAttr(),AttrModule.CustomValue(_var,Global.String,parseInt),AttrProxy.Create("type","number"),AttrProxy.Create("step","1")]);
  });
 };
 Doc.PasswordBox=function(attr$1,_var)
 {
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attr$1,[AttrModule.Value(_var),AttrProxy.Create("type","password")]);
  });
 };
 Doc.Input=function(attr$1,_var)
 {
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attr$1,[AttrModule.Value(_var)]);
  });
 };
 Doc.InputInternal=function(elemTy,attr$1)
 {
  var el,arg10,arg20;
  el=DomUtility.CreateElement(elemTy);
  arg10=AttrProxy.Concat(attr$1(el));
  arg20=Doc.Empty();
  return Elt.New(el,arg10,arg20);
 };
 Doc.ConvertSeqBy=function(key,render,view)
 {
  var x;
  x=View.MapSeqCachedViewBy(key,render,view);
  return Doc.Flatten(x);
 };
 Doc.ConvertSeq=function(render,view)
 {
  var x;
  x=View.MapSeqCachedView(render,view);
  return Doc.Flatten(x);
 };
 Doc.ConvertBy=function(key,render,view)
 {
  var x;
  x=View.MapSeqCachedBy(key,render,view);
  return Doc.Flatten(x);
 };
 Doc.Convert=function(render,view)
 {
  var x;
  x=View.MapSeqCached(render,view);
  return Doc.Flatten(x);
 };
 Doc.Flatten=function(view)
 {
  var x;
  x=((Runtime.Curried2(View.Map))(Doc.Concat))(view);
  return Doc.EmbedView(x);
 };
 Doc.TextView=function(txt)
 {
  var node,x;
  node=Docs$1.CreateTextNode();
  x=((Runtime.Curried2(View.Map))(function(t)
  {
   Docs$1.UpdateTextNode(node,t);
  }))(txt);
  return((Runtime.Curried2(Doc.Mk))(new DocNode({
   $:4,
   $0:node
  })))(x);
 };
 Doc.RunReplaceById=function(id,tr)
 {
  var matchValue;
  matchValue=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(matchValue,null)?Operators.FailWith("invalid id: "+id):tr.ReplaceInDom(matchValue);
 };
 Doc.RunById=function(id,tr)
 {
  var matchValue;
  matchValue=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(matchValue,null)?Operators.FailWith("invalid id: "+id):Doc.Run(matchValue,tr);
 };
 Doc.Run=function(parent,doc)
 {
  var d,st,p,arg10;
  d=doc.docNode;
  Docs$1.LinkElement(parent,d);
  st=Docs$1.CreateRunState(parent,d);
  p=Mailbox.StartProcessor(function()
  {
   return Docs$1.PerformAnimatedUpdate(st,d);
  });
  arg10=doc.updates;
  View.Sink(p,arg10);
 };
 Doc.RunPrependById=function(id,doc)
 {
  var matchValue;
  matchValue=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(matchValue,null)?Operators.FailWith("invalid id: "+id):Doc.RunPrepend(matchValue,doc);
 };
 Doc.RunPrepend=function(parent,doc)
 {
  var rdelim;
  rdelim=Global.document.createTextNode("");
  parent.insertBefore(rdelim,parent.firstChild);
  Doc.RunBefore(rdelim,doc);
 };
 Doc.RunAppendById=function(id,doc)
 {
  var matchValue;
  matchValue=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(matchValue,null)?Operators.FailWith("invalid id: "+id):Doc.RunAppend(matchValue,doc);
 };
 Doc.RunAppend=function(parent,doc)
 {
  var rdelim;
  rdelim=Global.document.createTextNode("");
  parent.appendChild(rdelim);
  Doc.RunBefore(rdelim,doc);
 };
 Doc.RunAfterById=function(id,doc)
 {
  var matchValue;
  matchValue=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(matchValue,null)?Operators.FailWith("invalid id: "+id):Doc.RunAfter(matchValue,doc);
 };
 Doc.RunAfter=function(ldelim,doc)
 {
  var rdelim;
  rdelim=Global.document.createTextNode("");
  ldelim.parentNode.insertBefore(rdelim,ldelim.nextSibling);
  Doc.RunBetween(ldelim,rdelim,doc);
 };
 Doc.RunBeforeById=function(id,doc)
 {
  var matchValue;
  matchValue=DomUtility.Doc().getElementById(id);
  Unchecked.Equals(matchValue,null)?Operators.FailWith("invalid id: "+id):Doc.RunBefore(matchValue,doc);
 };
 Doc.RunBefore=function(rdelim,doc)
 {
  var ldelim;
  ldelim=Global.document.createTextNode("");
  rdelim.parentNode.insertBefore(ldelim,rdelim);
  Doc.RunBetween(ldelim,rdelim,doc);
 };
 Doc.RunBetween=function(ldelim,rdelim,doc)
 {
  var st,p,arg10;
  Docs$1.LinkPrevElement(rdelim,doc.docNode);
  st=Docs$1.CreateDelimitedRunState(ldelim,rdelim,doc.docNode);
  p=Mailbox.StartProcessor(function()
  {
   return Docs$1.PerformAnimatedUpdate(st,doc.docNode);
  });
  arg10=doc.updates;
  View.Sink(p,arg10);
 };
 Doc.Async=function(a)
 {
  var x,x$1;
  x=(x$1=View.Const(a),((Runtime.Curried2(View.MapAsync))(Global.id))(x$1));
  return Doc.EmbedView(x);
 };
 Doc.BindView=function(f,view)
 {
  return Doc.EmbedView(View.Map(f,view));
 };
 Doc.EmbedView=function(view)
 {
  var node,x,x$1;
  node=Docs$1.CreateEmbedNode();
  x=(x$1=((Runtime.Curried2(View.Bind))(function(doc)
  {
   Docs$1.UpdateEmbedNode(node,doc.docNode);
   return doc.updates;
  }))(view),((Runtime.Curried2(View.Map))(function()
  {
  }))(x$1));
  return((Runtime.Curried2(Doc.Mk))(new DocNode({
   $:2,
   $0:node
  })))(x);
 };
 Doc.Static=function(el)
 {
  var arg10,arg20;
  arg10=Attrs$1.EmptyAttr();
  arg20=Doc.Empty();
  return Elt.New(el,arg10,arg20);
 };
 Doc.Mk=function(node,updates)
 {
  return new Doc.New(node,updates);
 };
 Doc.New=Runtime.Ctor(function(docNode,updates)
 {
  this.docNode=docNode;
  this.updates=updates;
  null;
 },Doc);
 Elt=Next.Elt=Runtime.Class({
  AddClass:function(cls)
  {
   return this.elt.className+=" "+cls;
  },
  SetStyle:function(style,value)
  {
   this.elt.style[style]=value;
  },
  HasClass:function(cls)
  {
   return(new Global.RegExp("(\\s|^)"+cls+"(\\s|$)")).test(this.elt.className);
  },
  RemoveClass:function(cls)
  {
   this.elt.className=this.elt.className.replace(new Global.RegExp("(\\s|^)"+cls+"(\\s|$)")," ");
  },
  GetProperty:function(name)
  {
   return this.elt[name];
  },
  SetProperty:function(name,value)
  {
   this.elt[name]=value;
  },
  RemoveAttribute:function(name)
  {
   this.elt.removeAttribute(name);
  },
  HasAttribute:function(name)
  {
   return this.elt.hasAttribute(name);
  },
  GetAttribute:function(name)
  {
   return this.elt.getAttribute(name);
  },
  SetAttribute:function(name,value)
  {
   this.elt.setAttribute(name,value);
  },
  SetText:function(v)
  {
   var value;
   this.get_DocElemNode().Children=new DocNode({
    $:3
   });
   value=View.Const();
   Var.Set(this.rvUpdates,value);
   this.elt.textContent=v;
  },
  GetText:function()
  {
   return this.elt.textContent;
  },
  SetValue:function(v)
  {
   this.elt.value=v;
  },
  GetValue:function()
  {
   return this.elt.value;
  },
  Id:function()
  {
   return this.elt.id;
  },
  Html:function()
  {
   return this.elt.outerHTML;
  },
  Clear:function()
  {
   var value;
   this.get_DocElemNode().Children=new DocNode({
    $:3
   });
   value=View.Const();
   Var.Set(this.rvUpdates,value);
   while(this.elt.hasChildNodes())
    this.elt.removeChild(this.elt.firstChild);
  },
  Prepend:function(doc)
  {
   var e,value,arg10,arg20,pos,matchValue;
   e=this.get_DocElemNode();
   e.Children=new DocNode({
    $:0,
    $0:doc.docNode,
    $1:e.Children
   });
   value=(arg10=Var.Get(this.rvUpdates),arg20=doc.updates,View.Map2(Runtime.Curried2(function()
   {
   }),arg10,arg20));
   Var.Set(this.rvUpdates,value);
   pos=(matchValue=this.elt.firstChild,Unchecked.Equals(matchValue,null)?new InsertPos({
    $:0
   }):new InsertPos({
    $:1,
    $0:matchValue
   }));
   Docs$1.InsertDoc(this.elt,doc.docNode,pos);
  },
  Append:function(doc)
  {
   var e,value,arg10,arg20;
   e=this.get_DocElemNode();
   e.Children=new DocNode({
    $:0,
    $0:e.Children,
    $1:doc.docNode
   });
   value=(arg10=Var.Get(this.rvUpdates),arg20=doc.updates,View.Map2(Runtime.Curried2(function()
   {
   }),arg10,arg20));
   Var.Set(this.rvUpdates,value);
   Docs$1.InsertDoc(this.elt,doc.docNode,new InsertPos({
    $:0
   }));
  },
  get_DocElemNode:function()
  {
   var matchValue;
   matchValue=this.docNode$1;
   return matchValue.$==1?matchValue.$0:Operators.FailWith("Elt: Invalid docNode");
  },
  OnAfterRenderView:function(view,cb)
  {
   var $this,id;
   $this=this;
   id=Fresh.Id();
   this.Append(Doc.BindView(function(x)
   {
    $this.elt[id]=x;
    return Doc.Empty();
   },view));
   return this.OnAfterRender(function(e)
   {
    (cb(e))(e[id]);
   });
  },
  OnAfterRender:function(cb)
  {
   var matchValue,f;
   Runtime.SetOptional(this.get_DocElemNode(),"Render",(matchValue=Runtime.GetOptional(this.get_DocElemNode().Render),(matchValue!=null?matchValue.$==1:false)?(f=matchValue.$0,{
    $:1,
    $0:function(el)
    {
     f(el);
     cb(el);
    }
   }):{
    $:1,
    $0:cb
   }));
   return this;
  },
  onView:function(ev,view,cb)
  {
   var cb$1;
   cb$1=cb(this.elt);
   this.elt.addEventListener(ev,function(ev$1)
   {
    var arg00;
    arg00=cb$1(ev$1);
    return View.Get(arg00,view);
   },false);
   return this;
  },
  on:function(ev,cb)
  {
   this.elt.addEventListener(ev,cb(this.elt),false);
   return this;
  }
 },Doc,Elt);
 Elt.New=function(el,attr$1,children)
 {
  var node,rvUpdates,attrUpdates,updates,arg00,arg10;
  node=Docs$1.CreateElemNode(el,attr$1,children.docNode);
  rvUpdates=Var.Create$1(children.updates);
  attrUpdates=Attrs$1.Updates(node.Attr);
  updates=(arg00=((Runtime.Curried3(View.Map2))(Runtime.Curried2(function()
  {
  })))(attrUpdates),arg10=rvUpdates.get_View(),View.Bind(arg00,arg10));
  return new Elt.New$1(new DocNode({
   $:1,
   $0:node
  }),updates,el,rvUpdates,attrUpdates);
 };
 Elt.New$1=Runtime.Ctor(function(docNode,updates,elt,rvUpdates,attrUpdates)
 {
  Doc.New.call(this,docNode,updates);
  this.docNode$1=docNode;
  this.elt=elt;
  this.rvUpdates=rvUpdates;
  null;
 },Elt);
 Flow=Next.Flow=Runtime.Class({
  get_Render:function()
  {
   return this.render;
  }
 },null,Flow);
 Flow.New=Runtime.Ctor(function(define)
 {
  Flow.New$1.call(this,Runtime.Curried2(function(_var,cont)
  {
   var arg10;
   arg10=define(cont);
   Var.Set(_var,arg10);
  }));
 },Flow);
 Flow.New$1=Runtime.Ctor(function(render)
 {
  this.render=render;
  null;
 },Flow);
 Flow.get_Do=function()
 {
  return new FlowBuilder.New();
 };
 Flow.Static=function(doc)
 {
  return new Flow.New$1(Runtime.Curried2(function(_var,cont)
  {
   Var.Set(_var,doc);
   cont();
  }));
 };
 Flow.Define=function(f)
 {
  return new Flow.New(function(x)
  {
   return f(function(arg00)
   {
    x(arg00);
   });
  });
 };
 Flow.Embed=function(fl)
 {
  var _var;
  _var=Var.Create$1(Doc.Empty());
  ((fl.get_Render())(_var))(function()
  {
  });
  return Doc.EmbedView(_var.get_View());
 };
 Flow.Return=function(x)
 {
  return new Flow.New$1(Runtime.Curried2(function(_var,cont)
  {
   cont(x);
  }));
 };
 Flow.Bind=function(m,k)
 {
  return new Flow.New$1(Runtime.Curried2(function(_var,cont)
  {
   ((m.get_Render())(_var))(function(r)
   {
    ((k(r).get_Render())(_var))(cont);
   });
  }));
 };
 Flow.Map=function(f,x)
 {
  return new Flow.New$1(Runtime.Curried2(function(_var,cont)
  {
   ((x.get_Render())(_var))(function(r)
   {
    cont(f(r));
   });
  }));
 };
 FlowBuilder=Next.FlowBuilder=Runtime.Class({
  ReturnFrom:function(inner)
  {
   return inner;
  },
  Return:function(value)
  {
   return Flow.Return(value);
  },
  Bind:function(comp,func)
  {
   return Flow.Bind(comp,func);
  }
 },null,FlowBuilder);
 FlowBuilder.New=Runtime.Ctor(function()
 {
 },FlowBuilder);
 attr=Html.attr=Runtime.Class({},null,attr);
 attr.New=Runtime.Ctor(function()
 {
 },attr);
 T=Route.T=Runtime.Class({},null,T);
 Route.Append=function($1,$2)
 {
  return new T({
   $:0,
   $0:AppendListModule.Append($1.$0,$2.$0),
   $1:Map.FoldBack(Runtime.Curried3(function(key,value,table)
   {
    return table.Add(key,value);
   }),$1.$1,$2.$1)
  });
 };
 Route.FromList=function(xs,q)
 {
  var a,x;
  a=(x=Arrays.ofList(xs),AppendListModule.FromArray(x));
  return new T({
   $:0,
   $0:a,
   $1:q
  });
 };
 Route.ToList=function($1)
 {
  var x;
  return[(x=AppendListModule.ToArray($1.$0),List.ofArray(x)),$1.$1];
 };
 Route.SameHash=function(a,b)
 {
  return Route.NoHash(a)===Route.NoHash(b);
 };
 Route.MakeHash=function($1)
 {
  var query,path,x,x$1,x$2,mapping;
  query=$1.$1;
  path=(x=(x$1=AppendListModule.ToArray($1.$0),Arrays.map(function(x$3)
  {
   return Global.encodeURIComponent(x$3);
  },x$1)),Strings.concat("/",x));
  return query.get_IsEmpty()?path:path+"?"+(x$2=(mapping=function($2)
  {
   var activePatternResult95629;
   activePatternResult95629=Operators.KeyValue($2);
   return Global.encodeURIComponent(activePatternResult95629[0])+"="+Global.encodeURIComponent(activePatternResult95629[1]);
  },function(source)
  {
   return Seq.map(mapping,source);
  })(query),Strings.concat("&",x$2));
 };
 Route.ParseHash=function(hash)
 {
  var hash$1,patternInput,matchValue,path,path$1,x,x$1,query,x$2,x$3,mapping;
  hash$1=Route.NoHash(hash);
  patternInput=(matchValue=hash$1.indexOf(Global.String.fromCharCode(63)),matchValue===-1?[hash$1,""]:[Slice.string(hash$1,null,{
   $:1,
   $0:matchValue-1
  }),Slice.string(hash$1,{
   $:1,
   $0:matchValue+1
  },null)]);
  path=patternInput[0];
  path$1=(x=path===""?[]:(x$1=Strings.SplitChars(path,[47],0),Arrays.map(function(x$4)
  {
   return Global.decodeURIComponent(x$4);
  },x$1)),AppendListModule.FromArray(x));
  query=(x$2=(x$3=Strings.SplitChars(patternInput[1],[38],0),(mapping=function(s)
  {
   var matchValue$1,x$4,x$5;
   matchValue$1=s.indexOf(Global.String.fromCharCode(61));
   return matchValue$1===-1?[Global.decodeURIComponent(s),""]:[(x$4=Slice.string(s,null,{
    $:1,
    $0:matchValue$1-1
   }),Global.decodeURIComponent(x$4)),(x$5=Slice.string(s,{
    $:1,
    $0:matchValue$1+1
   },null),Global.decodeURIComponent(x$5))];
  },function(array)
  {
   return Arrays.map(mapping,array);
  })(x$3)),Map.OfArray(x$2));
  return new T({
   $:0,
   $0:path$1,
   $1:query
  });
 };
 Route.NoHash=function(s)
 {
  return Strings.StartsWith(s,"#")?s.substring(1):s;
 };
 State=Routing.State=Runtime.Class({},null,State);
 State.New=function(Bodies,CurrentRoute,CurrentSite,Selection)
 {
  return new State({
   Bodies:Bodies,
   CurrentRoute:CurrentRoute,
   CurrentSite:CurrentSite,
   Selection:Selection
  });
 };
 Routing.Install=function(key,$1)
 {
  function updateRoute(route)
  {
   var matchValue$1,site$1,x$3;
   matchValue$1=parseRoute(route);
   matchValue$1.$==1?null:(site$1=matchValue$1.$0,x$3=Route.FromList(matchValue$1.$1,new FSharpMap.New([])),Routing.OnGlobalRouteChange(state,site$1,x$3));
  }
  var va,currentRoute,state,siteTrie,___arg00___,parseRoute,glob,matchValue,site,x,x$1,x$2;
  va=$1.$0;
  currentRoute=Routing.InstallMap({
   Des:function(a)
   {
    return Route.FromList(a[0],a[1]);
   },
   Ser:Route.ToList
  });
  state=State.New(void 0,currentRoute,0,void 0);
  siteTrie=(___arg00___=Runtime.Curried2(function(prefix,$2)
  {
   var id;
   id=$2.$0;
   return $2.$1({
    UpdateRoute:function(rest)
    {
     Routing.OnInternalSiteUpdate(state,id,prefix,rest);
    }
   });
  }),function(___arg10___)
  {
   return TrieModule.Map(___arg00___,___arg10___);
  })($1.$1);
  state.Bodies=Routing.ComputeBodies(siteTrie);
  parseRoute=function(route)
  {
   var patternInput;
   patternInput=Route.ToList(route);
   return TrieModule.Lookup(siteTrie,patternInput[0]);
  };
  glob=(matchValue=parseRoute(Var.Get(currentRoute)),matchValue.$==0?(site=matchValue.$0,state.CurrentSite=site.RouteId,Var.Create$1(site.RouteValue)):(x=(va!=null?va.$==1:false)?va.$0:Operators.FailWith("Site.Install fails on empty site"),Var.Create$1(x)));
  state.Selection=glob;
  x$1=glob.get_View();
  ((Runtime.Curried2(function(arg00,arg10)
  {
   View.Sink(arg00,arg10);
  }))(function(site$1)
  {
   Routing.OnSelectSite(state,key(site$1));
  }))(x$1);
  updateRoute(Var.Get(currentRoute));
  x$2=currentRoute.get_View();
  ((Runtime.Curried2(function(arg00,arg10)
  {
   View.Sink(arg00,arg10);
  }))(updateRoute))(x$2);
  return glob;
 };
 Routing.OnSelectSite=function(state,$1)
 {
  var id;
  id=$1.$0;
  state.CurrentSite!==id?(state.CurrentSite=id,state.Bodies.get_Item(id).OnSelect()):null;
 };
 Routing.OnInternalSiteUpdate=function(state,ix,prefix,rest)
 {
  var route;
  state.CurrentSite===ix?(route=Route.Append(Route.FromList(prefix,new FSharpMap.New([])),rest),Routing.SetCurrentRoute(state,route)):null;
 };
 Routing.OnGlobalRouteChange=function(state,site,rest)
 {
  state.CurrentSite!==site.RouteId?(state.CurrentSite=site.RouteId,Var.Set(state.Selection,site.RouteValue)):null;
  site.OnRouteChanged(rest);
 };
 Routing.SetCurrentRoute=function(state,route)
 {
  !Unchecked.Equals(Var.Get(state.CurrentRoute),route)?Var.Set(state.CurrentRoute,route):null;
 };
 Routing.ComputeBodies=function(trie)
 {
  var d,x,action;
  d=new Dictionary.New$5();
  x=TrieModule.ToArray(trie);
  (action=function(body)
  {
   d.set_Item(body.RouteId,body);
  },function(array)
  {
   Arrays.iter(action,array);
  })(x);
  return d;
 };
 Routing.MergeRouters=function(sites)
 {
  var sites$1,merged,x,mapping,value,chooser;
  sites$1=Arrays.ofSeq(sites);
  merged=(x=(mapping=function($1)
  {
   return $1.$1;
  },function(source)
  {
   return Seq.map(mapping,source);
  })(sites$1),TrieModule.Merge(x));
  value=(chooser=function($1)
  {
   return $1.$0;
  },function(source)
  {
   return Seq.tryPick(chooser,source);
  })(sites$1);
  return(merged!=null?merged.$==1:false)?{
   $:0,
   $0:value,
   $1:merged.$0
  }:Operators.FailWith("Invalid Site.Merge: need more prefix disambiguation");
 };
 Routing.DefineRoute=function(r,init,render)
 {
  var state,id,site;
  state=Var.Create$1(init);
  id=Fresh.Int();
  site=(render({
   $:0,
   $0:id
  }))(state);
  return{
   $:0,
   $0:{
    $:1,
    $0:site
   },
   $1:TrieModule.Leaf({
    $:0,
    $0:id,
    $1:function(ctx)
    {
     var x;
     x=state.get_View();
     ((Runtime.Curried2(function(arg00,arg10)
     {
      View.Sink(arg00,arg10);
     }))(function(va)
     {
      ctx.UpdateRoute(Routing.DoLink(r,va));
     }))(x);
     return{
      OnRouteChanged:function(route)
      {
       var value;
       value=Routing.DoRoute(r,route);
       Var.Set(state,value);
      },
      OnSelect:function()
      {
       ctx.UpdateRoute(Routing.DoLink(r,Var.Get(state)));
      },
      RouteId:id,
      RouteValue:site
     };
    }
   })
  };
 };
 Routing.DoLink=function(map,va)
 {
  var a;
  a=map.Ser(va);
  return Route.FromList(a[0],a[1]);
 };
 Routing.DoRoute=function(map,route)
 {
  return map.Des(Route.ToList(route));
 };
 Routing.InstallMap=function(rt)
 {
  function onUpdate(evt)
  {
   return set(cur());
  }
  var win,same,cur,_var,set,x;
  win=Global.window;
  same=Runtime.Curried2(function(a,b)
  {
   return Unchecked.Equals(rt.Ser(a),rt.Ser(b));
  });
  cur=function()
  {
   var x$1;
   return rt.Des((x$1=Route.ParseHash(win.location.hash),Route.ToList(x$1)));
  };
  _var=Var.Create$1(cur());
  set=function(value)
  {
   !(same(Var.Get(_var)))(value)?Var.Set(_var,value):null;
  };
  win.onpopstate=onUpdate;
  win.onhashchange=onUpdate;
  x=_var.get_View();
  ((Runtime.Curried2(function(arg00,arg10)
  {
   View.Sink(arg00,arg10);
  }))(function(loc)
  {
   var ha,a;
   ha=Route.MakeHash((a=rt.Ser(loc),Route.FromList(a[0],a[1])));
   !Route.SameHash(win.location.hash,ha)?win.location.replace("#"+ha):null;
  }))(x);
  return _var;
 };
 RouteMap.Install=function(map)
 {
  return Routing.InstallMap(map);
 };
 RouteMap.Create=function(ser,des)
 {
  var f;
  return{
   Des:(f=function(tuple)
   {
    return tuple[0];
   },function(x)
   {
    return des(f(x));
   }),
   Ser:function(x)
   {
    return[ser(x),new FSharpMap.New([])];
   }
  };
 };
 RouteMap.CreateWithQuery=function(ser,des)
 {
  return{
   Des:des,
   Ser:ser
  };
 };
 Router.Route=function(r,init,render)
 {
  return Routing.DefineRoute(r,init,render);
 };
 Router.Prefix=function(prefix,$1)
 {
  return{
   $:0,
   $0:$1.$0,
   $1:TrieModule.Prefix(prefix,$1.$1)
  };
 };
 Router.Merge=function(sites)
 {
  return Routing.MergeRouters(sites);
 };
 Router.Install=function(key,site)
 {
  return Routing.Install(key,site);
 };
 Router.Dir=function(prefix,sites)
 {
  var arg10;
  arg10=Router.Merge(sites);
  return Router.Prefix(prefix,arg10);
 };
 MousePosSt=Input.MousePosSt=Runtime.Class({},null,MousePosSt);
 MousePosSt.New=function(Active,PosV)
 {
  return new MousePosSt({
   Active:Active,
   PosV:PosV
  });
 };
 MouseBtnSt=Input.MouseBtnSt=Runtime.Class({},null,MouseBtnSt);
 MouseBtnSt.New=function(Active,Left,Middle,Right)
 {
  return new MouseBtnSt({
   Active:Active,
   Left:Left,
   Middle:Middle,
   Right:Right
  });
 };
 Mouse.get_MousePressed=function()
 {
  var sourceFunc,sourceFunc$1,sourceFunc$2,sourceParam,sourceParam$1,sourceParam$2;
  Input.ActivateButtonListener();
  sourceFunc=(sourceFunc$1=(sourceFunc$2=View.Const(Runtime.Curried3(function(l,m,r)
  {
   return(l?true:m)?true:r;
  })),sourceParam=Input.MouseBtnSt$1().Left.get_View(),View.Apply(sourceFunc$2,sourceParam)),sourceParam$1=Input.MouseBtnSt$1().Middle.get_View(),View.Apply(sourceFunc$1,sourceParam$1));
  sourceParam$2=Input.MouseBtnSt$1().Right.get_View();
  return View.Apply(sourceFunc,sourceParam$2);
 };
 Mouse.get_RightPressed=function()
 {
  Input.ActivateButtonListener();
  return Input.MouseBtnSt$1().Right.get_View();
 };
 Mouse.get_MiddlePressed=function()
 {
  Input.ActivateButtonListener();
  return Input.MouseBtnSt$1().Middle.get_View();
 };
 Mouse.get_LeftPressed=function()
 {
  Input.ActivateButtonListener();
  return Input.MouseBtnSt$1().Left.get_View();
 };
 Mouse.get_Position=function()
 {
  var onMouseMove;
  onMouseMove=function(evt)
  {
   var arg00,arg10;
   arg00=Input.MousePosSt$1().PosV;
   arg10=[evt.clientX,evt.clientY];
   Var.Set(arg00,arg10);
  };
  !Input.MousePosSt$1().Active?(Global.document.addEventListener("mousemove",onMouseMove,false),Input.MousePosSt$1().Active=true):null;
  return Input.MousePosSt$1().PosV.get_View();
 };
 KeyListenerSt=Input.KeyListenerSt=Runtime.Class({},null,KeyListenerSt);
 KeyListenerSt.New=function(KeysPressed,KeyListenerActive,LastPressed)
 {
  return new KeyListenerSt({
   KeysPressed:KeysPressed,
   KeyListenerActive:KeyListenerActive,
   LastPressed:LastPressed
  });
 };
 Keyboard.IsPressed=function(key)
 {
  var arg00,predicate,arg10;
  Input.ActivateKeyListener();
  arg00=(predicate=function(x)
  {
   return x===key;
  },function(list)
  {
   return Seq.exists(predicate,list);
  });
  arg10=Input.KeyListenerState().KeysPressed.get_View();
  return View.Map(arg00,arg10);
 };
 Keyboard.get_LastPressed=function()
 {
  Input.ActivateKeyListener();
  return Input.KeyListenerState().LastPressed.get_View();
 };
 Keyboard.get_KeysPressed=function()
 {
  Input.ActivateKeyListener();
  return Input.KeyListenerState().KeysPressed.get_View();
 };
 Input.ActivateKeyListener=function()
 {
  SC$8.$cctor();
  return SC$8.ActivateKeyListener;
 };
 Input.KeyListenerState=function()
 {
  SC$8.$cctor();
  return SC$8.KeyListenerState;
 };
 Input.ActivateButtonListener=function()
 {
  SC$8.$cctor();
  return SC$8.ActivateButtonListener;
 };
 Input.MouseBtnSt$1=function()
 {
  SC$8.$cctor();
  return SC$8.MouseBtnSt;
 };
 Input.MousePosSt$1=function()
 {
  SC$8.$cctor();
  return SC$8.MousePosSt;
 };
 SC$8.$cctor=Runtime.Cctor(function()
 {
  var buttonListener,_this,node,_this$1,node$1;
  SC$8.MousePosSt=MousePosSt.New(false,Var.Create$1([0,0]));
  SC$8.MouseBtnSt=MouseBtnSt.New(false,Var.Create$1(false),Var.Create$1(false),Var.Create$1(false));
  SC$8.ActivateButtonListener=(buttonListener=Runtime.Curried2(function(evt,down)
  {
   var matchValue,arg00,arg00$1,arg00$2;
   matchValue=evt.button;
   matchValue===0?(arg00=Input.MouseBtnSt$1().Left,Var.Set(arg00,down)):matchValue===1?(arg00$1=Input.MouseBtnSt$1().Middle,Var.Set(arg00$1,down)):matchValue===2?(arg00$2=Input.MouseBtnSt$1().Right,Var.Set(arg00$2,down)):null;
  }),!Input.MouseBtnSt$1().Active?(Input.MouseBtnSt$1().Active=true,Global.document.addEventListener("mousedown",function(evt)
  {
   return(buttonListener(evt))(true);
  },false),Global.document.addEventListener("mouseup",function(evt)
  {
   return(buttonListener(evt))(false);
  },false)):null);
  SC$8.KeyListenerState=KeyListenerSt.New(Var.Create$1(new List.T({
   $:0
  })),false,Var.Create$1(-1));
  SC$8.ActivateKeyListener=!Input.KeyListenerState().KeyListenerActive?(_this=(node=Global.document,Global.jQuery(node)),_this.keydown(Runtime.CreateFuncWithThis(Runtime.Curried2(function(el,evt)
  {
   var keyCode,arg00,xs,v,value;
   keyCode=evt.which;
   arg00=Input.KeyListenerState().LastPressed;
   Var.Set(arg00,keyCode);
   xs=Var.Get(Input.KeyListenerState().KeysPressed);
   !Seq.exists(function(x)
   {
    return x===keyCode;
   },xs)?(v=Input.KeyListenerState().KeysPressed,value=List.append(xs,List.ofArray([keyCode])),Var.Set(v,value)):null;
  }))),_this$1=(node$1=Global.document,Global.jQuery(node$1)),_this$1.keyup(Runtime.CreateFuncWithThis(Runtime.Curried2(function(el,evt)
  {
   var keyCode,arg00,arg10,predicate;
   keyCode=evt.which;
   arg00=Input.KeyListenerState().KeysPressed;
   arg10=(predicate=function(x)
   {
    return x!==keyCode;
   },function(list)
   {
    return List.filter(predicate,list);
   });
   Var.Update(arg00,arg10);
  })))):null;
 });
}());
