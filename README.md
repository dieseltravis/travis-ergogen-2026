# Travis's Ergogen v2026

## Tips:

Font used:
```
brew install --cask font-3270-nerd-font
```
https://www.nerdfonts.com/font-downloads


Routing widths used:
```
"track_widths": [
        0.0,
        0.254,
        0.3556,
        0.508,
        1.27,
        2.0
      ],
```


For STL arcs, set toJscadScript's maxArcFacet in Ergogen's cases.js, example locations on my machine:
```
./node_modules/ergogen/src/cases.js
~/.local/share/mise/installs/node/24.13.0/lib/node_modules/ergogen/src/cases.js
```
Note: the arcs are super glitchy in STLs


For weird `node\r:` error:
```
find ./node_modules/ -type f -print0 | xargs -0 dos2unix --
```


## TODO:
* board: make those weird bottom shapes nicer
* plate: print a 2u stab test key
* case: just use flat one, arcs get too glitchy
* i2c: if plate doesn't interfere with bottom ones remove top ones
    * trrs: if top ones are removed, move left trrs to left side
* routing
* bom: use plugin
* qmk firmware
* via support
* see why the labels are weird on the one instance of the i2c header oled3