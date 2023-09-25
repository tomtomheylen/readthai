//create notes-button
window.onload = function() {
    

    // Create a new button element
    var button = document.createElement('button');
    
    // Set the button's properties and attributes
    button.id = 'notes-button'; // Assign the CSS class
    button.innerHTML = 'Notes';    // Set the button's text
    
    // Append the button to the body
    document.body.appendChild(button);

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        var popup = document.getElementById('popupNotes');
        var currentDisplay = window.getComputedStyle(popup).display;
        
        if (currentDisplay === 'none') {
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
            saveTabs();
        }
    });

    // Initialize tabs 
    initTabs();

}



function initTabs() {
    var popup = document.getElementById('popupNotes');
    
    // Clear the entire content of popupNotes
    popup.innerHTML = '';

    var tabsData = JSON.parse(localStorage.getItem('tabsData'));

    if (!tabsData || tabsData.length === 0) {
        tabsData = [
            { title: 'Tab 1', content: [] },
            { title: 'Tab 2', content: [] },
            { title: 'Tab 3', content: [] }
        ];
    }

    var tabs = document.createElement('div');
    tabs.id = 'tabs';

    var tabContents = document.createElement('div');
    tabContents.id = 'tabContents';

    tabsData.forEach((tabData, index) => {
        // Create tab button
        var tabButton = createTabButton(tabData.title, index + 1);
        tabs.appendChild(tabButton);



        // Create tab content
        var tabContent = document.createElement('div');
        tabContent.className = 'tab-content';
        if (index === 0) tabContent.classList.add('active');
        tabContent.setAttribute('data-tab', index + 1);

        var title = document.createElement('div');
        title.className = 'note-title';
        title.innerText = 'Notes for ' + tabData.title;
        tabContent.appendChild(title);

        // Add content from localStorage or initialize with empty fields
        if (tabData.content.length === 0) {
            addTextFields(tabContent);
        } else {
            for (let i = 0; i < tabData.content.length; i += 2) {
                addTextFields(tabContent, [tabData.content[i], tabData.content[i + 1]]);
            }
        }

        tabContents.appendChild(tabContent);
    });
    var addTabButton = document.createElement('button');
    addTabButton.innerHTML = '<span style="font-size: 35px; font-weight: bold;">+</span>';
    addTabButton.addEventListener('click', addTab);
    tabs.appendChild(addTabButton);
    popup.appendChild(tabs);
    popup.appendChild(tabContents);
}


function switchTab(event) {
    var clickedTab = event.target;
    var tabNumber = clickedTab.getAttribute('data-tab');

    // Deactivate all tabs and hide their content
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Activate the clicked tab and show its content
    clickedTab.classList.add('active');
    document.querySelector('.tab-content[data-tab="' + tabNumber + '"]').classList.add('active');
}

function addTextFields(parent, content = []) {
    var container = document.createElement('div');
    container.className = 'textfields';

    // Create 2 text fields side by side
    for (let i = 0; i < 2; i++) {
        let textField = document.createElement('div');
        textField.className = 'textfield';
        textField.setAttribute('contenteditable', 'true');
        textField.addEventListener('input', handleInput);

        // If there's content to be loaded, use it
        if (content[i]) {
            textField.innerText = content[i];
        }

        container.appendChild(textField);
    }

    parent.appendChild(container);
}



function handleInput(event) {
    var textField = event.target;
    var container = textField.parentElement;
    var parent = container.parentElement;
    var nextContainer = container.nextElementSibling;

    var leftTextField = container.children[0];
    var rightTextField = container.children[1];

    // If text is entered in the last container, add a new empty one
    if (textField.innerText && !nextContainer) {
        addTextFields(parent);
    }

    // If text is emptied and it's not the last container, and there's a next container (the always-present empty one),
    // and both left and right text fields are empty, remove the current container
    if (!textField.innerText && nextContainer && !leftTextField.innerText && !rightTextField.innerText) {
        parent.removeChild(container);
    }
    saveTabs();
}

