(function()
{
 var Global=this;
 var WebSharper=Global.WebSharper=Global.WebSharper||{};
 var Json=WebSharper.Json=WebSharper.Json||{};
 var Provider=Json.Provider=Json.Provider||{};
 var Web=WebSharper.Web=WebSharper.Web||{};
 var Control=Web.Control=Web.Control||{};
 var FSharpInlineControl=Web.FSharpInlineControl=Web.FSharpInlineControl||{};
 var InlineControl=Web.InlineControl=Web.InlineControl||{};
 var IntelliFactory=Global.IntelliFactory;
 var Runtime=IntelliFactory&&IntelliFactory.Runtime;
 var Collections=WebSharper&&WebSharper.Collections;
 var Dictionary=Collections&&Collections.Dictionary;
 var JavaScript=WebSharper&&WebSharper.JavaScript;
 var JSModule=JavaScript&&JavaScript.JSModule;
 var FSharpMap=Collections&&Collections.FSharpMap;
 var Unchecked=WebSharper&&WebSharper.Unchecked;
 var Arrays=WebSharper&&WebSharper.Arrays;
 var Operators=WebSharper&&WebSharper.Operators;
 var FSharpSet=Collections&&Collections.FSharpSet;
 var BalancedTree=Collections&&Collections.BalancedTree;
 var List=WebSharper&&WebSharper.List;
 var Enumerator=WebSharper&&WebSharper.Enumerator;
 var Map=Collections&&Collections.Map;
 var Seq=WebSharper&&WebSharper.Seq;
 Provider.DecodeStringDictionary=function(decEl)
 {
  return Runtime.Curried2(function(unitVar0,o)
  {
   var d;
   d=new Dictionary.New$5();
   JSModule.ForEach(o,function(k)
   {
    d.set_Item(k,o[k]);
    return false;
   });
   return d;
  });
 };
 Provider.DecodeStringMap=function(decEl)
 {
  return Runtime.Curried2(function(unitVar0,o)
  {
   var m;
   m=[new FSharpMap.New([])];
   JSModule.ForEach(o,function(k)
   {
    m[0]=m[0].Add(k,o[k]);
    return false;
   });
   return m[0];
  });
 };
 Provider.DecodeArray=function(decEl)
 {
  return Provider.EncodeArray(decEl);
 };
 Provider.DecodeUnion=function(t,discr,cases)
 {
  return Runtime.Curried2(function(unitVar0,x)
  {
   var o,tag,tagName,predicate,r,x$1,action;
   return(typeof x==="object"?x!=null:false)?(o=t===void 0?{}:new t(),tag=Unchecked.Equals(typeof discr,"string")?(tagName=x[discr],(predicate=function(a)
   {
    return a[0]===tagName;
   },function(array)
   {
    return Arrays.findINdex(predicate,array);
   })(cases)):(r=[void 0],JSModule.ForEach(discr,function(k)
   {
    return x.hasOwnProperty(k)?(r[0]=discr[k],true):false;
   }),r[0]),o.$=tag,x$1=(Arrays.get(cases,tag))[1],(action=function(a)
   {
    var from,to,dec,kind;
    from=a[0];
    to=a[1];
    dec=a[2];
    kind=a[3];
    from===null?void(o.$0=(dec(null))(x)):Unchecked.Equals(kind,0)?void(o[from]=(dec(null))(x[to])):Unchecked.Equals(kind,1)?void(o[from]=x.hasOwnProperty(to)?{
     $:1,
     $0:(dec(null))(x[to])
    }:null):Operators.FailWith("Invalid field option kind");
   },function(array)
   {
    Arrays.iter(action,array);
   })(x$1),o):x;
  });
 };
 Provider.DecodeRecord=function(t,fields)
 {
  return Runtime.Curried2(function(unitVar0,x)
  {
   var o,action;
   o=t===void 0?{}:new t();
   (action=function(a)
   {
    var name,dec,kind;
    name=a[0];
    dec=a[1];
    kind=a[2];
    Unchecked.Equals(kind,0)?x.hasOwnProperty(name)?void(o[name]=(dec(null))(x[name])):Operators.FailWith("Missing mandatory field: "+name):Unchecked.Equals(kind,1)?void(o[name]=x.hasOwnProperty(name)?{
     $:1,
     $0:(dec(null))(x[name])
    }:null):Unchecked.Equals(kind,2)?x.hasOwnProperty(name)?void(o[name]=(dec(null))(x[name])):null:Operators.FailWith("Invalid field option kind");
   },function(array)
   {
    Arrays.iter(action,array);
   })(fields);
   return o;
  });
 };
 Provider.DecodeSet=function(decEl)
 {
  return Runtime.Curried2(function(unitVar0,a)
  {
   var e;
   e=decEl();
   return new FSharpSet.New$1(BalancedTree.OfSeq(Arrays.map(e,a)));
  });
 };
 Provider.DecodeList=function(decEl)
 {
  return Runtime.Curried2(function(unitVar0,a)
  {
   var e;
   e=decEl();
   return List.init(Arrays.length(a),function(i)
   {
    return e(Arrays.get(a,i));
   });
  });
 };
 Provider.DecodeDateTime=function()
 {
  return Runtime.Curried2(function(unitVar0,x)
  {
   return(new Global.Date(x)).getTime();
  });
 };
 Provider.DecodeTuple=function(decs)
 {
  return Provider.EncodeTuple(decs);
 };
 Provider.EncodeStringDictionary=function(encEl)
 {
  return Runtime.Curried2(function(unitVar0,d)
  {
   var o={};
   var e=encEl();
   var enumerator=Enumerator.Get(d);
   try
   {
    while(enumerator.MoveNext())
     {
      var forLoopVar,activePatternResult10067;
      forLoopVar=enumerator.Current();
      activePatternResult10067=Operators.KeyValue(forLoopVar);
      o[activePatternResult10067[0]]=e(activePatternResult10067[1]);
     }
   }
   finally
   {
    "Dispose"in enumerator?enumerator.Dispose():null;
   }
   return o;
  });
 };
 Provider.EncodeStringMap=function(encEl)
 {
  return Runtime.Curried2(function(unitVar0,m)
  {
   var o,e,action;
   o={};
   e=encEl();
   (action=Runtime.Curried2(function(k,v)
   {
    o[k]=e(v);
   }),function(table)
   {
    Map.Iterate(action,table);
   })(m);
   return o;
  });
 };
 Provider.EncodeSet=function(encEl)
 {
  return Runtime.Curried2(function(unitVar0,s)
  {
   var a,e,action;
   a=[];
   e=encEl();
   (action=function(x)
   {
    a.push(e(x));
   },function(set)
   {
    Seq.iter(action,set);
   })(s);
   return a;
  });
 };
 Provider.EncodeArray=function(encEl)
 {
  return Runtime.Curried2(function(unitVar0,a)
  {
   var e;
   e=encEl();
   return Arrays.map(e,a);
  });
 };
 Provider.EncodeUnion=function($1,discr,cases)
 {
  return Runtime.Curried2(function(unitVar0,x)
  {
   var o,tag,patternInput,action;
   return typeof x==="object"?(o={},tag=x.$,patternInput=Arrays.get(cases,tag),Unchecked.Equals(typeof discr,"string")?void(o[discr]=patternInput[0]):null,(action=function(a)
   {
    var from,to,enc,kind,record,matchValue;
    from=a[0];
    to=a[1];
    enc=a[2];
    kind=a[3];
    from===null?(record=(enc(null))(x.$0),JSModule.ForEach(record,function(f)
    {
     o[f]=record[f];
     return false;
    })):Unchecked.Equals(kind,0)?void(o[to]=(enc(null))(x[from])):Unchecked.Equals(kind,1)?(matchValue=x[from],matchValue==null?null:void(o[to]=(enc(null))(matchValue.$0))):Operators.FailWith("Invalid field option kind");
   },function(array)
   {
    Arrays.iter(action,array);
   })(patternInput[1]),o):x;
  });
 };
 Provider.EncodeRecord=function($1,fields)
 {
  return Runtime.Curried2(function(unitVar0,x)
  {
   var o,action;
   o={};
   (action=function(a)
   {
    var name,enc,kind,matchValue;
    name=a[0];
    enc=a[1];
    kind=a[2];
    Unchecked.Equals(kind,0)?void(o[name]=(enc(null))(x[name])):Unchecked.Equals(kind,1)?(matchValue=x[name],matchValue==null?null:void(o[name]=(enc(null))(matchValue.$0))):Unchecked.Equals(kind,2)?x.hasOwnProperty(name)?void(o[name]=(enc(null))(x[name])):null:Operators.FailWith("Invalid field option kind");
   },function(array)
   {
    Arrays.iter(action,array);
   })(fields);
   return o;
  });
 };
 Provider.EncodeList=function(encEl)
 {
  return Runtime.Curried2(function(unitVar0,l)
  {
   var a,e,action;
   a=[];
   e=encEl();
   (action=function(x)
   {
    a.push(e(x));
   },function(list)
   {
    List.iter(action,list);
   })(l);
   return a;
  });
 };
 Provider.EncodeDateTime=function()
 {
  return Runtime.Curried2(function(unitVar0,x)
  {
   return(new Global.Date(x)).toISOString();
  });
 };
 Provider.EncodeTuple=function(encs)
 {
  return Runtime.Curried2(function(unitVar0,args)
  {
   return Arrays.map2(Runtime.Curried2(function(f,x)
   {
    return(f(null))(x);
   }),encs,args);
  });
 };
 Provider.Id=function()
 {
  return Runtime.Curried2(function(unitVar0,x)
  {
   return x;
  });
 };
 Control=Web.Control=Runtime.Class({
  Body:function()
  {
   return this.get_Body();
  }
 },null,Control);
 FSharpInlineControl=Web.FSharpInlineControl=Runtime.Class({
  get_Body:function()
  {
   return Arrays.fold(Runtime.Curried2(function(obj,field)
   {
    return obj[field];
   }),Global.window,this.funcName).apply(null,this.args);
  }
 },Control,FSharpInlineControl);
 InlineControl=Web.InlineControl=Runtime.Class({
  get_Body:function()
  {
   return Arrays.fold(Runtime.Curried2(function(obj,field)
   {
    return obj[field];
   }),Global.window,this.funcName).apply(null,this.args);
  }
 },Control,InlineControl);
}());
