const fs = require('fs');
 
function convertChar(fontCharStr){
 let fontChars = fontCharStr.split(' ').reduce((prevChars,v)=>{
    if((/-/g).test(v)){
        let minMax = v.split('-').map(v => Number(`0x${v}`));
        for(let i=minMax[0];i<=minMax[1];i++){
            prevChars.push(i)
        }

    }else{
        prevChars.push(Number(`0x${v}`))
    }
    return prevChars
},[]).filter(n => n !=='ﲒ')
return JSON.stringify(fontChars);
}

let cairo = "20-7e a0-ac ae-131 134-137 139-13e 141-148 14a-17e 192 1fa-1ff 218-21b 2c6-2c7 2d8-2dd 3c0 60c 615 61b 61f 621-63a 640-656 658 660-671 679 67e 686 688 691 698 6a1 6a4 6a9 6af 6ba 6be 6c1-6c3 6cc 6d2-6d4 6f0-6f9 1e80-1e85 1eab 1eb0 1ec5 1ed7 1ef2-1ef3 1ef8-1ef9 2013-2014 2018-201a 201c-201e 2020-2022 2026 2030 2039-203a 2044 2070 2074-2079 2080-2089 20ac 2122 2126 2202 2206 220f 2211-2212 221a 221e 222b 2248 2260 2264-2265 25ca f6be f6c3 fb51 fb57-fb59 fb67-fb69 fb6b-fb6d fb7b-fb7d fb89 fb8b fb8d fb8f-fb91 fb93-fb95 fb9f fba7-fba9 fbab-fbad fbaf fbb1-fbb9 fbbd-fbbe fbe8-fbe9 fbfd-fbff fc64-fc65 fc67-fc6b fc6d-fc71 fc73-fc77 fc79-fc7b fc8a-fc8b fc8d-fc8f fc91-fc92 fc94 fcfb-fcfe fd05-fd08 fd0d-fd10 fd17-fd1a fd21-fd24 fd29-fd2c fd3e-fd3f fdf2 fe82 fe84 fe86 fe88 fe8a-fe8c fe8e fe90-fe92 fe94 fe96-fe98 fe9a-fe9c fe9e-fea0 fea2-fea4 fea6-fea8 feaa feac feae feb0 feb2-feb4 feb6-feb8 feba-febc febe-fec0 fec2-fec4 fec6-fec8 feca-fecc fece-fed0 fed2-fed4 fed6-fed8 feda-fedc fede-fee0 fee2-fee4 fee6-fee8 feea-feec feee fef0 fef2-fefc";
fs.writeFileSync(`${__dirname}/Cairo-charset.txt`,convertChar(cairo));

let notoSans = '20-7e a0-377 37a-37f 384-38a 38c 38e-3a1 3a3-3e1 3f0-52f 1ab0-1abe 1c80-1c88 1d00-1df5 1dfb-1f15 1f18-1f1d 1f20-1f45 1f48-1f4d 1f50-1f57 1f59 1f5b 1f5d 1f5f-1f7d 1f80-1fb4 1fb6-1fc4 1fc6-1fd3 1fd6-1fdb 1fdd-1fef 1ff2-1ff4 1ff6-1ffe 2000-2064 2066-2071 2074-208e 2090-209c 20a0-20bf 20f0 2100-215f 2184 2189 2c60-2c7f 2de0-2e44 a640-a69f a700-a7ae a7b0-a7b7 a7f7-a7ff a92e ab30-ab65 fb00-fb06 fe00 fe20-fe2f feff fffc-fffd'
fs.writeFileSync(`${__dirname}/NotoSans-charset.txt`,convertChar(notoSans));

let notoSansArabic = '20-21 2c-2e 30-3a a0 ab bb 34f 600-61c 61e-6ff 750-77f 8a0-8b4 8b6-8bd 8d4-8ff 200b-2011 204f 25cc 2e41 fb50-fbc1 fbd3-fd3f fd50-fd8f fd92-fdc7 fdf0-fdfd fe70-fe74 fe76-fefc'
fs.writeFileSync(`${__dirname}/NotoSansArabic-charset.txt`,convertChar(notoSansArabic));

