= What's this ? =

This is a collection of KWin scripts that increase my productivity by mapping most often used operations to global hotkeys. 
When I use Windows I use [AutoHotKey](https://www.autohotkey.com/) to do similar thing, hence the weired name.

First time install:

```
plasmapkg2 --type kwinscript -i kwin-autohotkey
```

After the installation `kwin-autohotkey` will show up in `System Settings > Workspace > Window Management > KWin Scripts`, enable it and then apply to activate it.

Update:

```
plasmapkg2 --type kwinscript -u kwin-autohotkey
```

= Reference =

- [KWin script tutorial](https://techbase.kde.org/Development/Tutorials/Plasma4/PackageOverview)
- [KWin script API](https://techbase.kde.org/Development/Tutorials/KWin/Scripting/API_4.9)
- [KWin API reference](https://api.kde.org/4.x-api/kde-workspace-apidocs/kwin/html/index.html)
- [KWin workspace API reference](https://api.kde.org/4.x-api/kde-workspace-apidocs/kwin/html/classKWin_1_1Client.html)
- Debug : `qdbus org.kde.plasmashell /PlasmaShell org.kde.PlasmaShell.showInteractiveKWinConsole`
