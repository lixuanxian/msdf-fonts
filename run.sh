#!/bin/bash

rm -rf default.* *.png \

msdf-bmfont \
--output-type json \
--font-size 32 \
--filename default \
--distance-range 3 \
--texture-padding 1 \
--texture-size 2048,2048 \
--field-type msdf \
--reuse default.cfg \
--square \
--charset-file ./NotoSansSC-charset-2500.txt \
./NotoSansSC-Regular.otf \

# msdf-bmfont \
# --output-type json \
# --font-size 32 \
# --filename default \
# --distance-range 3 \
# --texture-padding 1 \
# --texture-size 2048,2048 \
# --field-type msdf \
# --reuse default.cfg \
# --charset-file ./Roboto-charset.txt \
# ./Roboto-Regular.ttf \

# msdf-bmfont \
# --output-type json \
# --font-size 32 \
# --filename default \
# --distance-range 3 \
# --texture-padding 1 \
# --texture-size 2048,2048 \
# --field-type msdf \
# --reuse default.cfg \
# --rtl \
# --charset-file ./Cairo-charset.txt \
# ./Cairo-Regular.ttf \

msdf-bmfont \
--output-type json \
--font-size 32 \
--filename default \
--distance-range 3 \
--texture-padding 1 \
--texture-size 2048,2048 \
--field-type msdf \
--reuse default.cfg \
--charset-file ./NotoSans-charset.txt \
./NotoSans-Regular.ttf \


msdf-bmfont \
--output-type json \
--font-size 32 \
--filename default \
--distance-range 3 \
--texture-padding 1 \
--texture-size 2048,2048 \
--field-type msdf \
--reuse default.cfg \
--rtl \
--charset-file ./NotoSansArabic-charset.txt \
./NotoSansArabic-Regular.ttf \

