### English, France, Russia, China, Spain, Arabia

### setup font 

```
sudo mkdir -p /usr/local/share/fonts/msdf \
&& \
sudo cp *.ttf *.otf /usr/local/share/fonts/msdf \
&& \
sudo fc-cache -fv \
&& \
fc-list | grep Noto
```

Got the charset range under ubuntu

```
fc-list "Noto Sans Arabic:style=Regular" charset
```

Copy to CharsetList.js and run 

```
node CharsetList.js
```

Then re-generate the MSDF info
 

### latin 
https://unicode-table.com/en/#basic-latin
https://en.wikipedia.org/wiki/Western_Latin_character_sets_(computing)
https://stevemorse.org/hebrew/virtual.html

### Roboto 
All Latin, Cyrillic, and Greek 

#### Latin
english, german, french, italian, polish, Spain

#### Greek
greek, coptic

#### Cyrillic
russian, ukrainian, bulgarian

### Cairo 
Arabic And Latin
https://en.wikipedia.org/wiki/Arabic_script_in_Unicode

0600–06FF
0750–077F
08A0–08FF
FB50–FDFF
FE70–FEFF
10E60–10E7F
1EC70–1ECBF
1ED00–1ED4F
1EE00–1EEFF

### NotoSansSC-Regular
China