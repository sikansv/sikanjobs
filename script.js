document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    let direction = 1;
    setInterval(() => {
        title.style.transform = `translateX(${direction * 10}px)`;
        direction *= -1;
    }, 1000);
});

function navigate(section) {
    alert(`Navegando a ${section}`);
}
