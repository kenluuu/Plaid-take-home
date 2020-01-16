import './main.css';
import './styles/navbar.css';
import './styles/app.css';
import './styles/footer.css';

const url = 'http://interview.plaid.com/data/footer.json';


fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    addFooterElements(data);
  });


function addFooterElements(data) {
    let footerRow = document.getElementById('footer-row');
    for (let section of data) {
        //create column div element
        let col = createColumn();
        // add items to column element
        addItemsToColumn(col, section)
        // add column element to row
        footerRow.appendChild(col);
    }
}


function addItemsToColumn(col, section) {
    // get the key of the section object
    let footerTitle = Object.keys(section)[0]
    // get the array of items from the object using the key
    let items = section[footerTitle];
    //create paragraph element 
    const footerTitleElement = createFooterItem(footerTitle);
    //add style to the footer title
    footerTitleElement.classList.add('footer-title');
    //append footer title to col element
    col.appendChild(footerTitleElement);
    
    for (let item of items) {
        //create paragraph element for footer item
        let footerItem = createFooterItem(capitalizeFirstLetter(item));
        //add style to footer item 
        footerItem.classList.add('footer-item');
        col.appendChild(footerItem);
    }
}

//function that returns a paragraph node with name
function createFooterItem(name) {
    const p = document.createElement('p');
    p.innerHTML = name;
    return p;
}

//function that returns a div with class of col
function createColumn() {
    const div = document.createElement('div');
    div.classList.add('col')
    return div;
}


//fucntion to capitalze first letter of string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}