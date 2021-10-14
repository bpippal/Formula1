//Content Node
const mainContentNode = document.querySelector(".main-page");
const standingNode = document.querySelector(".current-standings");
const lastRaceNode = document.querySelector(".last-race");
const driverInfoNode = document.querySelector(".driver-info");

const paginationNode = document.querySelector(".pagination");


//Buttons
const currentStandingButton = document.querySelector(".current-standing-btn");
const mainPageButton = document.querySelector(".main-page-btn");
const lastRaceButton = document.querySelector(".last-race-btn");
const driverInfoButton = document.querySelector(".driver-info-btn");

//All Content Node 
const allContent = document.querySelectorAll(".content");
const allButton = document.querySelectorAll("div.side-nav button");

//Resetting the content on clicking any button
allButton.forEach((button) => {

    button.addEventListener("click", () =>{

        allContent.forEach((content) => {
            content.innerHTML = "";
        })
    })
})


//Load the main page when opened
mainContentNode.innerHTML += `<h2 class="display-3">Welcome to My F1 Pet Project</h2>
    This is a simple web page that shows the various information for the Formula 1 fans made using -
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
    </ul>
    
    <p class="left">
        <br><br><br><br><br>
        Designed by-
        <br>
        Bharat Kumar Pippal
        <br>
        bpippal@gmail.com
    </p>`

    fetch("http://ergast.com/api/f1/current/driverStandings.json")
    .then((resp) => resp.json())
    .then((finalResp) => {

    })

//Main Page button EVENT
mainPageButton.addEventListener("click",() =>{
    mainContentNode.innerHTML = "";

    mainContentNode.innerHTML += `<h2 class="display-3">Welcome to My F1 Pet Project</h2>
    This is a simple web page that shows the various information for the Formula 1 fans made using -
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
    </ul>
    
    <p class="left">
        <br><br><br><br><br>
        Designed by-
        <br>
        Bharat Kumar Pippal
        <br>
        bpippal@gmail.com
    </p>`
})


//Last race button 
lastRaceButton.addEventListener("click", () => {

    fetch("https://ergast.com/api/f1/current/last/results.json")
    .then((iniResp) => iniResp.json())
    .then((finalResp) => {
      

      console.log(finalResp.MRData.RaceTable.Races[0]);

      lastRaceNode.innerHTML = `
      <h4 class="container  text-center">Race Name - ${finalResp.MRData.RaceTable.Races[0].raceName}</h4>
        <hr>
        <h4 class=" text-center">Circuit Name - ${finalResp.MRData.RaceTable.Races[0].Circuit.circuitName}</h4>
        <hr>
        <h4 class=" text-center">Date - ${finalResp.MRData.RaceTable.Races[0].date}</h4>
        <hr>
        <h4 class=" text-center"><a href="${finalResp.MRData.RaceTable.Races[0].Circuit.url}">Click here to learn more about the track!</a></h4>

        <div class="main-box ">

            
            <img src="./first-rank.png" class="first-medal">
            <img src="./second-rank.png" class="second-medal">
            <img src="./third-rank.png" class="third-medal">


            <img class="${finalResp.MRData.RaceTable.Races[0].Results[0].Driver.driverId} f" >
            <img class="${finalResp.MRData.RaceTable.Races[0].Results[1].Driver.driverId} s" >
            <img class="${finalResp.MRData.RaceTable.Races[0].Results[2].Driver.driverId} t" >


        </div>
      `;

    });

})

//Current Standing button EVENT
currentStandingButton.addEventListener("click", () =>{

    fetch("http://ergast.com/api/f1/current/driverStandings.json")
        .then((resp) => resp.json())
        .then((finalResp) => {

            standingNode.innerHTML +=`<div class="flex-class"><img class= "${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId} first">
            <img class="second ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.driverId}">
            <img class="third ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.driverId}">
            </div>` ;

            standingNode.innerHTML += `<br><br>
            <h5 class="display-5">Top 10 standings are -<h5> 
            <ol>
            <li id="first">${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName}</li>
            <li id="second">${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.familyName}</li>
            <li id="third">${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.familyName}</li>
            <li>${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.familyName}</li>
            <li>${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName}</li>
            <li>${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.familyName}</li>
            <li>${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.familyName}</li>
            <li>${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.familyName}</li>
            <li>${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Driver.familyName}</li>
            <li>${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Driver.familyName}</li>

            <ol>
            `

            console.log(finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[3]);
        });
    

    
})


