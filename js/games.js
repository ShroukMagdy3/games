import { Details } from "./details.js";
import { Ui } from "./ui.js";


export class Games{
    constructor() {
        this.getGames("mmorpg");
  
        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault(); 
                document.querySelectorAll(".menu a").forEach((el) => el.classList.remove("text-primary"));
        
                e.target.classList.add("text-primary");
            });
        });



        this.ui = new Ui();

    }
    async getGames(category){
        document.querySelector(".loader").classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e718499cbemsh8369386b1c045cfp19641bjsn68579b8dfda8',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: "application/json",
                "Content-Type": "application/json",
            
            },
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();
      this.ui.getData(response);
      this.startEvent();
      document.querySelector(".loader").classList.add("d-none")
    }
    startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
           item.addEventListener("click", () => {
              const id = item.dataset.id;
              this.showDetails(id);
           });
        });
     }
     showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector("section").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
     }

}