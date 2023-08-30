// var prefix = "https://thaiarc.tu.ac.th/thai/";
var prefix = "";
  //updated innerbox sounds
    const consonants = [
  { letter: 'ก', innerBox: 'g like in go', audio: prefix + 'csounds/k_kai.wav' },
  { letter: 'ข', innerBox: 'kh like in sky', audio: prefix + "csounds/kh_khai.wav"  },
  { letter: 'ฃ', innerBox: 'kh like in sky', audio: prefix + "csounds/kh_khuat.wav"  },
  { letter: 'ค', innerBox: 'kh like in Ketchup', audio: prefix + "csounds/kh_khwai.wav"  },
  { letter: 'ฅ', innerBox: 'kh like in sky', audio: prefix + "csounds/kh_khon.wav"  },
  { letter: 'ฆ', innerBox: 'kh like in sky', audio: prefix + "csounds/kh_rkng.wav"  },
  { letter: 'ง', innerBox: 'ng like in sing', audio: prefix + "csounds/ng_ngu.wav"  },
  { letter: 'จ', innerBox: 'j like in jump', audio: prefix + "csounds/j_jan.wav"  },
  { letter: 'ฉ', innerBox: 'ch like in cheese', audio: prefix + "csounds/ch_ching.wav"  },
  { letter: 'ช', innerBox: 'ch like in church', audio: prefix + "csounds/ch_chang.wav"  },
  { letter: 'ซ', innerBox: 's like in sun', audio: prefix + "csounds/s_so.wav"  },
  { letter: 'ฌ', innerBox: 'ch like in cheese', audio: prefix + "csounds/ch_cher.wav"  },
  { letter: 'ญ', innerBox: 'y like in yes', audio: prefix + "csounds/y_ying.wav"  },
  { letter: 'ฎ', innerBox: 'd like in dog', audio: prefix + "csounds/d_chada.wav"  },
  { letter: 'ฏ', innerBox: 't like in top', audio: prefix + "csounds/t_patak.wav"  },
  { letter: 'ฐ', innerBox: 'th like in three', audio: prefix + "csounds/th_than.wav"  },
  { letter: 'ฑ', innerBox: 'h like in three', audio: prefix + "csounds/th_mntho.wav"  },
  { letter: 'ฒ', innerBox: 'th like in three', audio: prefix + "csounds/th_thao.wav"  },
  { letter: 'ณ', innerBox: 'n like in nice', audio: prefix + "csounds/n_nen.wav"  },
  { letter: 'ด', innerBox: 'd like in dog', audio: prefix + "csounds/d_dek.wav"  },
  { letter: 'ต', innerBox: 't like in top', audio: prefix + "csounds/t_tao.wav"  },
  { letter: 'ถ', innerBox: 'th like in three', audio: prefix + "csounds/th_thung.wav"  },
  { letter: 'ท', innerBox: 'th like in three', audio: prefix + "csounds/th_thahn.wav"  },
  { letter: 'ธ', innerBox: 'th like in three', audio: prefix + "csounds/th_thong.wav"  },
  { letter: 'น', innerBox: 'n like in nice', audio: prefix + "csounds/n_nu.wav"  },
  { letter: 'บ', innerBox: 'b like in boy', audio: prefix + "csounds/b_baimai.wav"  },
  { letter: 'ป', innerBox: 'p like in pen', audio: prefix + "csounds/p_pla.wav"  },
  { letter: 'ผ', innerBox: 'ph like in phone', audio: prefix + "csounds/ph_phung.wav"  },
  { letter: 'ฝ', innerBox: 'f like in fish', audio: prefix + "csounds/f_fa.wav"  },
  { letter: 'พ', innerBox: 'ph like in phone', audio: prefix + "csounds/ph_phan.wav"  },
  { letter: 'ฟ', innerBox: 'f like in fish', audio: prefix + "csounds/f_fan.wav"  },
  { letter: 'ภ', innerBox: 'ph like in phone', audio: prefix + "csounds/ph_smpao.wav"  },
  { letter: 'ม', innerBox: 'm like in man', audio: prefix + "csounds/m_ma.wav" },
  { letter: 'ย', innerBox: 'y like in yes', audio: prefix + "csounds/y_yak.wav"  },
  { letter: 'ร', innerBox: 'r like in red', audio: prefix + "csounds/r_rua.wav"  },
  { letter: 'ล', innerBox: 'l like in love', audio: prefix + "csounds/l_ling.wav" },
  { letter: 'ว', innerBox: 'w like in water', audio: prefix + "csounds/w_waen.wav"  },
  { letter: 'ศ', innerBox: 's like in sun', audio: prefix + "csounds/s_sala.wav"  },
  { letter: 'ษ', innerBox: 's like in sun', audio: prefix + "csounds/s_rusi.wav" },
  { letter: 'ส', innerBox: 's like in sun', audio: prefix + "csounds/s_sua.wav"  },
  { letter: 'ห', innerBox: 'h like in hot', audio: prefix + "csounds/h_hib.wav"  },
  { letter: 'ฬ', innerBox: 'l like in love', audio: prefix + "csounds/l_chula.wav"  },
  { letter: 'อ', innerBox: '- ', audio: prefix + "csounds/a_ang.wav"  },
  { letter: 'ฮ', innerBox: 'h like in hot', audio: prefix + "csounds/h_nkhuk.wav" }
];

