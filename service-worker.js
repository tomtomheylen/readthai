var cacheName = 'my-site-cache-v1';
// var assetsToCache = [
//     '/',
//     '/style.css',
//     '/main.js',
//     '/arrays.js',
//     '/dom.js',
//     '/draw.js',
//     '/functionCalls.js',
//     '/menu.js',

//     '/images/my-image.jpg',
//     '/sounds/my-sound.mp3'
//     // ... list all other assets you want to cache
// ];

var assetsToCache = [
    '/style.css',
    '/main.js',
    '/arrays.js',
    '/dom.js',
    '/draw.js',
    '/functionCalls.js',
    '/menu.js',
    '/page1.js',
    '/page2.js',
    '/index.html',
    '/images/dot.png',
    '/images/loud-speaker.png',
    '/images/loud-speakerBlack.png',
    '/images/more.jpg',
    '/images/more.png',
    '/csounds/a_ang.wav',
    '/csounds/b_baimai.wav',
    '/csounds/ch_chang.wav',
    '/csounds/ch_cher.wav',
    '/csounds/ch_ching.wav',
    '/csounds/d_chada.wav',
    '/csounds/d_dek.wav',
    '/csounds/f_fa.wav',
    '/csounds/f_fan.wav',
    '/csounds/h_hib.wav',
    '/csounds/h_nkhuk.wav',
    '/csounds/j_jan.wav',
    '/csounds/kh_khai.wav',
    '/csounds/kh_khon.wav',
    '/csounds/kh_khuat.wav',
    '/csounds/kh_khwai.wav',
    '/csounds/kh_rkng.wav',
    '/csounds/k_kai.wav',
    '/csounds/l_chula.wav',
    '/csounds/l_ling.wav',
    '/csounds/m_ma.wav',
    '/csounds/ng_ngu.wav',
    '/csounds/n_nen.wav',
    '/csounds/n_nu.wav',
    '/csounds/ph_phan.wav',
    '/csounds/ph_phung.wav',
    '/csounds/ph_smpao.wav',
    '/csounds/p_pla.wav',
    '/csounds/r_rua.wav',
    '/csounds/s_rusi.wav',
    '/csounds/s_sala.wav',
    '/csounds/s_so.wav',
    '/csounds/s_sua.wav',
    '/csounds/th_mntho.wav',
    '/csounds/th_thahn.wav',
    '/csounds/th_than.wav',
    '/csounds/th_thao.wav',
    '/csounds/th_thong.wav',
    '/csounds/th_thung.wav',
    '/csounds/t_patak.wav',
    '/csounds/t_tao.wav',
    '/csounds/w_waen.wav',
    '/csounds/y_yak.wav',
    '/csounds/y_ying.wav',
    '/vowels/1.mp3',
    '/vowels/10.mp3',
    '/vowels/11.mp3',
    '/vowels/12.mp3',
    '/vowels/13.mp3',
    '/vowels/14.mp3',
    '/vowels/15.mp3',
    '/vowels/16.mp3',
    '/vowels/17.mp3',
    '/vowels/18.mp3',
    '/vowels/19.mp3',
    '/vowels/2.mp3',
    '/vowels/20.mp3',
    '/vowels/21.mp3',
    '/vowels/22.mp3',
    '/vowels/23.mp3',
    '/vowels/25.mp3',
    '/vowels/26.mp3',
    '/vowels/27.mp3',
    '/vowels/3.mp3',
    '/vowels/39.mp3',
    '/vowels/4.mp3',
    '/vowels/48.mp3',
    '/vowels/49.mp3',
    '/vowels/5.mp3',
    '/vowels/50.mp3',
    '/vowels/63.mp3',
    '/vowels/7.mp3',
    '/vowels/8.mp3',
    '/vowels/9.mp3',
    '/imgWrite/a.png',
    '/imgWrite/b.png',
    '/imgWrite/ก.png',
    '/imgWrite/ข.png',
    '/imgWrite/ฃ.png',
    '/imgWrite/ค.png',
    '/imgWrite/ฅ.png',
    '/imgWrite/ฆ.png',
    '/imgWrite/ง.png',
    '/imgWrite/จ.png',
    '/imgWrite/ฉ.png',
    '/imgWrite/ช.png',
    '/imgWrite/ซ.png',
    '/imgWrite/ฌ.png',
    '/imgWrite/ญ.png',
    '/imgWrite/ฎ.png',
    '/imgWrite/ฏ.png',
    '/imgWrite/ฐ.png',
    '/imgWrite/ฐa.png',
    '/imgWrite/ฐb.png',
    '/imgWrite/ฑ.png',
    '/imgWrite/ฒ.png',
    '/imgWrite/ณ.png',
    '/imgWrite/ด.png',
    '/imgWrite/ต.png',
    '/imgWrite/ถ.png',
    '/imgWrite/ท.png',
    '/imgWrite/ธ.png',
    '/imgWrite/น.png',
    '/imgWrite/บ.png',
    '/imgWrite/ป.png',
    '/imgWrite/ผ.png',
    '/imgWrite/ฝ.png',
    '/imgWrite/พ.png',
    '/imgWrite/ฟ.png',
    '/imgWrite/ภ.png',
    '/imgWrite/ม.png',
    '/imgWrite/ย.png',
    '/imgWrite/ร.png',
    '/imgWrite/ล.png',
    '/imgWrite/ว.png',
    '/imgWrite/ศ.png',
    '/imgWrite/ษ.png',
    '/imgWrite/ส.png',
    '/imgWrite/ห.png',
    '/imgWrite/ฬ.png',
    '/imgWrite/อ.png',
    '/imgWrite/ฮ.png',
    '/imgWrite/bgLines/a.png',
    '/imgWrite/bgLines/b.png',
    '/imgWrite/bgLines/ฐa.png',
    '/imgWrite/bgLines/ฐb.png',
    '/imgWrite/consTransparent/ก.png',
    '/imgWrite/consTransparent/ข.png',
    '/imgWrite/consTransparent/ฃ.png',
    '/imgWrite/consTransparent/ค.png',
    '/imgWrite/consTransparent/ฅ.png',
    '/imgWrite/consTransparent/ฆ.png',
    '/imgWrite/consTransparent/ง.png',
    '/imgWrite/consTransparent/จ.png',
    '/imgWrite/consTransparent/ฉ.png',
    '/imgWrite/consTransparent/ช.png',
    '/imgWrite/consTransparent/ซ.png',
    '/imgWrite/consTransparent/ฌ.png',
    '/imgWrite/consTransparent/ญ.png',
    '/imgWrite/consTransparent/ฎ.png',
    '/imgWrite/consTransparent/ฏ.png',
    '/imgWrite/consTransparent/ฐ.png',
    '/imgWrite/consTransparent/ฑ.png',
    '/imgWrite/consTransparent/ฒ.png',
    '/imgWrite/consTransparent/ณ.png',
    '/imgWrite/consTransparent/ด.png',
    '/imgWrite/consTransparent/ต.png',
    '/imgWrite/consTransparent/ถ.png',
    '/imgWrite/consTransparent/ท.png',
    '/imgWrite/consTransparent/ธ.png',
    '/imgWrite/consTransparent/น.png',
    '/imgWrite/consTransparent/บ.png',
    '/imgWrite/consTransparent/ป.png',
    '/imgWrite/consTransparent/ผ.png',
    '/imgWrite/consTransparent/ฝ.png',
    '/imgWrite/consTransparent/พ.png',
    '/imgWrite/consTransparent/ฟ.png',
    '/imgWrite/consTransparent/ภ.png',
    '/imgWrite/consTransparent/ม.png',
    '/imgWrite/consTransparent/ย.png',
    '/imgWrite/consTransparent/ร.png',
    '/imgWrite/consTransparent/ล.png',
    '/imgWrite/consTransparent/ว.png',
    '/imgWrite/consTransparent/ศ.png',
    '/imgWrite/consTransparent/ษ.png',
    '/imgWrite/consTransparent/ส.png',
    '/imgWrite/consTransparent/ห.png',
    '/imgWrite/consTransparent/ฬ.png',
    '/imgWrite/consTransparent/อ.png',
    '/imgWrite/consTransparent/ฮ.png',
    '/imgWrite/consTransparentDot/ก.png',
    '/imgWrite/consTransparentDot/ข.png',
    '/imgWrite/consTransparentDot/ฃ.png',
    '/imgWrite/consTransparentDot/ค.png',
    '/imgWrite/consTransparentDot/ฅ.png',
    '/imgWrite/consTransparentDot/ฆ.png',
    '/imgWrite/consTransparentDot/ง.png',
    '/imgWrite/consTransparentDot/จ.png',
    '/imgWrite/consTransparentDot/ฉ.png',
    '/imgWrite/consTransparentDot/ช.png',
    '/imgWrite/consTransparentDot/ซ.png',
    '/imgWrite/consTransparentDot/ฌ.png',
    '/imgWrite/consTransparentDot/ญ.png',
    '/imgWrite/consTransparentDot/ฎ.png',
    '/imgWrite/consTransparentDot/ฏ.png',
    '/imgWrite/consTransparentDot/ฐ.png',
    '/imgWrite/consTransparentDot/ฑ.png',
    '/imgWrite/consTransparentDot/ฒ.png',
    '/imgWrite/consTransparentDot/ณ.png',
    '/imgWrite/consTransparentDot/ด.png',
    '/imgWrite/consTransparentDot/ต.png',
    '/imgWrite/consTransparentDot/ถ.png',
    '/imgWrite/consTransparentDot/ท.png',
    '/imgWrite/consTransparentDot/ธ.png',
    '/imgWrite/consTransparentDot/น.png',
    '/imgWrite/consTransparentDot/บ.png',
    '/imgWrite/consTransparentDot/ป.png',
    '/imgWrite/consTransparentDot/ผ.png',
    '/imgWrite/consTransparentDot/ฝ.png',
    '/imgWrite/consTransparentDot/พ.png',
    '/imgWrite/consTransparentDot/ฟ.png',
    '/imgWrite/consTransparentDot/ภ.png',
    '/imgWrite/consTransparentDot/ม.png',
    '/imgWrite/consTransparentDot/ย.png',
    '/imgWrite/consTransparentDot/ร.png',
    '/imgWrite/consTransparentDot/ล.png',
    '/imgWrite/consTransparentDot/ว.png',
    '/imgWrite/consTransparentDot/ศ.png',
    '/imgWrite/consTransparentDot/ษ.png',
    '/imgWrite/consTransparentDot/ส.png',
    '/imgWrite/consTransparentDot/ห.png',
    '/imgWrite/consTransparentDot/ฬ.png',
    '/imgWrite/consTransparentDot/อ.png',
    '/imgWrite/consTransparentDot/ฮ.png',
    '/imgWrite/consWhiteBG/a.png',
    '/imgWrite/consWhiteBG/b.png',
    '/imgWrite/consWhiteBG/ก.png',
    '/imgWrite/consWhiteBG/ข.png',
    '/imgWrite/consWhiteBG/ฃ.png',
    '/imgWrite/consWhiteBG/ค.png',
    '/imgWrite/consWhiteBG/ฅ.png',
    '/imgWrite/consWhiteBG/ฆ.png',
    '/imgWrite/consWhiteBG/ง.png',
    '/imgWrite/consWhiteBG/จ.png',
    '/imgWrite/consWhiteBG/ฉ.png',
    '/imgWrite/consWhiteBG/ช.png',
    '/imgWrite/consWhiteBG/ซ.png',
    '/imgWrite/consWhiteBG/ฌ.png',
    '/imgWrite/consWhiteBG/ญ.png',
    '/imgWrite/consWhiteBG/ฎ.png',
    '/imgWrite/consWhiteBG/ฏ.png',
    '/imgWrite/consWhiteBG/ฐ.png',
    '/imgWrite/consWhiteBG/ฐa.png',
    '/imgWrite/consWhiteBG/ฐb.png',
    '/imgWrite/consWhiteBG/ฑ.png',
    '/imgWrite/consWhiteBG/ฒ.png',
    '/imgWrite/consWhiteBG/ณ.png',
    '/imgWrite/consWhiteBG/ด.png',
    '/imgWrite/consWhiteBG/ต.png',
    '/imgWrite/consWhiteBG/ถ.png',
    '/imgWrite/consWhiteBG/ท.png',
    '/imgWrite/consWhiteBG/ธ.png',
    '/imgWrite/consWhiteBG/น.png',
    '/imgWrite/consWhiteBG/บ.png',
    '/imgWrite/consWhiteBG/ป.png',
    '/imgWrite/consWhiteBG/ผ.png',
    '/imgWrite/consWhiteBG/ฝ.png',
    '/imgWrite/consWhiteBG/พ.png',
    '/imgWrite/consWhiteBG/ฟ.png',
    '/imgWrite/consWhiteBG/ภ.png',
    '/imgWrite/consWhiteBG/ม.png',
    '/imgWrite/consWhiteBG/ย.png',
    '/imgWrite/consWhiteBG/ร.png',
    '/imgWrite/consWhiteBG/ล.png',
    '/imgWrite/consWhiteBG/ว.png',
    '/imgWrite/consWhiteBG/ศ.png',
    '/imgWrite/consWhiteBG/ษ.png',
    '/imgWrite/consWhiteBG/ส.png',
    '/imgWrite/consWhiteBG/ห.png',
    '/imgWrite/consWhiteBG/ฬ.png',
    '/imgWrite/consWhiteBG/อ.png',
    '/imgWrite/consWhiteBG/ฮ.png'
    // Continue with the rest if there are more
];



