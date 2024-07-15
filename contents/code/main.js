var prevActiveClient = {};

function matchWndClass(wndClass, targetClass){
    // wndClass is an ArrayByte obj, but using it it in indexOf automatcially cast it to string
    console.log(wndClass)
    return  targetClass.indexOf(wndClass) === 0;
}

function raiseWnd(targetClass){
    if( (targetClass in prevActiveClient) && matchWndClass(workspace.activeWindow.resourceClass, targetClass)){
        workspace.activeWindow = prevActiveClient[targetClass];
        delete prevActiveClient[targetClass];
        return;
    }
    var clients = workspace.stackingOrder;
    for (var i = 0; i<clients.length; i++){
        var client = clients[i];
        if (matchWndClass(client.resourceClass, targetClass)){
            if (!matchWndClass(workspace.activeWindow.resourceClass, targetClass)){
                prevActiveClient[targetClass] = workspace.activeClient;
            }
            workspace.activeWindow = client;
            break;
        }
    }
}


registerShortcut ('KWin-AutoHotKey: Terminal Window', 'KWin-AutoHotKey: Terminal Window', 'Ctrl+Alt+C', function(){
    raiseWnd("st-256color");
});

registerShortcut ('KWin-AutoHotKey: Emacs Window', 'KWin-AutoHotKey: Emacs Window', 'Ctrl+Alt+E', function(){
    raiseWnd("emacs");
});

registerShortcut ('KWin-AutoHotKey: Visual Code Window', 'KWin-AutoHotKey: Visual Code Window', 'Meta+C', function(){
    raiseWnd("code");
});

registerShortcut ('KWin-AutoHotKey: Microsoft Edge', 'KWin-AutoHotKey: Microsoft Edge', 'Ctrl+Alt+Q', function(){
    raiseWnd("Microsoft-edge");
});

registerShortcut ('KWin-AutoHotKey: Logseq', 'KWin-AutoHotKey: Logseq', 'Ctrl+Alt+N', function(){
    raiseWnd("Logseq");
});


//raiseWnd("Logseq");

/*
registerShortcut ('KWin-AutoHotKey: IntelliJ', 'KWin-AutoHotKey: IntelliJ', 'Meta+I', function(){
    raiseWnd('jetbrains-studio')
});

//egisterShortcut ('KWin-AutoHotKey: Firefox Window', 'KWin-AutoHotKey: Firefox Window', 'Ctrl+Alt+F', function(){
//   raiseWnd("firefox");
//);
*/

