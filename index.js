document.querySelector("#main").remove();

const newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory");


const champ = document.createElement("p")
champ.innerHTML = "YOUR-NAME is the champion"

newHeader.appendChild(champ)