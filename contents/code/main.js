var prevActiveClient = {};

function matchCaption(wndCap, caption, fullMatch){
    return fullMatch ? wndCap  === caption : wndCap.indexOf(caption) != -1;
}

function raiseWnd(caption, fullMatch){
    if( (caption in prevActiveClient) && matchCaption(workspace.activeClient.caption, caption, fullMatch)){
        workspace.activeClient = prevActiveClient[caption];
        delete prevActiveClient[caption];
        return;
    }
    var clients = workspace.clientList();
    for (var i = 0; i<clients.length; i++){
        var client = clients[i];
        if (matchCaption(client.caption, caption, fullMatch)){
            if (!matchCaption(workspace.activeClient.caption, caption, fullMatch)){
                prevActiveClient[caption] = workspace.activeClient;
            }
            workspace.activeClient = client;
            break;
        }
    }
}

registerShortcut ('KWin-AutoHotKey: Terminal Window', 'KWin-AutoHotKey: Terminal Window', 'Ctrl+F12', function(){
    raiseWnd("Konsole", false);
});

registerShortcut ('KWin-AutoHotKey: Emacs Window', 'KWin-AutoHotKey: Emacs Window', 'Ctrl+Alt+E', function(){
    raiseWnd("@emacs", false);
});

registerShortcut ('KWin-AutoHotKey: Visual Code Window', 'KWin-AutoHotKey: Visual Code Window', 'Meta+C', function(){
    raiseWnd("Visual Studio Code", false);
});

registerShortcut ('KWin-AutoHotKey: Firefox Window', 'KWin-AutoHotKey: Firefox Window', 'Ctrl+Alt+F', function(){
    raiseWnd("Firefox", false);
});
