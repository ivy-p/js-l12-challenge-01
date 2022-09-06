const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100.");
    const images = await res.json();
//remember to put API addresses in quotes, or the double slash will turn your link into a comment.
    console.log(images);
};

getImage();