//verified and updated list with thai person and AI and sorted by sound. Only the first 20 are most used. after the sounds are rarely used
const most_common_consonants = ['ก', 'ค', 'ม', 'น', 'ง', 'บ', 'ป', 'พ', 'ฟ', 'ด', 'ต', 'ท', 'ว', 'ย', 'ส', 'จ', 'ช', 'ร', 'ล', 'ห', 'อ', 'ถ','ข', 'ธ', 'ซ', 'ณ', 'ภ', 'ฝ','ญ', 'ฬ', 'ศ', 'ษ', 'ฎ', 'ฏ', 'ฐ', 'ฌ', 'ฮ','ฆ', 'ฑ', 'ฒ','ฉ', 'ผ','ฅ','ฃ'];



const most_common_words = [//checked
  { letter: 'ก', words: ['กิน (gin) - "to eat"', 'กาแฟ (kaa-fae) - "coffee"', 'กับ (gap) - "with"'] },
  { letter: 'ข', words: ['ข้าว (khao) - "rice"', 'ขอบคุณ (khop khun) - "thank you"', 'ขนม (khanom) - "dessert"'] },
  { letter: 'ฃ', words: [] },
  { letter: 'ค', words: ['คน (khon) - "person"', 'ความ (khwam) - "thing"', 'ครู (kruu) - "teacher"'] },
  { letter: 'ฅ', words: [] },
  { letter: 'ฆ', words: [] },
  { letter: 'ง', words: ['งาน (ngaan) - "work"', 'งม (ngom) - "smell"', 'งู (ngu) - "snake"'] },
  { letter: 'จ', words: ['จัด (jat) - "arrange"', 'จอง (jong) - "reserve"', 'จริง (jing) - "true"'] },
  { letter: 'ฉ', words: ['ฉัน (chan) - "I" or "me"', 'ฉลาด (chalaat) - "smart"', 'ฉีด (chid) - "inject"'] },
  { letter: 'ช', words: ['ชอบ (chawp) - "like"', 'ช้า (cha) - "slow"', 'ชา (cha) - "tea"'] },
  { letter: 'ซ', words: ['ซื้อ (seu) - "buy"', 'ซาบซ่าน (saap saan) - "whisper"', 'ซีด (siid) - "sick"'] },
  { letter: 'ฌ', words: [] },
  { letter: 'ญ', words: ['ญาติ (yaa-dtii) - "relative"', 'ญี่ปุ่น (yee-bpoon) - "Japan"', 'ญี่ปุ่น (yee-bpoon) - "Japanese"'] },
  { letter: 'ฎ', words: [] },
  { letter: 'ฏ', words: [] },
  { letter: 'ฐ', words: [] },
  { letter: 'ฑ', words: [] },
  { letter: 'ฒ', words: [] },
  { letter: 'ณ', words: ['ณ เดชา (naa-dechaa) - "Nadech" (a common Thai name)'] },
  { letter: 'ด', words: ['ดี (dee) - "good"', 'ดู (duu) - "to watch"', 'ด่าน (daan) - "checkpoint"'] },
  { letter: 'ต', words: ['ตั๋ว (dtua) - "ticket"', 'ต้ม (dtom) - "boil"', 'ตาม (dtam) - "follow"'] },
  { letter: 'ถ', words: ['ถนน (thanon) - "road"', 'ถ่าย (thai) - "to take a photo"', 'ถุง (thung) - "bag"'] },
  { letter: 'ท', words: ['ทาง (thaang) - "way" or "path"', 'ทำ (tham) - "to do" or "make"', 'ทุเรียน (thoo-rian) - "durian"'] },
  { letter: 'ธ', words: ['ธนาคาร (tha-naa-kaan) - "bank"', 'ธูป (thoop) - "vote"', 'ธง (thong) - "flag"'] },
  { letter: 'น', words: ['น้ำ (nam) - "water"', 'นอน (norn) - "to sleep"', 'นาง (naang) - "woman"'] },
  { letter: 'บ', words: ['บ้าน (baan) - "house"', 'บอก (bok) - "to tell"', 'บุก (buk) - "to raid"'] },
  { letter: 'ป', words: ['ปาก (paak) - "mouth"', 'ปิด (pit) - "to close"', 'ปลา (bplaa) - "fish"'] },
  { letter: 'ผ', words: ['ผลไม้ (phon-la-mai) - "fruit"', 'ผ่าน (paan) - "to pass through"', 'ผู้หญิง (phuu-ying) - "woman"'] },
  { letter: 'ฝ', words: ['ฝน (fawn) - "rain"', 'ฝาก (fak) - "to leave (something)"', 'ฝัง (fang) - "to bury"'] },
  { letter: 'พ', words: ['พูด (phuut) - "to speak"', 'พอ (por) - "enough"', 'พัก (phak) - "to rest"'] },
  { letter: 'ฟ', words: ['ฟัง (fang) - "to listen"', 'ฟ้า (faa) - "sky"', 'ฟุตบอล (footbon) - "football"'] },
  { letter: 'ภ', words: ['ภาษา (pha-saa) - "language"', 'ภูเขา (phu-khao) - "mountain"', 'ภูเขา (phu-khao) - "volcano"'] },
  { letter: 'ม', words: ['มือ (meu) - "hand"', 'มาก (maak) - "many" or "much"', 'มา (maa) - "to come"'] },
  { letter: 'ย', words: ['ยา (yaa) - "medicine"', 'ยักษ์ (yak) - "giant"', 'ยิ้ม (yim) - "to smile"'] },
  { letter: 'ร', words: ['รัก (rak) - "love"', 'ราคา (raa-kaa) - "price"', 'รถ (roht) - "car"'] },
  { letter: 'ฤ', words: [] },
  { letter: 'ล', words: ['ลง (long) - "to descend" or "to get off"', 'ละ (la) - "each"', 'ลิขสิทธิ์ (lik-si-thit) - "copyright"'] },
  { letter: 'ฦ', words: [] },
  { letter: 'ว', words: ['วัน (wan) - "day"', 'ว่า (wa) - "to say" or "that"', 'วิ่ง (wing) - "to run"'] },
  { letter: 'ศ', words: ['ศาสตร์ (saat) - "science"', 'ศิลปะ (sin-laa) - "art"', 'ศรี (see) - "honorific title"'] },
  { letter: 'ษ', words: ['ษา (saa) - "language"', 'ษัษ (sas) - "worm"', 'ษุกุยยาง (soo-koo-yang) - "rubber tree"'] },
  { letter: 'ส', words: ['สวัสดี (sa-wat-dee) - "hello" or "goodbye"', 'สอน (sorn) - "to teach"', 'สัตว์ (sat) - "animal"'] },
  { letter: 'ห', words: ['หมา (maa) - "dog"', 'หนี (nee) - "to escape"', 'หัว (hua) - "head"'] },
  { letter: 'ฬ', words: [] },
  { letter: 'อ', words: ['อาหาร (aa-haan) - "food"', 'อยู่ (yoo) - "to be" or "to stay"', 'อีก (eek) - "again"'] },
  { letter: 'ฮ', words: ['ฮัก (hak) - "to miss" or "to crave"', 'ฮวด (hut) - "vow"', 'ฮัด (hat) - "to hit"'] },
];

