export class Ui{
    getData(data){
        let cartona =""
    for(let i = 0 ; i < data.length ; i++ ){
        cartona +=`
       <div class="col-lg-3 col-md-6 d-flex  align-items-stretch">
  <div  data-id="${data[i].id}" role="button" class="card game-card bg-dark overflow-hidden">
    <div class="bg-dark">
      <img src="${data[i].thumbnail}" class="card-img-top" alt="..." />
      <div class="card-body text-white border border-2 border-dark">
        <div class="">
          <div class="d-flex justify-content-between align-items-center pb-3">
            <h5 class="card-title">${data[i].title}</h5>
            <button class="btn btn-primary" id="detail">Free</button>
          </div>
          <p class="card-text text-center pt-3" style="color: #606366">
            ${data[i].short_description.split(" ", 8)}
          </p>
        </div>
      </div>
      <div
        class="text-center d-flex justify-content-between align-items-end p-2 border border-top border-2"
        style="border-color: rgb(39, 41, 43) !important">
        <a
          href="#"
          class="text-white rounded-2 text-decoration-none p-1"
          style="
            background-color: #434446;
            font-weight: 900 !important;
          " onclick="(${data[i]})"
          >${data[i].genre}</a
        >
        <a
          href="#"
          class="text-white rounded-2 text-decoration-none p-1"
          style="
            background-color: #434446;
            font-weight: 900 !important;
          " onclick="getDetails(${i})"
          >${data[i].platform}</a
        >
      </div>
    </div>
  </div>
</div>
`
    }
    document.querySelector(".row").innerHTML = cartona;
    

    }

    getDetails(data){
                 const cartona =
                `<div class="container bg-dark position-absolute top-0 start-0 end-0 bottom-0 min-vh-100">
                    <div class="row justify-content-center align-items-center">
                            <div class="col-md-6 p-5">
                              <img class="w-100" src="${data.thumbnail}" alt="photo" />
                            </div>
                           <div class="col-md-6">
                             <div class="detail text-white p-5">
                                <h3 >Title:${data.title} </h3>
                                <p >Category: <span class="bg-primary p-1 rounded-2">${data.genre}</span></p>
                                <p>Platform: <span class="bg-primary p-1 rounded-2">${data.platform}</span ></p>
                                <p class="text-white">
                                ${data.short_description}
                                </p>
                               <a href="${data.game_url}" target="_blank" class="text-decoration-none btn btn-outline-warning">Show Details</a>
                             </div>
                           </div>
                    </div>
                </div>  `
                document.querySelector(".detail").innerHTML = cartona
                
            }
    }








