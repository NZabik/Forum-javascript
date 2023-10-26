let sujetObject = localStorage.getItem("sujet");
let sujet = JSON.parse(sujetObject);
let newObject = localStorage.getItem("informations");
let info = JSON.parse(newObject);
let newDate = localStorage.getItem("Date");
let dateConnex = JSON.parse(newDate);

document.getElementById("prenom").innerHTML = info["prenom"];
document.getElementById("date").innerHTML = dateConnex["date"];
document.getElementById("heure").innerHTML = dateConnex["heure"];
document.getElementById("register-title").innerHTML = sujet["titre"];