const RGTS = [//checked
    { letter: 'ก', rgts: 'ko kai' },
    { letter: 'ข', rgts: 'kho khai' },
    { letter: 'ฃ', rgts: 'kho khuat' },
    { letter: 'ค', rgts: 'kho khwai' },
    { letter: 'ฅ', rgts: 'kho khon' },
    { letter: 'ฆ', rgts: 'kho rakhang' },
    { letter: 'ง', rgts: 'ngo ngu' },
    { letter: 'จ', rgts: 'cho chan' },
    { letter: 'ฉ', rgts: 'cho ching' },
    { letter: 'ช', rgts: 'cho chang' },
    { letter: 'ซ', rgts: 'so so' },
    { letter: 'ฌ', rgts: 'cho choe' },
    { letter: 'ญ', rgts: 'yo ying' },
    { letter: 'ฎ', rgts: 'do chada' },
    { letter: 'ฏ', rgts: 'to patak' },
    { letter: 'ฐ', rgts: 'tho than' },
    { letter: 'ฑ', rgts: 'tho montho' },
    { letter: 'ฒ', rgts: 'tho phu thao' },
    { letter: 'ณ', rgts: 'no nen' },
    { letter: 'ด', rgts: 'do dek' },
    { letter: 'ต', rgts: 'to tao' },
    { letter: 'ถ', rgts: 'tho thung' },
    { letter: 'ท', rgts: 'tho thahan' },
    { letter: 'ธ', rgts: 'tho thong' },
    { letter: 'น', rgts: 'no nu' },
    { letter: 'บ', rgts: 'bo baimai' },
    { letter: 'ป', rgts: 'po pla' },
    { letter: 'ผ', rgts: 'pho phueng' },
    { letter: 'ฝ', rgts: 'fo fa' },
    { letter: 'พ', rgts: 'pho phan' },
    { letter: 'ฟ', rgts: 'fo fan' },
    { letter: 'ภ', rgts: 'pho samphao' },
    { letter: 'ม', rgts: 'mo ma' },
    { letter: 'ย', rgts: 'yo yak' },
    { letter: 'ร', rgts: 'ro ruea' },
    { letter: 'ล', rgts: 'lo ling' },
    { letter: 'ว', rgts: 'wo waen' },
    { letter: 'ศ', rgts: 'so sala' },
    { letter: 'ษ', rgts: 'so ruesi' },
    { letter: 'ส', rgts: 'so suea' },
    { letter: 'ห', rgts: 'ho hip' },
    { letter: 'ฬ', rgts: 'lo chula' },
    { letter: 'อ', rgts: 'o ang' },
    { letter: 'ฮ', rgts: 'ho nok huk' }
  ];
  
  const thaiMeaning = [//checked
    { letter: 'ก', thai: 'ไก่', meaning: 'Chicken' },
    { letter: 'ข', thai: 'ไข่', meaning: 'Egg' },
    { letter: 'ฃ', thai: 'ขวด', meaning: 'Bottle' },
    { letter: 'ค', thai: 'ควาย', meaning: 'Buffalo' },
    { letter: 'ฅ', thai: 'คน', meaning: 'Person' },
    { letter: 'ฆ', thai: 'ระฆัง', meaning: 'bell' },
    { letter: 'ง', thai: 'งู', meaning: 'Snake' },
    { letter: 'จ', thai: 'จาน', meaning: 'Plate' },
    { letter: 'ฉ', thai: 'ฉิ่ง', meaning: 'Cymbals' },
    { letter: 'ช', thai: 'ช้าง', meaning: 'Elephant' },
    { letter: 'ซ', thai: 'โซ่', meaning: 'Chain' },
    { letter: 'ฌ', thai: 'เฌอ', meaning: 'tree' },
    { letter: 'ญ', thai: 'หญิง', meaning: 'Woman' },
    { letter: 'ฎ', thai: 'ชฎา', meaning: 'headdress' },
    { letter: 'ฏ', thai: 'ปฏัก', meaning: 'goad, javelin' },
    { letter: 'ฐ', thai: 'ฐาน', meaning: 'Pedestal' },
    { letter: 'ฑ', thai: 'มณโฑ', meaning: 'Montho, character from Ramayana' },
    { letter: 'ฒ', thai: 'ผู้เฒ่า', meaning: 'elder' },
    { letter: 'ณ', thai: 'เเณร', meaning: 'samanera' },
    { letter: 'ด', thai: 'เด็ก', meaning: 'Child' },
    { letter: 'ต', thai: 'เต่า', meaning: 'Turtle' },
    { letter: 'ถ', thai: 'ถุง', meaning: 'Bag' },
    { letter: 'ท', thai: 'ทหาร', meaning: 'Soldier' },
    { letter: 'ธ', thai: 'ธง', meaning: 'Flag' },
    { letter: 'น', thai: 'หนู', meaning: 'Mouse' },
    { letter: 'บ', thai: 'ใบไม้', meaning: 'Leaf' },
    { letter: 'ป', thai: 'ปลา', meaning: 'Fish' },
    { letter: 'ผ', thai: 'ผึ้ง', meaning: 'Bee' },
    { letter: 'ฝ', thai: 'ฝา', meaning: 'Lid' },
    { letter: 'พ', thai: 'พาน', meaning: 'phan' },
    { letter: 'ฟ', thai: 'ฟัน', meaning: 'Tooth' },
    { letter: 'ภ', thai: 'สำเภา', meaning: 'Junk' },
    { letter: 'ม', thai: 'ม้า', meaning: 'Horse' },
    { letter: 'ย', thai: 'ยักษ์', meaning: 'Giant' },
    { letter: 'ร', thai: 'เรือ', meaning: 'Boat' },
    { letter: 'ล', thai: 'ลิง', meaning: 'Monkey' },
    { letter: 'ว', thai: 'แหวน', meaning: 'Ring' },
    { letter: 'ศ', thai: 'ศาลา', meaning: 'Pavilion' },
    { letter: 'ษ', thai: 'ฤๅษี', meaning: 'Hermit' },
    { letter: 'ส', thai: 'เสือ', meaning: 'Tiger' },
    { letter: 'ห', thai: 'หีบ', meaning: 'Box' },
    { letter: 'ฬ', thai: 'จุฬา', meaning: 'Kite' },
    { letter: 'อ', thai: 'อ่าง', meaning: 'Basin' },
    { letter: 'ฮ', thai: 'นกฮูก', meaning: 'Owl' }
  ];
  
  var prefix_img = 'https://www.learnthaiwithmod.com/wp-content/uploads/2012/06/';

  const consonantImages = [//checked
    { letter: 'ก', img: 'write11.jpg' },
    { letter: 'ข', img: '' },
    { letter: 'ฃ', img: '' },
    { letter: 'ค', img: '' },
    { letter: 'ฅ', img: '' },
    { letter: 'ฆ', img: '' },
    { letter: 'ง', img: '' },
    { letter: 'จ', img: 'write7.jpg' },
    { letter: 'ฉ', img: '' },
    { letter: 'ช', img: '' },
    { letter: 'ซ', img: '' },
    { letter: 'ฌ', img: '' },
    { letter: 'ญ', img: '' },
    { letter: 'ฎ', img: 'write4.jpg' },
    { letter: 'ฏ', img: 'write5.jpg' },
    { letter: 'ฐ', img: '' },
    { letter: 'ฑ', img: '' },
    { letter: 'ฒ', img: '' },
    { letter: 'ณ', img: '' },
    { letter: 'ด', img: 'write2.jpg' },
    { letter: 'ต', img: 'write3.jpg' },
    { letter: 'ถ', img: '' },
    { letter: 'ท', img: '' },
    { letter: 'ธ', img: '' },
    { letter: 'น', img: '' },
    { letter: 'บ', img: 'write8.jpg' },
    { letter: 'ป', img: 'write9.jpg' },
    { letter: 'ผ', img: '' },
    { letter: 'ฝ', img: '' },
    { letter: 'พ', img: '' },
    { letter: 'ฟ', img: '' },
    { letter: 'ภ', img: '' },
    { letter: 'ม', img: '' },
    { letter: 'ย', img: '' },
    { letter: 'ร', img: '' },
    { letter: 'ล', img: '' },
    { letter: 'ว', img: '' },
    { letter: 'ศ', img: '' },
    { letter: 'ษ', img: '' },
    { letter: 'ส', img: '' },
    { letter: 'ห', img: '' },
    { letter: 'ฬ', img: '' },
    { letter: 'อ', img: 'write6.jpg' },
    { letter: 'ฮ', img: '' }
  ]

  const beginEndSound = [//checked
    { letter: 'ก', initial_sound: 'k', end_sound: 'k' },
    { letter: 'ข', initial_sound: 'kh', end_sound: 'k' },
    { letter: 'ฃ', initial_sound: 'kh', end_sound: 'k' },
    { letter: 'ค', initial_sound: 'kh', end_sound: 'k' },
    { letter: 'ฅ', initial_sound: 'kh', end_sound: 'k' },
    { letter: 'ฆ', initial_sound: 'kh', end_sound: 'k' },
    { letter: 'ง', initial_sound: 'ng', end_sound: 'ng' },
    { letter: 'จ', initial_sound: 'ch', end_sound: 't' },
    { letter: 'ฉ', initial_sound: 'ch', end_sound: '-' },
    { letter: 'ช', initial_sound: 'ch', end_sound: 't' },
    { letter: 'ซ', initial_sound: 's', end_sound: 't' },
    { letter: 'ฌ', initial_sound: 'ch', end_sound: '-' },
    { letter: 'ญ', initial_sound: 'y', end_sound: 'n' },
    { letter: 'ฎ', initial_sound: 'd', end_sound: 't' },
    { letter: 'ฏ', initial_sound: 't', end_sound: 't' },
    { letter: 'ฐ', initial_sound: 'th', end_sound: 't' },
    { letter: 'ฑ', initial_sound: 'th or d', end_sound: 't' },
    { letter: 'ฒ', initial_sound: 'th', end_sound: 't' },
    { letter: 'ณ', initial_sound: 'n', end_sound: 'n' },
    { letter: 'ด', initial_sound: 'd', end_sound: 't' },
    { letter: 'ต', initial_sound: 't', end_sound: 't' },
    { letter: 'ถ', initial_sound: 'th', end_sound: 't' },
    { letter: 'ท', initial_sound: 'th', end_sound: 't' },
    { letter: 'ธ', initial_sound: 'th', end_sound: 't' },
    { letter: 'น', initial_sound: 'n', end_sound: 'n' },
    { letter: 'บ', initial_sound: 'b', end_sound: 'p' },
    { letter: 'ป', initial_sound: 'p', end_sound: 'p' },
    { letter: 'ผ', initial_sound: 'ph', end_sound: '-' },
    { letter: 'ฝ', initial_sound: 'f', end_sound: '-' },
    { letter: 'พ', initial_sound: 'ph', end_sound: 'p' },
    { letter: 'ฟ', initial_sound: 'f', end_sound: 'p' },
    { letter: 'ภ', initial_sound: 'ph', end_sound: 'p' },
    { letter: 'ม', initial_sound: 'm', end_sound: 'm' },
    { letter: 'ย', initial_sound: 'y', end_sound: '-' },
    { letter: 'ร', initial_sound: 'r', end_sound: 'n' },
    { letter: 'ล', initial_sound: 'l', end_sound: 'n' },
    { letter: 'ว', initial_sound: 'w', end_sound: '-' },
    { letter: 'ศ', initial_sound: 's', end_sound: 't' },
    { letter: 'ษ', initial_sound: 's', end_sound: 't' },
    { letter: 'ส', initial_sound: 's', end_sound: 't' },
    { letter: 'ห', initial_sound: 'h', end_sound: '-' },
    { letter: 'ฬ', initial_sound: 'l', end_sound: 'n' },
    { letter: 'อ', initial_sound: '-', end_sound: '-' },
    { letter: 'ฮ', initial_sound: 'h', end_sound: '-' }
  ]
  
  const consonantNotes = [//checked
    { letter: 'ฃ', note: 'ฃ kho khuat is obsolete and replaced by ข kho khai, which has identical phonetic values.' },
    { letter: 'ฅ', note: 'ฅ kho khon is obsolete and replaced by ค kho khwai, which has identical phonetic values.' },
    { letter: 'ญ', note: 'The lower curves of the letter ญ are removed when certain letters are written below them, such as ญ + the mark phinthu (lower dot) = ญฺ, etc.' },
    { letter: 'ฐ', note: 'The lower curves of the letter ฐ are removed when certain letters are written below them, such as ฐ + the vowel mark ุ = ฐุ, etc.' },
    { letter: 'ย', note: 'When ย ends a syllable, it is usually part of the vowel. For example, mai (หมาย, /mǎːj/), muai (หมวย, /mǔaj/), roi (โรย, /rōːj/), and thui (ทุย, /tʰūj/). There are some cases in which ย ends a syllable and is not part of the vowel (but serves as an independent ending consonant). An example is phinyo (ภิยโย, /pʰīn jōː/).' },
    { letter: 'ว', note: 'When ว ends a syllable, it is always part of the vowel. For example, hio (หิว, /hǐw/), kao (กาว, [kāːw]), klua (กลัว, /klūa/), and reo (เร็ว, /rēw/).' },
    { letter: 'อ', note: 'อ is a special case in that at the beginning of a word it is used as a silent initial for syllables that start with a vowel (all vowels are written relative to a consonant). The same symbol is used as a vowel in non-initial position.' }
  ];

  const consonantClass = [//checked
    { letter: 'ก', class: 'mid' },
    { letter: 'ข', class: 'high' },
    { letter: 'ฃ', class: 'high' },
    { letter: 'ค', class: 'low' },
    { letter: 'ฅ', class: 'low' },
    { letter: 'ฆ', class: 'low' },
    { letter: 'ง', class: 'low' },
    { letter: 'จ', class: 'mid' },
    { letter: 'ฉ', class: 'high' },
    { letter: 'ช', class: 'low' },
    { letter: 'ซ', class: 'low' },
    { letter: 'ฌ', class: 'low' },
    { letter: 'ญ', class: 'low' },
    { letter: 'ฎ', class: 'mid' },
    { letter: 'ฏ', class: 'mid' },
    { letter: 'ฐ', class: 'high' },
    { letter: 'ฑ', class: 'low' },
    { letter: 'ฒ', class: 'low' },
    { letter: 'ณ', class: 'low' },
    { letter: 'ด', class: 'mid' },
    { letter: 'ต', class: 'mid' },
    { letter: 'ถ', class: 'high' },
    { letter: 'ท', class: 'low' },
    { letter: 'ธ', class: 'low' },
    { letter: 'น', class: 'low' },
    { letter: 'บ', class: 'mid' },
    { letter: 'ป', class: 'mid' },
    { letter: 'ผ', class: 'high' },
    { letter: 'ฝ', class: 'high' },
    { letter: 'พ', class: 'low' },
    { letter: 'ฟ', class: 'low' },
    { letter: 'ภ', class: 'low' },
    { letter: 'ม', class: 'low' },
    { letter: 'ย', class: 'low' },
    { letter: 'ร', class: 'low' },
    { letter: 'ล', class: 'low' },
    { letter: 'ว', class: 'low' },
    { letter: 'ศ', class: 'high' },
    { letter: 'ษ', class: 'high' },
    { letter: 'ส', class: 'high' },
    { letter: 'ห', class: 'high' },
    { letter: 'ฬ', class: 'low' },
    { letter: 'อ', class: 'mid' },
    { letter: 'ฮ', class: 'low' }
  ];
  
