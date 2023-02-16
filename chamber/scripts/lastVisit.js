//Discover Page -- Last Visited
let lastVisit = Number(window.localStorage.getItem("lastVisit"));
let currentVisit = Date.now() / 1000 / 60 / 60 / 24;

if (lastVisit == 0) {
    document.querySelector("#diff").innerHTML = "This is your first visit! Welcome!"
} else {
document.querySelector("#diff").innerHTML = Math.floor(currentVisit - lastVisit);
}

localStorage.setItem("lastVisit", currentVisit);
