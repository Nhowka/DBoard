(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,UI,Next,Var,Submitter1,Remoting,AjaxRemotingProvider,Concurrency,View,List,Doc,T,AttrProxy;
 Runtime.Define(Global,{
  DBoard:{
   Client:{
    Main:function()
    {
     var rvInput,submit,arg00,arg10,vReversed,arg20,arg201,arg202,arg203;
     rvInput=Var.Create("");
     submit=Submitter1.CreateOption(rvInput.get_View());
     arg00=function(_arg1)
     {
      return _arg1.$==1?AjaxRemotingProvider.Async("DBoard:0",[_arg1.$0]):Concurrency.Delay(function()
      {
       return Concurrency.Return("");
      });
     };
     arg10=submit.get_View();
     vReversed=View.MapAsync(arg00,arg10);
     arg201=List.ofArray([Doc.TextNode("var ws = new WebSocket(document.URL.replace('http','ws')+'ws'); ws.onmessage=function(msg){CoolBox.innerHTML=msg.data;};")]);
     arg202=function()
     {
      return submit.Trigger();
     };
     arg203=Runtime.New(T,{
      $:0
     });
     arg20=List.ofArray([Doc.Element("script",[],arg201),Doc.Input(Runtime.New(T,{
      $:0
     }),rvInput),Doc.Button("Send",Runtime.New(T,{
      $:0
     }),arg202),Doc.Element("hr",[],arg203),Doc.Element("h4",List.ofArray([AttrProxy.Create("class","text-muted")]),List.ofArray([Doc.TextNode("The server responded:")])),Doc.Element("div",List.ofArray([AttrProxy.Create("class","jumbotron")]),List.ofArray([Doc.Element("h1",List.ofArray([AttrProxy.Create("id","CoolBox")]),List.ofArray([Doc.TextView(vReversed)]))]))]);
     return Doc.Element("div",[],arg20);
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  UI=Runtime.Safe(Global.WebSharper.UI);
  Next=Runtime.Safe(UI.Next);
  Var=Runtime.Safe(Next.Var);
  Submitter1=Runtime.Safe(Next.Submitter1);
  Remoting=Runtime.Safe(Global.WebSharper.Remoting);
  AjaxRemotingProvider=Runtime.Safe(Remoting.AjaxRemotingProvider);
  Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
  View=Runtime.Safe(Next.View);
  List=Runtime.Safe(Global.WebSharper.List);
  Doc=Runtime.Safe(Next.Doc);
  T=Runtime.Safe(List.T);
  return AttrProxy=Runtime.Safe(Next.AttrProxy);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
}());