// const prefixVowelsAudio = 'https://storage.googleapis.com/funtolearnthai/audio/';
const prefixVowelsAudio = '';

// Short vowels

const shortVowels = [
  { vowel: '◌ะ', pronunciation: 'a', audio: 'vowels/1.mp3' },
  { vowel: '◌ิ', pronunciation: 'i', audio: 'vowels/14.mp3' },
  { vowel: '◌ึ', pronunciation: 'ue', audio: 'vowels/16.mp3' },
  { vowel: '◌ุ', pronunciation: 'u', audio: 'vowels/18.mp3' },
  { vowel: 'เ◌ะ', pronunciation: 'e', audio: 'vowels/8.mp3' },
  { vowel: 'แ◌ะ', pronunciation: 'ae', audio: 'vowels/3.mp3' },
  { vowel: 'โ◌ะ', pronunciation: 'o', audio: 'vowels/12.mp3' },
  { vowel: 'เ◌าะ', pronunciation: 'aw', audio: 'vowels/5.mp3' },
  { vowel: 'เ◌อะ', pronunciation: 'uh', audio: 'vowels/10.mp3' }
];

// Long vowels
const longVowels = [
  { vowel: '◌า', pronunciation: 'aa', audio: 'vowels/2.mp3' },
  { vowel: '◌ี', pronunciation: 'ii', audio: 'vowels/15.mp3' },
  { vowel: '◌ื', pronunciation: 'euu', audio: 'vowels/17.mp3' },
  { vowel: '◌ู', pronunciation: 'uu', audio: 'vowels/19.mp3' },
  { vowel: 'เ◌', pronunciation: 'ee', audio: 'vowels/9.mp3' },
  { vowel: 'แ◌', pronunciation: 'aae', audio: 'vowels/4.mp3' },
  { vowel: 'โ◌', pronunciation: 'ooh', audio: 'vowels/13.mp3' },
  { vowel: '◌อ', pronunciation: 'aaw', audio: 'vowels/7.mp3' },
  { vowel: 'เ◌อ', pronunciation: 'euh', audio: 'vowels/11.mp3' }
];

