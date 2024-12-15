import { Ui } from "./ui.js";



export class Details{
    constructor(id){
        this.ui = new Ui();
        document.getElementById("btnClose").addEventListener("click", () => {

 document.getElementById("btnClose").classList.remove("d-none")
            document.querySelector("section").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
         });

         this.getDetails(id);
    }
    getDetails(idGames){
        
    document.querySelector(".loader").classList.add("d-none")



    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e718499cbemsh8369386b1c045cfp19641bjsn68579b8dfda8',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        },
    };
     fetch( `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`,options)
     .then((response) => response.json())
     .then((response) => this.ui.getDetails(response))
     .catch((err) => console.error(err))
     .finally(() => {
        document.querySelector(".loader").classList.add("d-none");
     });





    }



}