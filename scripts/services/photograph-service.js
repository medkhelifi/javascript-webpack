class PhotographService {
    async getAllPhotographs(){
        let response = await fetch("https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json");
        const movies = await response.json();
        return movies.photographers;

    }
}
module.exports = PhotographService;