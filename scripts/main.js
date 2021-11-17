require("./services/");
require ("./components/component-photograph")
let PhotographService = require("./services/photograph-service");

let photographService = new PhotographService();
let photographComponent = new ComponentPhotograph();
let photographers = photographService.getAllPhotographs().then(photogph => {
    console.log(photogph);
    photographComponent.buildPhotographDOM(photogph);
    return photogph; // fetched movies
});
console.log(photographers);