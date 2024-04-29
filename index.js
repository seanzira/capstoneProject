//save button 1 for capturing a heading as well as a paragraph where the button is located
const button1 = document.querySelector("#save-button-1");
button1.addEventListener("click", (e) => {
  let button1 = e.target.parentNode;
  let title = button1.querySelector("h2").innerText;
  let body = button1.querySelector("p").innerText;

  let savedItem1 = {
    title: title,
    body: body,
  };

  if (typeof Storage !== "undefined") {
    let savedText = JSON.parse(sessionStorage.getItem("savedText")) || [];
    savedText.push(savedItem1);
    sessionStorage.setItem("savedText", JSON.stringify(savedText));

    //function for the number within the alert that increments when each save-button is clicked.
    let storedCount = sessionStorage.getItem("storedCount");
    storedCount = parseInt(storedCount) || 0;
    storedCount++;

    sessionStorage.setItem("storedCount", storedCount);

    alert(
      "Item saved.\n" + "You have " + storedCount + " items saved for later."
    );

    displaySavedText();
  } else {
    alert(
      "Information has not been stored because the session storage is not supported"
    );
  }
});

//save button 4 for capturing the paragraph as well as the text within the hyperlink.
const button4 = document.querySelector("#save-button-4");
button4.addEventListener("click", (e) => {
  let button4 = e.target.parentNode;
  let title = button4.querySelector("p").innerText;
  let body = button4.querySelector("a").innerText;

  let savedItem4 = {
    title: title,
    body: body,
  };

  if (typeof Storage !== "undefined") {
    let savedText = JSON.parse(sessionStorage.getItem("savedText")) || [];
    savedText.push(savedItem4);
    sessionStorage.setItem("savedText", JSON.stringify(savedText));

    let storedCount = sessionStorage.getItem("storedCount");
    storedCount = parseInt(storedCount) || 0;
    storedCount++;

    sessionStorage.setItem("storedCount", storedCount);

    alert(
      "Item saved.\n" + "You have " + storedCount + " items saved for later."
    );

    displaySavedText();
  } else {
    alert(
      "Information has not been stored because the session storage is not supported"
    );
  }
});

//initialising the status of each item to be like
let likeStatus = {
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
}

//initialising the like count of each item to be like
let likeCount = {
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
    item5: 0,
}

//function for liking and unliking items
function likeItem(itemId) {
    likeStatus[itemId] = !likeStatus[itemId];

    if (likeStatus[itemId]) {
        likeCount[itemId]++;
    } else {
        likeCount[itemId]--;
    }

    document.getElementById(itemId + "-like-count").textContent = likeCount[itemId];
}

//function for storing images within the session storage
document.getElementById("save-button-3").addEventListener("click", function() {
  let savedImages = {};
  let imageIds = ["contain-item-5", "contain-item-6", "contain-item-7", "contain-item-8", "contain-item-9"];

  imageIds.forEach(function(id) {
    let imageElement = document.getElementById(id);
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    context.drawImage(imageElement, 0, 0);
    savedImages[id] = canvas.toDataURL("image/png");
  });

  sessionStorage.setItem("savedImages", JSON.stringify(savedImages));

  let storedCount = sessionStorage.getItem("storedCount");
  storedCount = parseInt(storedCount) || 0;
  storedCount++;

  sessionStorage.setItem("storedCount", storedCount);
  alert(
    "Item saved.\n" + "You have " + storedCount + " items saved for later."
  );
  displaySaveImage();
})