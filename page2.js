// Get the query parameter 'src' from the URL
const urlParams = new URLSearchParams(window.location.search);
const src = urlParams.get("src");

// Set the source of the displayed image
let displayedImg = document.getElementById("displayed-img");
displayedImg.src = src;
$(document).ready(function () {
  $("#display-btn").on("click", function () {
    $("#par-name").text($("#input-field").val());
  });

  $("#download-btn").on("click", function () {
    var node = document.getElementById("eid-card");
    var scale = 2;

    domtoimage
      .toBlob(node, {
        width: node.clientWidth * scale,
        height: node.clientHeight * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left",
        },
      })
      .then(function (blob) {
        // Create a temporary anchor element to trigger the download
        var downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "downloaded_image.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      })
      .catch(function (error) {
        console.error("Error generating image: ", error);
      });
  });

  let whiteColor = document.getElementById("whiteColor");
  let blackColor = document.getElementById("blackColor");
  let parName = document.getElementById("par-name");

  whiteColor.onclick = function () {
    parName.style.color = "white";
  };

  blackColor.onclick = function () {
    parName.style.color = "black";
  };
});
