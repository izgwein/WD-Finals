const str = "GWYNETH A. GEVERO FINAL PROJECT ";
const text = document.getElementById("text");
window.onload = function() {
    for (let i = 0; i < str.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = str[i];
        text.appendChild(span);
        span.style.transform = `rotate(${360 / str.length * i}deg) translate(0, -220px)`;
    }
}