self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(assetsToCache).catch(function(error) {
                console.error('Failed to cache:', error);
                throw error;
            });
        })
    );
});


// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request)
//             .then(function(response) {
//                 if (response) {
//                     console.log('Serving from cache:', event.request.url);
//                     return response; // If valid response is found in cache return it
//                 }
//                 return fetch(event.request);
//             })
//     );
// });

// self.addEventListener('install', function(event) {
//     event.waitUntil(
//         caches.open(cacheName).then(function(cache) {
//             return cache.addAll(assetsToCache).catch(function(error) {
//                 console.error('Failed to cache:', error);
//                 throw error;
//             });
//         })
//     );
// });

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // If the resource is found in cache, serve it.
            if (response) {
                console.log('Serving from cache:', event.request.url);
                
                // Check for range requests which are typically used by media elements
                if (event.request.headers.has('range')) {
                    console.log('Range request detected:', event.request.url);
                    return response.arrayBuffer().then(ab => {
                        var pos = Number(/^bytes\=(\d+)\-$/g.exec(event.request.headers.get('range'))[1]);
                        return new Response(ab.slice(pos), {
                            status: 206,
                            statusText: 'Partial Content',
                            headers: [
                                ['Content-Type', response.headers.get('Content-Type')],
                                ['Content-Range', 'bytes ' + pos + '-' + (ab.byteLength - 1) + '/' + ab.byteLength]
                            ]
                        });
                    });
                }

                return response;
            }
            
            return fetch(event.request);
        })
    );
});
