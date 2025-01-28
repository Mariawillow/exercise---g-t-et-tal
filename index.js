"use script";

// Generér et tilfældigt tal og vis det i konsollen
getRandoNumber();

function getRandoNumber() {
    const randoNum = Math.round(Math.random() * 100);
    console.log("Random number:", randoNum);

    document.querySelector("button").addEventListener("click", evaluateTextfield);

    function evaluateTextfield() {
        const userGuess = Number(document.querySelector(".randoNum").value);
        const feedback = document.getElementById("feedback");

        if (userGuess === randoNum) {
            feedback.textContent = "YAYYYY! Du gættede rigtigt!";
            feedback.style.color = "green";
            feedback.className = "celebration"; // Tilføj fejringseffekt
        } else if (userGuess < randoNum) {
            feedback.textContent = "For lavt! Prøv igen.";
            feedback.style.color = "red";
            feedback.className = ""; // Fjern fejring
        } else {
            feedback.textContent = "For højt! Prøv igen.";
            feedback.style.color = "red";
            feedback.className = ""; // Fjern fejring
        }
    }
}