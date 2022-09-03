const btnSubmit = document.querySelector(".btn button");
const form = document.querySelector("form");
const btnsValue = document.querySelectorAll(".numbers button");
const container = document.querySelector(".min-container");
const main = document.querySelector("main");
let valorBtn;
let maxContainer;
recorrerElementos();
form.addEventListener("submit", (e) => {
        if (valorBtn) {
            container.remove();
            createHTML();
            seccionPhrases();
        }else{
                e.preventDefault();
                alert("Please Select Your Rating");
        }

})
function recorrerElementos() {
        btnsValue.forEach(valor => {
                valor.onclick = function () {
                        valorBtn = valor.textContent;
                }
        });
}
function createHTML() {
        maxContainer = document.createElement("div");
        const img = document.createElement("img");
        img.src = "./img/illustration-thank-you.svg";
        img.alt = "illustration-thank-you";
        maxContainer.classList.add("max-container");
        main.appendChild(maxContainer);
        maxContainer.appendChild(img);
}
function seccionPhrases() {
        const parrafo = document.createElement("p");
        const parrafo2 = document.createElement("p");
        const h1 = document.createElement("h1");
        h1.textContent = "Than You";
        parrafo.textContent = `You Selected ${valorBtn} out of 5`;
        parrafo2.textContent = "We Appreciate you taking the time to give a rating if you ever need more support, i dont hesilate to get in touch!";
        parrafo.classList.add("phrase-thankyou");
        maxContainer.appendChild(parrafo);
        maxContainer.appendChild(h1);
        maxContainer.appendChild(parrafo2);
}


