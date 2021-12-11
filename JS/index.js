"use strict";

let dating = document.getElementById("dating");
let date = new Date();
let mArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let month = mArr[date.getMonth()];
let AP = () => {
    let hours = date.getHours();
    if (hours >= 12)
        return "PM";
    else
        return "AM";
}
dating.innerHTML = `${day[date.getDay()]} | ${mArr[date.getMonth()]} ${date.getDate()} | ${date.getHours() % 12}:${date.getMinutes()}${AP()}`;

