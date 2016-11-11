(function()
{
 var Global=this;
 var WebSharper=Global.WebSharper=Global.WebSharper||{};
 var Collections=WebSharper.Collections=WebSharper.Collections||{};
 var DictionaryUtil=Collections.DictionaryUtil=Collections.DictionaryUtil||{};
 var Dictionary=Collections.Dictionary=Collections.Dictionary||{};
 var BalancedTree=Collections.BalancedTree=Collections.BalancedTree||{};
 var Tree=BalancedTree.Tree=BalancedTree.Tree||{};
 var Pair=Collections.Pair=Collections.Pair||{};
 var MapUtil=Collections.MapUtil=Collections.MapUtil||{};
 var FSharpMap=Collections.FSharpMap=Collections.FSharpMap||{};
 var Map=Collections.Map=Collections.Map||{};
 var SetUtil=Collections.SetUtil=Collections.SetUtil||{};
 var FSharpSet=Collections.FSharpSet=Collections.FSharpSet||{};
 var Set=Collections.Set=Collections.Set||{};
 var System=Global.System=Global.System||{};
 var Collections$1=System.Collections=System.Collections||{};
 var Generic=Collections$1.Generic=Collections$1.Generic||{};
 var List=Generic.List=Generic.List||{};
 var Enumerator=List.Enumerator=List.Enumerator||{};
 var List$1=Collections.List=Collections.List||{};
 var ResizeArray=Collections.ResizeArray=Collections.ResizeArray||{};
 var E=Collections.E=Collections.E||{};
 var LinkedList=Collections.LinkedList=Collections.LinkedList||{};
 var HashSetUtil=Collections.HashSetUtil=Collections.HashSetUtil||{};
 var HashSet=Collections.HashSet=Collections.HashSet||{};
 var Grouping=WebSharper.Grouping=WebSharper.Grouping||{};
 var FsComparer=WebSharper.FsComparer=WebSharper.FsComparer||{};
 var ProjectionComparer=WebSharper.ProjectionComparer=WebSharper.ProjectionComparer||{};
 var CompoundComparer=WebSharper.CompoundComparer=WebSharper.CompoundComparer||{};
 var ReverseComparer=WebSharper.ReverseComparer=WebSharper.ReverseComparer||{};
 var OrderedEnumerable=WebSharper.OrderedEnumerable=WebSharper.OrderedEnumerable||{};
 var Linq=WebSharper.Linq=WebSharper.Linq||{};
 var Operators=WebSharper&&WebSharper.Operators;
 var IntelliFactory=Global.IntelliFactory;
 var Runtime=IntelliFactory&&IntelliFactory.Runtime;
 var JavaScript=WebSharper&&WebSharper.JavaScript;
 var JSModule=JavaScript&&JavaScript.JSModule;
 var Enumerator$1=WebSharper&&WebSharper.Enumerator;
 var Unchecked=WebSharper&&WebSharper.Unchecked;
 var Seq=WebSharper&&WebSharper.Seq;
 var Arrays=WebSharper&&WebSharper.Arrays;
 var List$2=WebSharper&&WebSharper.List;
 var Option=WebSharper&&WebSharper.Option;
 var Nullable=WebSharper&&WebSharper.Nullable;
 DictionaryUtil.getHashCode=function(c,x)
 {
  return c.CGetHashCode(x);
 };
 DictionaryUtil.equals=function(c,x,y)
 {
  return c.CEquals(x,y);
 };
 DictionaryUtil.notPresent=function()
 {
  return Operators.FailWith("The given key was not present in the dictionary.");
 };
 Dictionary=Collections.Dictionary=Runtime.Class({
  TryGetValue:function(k,res)
  {
   var k$1;
   k$1=this.hash(k);
   return this.data.hasOwnProperty(k$1)?(res.set(this.data[k$1].V),true):false;
  },
  Remove:function(k)
  {
   var h;
   h=this.hash(k);
   return this.data.hasOwnProperty(h)?(JSModule.Delete(this.data,h),this.count=this.count-1,true):false;
  },
  GetEnumerator$1:function()
  {
   return Enumerator$1.Get(JSModule.GetFieldValues(this.data));
  },
  set_Item:function(k,v)
  {
   var h;
   h=this.hash(k);
   !this.data.hasOwnProperty(h)?this.count=this.count+1:null;
   this.data[h]={
    K:k,
    V:v
   };
  },
  get_Item:function(k)
  {
   var k$1;
   k$1=this.hash(k);
   return this.data.hasOwnProperty(k$1)?this.data[k$1].V:DictionaryUtil.notPresent();
  },
  ContainsKey:function(k)
  {
   return this.data.hasOwnProperty(this.hash(k));
  },
  Clear:function()
  {
   this.data={};
   this.count=0;
  },
  Add:function(k,v)
  {
   var h;
   h=this.hash(k);
   this.data.hasOwnProperty(h)?Operators.FailWith("An item with the same key has already been added."):(this.data[h]={
    K:k,
    V:v
   },this.count=this.count+1);
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  }
 },null,Dictionary);
 Dictionary.New=Runtime.Ctor(function(dictionary,comparer)
 {
  Dictionary.New$6.call(this,dictionary,Runtime.Curried2(function(x,y)
  {
   return DictionaryUtil.equals(comparer,x,y);
  }),function(x)
  {
   return DictionaryUtil.getHashCode(comparer,x);
  });
 },Dictionary);
 Dictionary.New$1=Runtime.Ctor(function(dictionary)
 {
  Dictionary.New$6.call(this,dictionary,Runtime.Curried2(Unchecked.Equals),Unchecked.Hash);
 },Dictionary);
 Dictionary.New$2=Runtime.Ctor(function(capacity,comparer)
 {
  Dictionary.New$3.call(this,comparer);
 },Dictionary);
 Dictionary.New$3=Runtime.Ctor(function(comparer)
 {
  Dictionary.New$6.call(this,[],Runtime.Curried2(function(x,y)
  {
   return DictionaryUtil.equals(comparer,x,y);
  }),function(x)
  {
   return DictionaryUtil.getHashCode(comparer,x);
  });
 },Dictionary);
 Dictionary.New$4=Runtime.Ctor(function(capacity)
 {
  Dictionary.New$5.call(this);
 },Dictionary);
 Dictionary.New$5=Runtime.Ctor(function()
 {
  Dictionary.New$6.call(this,[],Runtime.Curried2(Unchecked.Equals),Unchecked.Hash);
 },Dictionary);
 Dictionary.New$6=Runtime.Ctor(function(init,equals,hash)
 {
  this.hash=hash;
  this.count=0;
  this.data={};
  var enumerator=Enumerator$1.Get(init);
  try
  {
   while(enumerator.MoveNext())
    {
     var x;
     x=enumerator.Current();
     this.data[this.hash(x.K)]=x.V;
    }
  }
  finally
  {
   "Dispose"in enumerator?enumerator.Dispose():null;
  }
 },Dictionary);
 Tree=BalancedTree.Tree=Runtime.Class({},null,Tree);
 Tree.New=function(Node,Left,Right,Height,Count)
 {
  return new Tree({
   Node:Node,
   Left:Left,
   Right:Right,
   Height:Height,
   Count:Count
  });
 };
 BalancedTree.TryFind=function(v,t)
 {
  var x;
  x=(BalancedTree.Lookup(v,t))[0];
  return x==null?null:{
   $:1,
   $0:x.Node
  };
 };
 BalancedTree.Contains=function(v,t)
 {
  return!((BalancedTree.Lookup(v,t))[0]==null);
 };
 BalancedTree.Add=function(x,t)
 {
  return BalancedTree.Put(Runtime.Curried2(function($1,x$1)
  {
   return x$1;
  }),x,t);
 };
 BalancedTree.Remove=function(k,src)
 {
  var patternInput,t,spine,x,x$1,x$2;
  patternInput=BalancedTree.Lookup(k,src);
  t=patternInput[0];
  spine=patternInput[1];
  return t==null?src:t.Right==null?BalancedTree.Rebuild(spine,t.Left):t.Left==null?BalancedTree.Rebuild(spine,t.Right):(x=(x$1=(x$2=Seq.append(BalancedTree.Enumerate(false,t.Left),BalancedTree.Enumerate(false,t.Right)),Arrays.ofSeq(x$2)),BalancedTree.Build(x$1,0,x$1.length-1)),BalancedTree.Rebuild(spine,x));
 };
 BalancedTree.Put=function(combine,k,t)
 {
  var patternInput,t$1,spine;
  patternInput=BalancedTree.Lookup(k,t);
  t$1=patternInput[0];
  spine=patternInput[1];
  return t$1==null?BalancedTree.Rebuild(spine,BalancedTree.Branch(k,null,null)):BalancedTree.Rebuild(spine,BalancedTree.Branch((combine(t$1.Node))(k),t$1.Left,t$1.Right));
 };
 BalancedTree.Rebuild=function(spine,t)
 {
  function h(x)
  {
   return x==null?0:x.Height;
  }
  var t$1;
  t$1=t;
  var i,$1;
  for(i=0,$1=Arrays.length(spine)-1;i<=$1;i++){
   var matchValue,x,l,m,x$1,r,m$1;
   t$1=(matchValue=Arrays.get(spine,i),matchValue[0]?(x=matchValue[1],l=matchValue[2],h(t$1)>h(l)+1?h(t$1.Left)===h(t$1.Right)+1?(m=t$1.Left,BalancedTree.Branch(m.Node,BalancedTree.Branch(x,l,m.Left),BalancedTree.Branch(t$1.Node,m.Right,t$1.Right))):BalancedTree.Branch(t$1.Node,BalancedTree.Branch(x,l,t$1.Left),t$1.Right):BalancedTree.Branch(x,l,t$1)):(x$1=matchValue[1],r=matchValue[2],h(t$1)>h(r)+1?h(t$1.Right)===h(t$1.Left)+1?(m$1=t$1.Right,BalancedTree.Branch(m$1.Node,BalancedTree.Branch(t$1.Node,t$1.Left,m$1.Left),BalancedTree.Branch(x$1,m$1.Right,r))):BalancedTree.Branch(t$1.Node,t$1.Left,BalancedTree.Branch(x$1,t$1.Right,r)):BalancedTree.Branch(x$1,t$1,r)));
  }
  return t$1;
 };
 BalancedTree.Lookup=function(k,t)
 {
  var spine,t$1,loop;
  spine=[];
  t$1=t;
  loop=true;
  while(loop)
   {
    var matchValue;
    t$1==null?void(loop=false):(matchValue=Operators.Compare(k,t$1.Node),matchValue===0?void(loop=false):matchValue===1?(spine.unshift([true,t$1.Node,t$1.Left]),void(t$1=t$1.Right)):(spine.unshift([false,t$1.Node,t$1.Right]),void(t$1=t$1.Left)));
   }
  return[t$1,spine];
 };
 BalancedTree.OfSeq=function(data)
 {
  var data$1;
  data$1=Arrays.sort(Arrays.ofSeq(Seq.distinct(data)));
  return BalancedTree.Build(data$1,0,data$1.length-1);
 };
 BalancedTree.Build=function(data,min,max)
 {
  var center,left,right;
  return max-min+1<=0?null:(center=(min+max)/2>>0,left=BalancedTree.Build(data,min,center-1),right=BalancedTree.Build(data,center+1,max),BalancedTree.Branch(Arrays.get(data,center),left,right));
 };
 BalancedTree.Enumerate=function(flip,t)
 {
  var gen;
  gen=function(a)
  {
   var t$1,spine;
   t$1=a[0];
   spine=a[1];
   return t$1==null?spine.$==1?{
    $:1,
    $0:[spine.$0[0],[spine.$0[1],spine.$1]]
   }:null:flip?gen([t$1.Right,new List$2.T({
    $:1,
    $0:[t$1.Node,t$1.Left],
    $1:spine
   })]):gen([t$1.Left,new List$2.T({
    $:1,
    $0:[t$1.Node,t$1.Right],
    $1:spine
   })]);
  };
  return Seq.unfold(gen,[t,new List$2.T({
   $:0
  })]);
 };
 BalancedTree.Branch=function(node,left,right)
 {
  return Tree.New(node,left,right,1+Operators.Max(left==null?0:left.Height,right==null?0:right.Height),1+(left==null?0:left.Count)+(right==null?0:right.Count));
 };
 Pair=Collections.Pair=Runtime.Class({
  Equals:function(other)
  {
   return Unchecked.Equals(this.Key,other.Key);
  },
  GetHashCode:function()
  {
   return Unchecked.Hash(this.Key);
  },
  CompareTo0:function(other)
  {
   return Operators.Compare(this.Key,other.Key);
  }
 },null,Pair);
 Pair.New=function(Key,Value)
 {
  return new Pair({
   Key:Key,
   Value:Value
  });
 };
 MapUtil.fromSeq=function(s)
 {
  var a;
  a=Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.collect(function(matchValue)
   {
    return[Pair.New(matchValue[0],matchValue[1])];
   },Seq.distinctBy(function(tuple)
   {
    return tuple[0];
   },s));
  }));
  Arrays.sortInPlace(a);
  return BalancedTree.Build(a,0,a.length-1);
 };
 FSharpMap=Collections.FSharpMap=Runtime.Class({
  Equals:function(other)
  {
   return this.get_Count()===other.get_Count()?Seq.forall2(Runtime.Curried2(Unchecked.Equals),this,other):false;
  },
  GetHashCode:function()
  {
   return Unchecked.Hash(Arrays.ofSeq(this));
  },
  GetEnumerator$1:function()
  {
   var x,mapping;
   return Enumerator$1.Get((x=BalancedTree.Enumerate(false,this.tree),(mapping=function(kv)
   {
    return{
     K:kv.Key,
     V:kv.Value
    };
   },function(source)
   {
    return Seq.map(mapping,source);
   })(x)));
  },
  TryFind:function(k)
  {
   var x,v,mapping;
   x=(v=Pair.New(k,void 0),function(t)
   {
    return BalancedTree.TryFind(v,t);
   })(this.tree);
   return(mapping=function(kv)
   {
    return kv.Value;
   },function(option)
   {
    return Option.map(mapping,option);
   })(x);
  },
  Remove:function(k)
  {
   var k$1;
   return new FSharpMap.New$1((k$1=Pair.New(k,void 0),function(src)
   {
    return BalancedTree.Remove(k$1,src);
   })(this.tree));
  },
  get_Item:function(k)
  {
   var matchValue;
   matchValue=this.TryFind(k);
   return matchValue==null?Operators.FailWith("The given key was not present in the dictionary."):matchValue.$0;
  },
  get_IsEmpty:function()
  {
   return this.tree==null;
  },
  get_Count:function()
  {
   var tree;
   tree=this.tree;
   return tree==null?0:tree.Count;
  },
  ContainsKey:function(k)
  {
   var v;
   return(v=Pair.New(k,void 0),function(t)
   {
    return BalancedTree.Contains(v,t);
   })(this.tree);
  },
  Add:function(k,v)
  {
   var x;
   return new FSharpMap.New$1((x=Pair.New(k,v),function(t)
   {
    return BalancedTree.Add(x,t);
   })(this.tree));
  },
  get_Tree:function()
  {
   return this.tree;
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  },
  CompareTo0:function(other)
  {
   return Seq.compareWith(Runtime.Curried2(Operators.Compare),this,other);
  }
 },null,FSharpMap);
 FSharpMap.New=Runtime.Ctor(function(s)
 {
  FSharpMap.New$1.call(this,MapUtil.fromSeq(s));
 },FSharpMap);
 FSharpMap.New$1=Runtime.Ctor(function(tree)
 {
  this.tree=tree;
  null;
 },FSharpMap);
 Map.Map=function(f,m)
 {
  var x,x$1,x$2,mapping;
  x=(x$1=(x$2=BalancedTree.Enumerate(false,m.get_Tree()),(mapping=function(kv)
  {
   return Pair.New(kv.Key,(f(kv.Key))(kv.Value));
  },function(source)
  {
   return Seq.map(mapping,source);
  })(x$2)),BalancedTree.OfSeq(x$1));
  return new FSharpMap.New$1(x);
 };
 Map.TryPick=function(f,m)
 {
  var chooser;
  return(chooser=function(kv)
  {
   return(f(kv.K))(kv.V);
  },function(source)
  {
   return Seq.tryPick(chooser,source);
  })(m);
 };
 Map.TryFindKey=function(f,m)
 {
  var chooser;
  return(chooser=function(kv)
  {
   return(f(kv.K))(kv.V)?{
    $:1,
    $0:kv.K
   }:null;
  },function(source)
  {
   return Seq.tryPick(chooser,source);
  })(m);
 };
 Map.TryFind=function(k,m)
 {
  return m.TryFind(k);
 };
 Map.ToSeq=function(m)
 {
  var x,mapping;
  x=BalancedTree.Enumerate(false,m.get_Tree());
  return(mapping=function(kv)
  {
   return[kv.Key,kv.Value];
  },function(source)
  {
   return Seq.map(mapping,source);
  })(x);
 };
 Map.Pick=function(f,m)
 {
  var chooser;
  return(chooser=function(kv)
  {
   return(f(kv.K))(kv.V);
  },function(source)
  {
   return Seq.pick(chooser,source);
  })(m);
 };
 Map.Partition=function(f,m)
 {
  var patternInput,x,predicate,data,data$1;
  patternInput=(x=Arrays.ofSeq(BalancedTree.Enumerate(false,m.get_Tree())),(predicate=function(kv)
  {
   return(f(kv.Key))(kv.Value);
  },function(array)
  {
   return Arrays.partition(predicate,array);
  })(x));
  return[new FSharpMap.New$1((data=patternInput[0],BalancedTree.Build(data,0,data.length-1))),new FSharpMap.New$1((data$1=patternInput[1],BalancedTree.Build(data$1,0,data$1.length-1)))];
 };
 Map.OfArray=function(a)
 {
  var x,x$1,mapping;
  x=(x$1=(mapping=function(a$1)
  {
   return Pair.New(a$1[0],a$1[1]);
  },function(source)
  {
   return Seq.map(mapping,source);
  })(a),BalancedTree.OfSeq(x$1));
  return new FSharpMap.New$1(x);
 };
 Map.Iterate=function(f,m)
 {
  var action;
  (action=function(kv)
  {
   (f(kv.K))(kv.V);
  },function(source)
  {
   Seq.iter(action,source);
  })(m);
 };
 Map.ForAll=function(f,m)
 {
  var predicate;
  return(predicate=function(kv)
  {
   return(f(kv.K))(kv.V);
  },function(source)
  {
   return Seq.forall(predicate,source);
  })(m);
 };
 Map.FoldBack=function(f,m,s)
 {
  var x,folder;
  x=BalancedTree.Enumerate(true,m.get_Tree());
  return(folder=Runtime.Curried2(function(s$1,kv)
  {
   return((f(kv.Key))(kv.Value))(s$1);
  }),function(source)
  {
   return Seq.fold(folder,s,source);
  })(x);
 };
 Map.Fold=function(f,s,m)
 {
  var x,folder;
  x=BalancedTree.Enumerate(false,m.get_Tree());
  return(folder=Runtime.Curried2(function(s$1,kv)
  {
   return((f(s$1))(kv.Key))(kv.Value);
  }),function(source)
  {
   return Seq.fold(folder,s,source);
  })(x);
 };
 Map.FindKey=function(f,m)
 {
  var chooser;
  return(chooser=function(kv)
  {
   return(f(kv.K))(kv.V)?{
    $:1,
    $0:kv.K
   }:null;
  },function(source)
  {
   return Seq.pick(chooser,source);
  })(m);
 };
 Map.Filter=function(f,m)
 {
  var x,x$1,x$2,x$3,predicate;
  x=(x$1=(x$2=(x$3=BalancedTree.Enumerate(false,m.get_Tree()),(predicate=function(kv)
  {
   return(f(kv.Key))(kv.Value);
  },function(source)
  {
   return Seq.filter(predicate,source);
  })(x$3)),Arrays.ofSeq(x$2)),BalancedTree.Build(x$1,0,x$1.length-1));
  return new FSharpMap.New$1(x);
 };
 Map.Exists=function(f,m)
 {
  var predicate;
  return(predicate=function(kv)
  {
   return(f(kv.K))(kv.V);
  },function(source)
  {
   return Seq.exists(predicate,source);
  })(m);
 };
 SetUtil.ofSeq=function(s)
 {
  var a;
  a=Arrays.ofSeq(s);
  Arrays.sortInPlace(a);
  return BalancedTree.Build(a,0,a.length-1);
 };
 FSharpSet=Collections.FSharpSet=Runtime.Class({
  Equals:function(other)
  {
   return this.get_Count()===other.get_Count()?Seq.forall2(Runtime.Curried2(Unchecked.Equals),this,other):false;
  },
  GetHashCode:function()
  {
   return -1741749453+Unchecked.Hash(Arrays.ofSeq(this));
  },
  GetEnumerator$1:function()
  {
   return Enumerator$1.Get(BalancedTree.Enumerate(false,this.tree));
  },
  Remove:function(v)
  {
   return new FSharpSet.New$1(BalancedTree.Remove(v,this.tree));
  },
  get_MinimumElement:function()
  {
   return Seq.head(BalancedTree.Enumerate(false,this.tree));
  },
  get_MaximumElement:function()
  {
   return Seq.head(BalancedTree.Enumerate(true,this.tree));
  },
  IsSupersetOf:function(s)
  {
   var $this;
   $this=this;
   return Seq.forall(function(arg00)
   {
    return $this.Contains(arg00);
   },s);
  },
  IsSubsetOf:function(s)
  {
   return Seq.forall(function(arg00)
   {
    return s.Contains(arg00);
   },this);
  },
  IsProperSupersetOf:function(s)
  {
   return this.IsSupersetOf(s)?this.get_Count()>s.get_Count():false;
  },
  IsProperSubsetOf:function(s)
  {
   return this.IsSubsetOf(s)?this.get_Count()<s.get_Count():false;
  },
  get_Tree:function()
  {
   return this.tree;
  },
  get_IsEmpty:function()
  {
   return this.tree==null;
  },
  get_Count:function()
  {
   var tree;
   tree=this.tree;
   return tree==null?0:tree.Count;
  },
  Contains:function(v)
  {
   return BalancedTree.Contains(v,this.tree);
  },
  Add:function(x)
  {
   return new FSharpSet.New$1(BalancedTree.Add(x,this.tree));
  },
  sub:function(x)
  {
   return Set.Filter(function(x$1)
   {
    return!x.Contains(x$1);
   },this);
  },
  add:function(x)
  {
   return new FSharpSet.New$1(BalancedTree.OfSeq(Seq.append(this,x)));
  },
  CompareTo0:function(other)
  {
   return Seq.compareWith(Runtime.Curried2(Operators.Compare),this,other);
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  }
 },null,FSharpSet);
 FSharpSet.New=Runtime.Ctor(function(s)
 {
  FSharpSet.New$1.call(this,SetUtil.ofSeq(s));
 },FSharpSet);
 FSharpSet.New$1=Runtime.Ctor(function(tree)
 {
  this.tree=tree;
  null;
 },FSharpSet);
 Set.Partition=function(f,a)
 {
  var patternInput;
  patternInput=Arrays.partition(f,Arrays.ofSeq(a));
  return[new FSharpSet.New$1(BalancedTree.OfSeq(patternInput[0])),new FSharpSet.New$1(BalancedTree.OfSeq(patternInput[1]))];
 };
 Set.FoldBack=function(f,a,s)
 {
  return Seq.fold(Runtime.Curried2(function(s$1,x)
  {
   return(f(x))(s$1);
  }),s,BalancedTree.Enumerate(true,a.get_Tree()));
 };
 Set.Filter=function(f,s)
 {
  var data;
  return new FSharpSet.New$1((data=Arrays.ofSeq(Seq.filter(f,s)),BalancedTree.Build(data,0,data.length-1)));
 };
 Enumerator=List.Enumerator=Runtime.Class({
  get_Current:function()
  {
   return Arrays.get(this.arr,this.i);
  },
  MoveNext$1:function()
  {
   this.i=this.i+1;
   return this.i<Arrays.length(this.arr);
  },
  Dispose:function()
  {
  },
  Current:function()
  {
   return Arrays.get(this.arr,this.i);
  },
  Reset:function()
  {
   Operators.FailWith("IEnumerator.Reset not supported");
  },
  Current0:function()
  {
   return Arrays.get(this.arr,this.i);
  },
  MoveNext:function()
  {
   return this.MoveNext$1();
  }
 },null,Enumerator);
 Enumerator.New=Runtime.Ctor(function(arr)
 {
  this.arr=arr;
  this.i=-1;
  null;
 },Enumerator);
 List$1=Collections.List=Runtime.Class({
  ToArray:function()
  {
   return this.arr.slice();
  },
  Reverse:function(index,count)
  {
   Arrays.reverse(this.arr,index,count);
  },
  Reverse$1:function()
  {
   this.arr.reverse();
  },
  RemoveRange:function(index,count)
  {
   ResizeArray.splice(this.arr,index,count,[]);
  },
  RemoveAt:function(x)
  {
   ResizeArray.splice(this.arr,x,1,[]);
  },
  set_Item:function(x,v)
  {
   Arrays.set(this.arr,x,v);
  },
  get_Item:function(x)
  {
   return Arrays.get(this.arr,x);
  },
  InsertRange:function(index,items)
  {
   ResizeArray.splice(this.arr,index,0,Arrays.ofSeq(items));
  },
  Insert:function(index,items)
  {
   ResizeArray.splice(this.arr,index,0,[items]);
  },
  GetRange:function(index,count)
  {
   return new List$1.New$3(Arrays.sub(this.arr,index,count));
  },
  get_Count:function()
  {
   return Arrays.length(this.arr);
  },
  CopyTo:function(index,target,offset,count)
  {
   Arrays.blit(this.arr,index,target,offset,count);
  },
  CopyTo$1:function(arr,offset)
  {
   this.CopyTo(0,arr,offset,this.get_Count());
  },
  CopyTo$2:function(arr)
  {
   this.CopyTo$1(arr,0);
  },
  Clear:function()
  {
   ResizeArray.splice(this.arr,0,Arrays.length(this.arr),[]);
  },
  AddRange:function(x)
  {
   var $this;
   $this=this;
   Seq.iter(function(arg00)
   {
    $this.Add(arg00);
   },x);
  },
  Add:function(x)
  {
   this.arr.push(x);
  },
  GetEnumerator:function()
  {
   return Enumerator$1.Get(this.arr);
  },
  GetEnumerator0:function()
  {
   return Enumerator$1.Get0(this.arr);
  }
 },null,List$1);
 List$1.New=Runtime.Ctor(function(el)
 {
  List$1.New$3.call(this,Arrays.ofSeq(el));
 },List$1);
 List$1.New$1=Runtime.Ctor(function(size)
 {
  List$1.New$3.call(this,[]);
 },List$1);
 List$1.New$2=Runtime.Ctor(function()
 {
  List$1.New$3.call(this,[]);
 },List$1);
 List$1.New$3=Runtime.Ctor(function(arr)
 {
  this.arr=arr;
  null;
 },List$1);
 ResizeArray.splice=function(arr,index,howMany,items)
 {
  return Global.Array.prototype.splice.apply(arr,[index,howMany].concat(items));
 };
 E=Collections.E=Runtime.Class({
  Reset:function()
  {
  },
  Dispose:function()
  {
  },
  MoveNext:function()
  {
   this.c=this.c.n;
   return!Unchecked.Equals(this.c,null);
  },
  Current0:function()
  {
   var x;
   x=this.c.v;
   return Global.id(x);
  },
  Current:function()
  {
   return this.c.v;
  }
 },null,E);
 E.New=Runtime.Ctor(function(l)
 {
  this.c=l;
  null;
 },E);
 LinkedList=Collections.LinkedList=Runtime.Class({
  RemoveLast:function()
  {
   this.Remove$1(this.p);
  },
  RemoveFirst:function()
  {
   this.Remove$1(this.n);
  },
  Remove:function(value)
  {
   var node;
   node=this.Find(value);
   return Unchecked.Equals(node,null)?false:(this.Remove$1(node),true);
  },
  Remove$1:function(node)
  {
   var before,after;
   before=node.p;
   after=node.n;
   Unchecked.Equals(before,null)?this.n=after:before.n=after;
   Unchecked.Equals(after,null)?this.p=before:after.p=before;
   this.c=this.c-1;
  },
  GetEnumerator$1:function()
  {
   return new E.New(this);
  },
  FindLast:function(value)
  {
   var node,notFound;
   node=this.p;
   notFound=true;
   while(notFound?!Unchecked.Equals(node,null):false)
    node.v==value?void(notFound=false):void(node=node.p);
   return notFound?null:node;
  },
  Find:function(value)
  {
   var node,notFound;
   node=this.n;
   notFound=true;
   while(notFound?!Unchecked.Equals(node,null):false)
    node.v==value?void(notFound=false):void(node=node.n);
   return notFound?null:node;
  },
  Contains:function(value)
  {
   var found,node;
   found=false;
   node=this.n;
   while(!Unchecked.Equals(node,null)?!found:false)
    node.v==value?void(found=true):void(node=node.n);
   return found;
  },
  Clear:function()
  {
   this.c=0;
   this.n=null;
   this.p=null;
  },
  AddLast:function(value)
  {
   var node;
   return this.c===0?(node={
    p:null,
    n:null,
    v:value
   },this.n=node,this.p=this.n,this.c=1,node):this.AddAfter(this.p,value);
  },
  AddFirst:function(value)
  {
   var node;
   return this.c===0?(node={
    p:null,
    n:null,
    v:value
   },this.n=node,this.p=this.n,this.c=1,node):this.AddBefore(this.n,value);
  },
  AddBefore:function(before,value)
  {
   var after,node;
   after=before.p;
   node={
    p:after,
    n:before,
    v:value
   };
   Unchecked.Equals(before.p,null)?this.n=node:null;
   before.p=node;
   !Unchecked.Equals(after,null)?after.n=node:null;
   this.c=this.c+1;
   return node;
  },
  AddAfter:function(after,value)
  {
   var before,node;
   before=after.n;
   node={
    p:after,
    n:before,
    v:value
   };
   Unchecked.Equals(after.n,null)?this.p=node:null;
   after.n=node;
   !Unchecked.Equals(before,null)?before.p=node:null;
   this.c=this.c+1;
   return node;
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  }
 },null,LinkedList);
 LinkedList.New=Runtime.Ctor(function()
 {
  LinkedList.New$1.call(this,[]);
 },LinkedList);
 LinkedList.New$1=Runtime.Ctor(function(coll)
 {
  this.c=0;
  this.n=null;
  this.p=null;
  var ie=Enumerator$1.Get(coll);
  ie.MoveNext()?(this.n={
   p:null,
   n:null,
   v:ie.Current()
  },this.p=this.n,this.c=1):null;
  while(ie.MoveNext())
   {
    var node;
    node={
     p:this.p,
     n:null,
     v:ie.Current()
    };
    this.p.n=node;
    this.p=node;
    this.c=this.c+1;
   }
 },LinkedList);
 HashSetUtil.concat=function(o)
 {
  var k;
  var r=[];
  for(var k$1 in o)r.push.apply(r,o[k$1]);
  return r;
 };
 HashSet=Collections.HashSet=Runtime.Class({
  add:function(item)
  {
   var $this,h,arr;
   $this=this;
   h=this.hash(item);
   arr=this.data[h];
   return arr==null?(this.data[h]=[item],this.count=this.count+1,true):$this.arrContains(item,arr)?false:(arr.push(item),this.count=this.count+1,true);
  },
  arrRemove:function(item,arr)
  {
   var $1,c,i,$2;
   c=true;
   i=0;
   var l=arr.length;
   while(c?i<l:false)
    (this.equals(arr[i]))(item)?(arr.splice.apply(arr,[i,1].concat([])),void(c=false)):void(i=i+1);
   $2=!c;
   return $2;
  },
  arrContains:function(item,arr)
  {
   var $1,c,i,$2;
   c=true;
   i=0;
   var l=arr.length;
   while(c?i<l:false)
    (this.equals(arr[i]))(item)?void(c=false):void(i=i+1);
   $2=!c;
   return $2;
  },
  UnionWith:function(xs)
  {
   var enumerator=Enumerator$1.Get(xs);
   try
   {
    while(enumerator.MoveNext())
     this.Add(enumerator.Current());
   }
   finally
   {
    "Dispose"in enumerator?enumerator.Dispose():null;
   }
  },
  SymmetricExceptWith:function(xs)
  {
   var enumerator=Enumerator$1.Get(xs);
   try
   {
    while(enumerator.MoveNext())
     {
      var item;
      item=enumerator.Current();
      this.Contains(item)?this.Remove(item):this.Add(item);
     }
   }
   finally
   {
    "Dispose"in enumerator?enumerator.Dispose():null;
   }
  },
  SetEquals:function(xs)
  {
   var other;
   other=new HashSet.New$4(xs,this.equals,this.hash);
   return this.get_Count()===other.get_Count()?this.IsSupersetOf(other):false;
  },
  RemoveWhere:function(cond)
  {
   var i,$1;
   var all=HashSetUtil.concat(this.data);
   for(i=0,$1=all.length-1;i<=$1;i++){
    var item;
    item=all[i];
    cond(item)?this.Remove(item):null;
   }
  },
  Remove:function(item)
  {
   var $this,arr;
   $this=this;
   arr=this.data[this.hash(item)];
   return arr==null?false:$this.arrRemove(item,arr)?(this.count=this.count-1,true):false;
  },
  Overlaps:function(xs)
  {
   var $this,predicate;
   $this=this;
   return(predicate=function(arg00)
   {
    return $this.Contains(arg00);
   },function(source)
   {
    return Seq.exists(predicate,source);
   })(xs);
  },
  IsSupersetOf:function(xs)
  {
   var $this,predicate;
   $this=this;
   return(predicate=function(arg00)
   {
    return $this.Contains(arg00);
   },function(source)
   {
    return Seq.forall(predicate,source);
   })(xs);
  },
  IsSubsetOf:function(xs)
  {
   var other,x,predicate;
   other=new HashSet.New$4(xs,this.equals,this.hash);
   x=HashSetUtil.concat(this.data);
   return(predicate=function(arg00)
   {
    return other.Contains(arg00);
   },function(array)
   {
    return Seq.forall(predicate,array);
   })(x);
  },
  IsProperSupersetOf:function(xs)
  {
   var other;
   other=Arrays.ofSeq(xs);
   return this.count>Arrays.length(other)?this.IsSupersetOf(other):false;
  },
  IsProperSubsetOf:function(xs)
  {
   var other;
   other=Arrays.ofSeq(xs);
   return this.count<Arrays.length(other)?this.IsSubsetOf(other):false;
  },
  IntersectWith:function(xs)
  {
   var i,$1;
   var other=new HashSet.New$4(xs,this.equals,this.hash);
   var all=HashSetUtil.concat(this.data);
   for(i=0,$1=all.length-1;i<=$1;i++){
    var item;
    item=all[i];
    !other.Contains(item)?this.Remove(item):null;
   }
  },
  ExceptWith:function(xs)
  {
   var enumerator=Enumerator$1.Get(xs);
   try
   {
    while(enumerator.MoveNext())
     this.Remove(enumerator.Current());
   }
   finally
   {
    "Dispose"in enumerator?enumerator.Dispose():null;
   }
  },
  get_Count:function()
  {
   return this.count;
  },
  CopyTo:function(arr)
  {
   var i;
   i=0;
   var i$1,$1;
   var all=HashSetUtil.concat(this.data);
   for(i$1=0,$1=all.length-1;i$1<=$1;i$1++)Arrays.set(arr,i$1,all[i$1]);
  },
  Contains:function(item)
  {
   var $this,arr;
   $this=this;
   arr=this.data[this.hash(item)];
   return arr==null?false:$this.arrContains(item,arr);
  },
  Clear:function()
  {
   this.data=Global.Array.prototype.constructor.apply(Global.Array,[]);
   this.count=0;
  },
  Add:function(item)
  {
   return this.add(item);
  },
  GetEnumerator:function()
  {
   return Enumerator$1.Get(HashSetUtil.concat(this.data));
  },
  GetEnumerator0:function()
  {
   return Enumerator$1.Get(HashSetUtil.concat(this.data));
  }
 },null,HashSet);
 HashSet.New=Runtime.Ctor(function(init,comparer)
 {
  HashSet.New$4.call(this,init,Runtime.Curried2(function(x,y)
  {
   return DictionaryUtil.equals(comparer,x,y);
  }),function(x)
  {
   return DictionaryUtil.getHashCode(comparer,x);
  });
 },HashSet);
 HashSet.New$1=Runtime.Ctor(function(comparer)
 {
  HashSet.New$4.call(this,[],Runtime.Curried2(function(x,y)
  {
   return DictionaryUtil.equals(comparer,x,y);
  }),function(x)
  {
   return DictionaryUtil.getHashCode(comparer,x);
  });
 },HashSet);
 HashSet.New$2=Runtime.Ctor(function(init)
 {
  HashSet.New$4.call(this,init,Runtime.Curried2(Unchecked.Equals),Unchecked.Hash);
 },HashSet);
 HashSet.New$3=Runtime.Ctor(function()
 {
  HashSet.New$4.call(this,[],Runtime.Curried2(Unchecked.Equals),Unchecked.Hash);
 },HashSet);
 HashSet.New$4=Runtime.Ctor(function(init,equals,hash)
 {
  this.equals=equals;
  this.hash=hash;
  this.data=Global.Array.prototype.constructor.apply(Global.Array,[]);
  this.count=0;
  var enumerator=Enumerator$1.Get(init);
  try
  {
   while(enumerator.MoveNext())
    this.add(enumerator.Current());
  }
  finally
  {
   "Dispose"in enumerator?enumerator.Dispose():null;
  }
 },HashSet);
 Grouping=WebSharper.Grouping=Runtime.Class({
  System_Linq_IGrouping_2$get_Key:function()
  {
   return this.k;
  },
  GetEnumerator0:function()
  {
   return Enumerator$1.Get0(this.v);
  },
  GetEnumerator:function()
  {
   return Enumerator$1.Get(this.v);
  }
 },null,Grouping);
 Grouping.New=Runtime.Ctor(function(k,v)
 {
  this.k=k;
  this.v=v;
  null;
 },Grouping);
 FsComparer=WebSharper.FsComparer=Runtime.Class({
  Compare:function(x,y)
  {
   return Operators.Compare(x,y);
  }
 },null,FsComparer);
 FsComparer.New=Runtime.Ctor(function()
 {
 },FsComparer);
 ProjectionComparer=WebSharper.ProjectionComparer=Runtime.Class({
  Compare:function(x,y)
  {
   return this.primary.Compare(this.projection(x),this.projection(y));
  }
 },null,ProjectionComparer);
 ProjectionComparer.New=Runtime.Ctor(function(primary,projection)
 {
  this.primary=primary;
  this.projection=projection;
  null;
 },ProjectionComparer);
 CompoundComparer=WebSharper.CompoundComparer=Runtime.Class({
  Compare:function(x,y)
  {
   var matchValue;
   matchValue=this.primary.Compare(x,y);
   return matchValue===0?this.secondary.Compare(x,y):matchValue;
  }
 },null,CompoundComparer);
 CompoundComparer.New=Runtime.Ctor(function(primary,secondary)
 {
  this.primary=primary;
  this.secondary=secondary;
  null;
 },CompoundComparer);
 ReverseComparer=WebSharper.ReverseComparer=Runtime.Class({
  Compare:function(x,y)
  {
   return this.primary.Compare(this.projection(y),this.projection(x));
  }
 },null,ReverseComparer);
 ReverseComparer.New=Runtime.Ctor(function(primary,projection)
 {
  this.primary=primary;
  this.projection=projection;
  null;
 },ReverseComparer);
 OrderedEnumerable=WebSharper.OrderedEnumerable=Runtime.Class({
  GetEnumerator0:function()
  {
   return Enumerator$1.Get(this);
  },
  GetEnumerator:function()
  {
   var $this,a;
   $this=this;
   a=Arrays.ofSeq(this.source);
   Arrays.sortInPlaceWith(Runtime.Curried2(function(x,y)
   {
    return $this.primary.Compare(x,y);
   }),a);
   return Enumerator$1.Get(a);
  },
  System_Linq_IOrderedEnumerable_1$CreateOrderedEnumerable:function(keySelector,secondary,descending)
  {
   var secondary$1;
   secondary$1=descending?new ReverseComparer.New(secondary,keySelector):new ProjectionComparer.New(secondary,keySelector);
   return new OrderedEnumerable.New(this.source,new CompoundComparer.New(this.primary,secondary$1));
  }
 },null,OrderedEnumerable);
 OrderedEnumerable.New=Runtime.Ctor(function(source,primary)
 {
  this.source=source;
  this.primary=primary;
  null;
 },OrderedEnumerable);
 Linq.ElementAtOrDefault=function(_this,index,defaultValue)
 {
  var $1;
  try
  {
   $1=Seq.nth(index,_this);
  }
  catch(matchValue)
  {
   $1=defaultValue;
  }
  return $1;
 };
 Linq.FirstOrDefault=function(_this,defaultValue)
 {
  var $1;
  var e=Enumerator$1.Get(_this);
  try
  {
   $1=e.MoveNext()?e.Current():defaultValue;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Linq.FirstOrDefault$1=function(_this,predicate,defaultValue)
 {
  var matchValue;
  matchValue=Seq.tryFind(predicate,_this);
  return matchValue==null?defaultValue:matchValue.$0;
 };
 Linq.LastOrDefault=function(_this,predicate,defaultValue)
 {
  var matchValue;
  matchValue=Linq.LastPred(_this,predicate);
  return matchValue==null?defaultValue:matchValue.$0;
 };
 Linq.SingleOrDefault=function(_this,predicate,defaultValue)
 {
  var $1;
  var e=Enumerator$1.Get(_this);
  try
  {
   var found;
   found=null;
   while(e.MoveNext())
    predicate(e.Current())?(found!=null?found.$==1:false)?Operators.InvalidOp("Sequence contains more than one element"):void(found={
     $:1,
     $0:e.Current()
    }):null;
   $1=found==null?defaultValue:found.$0;
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
 Linq.Where=function(_this,predicate)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator$1.Get(_this),function(e)
   {
    var i;
    i=0;
    return Seq.enumWhile(function()
    {
     return e.MoveNext();
    },Seq.delay(function()
    {
     return Seq.append(predicate(e.Current(),i)?[e.Current()]:[],Seq.delay(function()
     {
      i=i+1;
      return[];
     }));
    }));
   });
  });
 };
 Linq.Union=function(_this,second,comparer)
 {
  var tbl=new HashSet.New(_this,comparer);
  var enumerator=Enumerator$1.Get(second);
  try
  {
   while(enumerator.MoveNext())
    tbl.Add(enumerator.Current());
  }
  finally
  {
   "Dispose"in enumerator?enumerator.Dispose():null;
  }
  return tbl;
 };
 Linq.ToDictionary=function(_this,keySelector,elementSelector,comparer)
 {
  var d;
  d=new Dictionary.New$3(comparer);
  Seq.iter(function(x)
  {
   d.Add(keySelector(x),elementSelector(x));
  },_this);
  return d;
 };
 Linq.ToDictionary$1=function(_this,keySelector,comparer)
 {
  var d;
  d=new Dictionary.New$3(comparer);
  Seq.iter(function(x)
  {
   d.Add(keySelector(x),x);
  },_this);
  return d;
 };
 Linq.TakeWhile=function(_this,predicate)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator$1.Get(_this),function(e)
   {
    return Seq.enumWhile(function()
    {
     return e.MoveNext()?predicate(e.Current()):false;
    },Seq.delay(function()
    {
     return[e.Current()];
    }));
   });
  });
 };
 Linq.TakeWhile$1=function(_this,predicate)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator$1.Get(_this),function(e)
   {
    var i;
    i=0;
    return Seq.enumWhile(function()
    {
     return e.MoveNext()?predicate(e.Current(),i):false;
    },Seq.delay(function()
    {
     i=i+1;
     return[e.Current()];
    }));
   });
  });
 };
 Linq.Take=function(_this,count)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator$1.Get(_this),function(e)
   {
    var i;
    i=0;
    return Seq.enumWhile(function()
    {
     return i<count?e.MoveNext():false;
    },Seq.delay(function()
    {
     i=i+1;
     return[e.Current()];
    }));
   });
  });
 };
 Linq.Sum=function(_this)
 {
  var s,chooser;
  s=(chooser=function(x)
  {
   return x!=null?{
    $:1,
    $0:Nullable.get(x)
   }:null;
  },function(source)
  {
   return Seq.choose(chooser,source);
  })(_this);
  return Seq.isEmpty(s)?null:Seq.sum(s);
 };
 Linq.SkipWhile=function(_this,predicate)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator$1.Get(_this),function(e)
   {
    var predWasTrue;
    predWasTrue=true;
    return Seq.append(Seq.enumWhile(function()
    {
     return predWasTrue?e.MoveNext():false;
    },Seq.delay(function()
    {
     return!predicate(e.Current())?(predWasTrue=false,[]):[];
    })),Seq.delay(function()
    {
     return!predWasTrue?Seq.append([e.Current()],Seq.delay(function()
     {
      return Seq.enumWhile(function()
      {
       return e.MoveNext();
      },Seq.delay(function()
      {
       return[e.Current()];
      }));
     })):[];
    }));
   });
  });
 };
 Linq.SkipWhile$1=function(_this,predicate)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator$1.Get(_this),function(e)
   {
    var i,predWasTrue;
    i=0;
    predWasTrue=true;
    return Seq.append(Seq.enumWhile(function()
    {
     return predWasTrue?e.MoveNext():false;
    },Seq.delay(function()
    {
     return predicate(e.Current(),i)?(i=i+1,[]):(predWasTrue=false,[]);
    })),Seq.delay(function()
    {
     return!predWasTrue?Seq.append([e.Current()],Seq.delay(function()
     {
      return Seq.enumWhile(function()
      {
       return e.MoveNext();
      },Seq.delay(function()
      {
       return[e.Current()];
      }));
     })):[];
    }));
   });
  });
 };
 Linq.Skip=function(_this,count)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator$1.Get(_this),function(e)
   {
    var i;
    i=0;
    return Seq.append(Seq.enumWhile(function()
    {
     return i<count?e.MoveNext():false;
    },Seq.delay(function()
    {
     i=i+1;
     return[];
    })),Seq.delay(function()
    {
     return Seq.enumWhile(function()
     {
      return e.MoveNext();
     },Seq.delay(function()
     {
      return[e.Current()];
     }));
    }));
   });
  });
 };
 Linq.Single=function(_this,predicate)
 {
  var x,folder;
  x=((folder=Runtime.Curried2(function(state,cur)
  {
   return predicate(cur)?state!=null?Operators.InvalidOp("Sequence contains more than one matching element"):{
    $:1,
    $0:cur
   }:state;
  }),Runtime.Curried2(function(state,source)
  {
   return Seq.fold(folder,state,source);
  }))(null))(_this);
  return(x!=null?x.$==1:false)?x.$0:Operators.InvalidOp("Sequence contains no elements");
 };
 Linq.SequenceEqual=function(_this,second,comparer)
 {
  var $1;
  var e1=Enumerator$1.Get(_this);
  try
  {
   var $2;
   var e2=Enumerator$1.Get(_this);
   try
   {
    var go;
    go=function()
    {
     return e1.MoveNext()?(e2.MoveNext()?comparer.CEquals(e1.Current(),e2.Current()):false)?go():false:!e2.MoveNext();
    };
    $2=go();
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
 Linq.SelectMany=function(_this,selector,collectionSelector)
 {
  var x,mapping,mapping$1;
  x=(mapping=Runtime.Curried2(function(i,t)
  {
   return[t,selector(t,i)];
  }),function(source)
  {
   return Seq.mapi(mapping,source);
  })(_this);
  return(mapping$1=function(a)
  {
   var t,mapping$2;
   t=a[0];
   return(mapping$2=function(c)
   {
    return collectionSelector(t,c);
   },function(source)
   {
    return Seq.map(mapping$2,source);
   })(a[1]);
  },function(source)
  {
   return Seq.collect(mapping$1,source);
  })(x);
 };
 Linq.SelectMany$1=function(_this,selector,collectionSelector)
 {
  var x,mapping,mapping$1;
  x=(mapping=function(t)
  {
   return[t,selector(t)];
  },function(source)
  {
   return Seq.map(mapping,source);
  })(_this);
  return(mapping$1=function(a)
  {
   var t,mapping$2;
   t=a[0];
   return(mapping$2=function(c)
   {
    return collectionSelector(t,c);
   },function(source)
   {
    return Seq.map(mapping$2,source);
   })(a[1]);
  },function(source)
  {
   return Seq.collect(mapping$1,source);
  })(x);
 };
 Linq.SelectMany$2=function(_this,selector)
 {
  var x;
  x=Seq.mapi(Runtime.Curried2(function(i,x$1)
  {
   return selector(x$1,i);
  }),_this);
  return Seq.concat(x);
 };
 Linq.Select=function(_this,selector)
 {
  return Seq.mapi(Runtime.Curried2(function(i,x)
  {
   return selector(x,i);
  }),_this);
 };
 Linq.Reverse=function(_this)
 {
  return Arrays.ofSeq(_this).slice().reverse();
 };
 Linq.Repeat=function(element,count)
 {
  return Seq.init(count,function()
  {
   return element;
  });
 };
 Linq.Range=function(start,count)
 {
  return Seq.init(count,function(y)
  {
   return start+y;
  });
 };
 Linq.OrderByDescending=function(_this,keySelector,comparer)
 {
  return new OrderedEnumerable.New(_this,new ReverseComparer.New(comparer,keySelector));
 };
 Linq.OrderBy=function(_this,keySelector,comparer)
 {
  return new OrderedEnumerable.New(_this,new ProjectionComparer.New(comparer,keySelector));
 };
 Linq.Min=function(_this)
 {
  var s,chooser;
  s=(chooser=function(x)
  {
   return x!=null?{
    $:1,
    $0:Nullable.get(x)
   }:null;
  },function(source)
  {
   return Seq.choose(chooser,source);
  })(_this);
  return Seq.isEmpty(s)?null:Seq.min(s);
 };
 Linq.Max=function(_this)
 {
  var s,chooser;
  s=(chooser=function(x)
  {
   return x!=null?{
    $:1,
    $0:Nullable.get(x)
   }:null;
  },function(source)
  {
   return Seq.choose(chooser,source);
  })(_this);
  return Seq.isEmpty(s)?null:Seq.max(s);
 };
 Linq.Last=function(_this,predicate)
 {
  var matchValue;
  matchValue=Linq.LastPred(_this,predicate);
  return matchValue==null?Operators.InvalidOp("Sequence contains no matching element"):matchValue.$0;
 };
 Linq.LastPred=function(_this,predicate)
 {
  var folder;
  return((folder=Runtime.Curried2(function(acc,elt)
  {
   return predicate(elt)?{
    $:1,
    $0:elt
   }:acc;
  }),Runtime.Curried2(function(state,source)
  {
   return Seq.fold(folder,state,source);
  }))(null))(_this);
 };
 Linq.Join=function(outer,inner,outerKeySelector,innerKeySelector,resultSelector,comparer)
 {
  return Seq.delay(function()
  {
   var t=new Dictionary.New$3(comparer);
   var a=Arrays.ofSeq(Seq.delay(function()
   {
    return Seq.collect(function(o)
    {
     var k,matchValue,outArg,pair;
     k=outerKeySelector(o);
     matchValue=(outArg=null,[t.TryGetValue(k,{
      get:function()
      {
       return outArg;
      },
      set:function(v)
      {
       outArg=v;
      }
     }),outArg]);
     return matchValue[0]?[]:(pair=[o,new List$1.New$2()],t.Add(k,pair),[pair]);
    },outer);
   }));
   var enumerator=Enumerator$1.Get(inner);
   try
   {
    while(enumerator.MoveNext())
     (function()
     {
      var i,k,matchValue,outArg;
      i=enumerator.Current();
      k=innerKeySelector(i);
      matchValue=(outArg=null,[t.TryGetValue(k,{
       get:function()
       {
        return outArg;
       },
       set:function(v)
       {
        outArg=v;
       }
      }),outArg]);
      return matchValue[0]?matchValue[1][1].Add(i):null;
     }());
   }
   finally
   {
    "Dispose"in enumerator?enumerator.Dispose():null;
   }
   return Arrays.ofSeq(Seq.delay(function()
   {
    return Seq.collect(function(matchValue)
    {
     var o;
     o=matchValue[0];
     return Seq.map(function(i)
     {
      return resultSelector(o,i);
     },matchValue[1]);
    },a);
   }));
  });
 };
 Linq.Intersect=function(_this,second,comparer)
 {
  var t1;
  t1=new HashSet.New(_this,comparer);
  return Seq.delay(function()
  {
   var t2;
   t2=new HashSet.New$1(comparer);
   return Seq.collect(function(x)
   {
    return(t1.Contains(x)?t2.Add(x):false)?[x]:[];
   },second);
  });
 };
 Linq.GroupJoin=function(outer,inner,outerKeySelector,innerKeySelector,resultSelector,comparer)
 {
  return Seq.delay(function()
  {
   var action;
   var t=new Dictionary.New$3(comparer);
   var a=Arrays.ofSeq(Seq.delay(function()
   {
    return Seq.collect(function(o)
    {
     var k,matchValue,outArg,pair;
     k=outerKeySelector(o);
     matchValue=(outArg=null,[t.TryGetValue(k,{
      get:function()
      {
       return outArg;
      },
      set:function(v)
      {
       outArg=v;
      }
     }),outArg]);
     return matchValue[0]?[]:(pair=[o,new List$1.New$2()],t.Add(k,pair),[pair]);
    },outer);
   }));
   var enumerator=Enumerator$1.Get(inner);
   try
   {
    while(enumerator.MoveNext())
     (function()
     {
      var i,k,matchValue,outArg;
      i=enumerator.Current();
      k=innerKeySelector(i);
      matchValue=(outArg=null,[t.TryGetValue(k,{
       get:function()
       {
        return outArg;
       },
       set:function(v)
       {
        outArg=v;
       }
      }),outArg]);
      return matchValue[0]?matchValue[1][1].Add(i):null;
     }());
   }
   finally
   {
    "Dispose"in enumerator?enumerator.Dispose():null;
   }
   (action=Runtime.Curried2(function(i,a$1)
   {
    Arrays.set(a,i,resultSelector(a$1[0],a$1[1]));
   }),function(array)
   {
    Arrays.iteri(action,array);
   })(a);
   return a;
  });
 };
 Linq.GroupBy=function(_this,keySelector,elementSelector,resultSelector,comparer)
 {
  var x,mapping;
  x=Linq.GroupBy$1(_this,keySelector,elementSelector,comparer);
  return(mapping=function(g)
  {
   return resultSelector(g.System_Linq_IGrouping_2$get_Key(),g);
  },function(source)
  {
   return Seq.map(mapping,source);
  })(x);
 };
 Linq.GroupBy$1=function(_this,keySelector,elementSelector,comparer)
 {
  return Seq.delay(function()
  {
   return Arrays.ofSeq(Seq.delay(function()
   {
    var t;
    t=new Dictionary.New$3(comparer);
    return Seq.collect(function(x)
    {
     var k,e,matchValue,outArg,a;
     k=keySelector(x);
     e=elementSelector(x);
     matchValue=(outArg=null,[t.TryGetValue(k,{
      get:function()
      {
       return outArg;
      },
      set:function(v)
      {
       outArg=v;
      }
     }),outArg]);
     return matchValue[0]?(matchValue[1].Add(e),[]):(a=new List$1.New$2(),a.Add(e),t.set_Item(k,a),[new Grouping.New(k,a)]);
    },_this);
   }));
  });
 };
 Linq.Except=function(_this,second,comparer)
 {
  var tbl=new HashSet.New(_this,comparer);
  var enumerator=Enumerator$1.Get(second);
  try
  {
   while(enumerator.MoveNext())
    tbl.Remove(enumerator.Current());
  }
  finally
  {
   "Dispose"in enumerator?enumerator.Dispose():null;
  }
  return tbl;
 };
 Linq.Distinct=function(_this,comparer)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator$1.Get(_this),function(e)
   {
    var tbl;
    tbl=new HashSet.New$1(comparer);
    return Seq.enumWhile(function()
    {
     return e.MoveNext();
    },Seq.delay(function()
    {
     return tbl.Add(e.Current())?[e.Current()]:[];
    }));
   });
  });
 };
 Linq.DefaultIfEmpty=function(_this,defaultValue)
 {
  return Seq.isEmpty(_this)?[defaultValue]:_this;
 };
 Linq.Average=function(_this)
 {
  var $1,x;
  x=[];
  var e=Enumerator$1.Get(_this);
  try
  {
   var x$1;
   while(e.MoveNext())
    {
     var copyOfStruct,copyOfStruct$1;
     (copyOfStruct=e.Current(),copyOfStruct!=null)?x.push((copyOfStruct$1=e.Current(),Nullable.get(copyOfStruct$1))):null;
    }
   $1=Arrays.length(x)===0?null:Seq.sum(x)/(x$1=Arrays.length(x),Global.Number(x$1));
  }
  finally
  {
   "Dispose"in e?e.Dispose():null;
  }
  return $1;
 };
}());
