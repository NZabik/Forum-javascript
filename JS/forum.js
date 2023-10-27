let deco = document.getElementById("deco");
deco.addEventListener("click", function(e){
    localStorage.removeItem("Date");
    document.location.href = "../index.html"
e.preventDefault()
})
deco2.addEventListener("click", function (e) {
    if (localStorage.getItem("Date") == null) {
        alert("Veuillez vous connecter");
        e.preventDefault();
    } else {
        document.location.href = "../HTML/forum.html";
        e.preventDefault();
    };
});
let newDate = localStorage.getItem("Date");
let dateConnex = JSON.parse(newDate);
let btn = document.getElementById("btn")
let i = 0;

document.getElementById("prenom").innerHTML = dateConnex["prenom"];
document.getElementById("date").innerHTML = dateConnex["date"];
document.getElementById("heure").innerHTML = dateConnex["heure"];