const url = 'https://github.com/mtmenji/wdd230/blob/main/chamber/directory.json';

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the business array of the data object given thestructure of the json file
    // displaybusinesses(data.businesses);
    displayTable(data.businesses);
}

const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let logo = document.createElement('img');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('p');
  
      // Build the h2 content out to show the business's full name - finish the template string
      h2.textContent = business.name;
      address.textContent = business.address;
      phone.textContent = business.phone;
      website.textContent = business.website;
  
      // Build the image logo by setting all the relevant attribute
      logo.setAttribute('src', business.image);
      logo.setAttribute('alt', `Business Logo`);
      logo.setAttribute('loading', 'lazy');
    //   logo.setAttribute('width', '340');
    //   logo.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(logo);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression

function displayTable(businesses) {
  businesses.forEach((business) => {
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_address = document.createElement('td');
    let td_phone = document.createElement('td');
    let td_website = document.createElement('td');

    td_name.textContent = business.name;
    td_phone.textContent = business.phone;
    td_address.textContent = business.address;
    td_website.textContent = business.website;

    tr.appendChild(td_name);
    tr.appendChild(td_phone);
    tr.appendChild(td_address);
    tr.appendChild(td_website);

    document.querySelector('table').appendChild(tr);
  })
}

getBusinessData();