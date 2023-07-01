function togglePopup(element) {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
  
    
    const sound_div = document.getElementById('pop1');//clone sound div to remove eventlisteners
    const clonedElement = sound_div.cloneNode(false);//clone sound div to remove eventlisteners
    sound_div.parentNode.replaceChild(clonedElement, sound_div);//clone sound div to remove eventlisteners
  
  //   const consonant = consonants_explanation.find(item => item.letter === element.id);
  //   const audio = consonants.find(item => item.letter === element.id);
  
  
    document.getElementById('pop1').textContent = consonants.find(item => item.letter === element.id).letter;
    document.getElementById('pop1').addEventListener('click', () => playSound(consonants.find(item => item.letter === element.id).audio));
  
  
  
  //   const imgContainer = document.getElementById('pop2');
   
  
  //   const img = consonantImages.find(item => item.letter === element.id).img; 
  //   imgContainer.innerHTML = consonant.img ? `<img src="${prefix_img}${img}">` : '';
  //   document.getElementById('pop-write').textContent = img ? 'Write' : '';
    const meaning = thaiMeaning.find(item => item.letter === element.id);
    const beginEnd = beginEndSound.find(item => item.letter === element.id);
    document.getElementById('pop3').innerHTML = '<b>'+meaning.letter +'<br>'+meaning.thai+'</b>';
    document.getElementById('pop4').innerHTML = RGTS.find(item => item.letter === element.id).rgts.replace(' ', '<br>');
    document.getElementById('pop5').innerHTML = '<b>'+meaning.thai +'</b><br>('+ meaning.meaning +')';
    document.getElementById('pop6').textContent = beginEnd.initial_sound;
    document.getElementById('pop7').textContent = beginEnd.end_sound;
    document.getElementById('pop8').textContent = consonantClass.find(item => item.letter === element.id).class;
  
    const commonWords = document.getElementById('pop9');
    const ul = document.createElement('ul');
    ul.innerHTML = most_common_words.find(item => item.letter === element.id).words
      .map(word => `<li>${word}</li>`).join('');
  
    commonWords.innerHTML = '';
    commonWords.appendChild(ul);
  
    const notes = document.getElementById('pop-notes');
    const foundElement = consonantNotes.find(item => item.letter === element.id);
    notes.innerHTML = '';
    if (foundElement) {
      if (foundElement.note) {
        notes.innerHTML = '<h1><b>Notes</b></h1>' + foundElement.note;
      }
    }
   
  }
  
  
  
  
  function createElements(){//for consonants
    const container = document.getElementById('consonantContainer');
    container.innerHTML = '';
  
    const title = document.createElement('h1');
    title.innerHTML = '<center><b>Thai consonants in alphabetic order</b></center>';
    container.appendChild(title);
  
  
    consonants.forEach(consonant => {
      const div = document.createElement('div');
      div.className = 'consonant';
  
      const innerBox1 = document.createElement('div');
      innerBox1.className = 'inner-box1';
      innerBox1.textContent = consonant.letter;
      innerBox1.addEventListener('click', () => playSound(consonant.audio));
      div.appendChild(innerBox1);
  
      const innerBox2 = document.createElement('div');
      innerBox2.className = 'inner-box2';
      innerBox2.id = consonant.letter;
      innerBox2.addEventListener('click', function() {
        togglePopup(this);
      });  
      innerBox2.textContent = consonant.innerBox;
      div.appendChild(innerBox2);
  
      container.appendChild(div);
    });
    makeFirstLetterBold();
    applySelectedFont();
  }
  
  function createMostCommonElements() {
    const container = document.getElementById('consonantContainer');
    container.innerHTML = '';
  
    const counterInput = document.getElementById('counter-input');
    const counterValue = parseInt(counterInput.value, 10);
  
    const title = document.createElement('h1');
    title.innerHTML = '<center><b>'+ counterValue+' most used Thai consonants</b></center>';
    container.appendChild(title);
  
    for (let i = 0; i < counterValue; i++) {
      const consonantLetter = most_common_consonants[i];
      const consonant = consonants.find(item => item.letter === consonantLetter);
  
      if(i == 24){
        const div = document.createElement('div');
        div.className = 'consonant';
        div.textContent = 'Next are less used letters';
        container.appendChild(div);
      }
  
      if(i == 42){
        const div = document.createElement('div');
        div.className = 'consonant';
        div.textContent = 'Next 2 letters are obsolete';
        container.appendChild(div);
      }
  
  
      const div = document.createElement('div');
      div.className = 'consonant';
  
      const innerBox1 = document.createElement('div');
      innerBox1.className = 'inner-box1';
      innerBox1.textContent = consonant.letter;
      innerBox1.addEventListener('click', () => playSound(consonant.audio));
      div.appendChild(innerBox1);
  
      const innerBox2 = document.createElement('div');
      innerBox2.className = 'inner-box2';
      innerBox2.id = consonant.letter;
      innerBox2.addEventListener('click', function() {
        togglePopup(this);
      });
      innerBox2.textContent = consonant.innerBox;
      div.appendChild(innerBox2);
  
      container.appendChild(div);
    }
    makeFirstLetterBold();
    applySelectedFont();
  }
  
  
  
  function createVowelDiv(vowel, pronunciation, audio) {
    const vowelDiv = document.createElement('div');
    vowelDiv.className = 'vowel';
  
    const innerBox1Div = document.createElement('div');
    innerBox1Div.className = 'vowel-inner-box1';
    innerBox1Div.addEventListener('click', () => playSound(prefixVowelsAudio + audio));
    innerBox1Div.innerHTML = vowel;
  
    const innerBox2Div = document.createElement('div');
    innerBox2Div.className = 'vowel-inner-box2';
    innerBox2Div.id = vowel;
    innerBox2Div.addEventListener('click', function() {
      togglePopupVowel(this);
    });
    innerBox2Div.innerHTML = pronunciation;
  
    vowelDiv.appendChild(innerBox1Div);
    vowelDiv.appendChild(innerBox2Div);
  
    return vowelDiv;
  }
  
  function createVowelElements() {
    const vowelContainer = document.getElementById('vowelContainer');
    vowelContainer.innerHTML = '';
  
    for (let i = 0; i < shortVowels.length; i++) {
      const vowelSort2Div = document.createElement('div');
      vowelSort2Div.className = 'vowel-sort2';
  
      vowelSort2Div.appendChild(createVowelDiv(shortVowels[i].vowel, shortVowels[i].pronunciation, shortVowels[i].audio));
      vowelSort2Div.appendChild(createVowelDiv(longVowels[i].vowel, longVowels[i].pronunciation, longVowels[i].audio));
  
      vowelContainer.appendChild(vowelSort2Div);
  
    }
  
    for (let i = 0; i < longDiphthongs.length; i++) {
      const vowelSort2Div = document.createElement('div');
      vowelSort2Div.className = 'vowel-sort2';
  
      vowelSort2Div.appendChild(createVowelDiv(shortDiphthongs[i].vowel, shortDiphthongs[i].pronunciation, shortDiphthongs[i].audio));
      vowelSort2Div.appendChild(createVowelDiv(longDiphthongs[i].vowel, longDiphthongs[i].pronunciation, longDiphthongs[i].audio));
  
      vowelContainer.appendChild(vowelSort2Div);
  
    }
  
    for (let i = longDiphthongs.length; i < shortDiphthongs.length - 1; i += 2) {
      const vowelSort2Div = document.createElement('div');
      vowelSort2Div.className = 'vowel-sort2';
  
      vowelSort2Div.appendChild(createVowelDiv(shortDiphthongs[i].vowel, shortDiphthongs[i].pronunciation, shortDiphthongs[i].audio));
      vowelSort2Div.appendChild(createVowelDiv(shortDiphthongs[i+1].vowel, shortDiphthongs[i+1].pronunciation, shortDiphthongs[i+1].audio));
      vowelContainer.appendChild(vowelSort2Div);
  
  
      if ((i + 1) % 2 === 0 || i === shortDiphthongs.length - 1) {
        // Perform the action on every second iteration or the last iteration here
        // You can add your specific code or function call within this if statement
      }
    }
  
  }
  
  
  
  
  
  function makeFirstLetterBold(){
    // Get all elements with the specified class name
    var elements = document.getElementsByClassName('inner-box2');
  
    // Iterate over each element
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      
      // Get the text content of the element
      var text = element.textContent;
  
      // Wrap the first letter with <span> and apply bold styling
      var modifiedText = '<span style="font-weight: bold;">' + text.charAt(0) + text.charAt(1) +'<br></span>' + text.slice(2);
  
      // Set the modified text as the content of the element
      element.innerHTML = modifiedText;
    }
  }
  
  function increment() {
    const counterInput = document.getElementById('counter-input');
    let value = parseInt(counterInput.value, 10);
    const step = 5;
    const maxValue = 44;
  
    if (value < maxValue) {
      value += step;
      if (value > maxValue) {
        value = maxValue;
      }
      counterInput.value = value;
      createMostCommonElements(); // Call the function to update the displayed elements
    }
  }
  function decrement() {
    const counterInput = document.getElementById('counter-input');
    let value = parseInt(counterInput.value, 10);
    const step = 5;
    const minValue = 1;
  
    if (value > minValue) {
      value -= step;
      if (value < minValue) {
        value = minValue;
      }
      counterInput.value = value;
      createMostCommonElements(); // Call the function to update the displayed elements
    }
  }
  
  function playSound(audioUrl) {
    var audio = new Audio(audioUrl);
    audio.play();
  }  
  