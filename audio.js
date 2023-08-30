// 1. Setting up the IndexedDB

let db;
const dbName = "assetsDB";
const storeName = "assetStore";

const request = indexedDB.open(dbName, 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName);
    }
};

request.onsuccess = function(event) {
    db = event.target.result;
    storeAssets(); // Start storing assets once the DB is ready
};

request.onerror = function(event) {
    console.error("Error opening IndexedDB:", event);
};

// 2. Fetching and Storing Files

const assets = [ /* Your list of assets here */ 
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
    '/vowels/9.mp3'



];

function storeAssets() {
    assets.forEach(assetPath => {
        // Check if asset already exists in the DB
        const transaction = db.transaction([storeName], "readonly");
        const store = transaction.objectStore(storeName);
        const checkRequest = store.get(assetPath);
        
        checkRequest.onsuccess = function() {
            if (!checkRequest.result) {
                // If asset is not in the DB, fetch and store it
                fetch(assetPath).then(response => response.arrayBuffer()).then(data => {
                    const storeTransaction = db.transaction([storeName], "readwrite");
                    const assetStore = storeTransaction.objectStore(storeName);
                    assetStore.put(data, assetPath);
                });
            }
        };

        checkRequest.onerror = function(event) {
            console.error("Error checking asset in IndexedDB:", event);
        };
    });
}
// 3. Retrieving and Using Files

function getAssetURL(assetPath, callback) {
    const transaction = db.transaction([storeName], "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.get(assetPath);
    request.onsuccess = function(event) {
        const assetData = event.target.result;
        const blob = new Blob([assetData]);
        const url = URL.createObjectURL(blob);
        callback(url);
    };
}

// Example usage:

// To retrieve and play an audio:
// getAssetURL('/csounds/a_ang.wav', function(url) {
//     new Audio(url).play();
// });