// Long diphthongs
const longDiphthongs = [
  { vowel: 'เ◌ ีย', pronunciation: 'iia', audio: 'vowels/21.mp3' },
  { vowel: 'เ◌ ือ', pronunciation: 'uuea', audio: 'vowels/23.mp3' },
  { vowel: '◌ัว', pronunciation: 'uua', audio: 'vowels/25.mp3' }
];

// Short diphthongs
const shortDiphthongs = [
  { vowel: 'เ◌ ียะ', pronunciation: 'ia', audio: 'vowels/20.mp3' },
  { vowel: 'เ◌ ือะ', pronunciation: 'uea', audio: 'vowels/22.mp3' },
  { vowel: '◌ัวะ', pronunciation: 'ua', audio: 'vowels/63.mp3' },
  { vowel: '◌ำ', pronunciation: 'am', audio: 'vowels/48.mp3' },
  { vowel: 'เ◌า', pronunciation: 'ao', audio: 'vowels/39.mp3' },
  { vowel: 'ไ◌', pronunciation: 'ai', audio: 'vowels/26.mp3' },
  { vowel: 'ใ◌', pronunciation: 'ai', audio: 'vowels/27.mp3' },
    //others?
    { vowel: 'ฤ', pronunciation: 'rue',  audio:'vowels/49.mp3' },
    { vowel: 'ฤๅ', pronunciation: 'ruue',  audio:'vowels/50.mp3' }
  
];


