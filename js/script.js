let playerOneName = document.querySelector(".pl-one");
let buttonOneName = document.querySelector(".pl-one-name");
let buttonOneData = document.querySelector(".pl-one-data");
let playerOne = document.querySelector(".name-one")
let playerTwo = document.querySelector(".name-two")
let playerOneNumber = document.querySelector(".input-one")
let buttonTwoName = document.querySelector(".pl-two-name");
let buttonTwoData = document.querySelector(".pl-two-data");
let activePlayerOne = document.querySelector(".pl-one-display");
let activePlayerTwo = document.querySelector(".pl-two-display");
let playerTwoName = document.querySelector(".pl-two");
let key = document.querySelector(".secret-key");
let guessKey = document.querySelector(".guess-key");
let error = document.querySelector("p");
let result = document.querySelector(".result");

buttonOneName.addEventListener("click", function() {
    let name = playerOneName.value;
    displayNone(playerOne);
    activePlayerOne.innerHTML = name;
    buttonOneData.addEventListener("click", function() {
        let secretKey = key.value;
        if (secretKey <= 10 && secretKey > 0) {
            displayNone(playerOneNumber);
            buttonTwoName.addEventListener("click", () => {
                let name = playerTwoName.value;
                displayNone(playerTwo);
                activePlayerTwo.innerHTML = name;
                buttonTwoData.addEventListener("click", () => {
                    let guessNumber = guessKey.value;
                    if (secretKey == guessNumber) {
                        result.innerHTML = "Player two won";
                    } else {
                        result.innerHTML = "player one won";
                    }
                })

            })
        } else {
            error.innerHTML = "Please Enter an Number Between 0 to 10";
        }
    })
})



function displayNone(val) {
    val.style.display = "none";
}