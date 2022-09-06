const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
//remember to put API addresses in quotes, or the double slash will turn your link into a comment.
    selectRandomImage(images);
};


const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    displayImage(randomImage);
};

const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
    getImage();
});


// Click the button to see a random image. You may need to allow a few seconds for the images to appear. Press it again to reveal another!
// In the command line, add and commit your changes. Push the changes up to GitHub.
// Copy the link to your repo and submit it below.💥 BOOM💥 You did it, Skillcrusher!