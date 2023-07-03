const mode1Button = document.querySelector('#mode1');
const mode2Button = document.querySelector('#mode2');

var selectedSymbols = [];

let isToggled = false; // state variable
document.getElementById('sort-learning-elements').addEventListener('click', () => {
    isToggled = !isToggled; // flip the state
    if(isToggled) {
        createLearningElements('consonants', 'sort');
    } else {
        createLearningElements('consonants');
    }
});

function createLearningElements(elementSort = 'consonants', abc){//consonants, vowels or tones

    selectedSymbols.splice(0, selectedSymbols.length); // Clear selectedSymbols array

        document.querySelector("#choice").innerHTML = '';
        document.querySelector("#test-result").innerHTML = '';
        document.querySelector("#score").innerHTML = '';
        document.querySelector('#info-area').innerHTML = ''; // clear previous info



        const container = document.querySelector('#consonants-container');
        container.innerHTML = '';
        let symbolArray;
  
        if (elementSort === "consonants") {
            document.getElementById('consonants-container').style.gridTemplateColumns = 'repeat(8, 1fr)';
            document.getElementById('choice').style.gridTemplateColumns = 'repeat(8, 1fr)';
            if(abc === 'sort'){
                symbolArray = consonants.slice();
                
                // Generate an object that holds the order for sorting
                const sortOrder = {};
                most_common_consonants.forEach((letter, index) => {
                sortOrder[letter] = index;
                });

                // Sort your consonants array
                symbolArray.sort((a, b) => sortOrder[a.letter] - sortOrder[b.letter]);
                //symbolArray = vowelsAll;
            }else{
                symbolArray = [];
                symbolArray = consonants;
            }
            document.querySelector('#sort-learning-elements').style.display = 'inline';
            document.querySelector('.sort-learning-elements').style.display = 'inline';

        } else if (elementSort === "vowels") {
            document.getElementById('consonants-container').style.gridTemplateColumns = 'repeat(4, 1fr)';
            document.getElementById('choice').style.gridTemplateColumns = 'repeat(4, 1fr)';
            symbolArray = vowelsAll;
            document.querySelector('#sort-learning-elements').style.display = 'none';
            document.querySelector('.sort-learning-elements').style.display = 'none';

        } else if (elementSort === "tones") {
            symbolArray = tones;
        } else {
            console.error('Invalid elementSort provided.');
            return;
        }

        symbolArray.forEach(c => {
            const tile = document.createElement('div');
            if (elementSort === "consonants") {
                tile.textContent = c.letter;
            }
            if (elementSort === "vowels") {
                tile.textContent = c.vowel;
            }
            if (elementSort === "tones") {
                tile.textContent = c.tone;
            }

            tile.className = 'tile';
            tile.onclick = function() {
                this.classList.toggle('selected');
                if (selectedSymbols.includes(c)) {
                selectedSymbols = selectedSymbols.filter(item => item !== c);
                } else {
                selectedSymbols.push(c);
                }
            };
            container.appendChild(tile);
        });
        applySelectedFont();
};

mode1Button.onclick = function() {

    document.querySelector("#choice").innerHTML = '';
        document.querySelector("#test-result").innerHTML = '';
        document.querySelector("#score").innerHTML = '';
        document.querySelector('#info-area').innerHTML = ''; // clear previous info


  if (selectedSymbols.length === 0) {
    alert("Select letters first");
    return;
  }

  document.querySelector('#test-area').style.display = 'block';
  document.querySelector('#info-area').style.display = 'none';
  
  // Clear previous choices and result
  document.querySelector('#choice').innerHTML = '';
  document.querySelector('#test-result').textContent = '';
  
  // Generate tiles for each letter in the selected group
  let score = 0;
  let tries = 0; 

  selectedSymbols.forEach(c => {
    let firstSymbolKey = Object.keys(c)[0]; // get the name of the first key eg. letter: vowel: use c[firstSymbolKey] instead of c.letter

    const tile = document.createElement('div');
    tile.textContent = c[firstSymbolKey];
    tile.className = 'tile';
    tile.onclick = function() {

        tries++;  // Increase the tries counter
        if (c[firstSymbolKey] === testConsonant[firstSymbolKey]) {
            document.querySelector('#test-result').textContent = "Correct!";
            score++;
        } else {
            document.querySelector('#test-result').textContent = "Incorrect";
        }
        document.querySelector('#score').textContent = "Score: " + score + "/" + tries;
    };
    document.querySelector('#choice').appendChild(tile);
  });
  
//   var testConsonant;
//   document.querySelector('#playSound').onclick = function() {
//     testConsonant = selectedSymbols[Math.floor(Math.random() * selectedSymbols.length)];
//     new Audio(testConsonant.audio).play();
//   };
    var testConsonant;
    var selectedIndexes = []; // Track the selected indexes

    document.querySelector('#playSound').onclick = function() {
    var index;
    
    // Generate a unique random index
    do {
        index = Math.floor(Math.random() * selectedSymbols.length);
    } while (selectedIndexes.includes(index));

    selectedIndexes.push(index); // Add the selected index to the array
    
    // If all elements have been played, reset the array
    if (selectedIndexes.length === selectedSymbols.length) {
        selectedIndexes = [];
    }

    testConsonant = selectedSymbols[index];
    new Audio(testConsonant.audio).play();
    };


    applySelectedFont();
    scrollToBottom();
};


mode2Button.onclick = function() {

    

    if (selectedSymbols.length === 0) {
    alert("Select letters first");
    return;
  }


        document.querySelector("#choice").innerHTML = '';
        document.querySelector("#test-result").innerHTML = '';
        document.querySelector("#score").innerHTML = '';


  document.querySelector('#info-area').style.display = 'block';
  document.querySelector('#test-area').style.display = 'none';
  
  document.querySelector('#info-area').innerHTML = ''; // clear previous info

  selectedSymbols.forEach(c => {
    let firstSymbolKey = Object.keys(c)[0];  // get the name of the first key eg. letter: vowel: use c[firstSymbolKey] instead of c.letter
    let secondSymbolKey = Object.keys(c)[1];  // get the name of the first key eg. letter: vowel: use c[firstSymbolKey] instead of c.letter
    
    const tile = document.createElement('div');
    tile.textContent = c[firstSymbolKey];
    tile.className = 'tile';

    tile.onclick = function() {
      // Play the corresponding sound when the tile is clicked
      new Audio(c.audio).play();

      const info = document.createElement('p');
      info.className = 'first-item-tile';
      info.textContent = c[secondSymbolKey];
      const info2 = document.createElement('p');
      info2.className = 'second-item-tile';
      
      if (selectedSymbols.every(symbol => !('sort' in symbol))) {//check if not array vowels same as if(consonants)
        const mode2RGTS = RGTS.find(item => item.letter === c[firstSymbolKey]).rgts;
        info2.textContent = mode2RGTS;
        tile.appendChild(info2);
      }
      tile.appendChild(info);
      setTimeout(() => {
        tile.removeChild(info);
        tile.removeChild(info2);
      }, 3000);

    };
    document.querySelector('#info-area').appendChild(tile);
  });
  applySelectedFont();
  scrollToBottom();
};

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}

