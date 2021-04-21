# What's this ?

This is a collection of KWin scripts that increases my productivity by mapping most often used operations to global hotkeys. 
In Windows I use [AutoHotKey](https://www.autohotkey.com/), hence the weird name.

Install:
```
plasmapkg2 --type kwinscript -i kwin-autohotkey
```
It will be installed to `~/.local/share/kwin/scripts`, and `kwin-autohotkey` will show up in `System Settings > Workspace > Window Management > KWin Scripts`, enable it and then apply to activate it.

Update:
```
plasmapkg2 --type kwinscript -u kwin-autohotkey
```
To find window class, in a terminal, run

```
xprop WM_CLASS
```

and then click the window in question.


# Reference

- [KWin script tutorial](https://techbase.kde.org/Development/Tutorials/Plasma4/PackageOverview)
- [KWin script API](https://techbase.kde.org/Development/Tutorials/KWin/Scripting/API_4.9)
- [KWin API reference](https://api.kde.org/4.x-api/kde-workspace-apidocs/kwin/html/index.html)
- [KWin workspace API reference](https://api.kde.org/4.x-api/kde-workspace-apidocs/kwin/html/classKWin_1_1Client.html)
- Debug : `qdbus org.kde.plasmashell /PlasmaShell org.kde.PlasmaShell.showInteractiveKWinConsole`
