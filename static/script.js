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

const hintBtn = document.getElementById("hint");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("status");

if (hintBtn && modal) {
    hintBtn.addEventListener("click", () => modal.classList.add("open"));
}
if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
}
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("open");
    });
}

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        statusMsg.textContent = "Sending...";
        try {
            const res = await fetch("https://formsubmit.co/ajax//clintonwilfred960@gmail.com", {
                method: "POST",
                body: new FormData(form),
                headers: { "Accept": "application/json" }
            });
            statusMsg.textContent = res.ok ? "Message sent. Thank you!" : "Something went wrong. Try again.";
            if (res.ok) form.reset();
        } catch {
            statusMsg.textContent = "Network error. Try again.";
        }
    });
}