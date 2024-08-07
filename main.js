const userInput = document.getElementById("userInput");
const allElem = document.querySelectorAll(".output > div");
const fileItems = document.querySelectorAll(".file-button");

// focus on input on start
document.addEventListener("DOMContentLoaded", function() {
    userInput.focus();
});


// get input
userInput.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        e.preventDefault();
        const value = userInput.value;

        allElem.forEach(elem => elem.style.display = "none");
        const elem = document.getElementById(value);
        elem.style.display = "block";
    }
});

fileItems.forEach(item => {
    item.addEventListener("click", function() {
        userInput.value = this.textContent.trim();
        userInput.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
    });
});
