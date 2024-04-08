console.log('Getting the data')
document.addEventListener("DOMContentLoaded", function() {
    // Select the element(s) with the class "remove-me"
    const elementsToRemove = document.querySelectorAll(".watermark--I7hl78e");
    
    // Loop through each selected element and remove it
    elementsToRemove.forEach(function(element) {
        element.remove();
    });
});