let notoSansSC = '20-7e a0-103 110-113 11a-11b 128-12b 143-144 147-148 14c-14f 152-153 168-16d 192 1a0-1a1 1af-1b0 1cd-1dc 1f8-1f9 251 261 2bb 2c7 2c9-2cb 2d9 2ea-2eb 300-301 304 307 30c 391-3a1 3a3-3a9 3b1-3c9 401 410-44f 451 1e3e-1e3f 1ea0-1ef9 2002-2003 2010-2016 2018-201a 201c-201e 2020-2022 2025-2027 2030 2032-2033 2035 2039-203c 2042 2047-2049 2051 2074 20a9 20ab-20ac 20dd-20de 2100 2103 2105 2109-210a 210f 2113 2116 2121-2122 2126-2127 212b 212e 2135 213b 2160-216b 2170-217b 2190-2199 21b8-21b9 21c4-21c6 21cb-21cc 21d0 21d2 21d4 21e6-21e9 21f5 2200 2202-2203 2205-220b 220f 2211-2213 2215 221a 221d-2220 2223 2225-222e 2234-2237 223d 2243 2245 2248 224c 2252 2260-2262 2264-2267 226a-226b 226e-226f 2272-2273 2276-2277 2282-2287 228a-228b 2295-2299 22a0 22a5 22bf 22da-22db 22ef 2305-2307 2312 2318 2329-232a 23b0-23b1 23be-23cc 23ce 23da-23db 2423 2460-25ab 25b1-25b3 25b6-25b7 25bc-25bd 25c0-25c1 25c6-25cc 25ce-25d3 25e2-25e6 25ef 2600-2603 2605-2606 2609 260e-260f 2616-2617 261c-261f 262f 2640-2642 2660-266f 2672-267d 26a0 26bd-26be 2702 2713 271a 273d 273f-2740 2756 2776-2793 27a1 2934-2935 29bf 29fa-29fb 2b05-2b07 2b1a 2b95 2e3a-2e3b 2e80-2e99 2e9b-2ef3 2f00-2fd5 2ff0-2ffb 3000-303f 3041-3096 3099-30ff 3105-312f 3131-3163 3165-318e 3190-31bb 31c0-31e3 31f0-321e 3220-332b 332d-4db5 4e00-9fef f900-f903 f905-f906 f90b-f90c f915 f917-f91a f921 f92c-f92d f92f f931-f935 f937-f93a f943 f947-f94a f94e f952-f953 f95e f962-f967 f96e f972 f974 f976 f979-f97b f97e-f980 f984-f985 f98a-f98c f98e f993 f995 f998 f9ae f9b3 f9b7 f9bb f9bd-f9be f9c0 f9c5-f9c6 f9d0 f9d8-f9d9 f9dc-f9e0 f9e2-f9e4 f9e7 f9e9 f9f1 f9f4-f9f5 f9fa f9fd f9ff fa02 fa05-fa08 fa0a fa0c-fa0f fa11 fa13-fa14 fa18 fa1f-fa21 fa23-fa24 fa27-fa29 fa2f fa33-fa35 fa37-fa38 fa3a fa47 fa49 fa4b fa5d-fa5e fb00-fb04 fe10-fe19 fe30-fe52 fe54-fe66 fe68-fe6b ff01-ff9f ffa1-ffbe ffc2-ffc7 ffca-ffcf ffd2-ffd7 ffda-ffdc ffe0-ffe6 ffe8-ffee 1f100-1f10c 1f110-1f16c 1f170-1f1ac 1f200-1f202 1f210-1f23b 1f240-1f248 1f250-1f251 20087 20089 200cc 20164 20628 20676 20cd0 2139a 21413 215d7 2298f 235cb 23c97-23c98 23e23 241fe 2420e 248e9 249db 24a01 24a7d 24ac9 25532 25562 255a8 25ad7 25ed7 26221 2648d 26676 2677c 26951 26b5c 26c21 278b2 27eaf 27fb7 27ff9 28408 28678 28695 287e0 28b49 28c47 28c4f 28c51 28c54 28e0f 28e99 2967f 29810 29f7e 29f83 29f8c 2a7dd 2a8fb 2a917 2aa30 2aa36 2aa58 2afa2 2b127-2b128 2b137-2b138 2b1ed 2b300 2b363 2b36f 2b372 2b37d 2b404 2b410 2b413 2b461 2b4e7 2b4ef 2b4f6 2b4f9 2b50d-2b50e 2b536 2b5ae-2b5af 2b5b3 2b5e7 2b5f4 2b61c-2b61d 2b626-2b628 2b62a 2b62c 2b695-2b696 2b6ad 2b6ed 2b7a9 2b7c5 2b7e6 2b7f9 2b7fc 2b806 2b80a 2b81c 2b8b8 2bac7 2bb5f 2bb62 2bb7c 2bb83 2bc1b 2bd77 2bd87 2bdf7 2be29 2c029-2c02a 2c0a9 2c0ca 2c1d5 2c1d9 2c1f9 2c27c 2c288 2c2a4 2c317 2c35b 2c361 2c364 2c488 2c494 2c497 2c542 2c613 2c618 2c621 2c629 2c62b-2c62d 2c62f 2c642 2c64a-2c64b 2c72c 2c72f 2c79f 2c7c1 2c7fd 2c8d9 2c8de 2c8e1 2c8f3 2c907 2c90a 2c91d 2ca02 2ca0e 2ca7d 2caa9 2cb29 2cb2d-2cb2e 2cb31 2cb38-2cb39 2cb3b 2cb3f 2cb41 2cb4a 2cb4e 2cb5a-2cb5b 2cb64 2cb69 2cb6c 2cb6f 2cb73 2cb76 2cb78 2cb7c 2cbb1 2cbbf-2cbc0 2cbce 2cc56 2cc5f 2ccf5-2ccf6 2ccfd 2ccff 2cd02-2cd03 2cd0a 2cd8b 2cd8d 2cd8f-2cd90 2cd9f-2cda0 2cda8 2cdad-2cdae 2cdd5 2ce18 2ce1a 2ce23 2ce26 2ce2a 2ce7c 2ce88 2ce93 2d544 2f884 2f8b6 30edd-30ede 3106c'
fs.writeFileSync(`${__dirname}/NotoSansSC-charset.txt`,convertChar(notoSansSC));

let roboto = '20-7e a0-17f 18f 192 1a0-1a1 1af-1b0 1f0 1fa-1ff 218-21b 237 259 2bc 2c6-2c7 2c9 2d8-2dd 2f3 300-301 303 309 30f 323 384-38a 38c 38e-3a1 3a3-3ce 3d1-3d2 3d6 400-486 488-513 1e00-1e01 1e3e-1e3f 1e80-1e85 1ea0-1ef9 1f4d 2000-200b 2010-2011 2013-2015 2017-201e 2020-2022 2025-2027 2030 2032-2033 2039-203a 203c 2044 2074 207f 20a3-20a4 20a6-20ac 20b1 20b9-20ba 20bc-20bd 2105 2113 2116 2122 2126 212e 215b-215e 2202 2206 220f 2211-2212 221a 221e 222b 2248 2260 2264-2265 25ca ee01-ee02 f6c3 fb01-fb04 feff fffc-fffd'
fs.writeFileSync(`${__dirname}/Roboto-charset.txt`,convertChar(roboto));

