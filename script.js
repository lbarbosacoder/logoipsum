const tracker = document.querySelector(".tracker");
document.body.addEventListener("mousemove", e => {
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
});

function abrirPopup() {
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.close');

    popup.style.height = '100vh';
    popup.style.opacity = '1';
    closeButton.style.opacity = '1';

    closeButton.addEventListener('click', function() {
        popup.style.height = '0vh';
        popup.style.opacity = '0';
        closeButton.style.opacity = '0';
    });
}