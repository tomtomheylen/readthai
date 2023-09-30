window.onload = function() {
    // Create a new button element
    var button = document.createElement('button');
    
    // Set the button's properties and attributes
    button.id = 'notes-button'; // Assign the CSS class
    button.innerHTML = '&#128210;';    // Set the button's text
    
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
        
        // Create delete button for the tab
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-tab';
        deleteBtn.innerText = 'X';
        deleteBtn.style.display = 'none';  // Initially hidden

        // Handle touch events for mobile
        deleteBtn.addEventListener('touchend', function(event) {
            event.preventDefault();
            event.stopPropagation();  // Prevent tab switch
            removeTab(tabButton, deleteBtn);
        });

        deleteBtn.addEventListener('click', function(event) {
            event.stopPropagation();  // Prevent tab switch
            removeTab(tabButton, deleteBtn);
        });
        
        //Add event listener to show delete button on double click
        tabButton.addEventListener('dblclick', function() {
            // Hide other delete buttons
            document.querySelectorAll('.delete-tab').forEach(btn => btn.style.display = 'none');
            
            // Show delete button for this tab
            deleteBtn.style.display = 'inline-flex';
        });

        // Hide the delete button when the tab button loses focus
        tabButton.addEventListener('blur', function() {
            deleteBtn.style.display = 'none';
        });  

        // Prevent the tabButton from losing focus when deleteBtn is clicked (desktop)
        deleteBtn.addEventListener('mousedown', function(event) {
            event.preventDefault();
        });

        // // Prevent the tabButton from losing focus when deleteBtn is tapped (mobile)
        // deleteBtn.addEventListener('touchstart', function(event) {
        //     event.preventDefault();
        // });

        var tabWrapper = document.createElement('div');
        tabWrapper.className = 'tab-wrapper';
        tabWrapper.appendChild(tabButton);
        tabWrapper.appendChild(deleteBtn);
        tabs.appendChild(tabWrapper);




        // Create tab content
        var tabContent = document.createElement('div');
        tabContent.className = 'tab-content';
        if (tabButton.classList.contains('active')) {
            tabContent.classList.add('active');
        }        
        tabContent.setAttribute('data-tab', index + 1);

        var title = document.createElement('div');
        title.className = 'note-title';
        title.innerText = tabData.title;
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
    });//end dataforeach


    // Create a new "+" button for adding new tabs every time
    var addTabBtn = document.createElement('button');
    addTabBtn.className = 'add-tab';
    addTabBtn.innerText = '+';
    addTabBtn.addEventListener('click', handleAddTabClick);
    tabs.appendChild(addTabBtn);


    popup.appendChild(tabs);
    popup.appendChild(tabContents);

    // Check if any tab is active
    const activeTabs = document.querySelectorAll('.tab-content.active, .tab-button.active');

    // If no tab is active, set the first tab to be active
    if (!activeTabs.length) {
        const firstTabButton = document.querySelector('.tab-button[data-tab="1"]');
        const firstTabContent = document.querySelector('.tab-content[data-tab="1"]');
        if (firstTabButton && firstTabContent) {
            firstTabButton.classList.add('active');
            firstTabContent.classList.add('active');
        }
    }


    saveTabs();
}

function handleAddTabClick() {
    // Create a new tab data object with default title
    var newTabData = { title: 'New Tab', content: [] };
    var tabsData = JSON.parse(localStorage.getItem('tabsData')) || [];
    tabsData.push(newTabData);
    
    // Save the updated tabsData to localStorage
    localStorage.setItem('tabsData', JSON.stringify(tabsData));

    // Refresh the tabs to reflect the new addition
    initTabs();

    // Before refreshing, set all tabs to inactive
    document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.classList.remove('active');
    });

    document.querySelectorAll('.tab-button').forEach(tabButton => {
        tabButton.classList.remove('active');
    });


    // Set the newly added tab to active
    const newTabIndex = tabsData.length; // The index of the new tab is the length of tabsData
    document.querySelector(`.tab-button[data-tab="${newTabIndex}"]`).classList.add('active');
    document.querySelector(`.tab-content[data-tab="${newTabIndex}"]`).classList.add('active');

}


function createTabButton(tabName, tabIndex) {
    var tabButton = document.createElement('button');
    tabButton.className = 'tab-button';
    tabButton.setAttribute('data-tab', tabIndex);
    tabButton.innerHTML = tabName;

    tabButton.addEventListener('click', switchTab);

    // Double click event listener to make the tab title editable
    tabButton.addEventListener('dblclick', function() {
        tabButton.setAttribute('contenteditable', 'true');
        tabButton.focus();

        // Move the cursor to the end of the content
        var range = document.createRange();
        range.selectNodeContents(tabButton);
        range.collapse(false);  // Move the cursor to the end
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    });


    // Event listener to save the entire tabsData when the tabButton loses focus
    tabButton.addEventListener('blur', function() {
        tabButton.removeAttribute('contenteditable');
        
        // Call saveTabs to save all data
        saveTabs();
    });

    return tabButton;
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

function saveTabs() {
    var tabsData = [];

    var tabButtons = document.querySelectorAll('.tab-button');
    var tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((button, index) => {
        var contentDivs = Array.from(tabContents[index].querySelectorAll('.textfield'));
        var contents = contentDivs.map(div => div.innerText);

        tabsData.push({
            title: button.innerText.trim(),
            content: contents
        });
    });

    localStorage.setItem('tabsData', JSON.stringify(tabsData));
}




function removeTab(tabButton, deleteBtn) {
    var confirmDelete = window.confirm("Are you sure you want to delete this tab?");
    if (!confirmDelete) {
        return; // If user clicks "Cancel", do not proceed with deletion
    }

    var tabIndex = tabButton.getAttribute('data-tab');

    // Remove the tab button and its delete button
    tabButton.parentElement.remove();
    deleteBtn.remove();

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
        saveTabs();  // Save changes to localStorage
    });

    
}