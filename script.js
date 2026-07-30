const colors = [
    "#8B0000",
    "#8B0000",
    "#1F3A93",
    "#1F3A93",
    "#2E7D32",
    "#2E7D32",
    "#00695C",
    "#00695C",
    "#6A1B9A",
    "#6A1B9A",
    "#7B1E57",
    "#7B1E57",
    "#5D4037",
    "#5D4037",
    "#424242",
    "#424242",
    "#B3541E",
    "#B3541E",
    "#C62828",
    "#E65100",
    "#D4A017",
    "#00A651",
    "#00ACC1",
    "#1565C0",
    "#3949AB",
    "#8E24AA",
    "#C2185B"
];

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function colorLetters(element) {
    const text = element.textContent;
    element.innerHTML = "";

    for (const character of text) {
        const span = document.createElement("span");
        span.textContent = character;

        if (character !== " ") {
            span.style.color = randomColor();
            span.style.transition = "color 0.25s ease";
            span.style.display = "inline";

            span.addEventListener("mouseenter", function () {
                span.style.color = randomColor();
            });
        }

        element.appendChild(span);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("h1, h2, p, a").forEach(function (element) {
        colorLetters(element);
    });
});
