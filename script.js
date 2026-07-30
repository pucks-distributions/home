const colors = [
    "#8B0000", // dark red
    "#C62828", // strong red
    "#E65100", // orange
    "#B3541E", // burnt orange
    "#D4A017", // mustard
    "#2E7D32", // forest green
    "#00A651", // bright green
    "#00695C", // teal
    "#00ACC1", // turquoise
    "#1F3A93", // navy
    "#1565C0", // vivid blue
    "#3949AB", // indigo
    "#6A1B9A", // purple
    "#8E24AA", // violet
    "#C2185B", // magenta
    "#7B1E57", // wine
    "#5D4037", // brown
    "#424242"  // dark grey
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
