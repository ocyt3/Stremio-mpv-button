# Stremio-mpv-button
Adds button to web.stremio player interface that opens mpv (Windows)

To get the script to work you have to add a URL Protocol for URL handeling to the OS

## Installation
### Windows
- Edit `mpv.reg` in text editor and change `{path-to-mpv}` to your spesific mpv path.
  - Keep in mind to only use double backslash `\\` not forwardslash `//`
  - eg. `@="{path-to-mpv}"` ---> `@="C:\\Portable\\mpv\\mpv.exe"`
- After editing `mpv.reg` file, open the file with windows registry to add the new keys
- Make sure to have a userscript addon/extension installed eg. Violetmonkey, Greasemonkey or Firemonkey.
- After that just click install script button below.
### Linux
https://unix.stackexchange.com/questions/497146/create-a-custom-url-protocol-handler
## [Install script](https://github.com/ocyt3/Stremio-mpv-button/raw/main/stremio-mpv-button.user.js)
