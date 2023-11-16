const renderRandomGif = async () => {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=4LrG3aSH8VrRGOXc3TMlxZL5c8hpI1h3&tag=&rating=g"
  );
  const gifs = await response.json();

  const src = gifs.data.images.fixed_height.url;

  const imgEl = document.querySelector("#random-gif");
  imgEl.setAttribute("src", src);
};

renderRandomGif();

const btn = document.querySelector("#fetch-random-gif-btn");
btn.addEventListener("click", renderRandomGif);

// Display a GIF based on user input

const searchInput = document.getElementById("searchInput");
const generateButton = document.getElementById("generateButton");
const gifContainer = document.getElementById("gifContainer");

generateButton.addEventListener("click", () => {
  const userInput = searchInput.value;
  fetchRandomGif(userInput);
});

async function fetchRandomGif(keyword) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=4LrG3aSH8VrRGOXc3TMlxZL5c8hpI1h3&s=${keyword}&weirdness=5`
  );
  const data = await response.json();

  if (data.data && data.data.images.fixed_height.url) {
    const imageUrl = data.data.images.fixed_height.url;
    gifContainer.innerHTML = `<img src="${imageUrl}" alt="Random GIF">`;
  } else {
    gifContainer.innerHTML = "<p>No GIF found.</p>";
  }
}
