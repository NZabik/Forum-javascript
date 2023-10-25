let newObject = localStorage.getItem("informations");
let info = JSON.parse(newObject);
let newDate = localStorage.getItem("Date");
let dateConnex = JSON.parse(newDate);

document.getElementById("prenom").innerHTML = info["prenom"];
document.getElementById("date").innerHTML = dateConnex["date"];
document.getElementById("heure").innerHTML = dateConnex["heure"];
document.getElementById("prenom2").innerHTML = info["prenom"];
document.getElementById("date2").innerHTML = dateConnex["date"];
document.getElementById("heure2").innerHTML = dateConnex["heure"];