//Current year script.
let date = new Date();
let year = date.getFullYear();
document.querySelector('#year').textContent = year;

//Last modified date and time script.
let currentDate = document.lastModified;
document.querySelector('#updated').textContent = currentDate;