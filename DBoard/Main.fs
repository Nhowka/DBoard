namespace DBoard

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI.Next
open WebSharper.UI.Next.Server

type EndPoint = 
    | [<EndPoint"/">] Home
    | [<EndPoint"/about">] About

module SocketCommunication = 
    open Suave.WebSocket
    open Suave.Sockets.Control
    open Suave.Http
    
    let pushServer (webSocket : WebSocket) = 
        fun (cx : HttpContext) -> 
            socket { 
                let loop = ref true
                while !loop do
                    let! msg = webSocket.read()
                    match msg with
                    | (Text, data, true) -> 
                        do! webSocket.send Text (Array.concat [ "Websocket: " |> System.Text.Encoding.Default.GetBytes
                                                                cx.connection.socketBinding.ip.GetAddressBytes()
                                                                data ]) true
                    | (Ping, _, _) -> do! webSocket.send Pong [||] true
                    | (Close, _, _) -> 
                        do! webSocket.send Close [||] true
                        loop := false
                    | _ -> ()
            }

module Templating = 
    open WebSharper.UI.Next.Html
    
    type MainTemplate = Templating.Template< "Main.html" >
    
    // Compute a menubar where the menu item for the given endpoint is active
    let MenuBar (ctx : Context<EndPoint>) endpoint : Doc list = 
        let (=>) txt act = 
            liAttr [ if endpoint = act then yield attr.``class`` "active" ] 
                [ aAttr [ attr.href (ctx.Link act) ] [ text txt ] ]
        [ li [ "Home" => EndPoint.Home ]
          li [ "About" => EndPoint.About ] ]
    
    let Main ctx action title body = 
        Content.Page(MainTemplate.Doc(title = title, menubar = MenuBar ctx action, body = body))

module Site = 
    open WebSharper.UI.Next.Html
    
    let HomePage ctx = 
        Templating.Main ctx EndPoint.Home "Home" [ h1 [ text "Say Hi to the server!" ]
                                                   div [ client <@ Client.Main() @> ] ]
    
    let AboutPage ctx = 
        Templating.Main ctx EndPoint.About "About" 
            [ h1 [ text "About" ]
              p [ text "This is a template WebSharper client-server application." ] ]
    
    let Main = 
        Application.MultiPage(fun ctx endpoint -> 
            match endpoint with
            | EndPoint.Home -> HomePage ctx
            | EndPoint.About -> AboutPage ctx)
    
    open Suave.WebPart
    open WebSharper.Suave
    open Suave.Web
    open Suave.Filters
    open Suave.WebSocket
    open Suave.Operators
    open Suave.Http
    open System.Net
    open Suave.Logging
    
    let endpoints = 
        choose [ path "/ws" >=> handShake SocketCommunication.pushServer
                 (WebSharperAdapter.ToWebPart Main) ]
    
    let config = 
        let port = System.Environment.GetEnvironmentVariable("PORT")
        let ip127 = IPAddress.Parse("127.0.0.1")
        let ipZero = IPAddress.Parse("0.0.0.0")
        { defaultConfig with logger = Loggers.saneDefaultsFor LogLevel.Verbose
                             bindings = 
                                 [ (if port = null then HttpBinding.mk HTTP ip127 (uint16 8083)
                                    else HttpBinding.mk HTTP ipZero (uint16 port)) ] }
    
    do startWebServer config endpoints
