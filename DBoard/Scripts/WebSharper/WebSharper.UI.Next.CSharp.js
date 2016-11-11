(function()
{
 var Global=this;
 var WebSharper=Global.WebSharper=Global.WebSharper||{};
 var UI=WebSharper.UI=WebSharper.UI||{};
 var Next=UI.Next=UI.Next||{};
 var CSharp=Next.CSharp=Next.CSharp||{};
 var ViewExtensions=CSharp.ViewExtensions=CSharp.ViewExtensions||{};
 var DocExtension=CSharp.DocExtension=CSharp.DocExtension||{};
 var Client=CSharp.Client=CSharp.Client||{};
 var Helpers=Client.Helpers=Client.Helpers||{};
 var RouteMapBuilder=Client.RouteMapBuilder=Client.RouteMapBuilder||{};
 var RouteItemParsers=Client.RouteItemParsers=Client.RouteItemParsers||{};
 var View=Next&&Next.View;
 var Doc=Next&&Next.Doc;
 var IntelliFactory=Global.IntelliFactory;
 var Runtime=IntelliFactory&&IntelliFactory.Runtime;
 var Var=Next&&Next.Var;
 var List=WebSharper&&WebSharper.List;
 var RouteMap=Next&&Next.RouteMap;
 var Seq=WebSharper&&WebSharper.Seq;
 var Unchecked=WebSharper&&WebSharper.Unchecked;
 var Arrays=WebSharper&&WebSharper.Arrays;
 var Collections=WebSharper&&WebSharper.Collections;
 var FSharpMap=Collections&&Collections.FSharpMap;
 var Option=WebSharper&&WebSharper.Option;
 var Map=Collections&&Collections.Map;
 var Nullable=WebSharper&&WebSharper.Nullable;
 var Operators=WebSharper&&WebSharper.Operators;
 ViewExtensions.UpdateWhile=function(va,a,vb)
 {
  return View.UpdateWhile(a,vb,va);
 };
 DocExtension.DocSeqCached=function(v,f,g)
 {
  return Doc.ConvertSeqBy(f,Runtime.Curried2(g),v);
 };
 Helpers.seqRefToListRef=function(l)
 {
  return Var.Lens(l,List.ofSeq,Runtime.Curried2(function($1,b)
  {
   return b;
  }));
 };
 RouteMapBuilder=Client.RouteMapBuilder=Runtime.Class({
  Install:function()
  {
   var routeMap,_var,renders,x,mapping,v;
   routeMap=this.ToRouteMap();
   _var=RouteMap.Install(routeMap);
   renders=(x=List.rev(this.renders),(mapping=Runtime.Curried2(function(f,r)
   {
    return f(function(delegateArg0)
    {
     return Var.Set(_var,delegateArg0);
    },r);
   }),function(list)
   {
    return List.map(mapping,list);
   })(x));
   v=_var.get_View();
   return Doc.BindView(function(r)
   {
    return Seq.pick(function(func)
    {
     return func(r);
    },renders);
   },v);
  },
  ToRouteMap:function()
  {
   var links,routes;
   links=List.rev(this.links);
   routes=List.rev(this.routes);
   return RouteMap.CreateWithQuery(function(a)
   {
    return Seq.pick(function(func)
    {
     return func(a);
    },links);
   },function(r)
   {
    return Seq.pick(function(func)
    {
     return func(r);
    },routes);
   });
  },
  AddRender:function(r)
  {
   this.renders=new List.T({
    $:1,
    $0:r,
    $1:this.renders
   });
  },
  AddLink:function(l)
  {
   this.links=new List.T({
    $:1,
    $0:l,
    $1:this.links
   });
  },
  AddRoute:function(r)
  {
   this.routes=new List.T({
    $:1,
    $0:r,
    $1:this.routes
   });
  }
 },null,RouteMapBuilder);
 RouteMapBuilder.New=Runtime.Ctor(function()
 {
  this.links=new List.T({
   $:0
  });
  this.routes=new List.T({
   $:0
  });
  this.renders=new List.T({
   $:0
  });
  null;
 },RouteMapBuilder);
 RouteItemParsers["System.Double"]=function($1)
 {
  var x,matchValue,x$1;
  x=$1[0];
  return x.$==1?(matchValue=(new Global.RegExp("^[0-9](?:\\.[0-9]*)?$")).exec(x.$0),Unchecked.Equals(matchValue,null)?null:{
   $:1,
   $0:[(x$1=Arrays.get(matchValue,0),Global.parseFloat(x$1)),x.$1]
  }):null;
 };
 RouteItemParsers["System.Int32"]=function($1)
 {
  var x,matchValue,a;
  x=$1[0];
  return x.$==1?(matchValue=(new Global.RegExp("^[0-9]+$")).exec(x.$0),Unchecked.Equals(matchValue,null)?null:{
   $:1,
   $0:[(a=Arrays.get(matchValue,0),Global.parseInt(a,Global.$1)),x.$1]
  }):null;
 };
 RouteItemParsers["System.String"]=function($1)
 {
  var x;
  x=$1[0];
  return x.$==1?{
   $:1,
   $0:[x.$0,x.$1]
  }:null;
 };
 RouteItemParsers.MakeLink=function(shape)
 {
  return function(value)
  {
   var map,x,mapping,x$1,mapping$1,f,g,x$2,x$3,mapping$2;
   return shape.$==1?(map=[new FSharpMap.New([])],[List.append(Option.toList(shape.$1),(x=(mapping=function(a)
   {
    var name,queryItem,link,patternInput,x$4,x$5,matchValue,x$6,v,x$7;
    name=a[0];
    queryItem=a[1];
    link=a[3];
    return Unchecked.Equals(queryItem,0)?(patternInput=link(value[name]),map[0]=Map.FoldBack(Runtime.Curried3(function(key,value$1,table)
    {
     return table.Add(key,value$1);
    }),patternInput[1],map[0]),patternInput[0]):Unchecked.Equals(queryItem,1)?(x$4=(x$5=(link(value[name]))[0],List.head(x$5)),map[0]=map[0].Add(name,x$4),new List.T({
     $:0
    })):Unchecked.Equals(queryItem,2)?(matchValue=value[name],(matchValue!=null?matchValue.$==1:false)?void(map[0]=map[0].Add(name,(x$6=(link(matchValue.$0))[0],List.head(x$6)))):null,new List.T({
     $:0
    })):Unchecked.Equals(queryItem,3)?(v=value[name],v!=null?void(map[0]=map[0].Add(name,(x$7=(link(Nullable.get(v)))[0],List.head(x$7)))):null,new List.T({
     $:0
    })):Operators.FailWith("invalid QueryItem enum value");
   },function(source)
   {
    return Seq.collect(mapping,source);
   })(shape.$2),List.ofSeq(x))),map[0]]):shape.$==2?[new List.T({
    $:1,
    $0:Global.String(Seq.length(value)),
    $1:(x$1=(mapping$1=(f=shape.$2,g=function(tuple)
    {
     return tuple[0];
    },function(x$4)
    {
     return g(f(x$4));
    }),function(source)
    {
     return Seq.collect(mapping$1,source);
    })(value),List.ofSeq(x$1))
   }),new FSharpMap.New([])]:shape.$==3?[(x$2=(x$3=((mapping$2=function(a)
   {
    var link;
    link=a[1];
    return function(x$4)
    {
     return(link(x$4))[0];
    };
   },Runtime.Curried2(function(source1,source2)
   {
    return Seq.map2(mapping$2,source1,source2);
   }))(shape.$0))(value),Seq.concat(x$3)),List.ofSeq(x$2)),new FSharpMap.New([])]:[List.ofArray([Global.String(value)]),new FSharpMap.New([])];
  };
 };
 RouteItemParsers.ParseRoute=function(shape)
 {
  var f,g,binder;
  f=RouteItemParsers.ParseShape(shape);
  g=(binder=function($1)
  {
   return $1[1].$==0?{
    $:1,
    $0:$1[0]
   }:null;
  },function(option)
  {
   return Option.bind(binder,option);
  });
  return function(x)
  {
   return g(f(x));
  };
 };
 RouteItemParsers.ParseShape=function(shape)
 {
  return function(a)
  {
   var path,query,parseArgs,$1,fromArray,parseItem,x,binder,t,x$1,folder,mapping;
   path=a[0];
   query=a[1];
   parseArgs=Runtime.Curried3(function(init,rest,args)
   {
    var v,x$2,folder$1,mapping$1;
    v=init();
    x$2=((folder$1=Runtime.Curried2(function(rest$1,a$1)
    {
     var name,queryItem,parse,rest$2,matchValue,matchValue$1,matchValue$2,matchValue$3,matchValue$4,matchValue$5;
     name=a$1[0];
     queryItem=a$1[1];
     parse=a$1[2];
     return(rest$1!=null?rest$1.$==1:false)?(rest$2=rest$1.$0,Unchecked.Equals(queryItem,0)?(matchValue=parse([rest$2,query]),(matchValue!=null?matchValue.$==1:false)?(v[name]=matchValue.$0[0],{
      $:1,
      $0:matchValue.$0[1]
     }):null):Unchecked.Equals(queryItem,1)?(matchValue$1=Map.TryFind(name,query),matchValue$1==null?null:(v[name]=matchValue$1.$0,{
      $:1,
      $0:rest$2
     })):Unchecked.Equals(queryItem,2)?(matchValue$2=Map.TryFind(name,query),(matchValue$2!=null?matchValue$2.$==1:false)?(matchValue$3=parse([List.ofArray([matchValue$2.$0]),new FSharpMap.New([])]),(matchValue$3!=null?matchValue$3.$==1:false)?(v[name]={
      $:1,
      $0:matchValue$3.$0[0]
     },{
      $:1,
      $0:rest$2
     }):null):(v[name]=null,{
      $:1,
      $0:rest$2
     })):Unchecked.Equals(queryItem,3)?(matchValue$4=Map.TryFind(name,query),(matchValue$4!=null?matchValue$4.$==1:false)?(matchValue$5=parse([List.ofArray([matchValue$4.$0]),new FSharpMap.New([])]),(matchValue$5!=null?matchValue$5.$==1:false)?(v[name]=matchValue$5.$0[0],{
      $:1,
      $0:rest$2
     }):null):(v[name]=null,{
      $:1,
      $0:rest$2
     })):Operators.FailWith("invalid QueryItem enum value")):null;
    }),Runtime.Curried2(function(state,array)
    {
     return Arrays.fold(folder$1,state,array);
    }))({
     $:1,
     $0:rest
    }))(args);
    return(mapping$1=function(rest$1)
    {
     return[v,rest$1];
    },function(option)
    {
     return Option.map(mapping$1,option);
    })(x$2);
   });
   return shape.$==1?shape.$1==null?((parseArgs(shape.$0))(path))(shape.$2):(path.$==1?path.$0===shape.$1.$0?($1=[path.$1,path.$0],true):false:false)?((parseArgs(shape.$0))($1[0]))(shape.$2):null:shape.$==2?(fromArray=shape.$0,parseItem=shape.$1,x=RouteItemParsers["System.Int32"]([path,query]),(binder=function(a$1)
   {
    var set;
    var length=a$1[0];
    var arr=Arrays.create(length,null);
    set=Runtime.Curried2(function(i,rest)
    {
     var matchValue;
     return i===length?{
      $:1,
      $0:[fromArray(arr),rest]
     }:(matchValue=parseItem([rest,query]),(matchValue!=null?matchValue.$==1:false)?(Arrays.set(arr,i,matchValue.$0[0]),(set(i+1))(matchValue.$0[1])):null);
    });
    return(set(0))(a$1[1]);
   },function(option)
   {
    return Option.bind(binder,option);
   })(x)):shape.$==3?(t=Global.Array.prototype.constructor.apply(Global.Array,[]),x$1=((folder=Runtime.Curried2(function(rest,a$1)
   {
    var parse,binder$1;
    parse=a$1[0];
    return(binder$1=function(rest$1)
    {
     var x$2,mapping$1;
     x$2=parse([rest$1,query]);
     return(mapping$1=function(a$2)
     {
      t.push(a$2[0]);
      return a$2[1];
     },function(option)
     {
      return Option.map(mapping$1,option);
     })(x$2);
    },function(option)
    {
     return Option.bind(binder$1,option);
    })(rest);
   }),Runtime.Curried2(function(state,array)
   {
    return Arrays.fold(folder,state,array);
   }))({
    $:1,
    $0:path
   }))(shape.$0),(mapping=function(rest)
   {
    return[t,rest];
   },function(option)
   {
    return Option.map(mapping,option);
   })(x$1)):shape.$0([path,query]);
  };
 };
}());