// var prefixVowels = 'https://storage.googleapis.com/funtolearnthai/audio/';
var prefixVowels = '';

const vowelsAll = [
  { vowel: '◌ะ', pronunciation: 'a',  audio: prefixVowels + 'vowels/1.mp3', sort: 'short' },
  { vowel: '◌า', pronunciation: 'aa',  audio: prefixVowels + 'vowels/2.mp3', sort: 'long' },
  { vowel: '◌ิ', pronunciation: 'i',  audio: prefixVowels + 'vowels/14.mp3', sort: 'short' },
  { vowel: '◌ี', pronunciation: 'ii',  audio: prefixVowels + 'vowels/15.mp3', sort: 'long' },
  { vowel: '◌ึ', pronunciation: 'ue',  audio: prefixVowels + 'vowels/16.mp3', sort: 'short' },
  { vowel: '◌ื', pronunciation: 'euu',  audio: prefixVowels + 'vowels/17.mp3', sort: 'long' },
  { vowel: '◌ุ', pronunciation: 'u',  audio: prefixVowels + 'vowels/18.mp3', sort: 'short' },
  { vowel: '◌ู', pronunciation: 'uu',  audio: prefixVowels + 'vowels/19.mp3', sort: 'long' },
  { vowel: 'เ◌ะ', pronunciation: 'e',  audio: prefixVowels + 'vowels/8.mp3', sort: 'short' },
  { vowel: 'เ◌', pronunciation: 'ee',  audio: prefixVowels + 'vowels/9.mp3', sort: 'long' },
  { vowel: 'แ◌ะ', pronunciation: 'ae',  audio: prefixVowels + 'vowels/3.mp3', sort: 'short' },
  { vowel: 'แ◌', pronunciation: 'aae',  audio: prefixVowels + 'vowels/4.mp3', sort: 'long' },
  { vowel: 'โ◌ะ', pronunciation: 'o',  audio: prefixVowels + 'vowels/12.mp3', sort: 'short' },
  { vowel: 'โ◌', pronunciation: 'ooh',  audio: prefixVowels + 'vowels/13.mp3', sort: 'long' },
  { vowel: 'เ◌าะ', pronunciation: 'aw',  audio: prefixVowels + 'vowels/5.mp3', sort: 'short' },
  { vowel: '◌อ', pronunciation: 'aaw',  audio: prefixVowels + 'vowels/7.mp3', sort: 'long' },
  { vowel: 'เ◌อะ', pronunciation: 'uh',  audio: prefixVowels + 'vowels/10.mp3', sort: 'short' },
  { vowel: 'เ◌อ', pronunciation: 'euh',  audio: prefixVowels + 'vowels/11.mp3', sort: 'long' },
  // Short diphthongs
  { vowel: 'เ◌ ียะ', pronunciation: 'ia',  audio: prefixVowels + 'vowels/20.mp3', sort: 'shortdiphthong' },
  { vowel: 'เ◌ ือะ', pronunciation: 'uea',  audio: prefixVowels + 'vowels/22.mp3', sort: 'shortdiphthong' },
  { vowel: '◌ัวะ', pronunciation: 'ua',  audio: prefixVowels + 'vowels/63.mp3', sort: 'shortdiphthong' },
  { vowel: '◌ำ', pronunciation: 'am',  audio: prefixVowels + 'vowels/48.mp3', sort: 'shortdiphthong' },
  { vowel: 'เ◌า', pronunciation: 'ao',  audio: prefixVowels + 'vowels/39.mp3', sort: 'shortdiphthong' },
  { vowel: 'ไ◌', pronunciation: 'ai',  audio: prefixVowels + 'vowels/26.mp3', sort: 'shortdiphthong' },
  { vowel: 'ใ◌', pronunciation: 'ai',  audio: prefixVowels + 'vowels/27.mp3', sort: 'shortdiphthong' },

  // Long diphthongs
  { vowel: 'เ◌ ีย', pronunciation: 'iia',  audio: prefixVowels + 'vowels/21.mp3', sort: 'longdiphthong' },
  { vowel: 'เ◌ ือ', pronunciation: 'uuea',  audio: prefixVowels + 'vowels/23.mp3', sort: 'longdiphthong' },
  { vowel: '◌ัว', pronunciation: 'uua',  audio: prefixVowels + 'vowels/25.mp3', sort: 'longdiphthong' },
  //others?
  { vowel: 'ฤ', pronunciation: 'rue',  audio: prefixVowels + 'vowels/49.mp3', sort: 'short' },
  { vowel: 'ฤๅ', pronunciation: 'ruue',  audio: prefixVowels + 'vowels/50.mp3', sort: 'long' }

];


