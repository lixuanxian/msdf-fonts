#!/bin/bash

rm -rf default.* *.png *.json \

node ./../projects/msdf-bmfont-map/cli.js \
--output-type json \
--font-size 32 \
--filename default \
--distance-range 3 \
--texture-padding 1 \
--texture-size 1024,2048 \
--field-type msdf \
--reuse default.cfg \
--charset-file ./NotoSans-charset.txt \
./NotoSans-Regular.ttf \
