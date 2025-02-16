function doubleClick() {
    document.getElementById("dblClickElement").addEventListener("dblclick", function() {
        this.textContent = "You double-clicked me!";
        this.style.backgroundColor = "lightgreen";
    });
}

document.addEventListener("DOMContentLoaded", doubleClick);