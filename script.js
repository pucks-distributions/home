const colors = [
const colors = [
    // --- Muted colours (weighted by repetition)

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

    // --- Bright accents

    "#C62828", // vivid red
    "#E65100", // orange
    "#D4A017", // mustard
    "#00A651", // bright green
    "#00ACC1", // turquoise
    "#1565C0", // vivid blue
    "#3949AB", // indigo
    "#8E24AA", // violet
    "#C2185B"  // magenta
];];

function randomColor(previousColor = null) {
    let newColor;

    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === previousColor && colors.length > 1);

    return newColor;
}

function colorLetters(element) {
    const text = element.textContent;
    element.innerHTML = "";

    let previousColor = null;

    for (const character of text) {
        const span = document.createElement("span");
        span.textContent = character;

        if (character !== " ") {
            const startingColor = randomColor(previousColor);

            span.style.color = startingColor;
            span.style.transition = "color 0.25s ease";
            span.style.display = "inline-block";

            span.addEventListener("mouseenter", () => {
                span.style.color = randomColor(span.style.color);
            });

            previousColor = startingColor;
        }

        element.appendChild(span);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document
        .querySelectorAll("h1, h2, p, a")
        .forEach(colorLetters);
});
