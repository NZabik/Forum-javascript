let deco = document.getElementById("deco");
let deco2 = document.getElementById("deco2");
deco.addEventListener("click", function(e){
    localStorage.removeItem("Date");
e.preventDefault()
});
deco2.addEventListener("click", function (e) {
    if (localStorage.getItem("Date") == null) {
        alert("Veuillez vous connecter");
        e.preventDefault();
    } else {
        document.location.href = "./HTML/forum.html";
        e.preventDefault();
    };
});

