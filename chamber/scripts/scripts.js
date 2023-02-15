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

//Banner for Meeting
if (day == "Monday" || day == "Tuesday") {
    document.querySelector("#meeting-banner").style.display = "block";
}

//Weather
let degree = document.querySelector("#degree").textContent;
console.log(degree);
let speed = document.querySelector("#speed").textContent;
console.log(speed);
let chill = Math.round((35.74 + (0.6215 * degree))-(35.75 * Math.pow(speed,0.16)) + (0.4275*degree*Math.pow(speed,0.16)));
console.log(chill);

if (degree <= 50 && speed >= 3) {
    document.querySelector("#chill").textContent = chill;
}
