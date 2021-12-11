"use strict";
const requests = require("requests");
const fs = require("fs");
const http = require("http");

const url = "https://api.openweathermap.org/data/2.5/weather?q=lahore&units=metric&appid=a683d57a0e7c942516aac20f5efa82ab";
const port = process.env.PORT || 3000;
const HTMLfile = fs.readFileSync("../WeatherAPP.html", "utf-8");

const replaceVal = (TempraryVal, OrgVal) => {
    let temperature = TempraryVal.replace("{%city%}", OrgVal.name);
    temperature = temperature.replace("{%country%}", OrgVal.sys.country);
    temperature = temperature.replace("{%temp%}", OrgVal.main.temp);
    temperature = temperature.replace("{%temp_min%}", OrgVal.main.temp_min);
    temperature = temperature.replace("{%temp_max%}", OrgVal.main.temp_max);
    return temperature;
}



const server = http.createServer((req, res) => {

    if (req.url === "/") {
        requests(url).on("data", (chunkData) => {
            const obj = JSON.parse(chunkData);
            // console.log(obj);
            const realTimeData = [obj].map(val => replaceVal(HTMLfile, val)).join();
            res.write(realTimeData);
            // console.log(realTimeData);

        }).on("end", (err) => {
            if (err) console.log("An Error => ", err);
            res.end();
        })
    }
    // else
    //     console.log("URL Not Found!");   
})
server.listen(port, () => {
    console.log("Server is listening on port ", port);
})

console.log("End Of Program!");