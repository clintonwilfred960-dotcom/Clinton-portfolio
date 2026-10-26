const words = ["Web Developer", "Graphic Designer"];
let w = 0, c = 0, deleting = false;
const el = document.getElementById("typing");

function type() {
    const word = words[w];
    el.textContent = word.slice(0, c);

    if (!deleting && c < word.length) {
        c++;
    } else if (!deleting) {
        deleting = true;
        setTimeout(type, 1200);
        return;
    } else if (c > 0) {
        c--;
    } else {
        deleting = false;
        w = (w + 1) % words.length;
    }
    setTimeout(type, deleting ? 60 : 110);
}

type();