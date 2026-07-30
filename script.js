const colors = [
    "#8B0000", // dark red
    "#1F3A93", // navy
    "#2E7D32", // forest green
    "#6A1B9A", // purple
    "#B3541E", // burnt orange
    "#00695C", // teal
    "#7B1E57", // dark magenta
    "#5D4037"  // brown
];

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function colorLetters(element) {
    const text = element.textContent;
    element.innerHTML = "";

    for (const char of text) {
        const span = document.createElement("span");
        span.textContent = char;

        if (char !== " ") {
            span.style.color = randomColor();
        }

        element.appendChild(span);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("h1, h2, p, a").forEach(colorLetters);
});
