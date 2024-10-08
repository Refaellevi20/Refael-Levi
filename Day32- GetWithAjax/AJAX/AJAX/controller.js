'use strict'



// function onInit() {
//     renderContacts()
// }


function renderContacts() {
    saveData()
    const data = loadDataStore()

    const strHTMLs = data.map((contact) => {
        return ` 
        <li class="contact-item">
            <div class="contact-header">
                <h2 class="name">${contact.fname} ${contact.lname}</h2>
                <img src="https://robohash.org/${contact.fname}.${contact.lname}" alt="Contact Image" class="contact-image" />
            </div>
            <div class="contact-details">
                <p>Phone: ${contact.phone}</p>
                <p>City: ${contact.city}</p>
                <p>Status: ${contact.stats}</p>
                <p>Zip: ${contact.zip}</p>
                <p>Address: ${contact.address}</p>
            </div>
        </li>
        `
    }).join('')

    const elList = document.querySelector('ul.contact-list')
    elList.innerHTML = strHTMLs;
}
