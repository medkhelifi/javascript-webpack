class PhotographService {
    async getAllPhotographs(){
        let response = await fetch("https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json");
        const photogph = await response.json();
        return photogph.photographers;

    }

    async searchById(idPhotgrph){
        // mon script de recherche ici ..
    }


}
module.exports = PhotographService;