const toneMarks = [
  {
    symbol: '◌่',
    description: 'Low tone for mid-class consonants, falling tone for high-class consonants, and high tone for low-class consonants.',
    words: ['ไก่ (gài) - "chicken"', 'ไม่ (mài) - "wood or stick"', 'เก่า (gào) - "old"']//verified
  },
  {
    symbol: '◌้',
    description: 'Falling tone for mid-class consonants, high tone for high-class consonants, and rising tone for low-class consonants.',
    words: ['ได้ (dâai) - "can or to get"']//verified
  },
  {
    symbol: '◌๊',
    description: 'High tone for mid-class consonants.',
    words: ['กุ๊ก (cuc) - "chef or cook"'] // verified
  },
  {
    symbol: '◌๋',
    description: 'Rising tone for mid-class consonants.',
    words: []
  }
];


const otherMarks = [
  {
    symbol: '◌ๆ',
    description: 'Indicates repetition of the preceding word or syllable. Repeated words are often used to add emphasis or intensify the meaning. เหงา means ‘lonely’ เหงา ๆ means very lonely',
    words: ['เยอะๆ (je je) - "a lot"', 'ช้าๆ (cha cha) - "calm calm"', 'เร็วๆ (reo reo) - "quickly or rapidly"']//verified
  },
  {
    symbol: '◌์',
    description: 'It’s voiceless. When you see ์ put on that consonant in that word ,you don’t need to pronounce it',
    words: []
  },
  {
    symbol: '◌็',
    description: "known as ไม้ไต่คู้ (/máyˑ​tàyˑ​khúu/) which shortens the syllable's vowel. It's written over the first consonant of a syllable (or the second consonant if the syllable starts with a consonant cluster)",
    words: ['เป็น (pen) - "to be"', 'แข็ง (khɛ̌ŋ) - "strong"', 'น็อค (nɔ́k) - "to knock"']//verified
  }

];
