/********** Homework 1 **********/


let studenti = [];

let ime = document.getElementById("firstName");
let prezime = document.getElementById("lastName");
let godine = document.getElementById("age");
let email = document.getElementById("mail");
let dugme = document.getElementById("btn");
let spisak = document.getElementById("list");


function clearInput() {
    ime.value = "";
    prezime.value = "";
    godine.value = "";
    email.value = "";
}

dugme.addEventListener("click", function() {
    let student = {
        ime: ime.value,
        prezime: prezime.value,
        godine: godine.value,
        email: email.value
    }
    studenti.push(student);
    console.log(studenti);
    clearInput();
    spisakStudenata();
});

spisakStudenata = () => {
        spisak.innerHTML = "";
        for(let i = 0; i < studenti.length; i++) 
        let element = document.createElement("div");
        element.innerHTML = `<h2>${studenti[i].ime} ${studenti[i].prezime}</h2>
        <p>Godine: ${studenti[i].godine}</p>
        <p>Email: ${studenti[i].email}</p>`;
        spisak.appendChild(element);
        console.log(element);
    }
}

/********** Homework 2 **********/


function searchBtn() {
    let movieTitle = document.getElementById("userInput").value;
    movieTitle = movieTitle.toLowerCase();
    let movies = ["film1", "film2", "film3"];
    let moviesOn = document.getElementById("messageOn");
    let moviesOff = document.getElementById("messageOff");
    
    moviesOn.style.color = "green";
    moviesOff.style.color = "red";
    
    if(movies.includes(movieTitle)) {
      moviesOn.textContent = `${movieTitle} is available for renting!`;
    } else 
      moviesOff.textContent = `${movieTitle} is not available for renting!`;
      console.log(movieTitle);
    }













