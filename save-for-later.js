//function for adding the stored information into the div element called "view-saved"
function displaySavedText() {
  let viewSaved = document.getElementById("view-saved");
  viewSaved.innerHTML = "";

  let savedText = JSON.parse(sessionStorage.getItem("savedText")) || [];
  savedText.forEach(function (savedItem1) {
    let createElement = document.createElement("div");
    createElement.innerHTML = `<p><strong>The title of the saved item:</strong>${savedItem1.title}</p>
            <p><strong>The body of the saved item:</strong>${savedItem1.body}</p>`;

    viewSaved.appendChild(createElement);
  });
}

//function for saving images for later
function displaySaveImage() {
  let imageUrls = JSON.parse(sessionStorage.getItem("savedImages"));
  let savedImages = document.getElementById("saved-images");

  for (let key in imageUrls) {
    if (imageUrls.hasOwnProperty(key)) {
      let imageElement = document.createElement("img");
      imageElement.setAttribute("src", imageUrls[key]);
      savedImages.appendChild(imageElement);
    }
  }
}

window.onload = function () {
  displaySaveImage();
  displaySavedText();
};
