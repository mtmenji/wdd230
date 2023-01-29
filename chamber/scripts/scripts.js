//Current year script.
let date = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[date.getDay()];
let dateNum = date.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
let year = date.getFullYear();
document.querySelector('#date').innerHTML = day + ", " + dateNum + " " + month + " " + year;
document.querySelector('#year').innerHTML = year;


//Hamburger Menu
function toggleMenu() {
    document.querySelector('#primaryNav').classList.toggle('open');
    document.querySelector('#hamburgerBtn').classList.toggle('open');
}

const x = document.querySelector('#hamburgerBtn');
x.onclick = toggleMenu;


//Last modified date and time script.
let currentDate = document.lastModified;
document.querySelector('#updated').textContent = currentDate;