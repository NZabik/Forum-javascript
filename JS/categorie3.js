let newObject = localStorage.getItem("informations");
let info = JSON.parse(newObject);
let newDate = localStorage.getItem("Date");
let dateConnex = JSON.parse(newDate);
let btn = document.getElementById("btn")
let i = 0;

document.getElementById("prenom").innerHTML = info["prenom"];
document.getElementById("date").innerHTML = dateConnex["date"];
document.getElementById("heure").innerHTML = dateConnex["heure"];

function addRow() {
    let table = document.getElementById("tableBody");
    i++
    let Date2 = new Date();
    let dateNow = Date2.toLocaleDateString();
    let heureNow = Date2.toLocaleTimeString();
    let sujet = document.getElementById("sujet").value;
    let row = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");
    let c5 = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "Discussion";
    button.id = i;
    button.style.backgroundColor = "#00A3FF";
    button.style.color = "white";
    button.classList = "buttonTable";
    c1.innerText = i;
    c2.innerText = sujet;
    c3.innerText = dateNow + " " + heureNow;
    c4.innerText = info["nom"] + " " + info["prenom"];
    c5 = button;
    document.getElementById("sujet").value = "";
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    table.appendChild(row);
    let sujetObj = new Object();
    let titre = "titre";
    sujetObj[titre] = sujet;
    localStorage.setItem("sujet", JSON.stringify(sujetObj));
   
    let btna = document.getElementById(i);
    btna.addEventListener("click", page)

}

function page() {
    
    document.location.href = "../HTML/sujet.html"

};


btn.addEventListener("click", addRow);


