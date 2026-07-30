const colors = [
    "#8B0000", // dark red
    "#1F3A93", // deep blue
    "#2E7D32", // forest green
    "#6A1B9A", // purple
    "#B3541E", // burnt orange
    "#00695C", // teal
    "#7B1E57", // dark magenta
    "#5D4037"  // brown
];

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
