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
    // Get the table body element in which you want to add row
    let table = document.getElementById("tableBody");
    i++
    let Date2 = new Date();
    let dateNow = Date2.toLocaleDateString();
    let heureNow = Date2.toLocaleTimeString();
    let sujet = document.getElementById("sujet").value;
    // Create row element
    let row = document.createElement("tr");

    // Create cells
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");
    let c5 = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "+";
    button.id = i;
    button.classList = "buttonTable";
    
    // Insert data to cells
    c1.innerText = i;
    c2.innerText = sujet;
    c3.innerText = dateNow + " " + heureNow;
    c4.innerText = info["nom"] + " " + info["prenom"];
    c5 = button;
    document.getElementById("sujet").value = "";

    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);

    // Append row to table body
    table.appendChild(row);
    let btna = document.getElementById(i);
    btna.addEventListener("click", montrer)
}
function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.id = "div"+i;
    // add the newly created element and its content into the DOM
    newDiv.style.color = 'black';
    newDiv.textContent = 'Hello world';
    newDiv.style.backgroundColor = 'salmon';
    newDiv.style.display = "none";
    const box = document.getElementById('box');
    box.appendChild(newDiv);
}
function montrer() {
    let element = document.getElementById("div1");
    element.style.display = "block"
};


btn.addEventListener("click", addRow);
btn.addEventListener("click", addElement);


