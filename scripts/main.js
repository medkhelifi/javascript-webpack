require("./services/");
let PhotographService = require("./services/photograph-service");

let photographService = new PhotographService();
let photographers = photographService.getAllPhotographs().then(movies => {
    console.log(movies);
    return movies; // fetched movies
});
console.log(photographers);