//Driver Info Button Event
driverInfoButton.addEventListener("click",() => {

    alert("Please wait 10 seconds for the page to load!");

    //Load Layout first!
    driverInfoNode.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top " >
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text"><strong>Team Name : </strong>  </p>
      <p class="card-text"><strong>Current Points : </strong>  </p>
      <p class="card-text"><strong>Wins : </strong>  </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Nationality :  </li>
      <li class="list-group-item">Permanent Number : </li>
    </ul>
    <div class="card-body">
      <a href="" class="card-link">Click here for more Info!</a>
    </div>
  </div>`


    //Fill the first layout with Info!

    fetch("http://ergast.com/api/f1/current/driverStandings.json")
    .then((resp) => resp.json())
    .then((finalResp) => {

        driverInfoNode.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId}" >
        <div class="card-body">
          <h5 class="card-title">${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName}</h5>
          <p class="card-text"><strong>Team Name : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name}  </p>
          <p class="card-text"><strong>Current Points : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points} </p>
          <p class="card-text"><strong>Wins : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].wins} </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nationality : ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality} </li>
          <li class="list-group-item">Permanent Number : ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.permanentNumber}</li>
        </ul>
        <div class="card-body">
          <a href="${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.url}" class="card-link">Click here for more Info!</a>
        </div>
      </div>`

    })




    setTimeout(() =>{

    //Load the pagination
    driverInfoNode.innerHTML += `
    <button class="btn btn-primary prev mt-5 ">Previous</button>
    `;
  
    for(let i=1; i<=21; i++){
      driverInfoNode.innerHTML += `
      <button class="btn nav-nums mt-5">${i}</button>
      `;
    };
  
    driverInfoNode.innerHTML += `
    <button class="btn btn-primary next mt-5">Next</button>
    `;

    let nextButton = document.querySelector(".next");
    let prevButton = document.querySelector(".prev");
    let navNumButton = document.querySelectorAll(".nav-nums");
    
    // Making the previous button disabled
    prevButton.disabled = true;

    let currPageNo = 0;

    const changeContentDivNode = document.querySelector(".card");

    navNumButton.forEach((but) =>{

        let pageNo = parseInt(but.innerHTML) - 1;
        

        but.addEventListener("click", () =>{

        currPageNo = parseInt(but.innerHTML) - 1;

        if((pageNo + 1) > 1)
        prevButton.disabled = false;

        else
        prevButton.disabled = true;

        if((pageNo + 1) == 21)
        nextButton.disabled = true;

        else
        nextButton.disabled = false;

        navNumButton.forEach((newBut) => {
          newBut.classList.remove("btn-danger");
        })

        but.classList.add("btn-danger");
    
        
        
        fetch("http://ergast.com/api/f1/current/driverStandings.json")
        .then((resp) => resp.json())
        .then((finalResp) => {

        changeContentDivNode.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[pageNo].Driver.driverId}" >
        <div class="card-body">
          <h5 class="card-title">${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[pageNo].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[pageNo].Driver.familyName}</h5>
          <p class="card-text"><strong>Team Name : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[pageNo].Constructors[0].name}  </p>
          <p class="card-text"><strong>Current Points : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[pageNo].points} </p>
          <p class="card-text"><strong>Wins : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[pageNo].wins} </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nationality : ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[pageNo].Driver.nationality} </li>
          <li class="list-group-item">Permanent Number : ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[pageNo].Driver.permanentNumber}</li>
        </ul>
        <div class="card-body">
          <a href="${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[pageNo].Driver.url}" class="card-link">Click here for more Info!</a>
        </div>
      </div>
        `;        

    })




        })
    })

    //Next Button Functionality
    nextButton.addEventListener("click",() => {
      
      if((currPageNo + 1) > 1)
        prevButton.disabled = false;

        else
        prevButton.disabled = true;

        if((currPageNo + 1) == 20)
        nextButton.disabled = true;

        else
        nextButton.disabled = false;


      currPageNo ++;

      navNumButton.forEach((newBut) => {
        newBut.classList.remove("btn-danger");

        if(newBut.innerHTML == currPageNo + 1)
          newBut.classList.add("btn-danger");
      })

      fetch("http://ergast.com/api/f1/current/driverStandings.json")
      .then((resp) => resp.json())
      .then((finalResp) => {

        changeContentDivNode.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.driverId}" >
        <div class="card-body">
          <h5 class="card-title">${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.familyName}</h5>
          <p class="card-text"><strong>Team Name : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Constructors[0].name}  </p>
          <p class="card-text"><strong>Current Points : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].points} </p>
          <p class="card-text"><strong>Wins : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].wins} </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nationality : ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.nationality} </li>
          <li class="list-group-item">Permanent Number : ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.permanentNumber}</li>
        </ul>
        <div class="card-body">
          <a href="${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.url}" class="card-link">Click here for more Info!</a>
        </div>
      </div>
        `;

      })


    });
    
    //Previous Button Functionality
    prevButton.addEventListener("click",() => {
      
      if((currPageNo + 1) > 1)
        prevButton.disabled = false;

        else
        prevButton.disabled = true;

        if((currPageNo + 1) == 21)
        nextButton.disabled = true;

        else
        nextButton.disabled = false;


      currPageNo --;

      navNumButton.forEach((newBut) => {
        newBut.classList.remove("btn-danger");

        if(newBut.innerHTML == currPageNo + 1)
          newBut.classList.add("btn-danger");
      })

      fetch("http://ergast.com/api/f1/current/driverStandings.json")
      .then((resp) => resp.json())
      .then((finalResp) => {

        changeContentDivNode.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.driverId}" >
        <div class="card-body">
          <h5 class="card-title">${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.givenName} ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.familyName}</h5>
          <p class="card-text"><strong>Team Name : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Constructors[0].name}  </p>
          <p class="card-text"><strong>Current Points : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].points} </p>
          <p class="card-text"><strong>Wins : </strong> ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].wins} </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nationality : ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.nationality} </li>
          <li class="list-group-item">Permanent Number : ${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.permanentNumber}</li>
        </ul>
        <div class="card-body">
          <a href="${finalResp.MRData.StandingsTable.StandingsLists[0].DriverStandings[currPageNo].Driver.url}" class="card-link">Click here for more Info!</a>
        </div>
      </div>
        `;

      })


    });




    }, 6000);
    
    
})