function editTabTitle(event) {
    var tabButton = event.target;
    
    // Show the delete button
    var deleteButton = tabButton.querySelector('.delete-tab');
    if (deleteButton) {
        deleteButton.style.display = 'inline';
    }

    // Make the button content editable
    tabButton.setAttribute('contenteditable', 'true');
    
    // Change cursor style to indicate edit mode
    tabButton.style.cursor = 'text';
    
    // Focus the button for editing
    tabButton.focus();

    // Position the cursor right before the "x" delete button
    var range = document.createRange();
    range.setStartBefore(deleteButton);
    range.collapse(true);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Add a listener for the "Enter" key to save changes
    tabButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            tabButton.blur();  // Remove focus, which will trigger the 'blur' event below
        }
    });
    
    // Add a listener for when the button loses focus
    tabButton.addEventListener('blur', function() {
        // Hide the delete button again
        if (deleteButton) {
            deleteButton.style.display = 'none';
        }
        
        tabButton.removeAttribute('contenteditable');  // Make it non-editable
        tabButton.style.cursor = 'pointer'; // Reset cursor style
        saveTabs();
        
        // Remove the listeners to avoid adding them multiple times
        tabButton.removeEventListener('keydown', arguments.callee);
        tabButton.removeEventListener('blur', arguments.callee);
    });
    saveTabs();
}



function saveTabs() {
    var tabsData = [];

    var tabButtons = document.querySelectorAll('.tab-button');
    var tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((button, index) => {
        var contentDivs = Array.from(tabContents[index].querySelectorAll('.textfield'));
        var contents = contentDivs.map(div => div.innerText);

        tabsData.push({
            title: button.childNodes[0].nodeValue.trim(),
            content: contents
        });
    });

    localStorage.setItem('tabsData', JSON.stringify(tabsData));
}

function removeTab(tabButton) {
    var confirmDelete = window.confirm("Are you sure you want to delete this tab?");
    if (!confirmDelete) {
        return; // If user clicks "Cancel", do not proceed with deletion
    }

    var tabIndex = tabButton.getAttribute('data-tab');

    // Remove the tab button
    tabButton.remove();

    // Remove the corresponding tab content
    document.querySelector('.tab-content[data-tab="' + tabIndex + '"]').remove();

    // Update the data-tab attributes to ensure they remain sequential
    var tabButtons = document.querySelectorAll('.tab-button');
    var tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach((btn, index) => {
        btn.setAttribute('data-tab', index + 1);
    });
    tabContents.forEach((content, index) => {
        content.setAttribute('data-tab', index + 1);
    });

    saveTabs();  // Save changes to localStorage
}

function addTab() {
    var newTabName = "New Tab";  // You can modify this or even prompt the user for a name
    var newTabIndex = document.querySelectorAll('.tab-button').length + 1;

    // Create new tab button using the centralized function
    var tabButton = createTabButton(newTabName, newTabIndex);
    
    var tabsContainer = document.getElementById('tabs');
    tabsContainer.insertBefore(tabButton, tabsContainer.lastChild);

    // Create new tab content
    var tabContent = document.createElement('div');
    tabContent.className = 'tab-content';
    tabContent.setAttribute('data-tab', newTabIndex);
    var title = document.createElement('div');
    title.className = 'note-title';
    title.innerText = newTabName;
    tabContent.appendChild(title);
    addTextFields(tabContent);  // Add initial empty text fields
    document.getElementById('tabContents').appendChild(tabContent);

    saveTabs();  // Save changes to localStorage
}



function createTabButton(tabName, tabIndex) {
    var tabButton = document.createElement('button');
    tabButton.className = 'tab-button';
    tabButton.setAttribute('data-tab', tabIndex);
    tabButton.innerHTML = tabName;
    tabButton.addEventListener('click', switchTab);
    tabButton.addEventListener('dblclick', editTabTitle);

    // Check if the tab button already contains the "x" delete button
    if (!tabButton.innerHTML.includes('x')) {
        var deleteButton = document.createElement('span');
        deleteButton.innerHTML = 'x';
        deleteButton.className = 'delete-tab';
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation();  // Prevent tab switch
            removeTab(tabButton);
        });
        tabButton.appendChild(deleteButton);
    }

    return tabButton;
}