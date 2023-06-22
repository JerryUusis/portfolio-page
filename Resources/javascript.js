// Get all the li elements with the "project-item" class

const projectItems = document.querySelectorAll(".project-item");

// Attach event listener to each li element

projectItems.forEach(function(item) {
    item.addEventListener("click", function() {
        // Find the corresponding info card
        const infoCard = item.nextElementSibling;

        // Toggle the display property of the info card
        infoCard.style.display = (infoCard.style.display === "none") ? "block" : "none";
    });
})