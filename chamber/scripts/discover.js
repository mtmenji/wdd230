//Days Since Last Visit
if (!localStorage.getItem('lastVisit')){
    localStorage.setItem('lastVisit', Date.now());
    //Change h2 element to "Welcome!"
} else {
    let discoverCurrentDate = Date.now();
    let discoverLastDate = Date.now(); //Change this to last visited using info from local.Storage.getItem
    let difference = (discoverCurrentDate - discoverLastDate)/1000/60/60/24; //Divide milliseconds by 1000, divide seconds by 60, divide minutes by 60, and divide hours by 24 to receive days.
    //Change SPAN with DOM to Difference
}