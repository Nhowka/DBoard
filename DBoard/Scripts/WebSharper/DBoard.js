(function()
{
 var Global=this;
 var DBoard=Global.DBoard=Global.DBoard||{};
 var Client=DBoard.Client=DBoard.Client||{};
 var WebSharper=Global.WebSharper;
 var UI=WebSharper&&WebSharper.UI;
 var Next=UI&&UI.Next;
 var Var=Next&&Next.Var;
 var Submitter=Next&&Next.Submitter;
 var View=Next&&Next.View;
 var Remoting=WebSharper&&WebSharper.Remoting;
 var AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 var Concurrency=WebSharper&&WebSharper.Concurrency;
 var Doc=Next&&Next.Doc;
 var AttrProxy=Next&&Next.AttrProxy;
 Client.Main=function()
 {
  var rvInput,submit,vReversed,ch,ch$1,ats,ch$2,ats$1,ch$3,ats$2,ch$4;
  rvInput=Var.Create$1("");
  submit=Submitter.CreateOption(rvInput.get_View());
  vReversed=View.MapAsync(function($1)
  {
   return($1!=null?$1.$==1:false)?(new AjaxRemotingProvider.New()).Async("DBoard:DBoard.Server.DoSomething:-1287498065",[$1.$0]):Concurrency.Delay(function()
   {
    return Concurrency.Return("");
   });
  },submit.view);
  ch=[(ch$1=[Doc.TextNode("var ws = new WebSocket(document.URL.replace('http','ws')+'ws'); ws.onmessage=function(msg){CoolBox.innerHTML=msg.data;};")],Doc.Element("script",[],ch$1)),Doc.Input([],rvInput),Doc.Button("Send",[],function()
  {
   submit.Trigger();
  }),Doc.Element("hr",[],[]),(ats=[AttrProxy.Create("class","text-muted")],ch$2=[Doc.TextNode("The server responded:")],Doc.Element("h4",ats,ch$2)),(ats$1=[AttrProxy.Create("class","jumbotron")],ch$3=[(ats$2=[AttrProxy.Create("id","CoolBox")],ch$4=[Doc.TextView(vReversed)],Doc.Element("h1",ats$2,ch$4))],Doc.Element("div",ats$1,ch$3))];
  return Doc.Element("div",[],ch);
 };
}());
