# Stremio-mpv-button
Adds button to web.stremio player interface that opens mpv (Windows)

## Installation
To get the script to work you have to add a URL Protocol in the windows registry for mpv.
- Edit `mpvurl.reg` in text editor and change `{path-to-mpv}` to your spesific mpv path.
  - Keep in mind to only use double backslash `\\` not forwardslash `//`
  - eg. `@="{path-to-mpv}"` ---> `@="C:\\Portable\\mpv\\mpv.exe"`
- After editing `mpvurl.reg` file, open the file with windows registry to add the new keys
- Make sure to have a userscript addon/extension installed eg. Violetmonkey, Greasemonkey or Firemonkey.
- After that just click install script button below.
## [Install script](https://github.com/ocyt3/Stremio-mpv-button/raw/main/stremio-mpv-button.user.js)
