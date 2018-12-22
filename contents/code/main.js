function raiseConsole(){
    var clients = workspace.clientList();
    for (var i = 0; i<clients.length; i++){
        var client = clients[i];
        if (client.caption === "urxvt"){
            workspace.activeClient = client;
            break;
        }
    }
}

// F1 to bring terminal window to front
registerShortcut ('KWin-AutoHotKey: Terminal Window', 'KWin-AutoHotKey: Terminal Window', 'F1', function(){
    raiseConsole();
});
