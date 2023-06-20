function openModal() {
    document.querySelector(".modal-bg").style.display = "flex";
}

function closeModal() {
    document.querySelector(".modal-bg").style.display = "none";
}

document.getElementById("chart").addEventListener("click", openModal);
document.querySelector(".close").addEventListener("click", closeModal);