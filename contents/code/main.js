var prevActiveClient = null;
const CONSOLE_CAPTION = "urxvt";

function raiseConsole(){
    if(prevActiveClient != null && workspace.activeClient.caption === CONSOLE_CAPTION){
        workspace.activeClient = prevActiveClient;
        prevActiveClient = null;
        return;
    }
    var clients = workspace.clientList();
    for (var i = 0; i<clients.length; i++){
        var client = clients[i];
        if (client.caption === CONSOLE_CAPTION){
            if (workspace.activeClient.caption != CONSOLE_CAPTION){
                prevActiveClient = workspace.activeClient;
            }
            workspace.activeClient = client;
            break;
        }
    }
}

// F1 to bring terminal window to front
registerShortcut ('KWin-AutoHotKey: Terminal Window', 'KWin-AutoHotKey: Terminal Window', 'F1', function(){
    raiseConsole();
});
