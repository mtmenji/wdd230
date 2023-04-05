//Last Modified Date --- Footer
let currentDate = document.lastModified;
document.querySelector('#updated').textContent = currentDate;

//Hamburger Menu
function toggleMenu() {
    document.querySelector('#primaryNav').classList.toggle('open');
    document.querySelector('#hamburger-button').classList.toggle('open');
}
const x = document.querySelector('#hamburger-button');
x.onclick = toggleMenu;

//Weather API
const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad%2C%20ca?unitGroup=us&key=XE85QN9QJMKB89YTMJBMKU2DJ&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    document.querySelector('#home--weather-degree').innerHTML = "Current Temp: " + data.currentConditions.temp.toFixed(1) + "&#176;F\nHumidity: " + data.currentConditions.humidity;
    document.querySelector('#home--weather-degreeDayOne').textContent = data['days'][1].datetime + " --- " + data['days'][1].temp.toFixed(1);
    document.querySelector('#home--weather-degreeDayTwo').textContent = data['days'][2].datetime + " --- " + data['days'][2].temp.toFixed(1);
    document.querySelector('#home--weather-degreeDayThree').textContent = data['days'][3].datetime + " --- " + data['days'][3].temp.toFixed(1);
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#home--weather-forecast').textContent = "Today's Weather Forecast is: " + data.currentConditions.conditions;
    document.querySelector('#home--weather-icon').src = image;
    document.querySelector('home--#weather-icon').alt= data.currentConditions.conditions + ' icon';
}
getWeather();

//Fruit API
const apiURL1 = "https://andejuli.github.io/wdd230/fruit.json";

let fruit1;
let fruit2;
let fruit3;
let data1;

const getFruit = async () => {
    const response1 = await fetch(apiURL1);
    data1 = await response1.json();

    fruit1 = Math.floor(Math.random() * data1.length);
    document.querySelector('#fruit1').value = data1[fruit1].name;
    document.querySelector('#fruit1-label').innerHTML = data1[fruit1].name;

    fruit2 = Math.floor(Math.random() * data1.length);
    document.querySelector('#fruit2').value = data1[fruit2].name;
    document.querySelector('#fruit2-label').innerHTML = data1[fruit2].name;

    fruit3 = Math.floor(Math.random() * data1.length);
    document.querySelector('#fruit3').value = data1[fruit3].name;
    document.querySelector('#fruit3-label').innerHTML = data1[fruit3].name;
}
getFruit();

//Form Submission
let date = new Date();
let numDrinks = localStorage.getItem(0) ? localStorage.getItem(0) : 0;
let totalCarbs = 0;
let totalProtein = 0;
let totalFat = 0;
let totalSugar = 0;
let totalCalories = 0;

function formSubmission(event) {
    event.preventDefault();
    let formDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    numDrinks++;
    var checkboxList = document.getElementsByName('fruit');
    let checkedBoxes = [];
    for (var checkbox of checkboxList) {
        if (checkbox.checked) {
            checkedBoxes = checkedBoxes.concat(' ' + checkbox.value);
            if (checkbox.value == data1[fruit1].name) {
                totalCarbs += data1[fruit1].nutritions.carbohydrates;
                totalProtein += data1[fruit1].nutritions.protein;
                totalFat += data1[fruit1].nutritions.fat;
                totalSugar += data1[fruit1].nutritions.sugar; 
                totalCalories += data1[fruit1].nutritions.calories;
            } else if (checkbox.value == data1[fruit2].name) {
                totalCarbs += data1[fruit2].nutritions.carbohydrates;
                totalProtein += data1[fruit2].nutritions.protein;
                totalFat += data1[fruit2].nutritions.fat;
                totalSugar += data1[fruit2].nutritions.sugar;
                totalCalories += data1[fruit2].nutritions.calories;
            } else if (checkbox.value == data1[fruit3].name) {
                totalCarbs += data1[fruit3].nutritions.carbohydrates;
                totalProtein += data1[fruit3].nutritions.protein;
                totalFat += data1[fruit3].nutritions.fat;
                totalSugar += data1[fruit3].nutritions.sugar;
                totalCalories += data1[fruit3].nutritions.calories;
            }
        }
    }
    document.querySelector('#home--fresh-form-results').innerHTML =
    `
    <br>
    <h2>Form Values:</h2>
    <hr>
    <p>First Name: ${event.target.elements.name.value}</p>
    <p>Email: ${event.target.elements.email.value}</p>
    <p>Phone Number: ${event.target.elements.phone.value}</p>
    <p>Fruits: ${checkedBoxes}</p>
    <p>Special Instructions: ${event.target.elements.instructions.value}</p>
    <br>
    <h2>Nutrition Information</h2>
    <hr>
    <p>Carbohydrates: ${totalCarbs.toFixed(2)}</p>
    <p>Protein: ${totalProtein.toFixed(2)}</p>
    <p>Fat: ${totalFat.toFixed(2)}</p>
    <p>Sugar: ${totalSugar.toFixed(2)}</p>
    <p>Calories: ${totalCalories.toFixed(2)}</p>
    <br>
    <p>Order Date: ${formDate}</p>
    <p>Drink Mixes Ordered: ${numDrinks}</p>`;

    localStorage.setItem(0, numDrinks);

    document.getElementById('home--fresh-form-results').style.display = 'block';
}

//Display Number of Drinks Ordered on Home Page including a clear button.
    document.querySelector('#home--info-card-drinks').innerHTML = `${numDrinks}`;

    document.getElementById("home--info-card-drinks-reset").addEventListener("click", clear);

    function clear() {
        localStorage.clear()
        location.reload()
    }