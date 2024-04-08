// Get all images with class 'clickable-img'
const clickableImages = document.querySelectorAll(".clickable-img");

// Add click event listener to each image
clickableImages.forEach((img) => {
  img.addEventListener("click", function () {
    // Get the source of the clicked image
    const src = this.src;

    // Open a new window and navigate to page2.html passing the image source as a query parameter
    window.open("page2.html?src=" + encodeURIComponent(src), "_blank");
  });
});
