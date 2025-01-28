"use script";

// Generér et tilfældigt tal og vis det i konsollen
getRandoNumber();

function getRandoNumber() {
    //laver en kinstant variabel som jeg kalder randoNum
    const randoNum = Math.round(Math.random() * 100);
    //jeg tjekker om det virker med konsollen. (Og så kan jeg også hurtigere se hvad nummeret er, så jeg ikke skal bruge lang tid på at gætte hahaha)
    console.log("Random number:", randoNum);

    //Jeg laver en knap, som skal lave en handling når der klikkes. og som føre ned til evaluateTextfield.
    document.querySelector("button").addEventListener("click", evaluateTextfield);

    //Her vises der hvad der skal ske inde i evalutaeTextfield, som er handlingen på knappen.
    function evaluateTextfield() {
        //der laves en konstanm variabel ved navn userGuess. Jeg laver userGuess om til et number så det bliver samme værdi. 
        const userGuess = Number(document.querySelector(".randoNum").value);
        //konstant variabel der hedder feedback. 
        const feedback = document.getElementById("feedback");

        // der tjekkes om værdien er den samme på begge sider. Hvis tallet de gættede er det samme som random number, har de vundet og gættet rigtigt. 
        if (userGuess === randoNum) {
            //Variablen feedback tilføjer textContent 
            feedback.textContent = "YAYYYY! Du gættede rigtigt!";
            //den laver farven om til grøn
            feedback.style.color = "green";
            //den tilføjer en celebration, som man kan se i CSS hvad er. 
            feedback.className = "celebration";
            //Hvis userGuess er mindre end random number er det for lavt
        } else if (userGuess < randoNum) {
            //her tilføjes en ny textContent
            feedback.textContent = "For lavt! Prøv igen.";
            //Der tilføjes en rød farve 
            feedback.style.color = "red";
            //og her er fjernes className, da den er tom.
            feedback.className = "";
            //hvis ingen af overstående er korrekt vises denne:
        } else {
            feedback.textContent = "For højt! Prøv igen.";
            feedback.style.color = "red";
            feedback.className = "";
        }
    }
}