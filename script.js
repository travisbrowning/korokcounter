let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
    count += 1
    countEl.textContent = count;
}

function reset() {
    count = 0;
    countEl.textContent = 0;
}

function easteregg() {
    if (count >= 900) {
        alert("YA HA HA, YOU FOUND ALL THE KOROKS, HERE'S A PRIZE 💩");
        document.getElementById("prize").style.visibility = "visible";
    }
}