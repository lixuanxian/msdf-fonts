#!/bin/bash

rm -rf default.* *.png *.json \



# node ./../projects/msdf-bmfont-map/cli.js  \
# --output-type json \
# --font-size 32 \
# --filename default \
# --distance-range 3 \
# --texture-padding 1 \
# --texture-size 1024,2048 \
# --field-type msdf \
# --reuse default.cfg \
# --charset-file ./Roboto-charset.txt \
# ./Roboto-Regular.ttf 

# node ./../projects/msdf-bmfont-map/cli.js  \
# --output-type json \
# --font-size 32 \
# --filename default \
# --distance-range 3 \
# --texture-padding 1 \
# --texture-size 1024,2048 \
# --field-type msdf \
# --reuse default.cfg \
# --charset-file ./Cairo-charset.txt \
# ./Cairo-Regular.ttf 

# node ./../projects/msdf-bmfont-map/cli.js \
# --output-type json \
# --font-size 32 \
# --filename NotoSansSC-Regular \
# --distance-range 3 \
# --texture-padding 1 \
# --texture-size 2048,2048 \
# --field-type msdf \
# --square \
# --charset-file ./NotoSansSC-charset-3500.txt \
# ./NotoSansSC-Regular.otf 

node ./../projects/msdf-bmfont-map/cli.js \
--output-type json \
--font-size 32 \
--filename default \
--distance-range 3 \
--texture-padding 1 \
--texture-size 2048,1536 \
--field-type msdf \
--reuse default.cfg \
--charset-file ./NotoSans-charset.txt \
./NotoSans-Regular.ttf 


node ./../projects/msdf-bmfont-map/cli.js  \
--output-type json \
--font-size 32 \
--filename default \
--distance-range 3 \
--texture-padding 1 \
--texture-size 2048,1536 \
--field-type msdf \
--reuse default.cfg \
--charset-file ./NotoSansArabic-charset.txt \
./NotoSansArabic-Regular.ttf 

