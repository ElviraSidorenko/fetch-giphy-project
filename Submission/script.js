const renderRandomGif = async () => {
  // TODO: Make a fetch request to the Giphy API to get a random GIF
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=4LrG3aSH8VrRGOXc3TMlxZL5c8hpI1h3&tag=&rating=g"
  );
  const gifs = await response.json();

  // TODO: Update the 'src' variable below to be a URL to a GIF from the Giphy API
  const src = gifs.data.images.fixed_height.url;

  // Update the existing <img> tag with the new src
  const imgEl = document.querySelector("#random-gif");
  imgEl.setAttribute("src", src);
};

// Display a random GIF when the page loads
renderRandomGif();

// Display a random GIF when the button is clicked
const btn = document.querySelector("#fetch-random-gif-btn");
btn.addEventListener("click", renderRandomGif);

// Part C - Display a GIF based on user input
// Display a form, where the user can enter their mood into a text input. When the form is submitted, display a GIF that relates to their mood.

// Select elements from HTML - input, button, div container for gif
const searchInput = document.getElementById("searchInput");
const generateButton = document.getElementById("generateButton");
const gifContainer = document.getElementById("gifContainer");

// Add an event listener to button and a callback function
generateButton.addEventListener("click", () => {
  const userInput = searchInput.value;
  fetchRandomGif(userInput);
});

// Declare a callback function
async function fetchRandomGif(keyword) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=4LrG3aSH8VrRGOXc3TMlxZL5c8hpI1h3&s=${keyword}&weirdness=5`
  );
  const data = await response.json();

  // Use console.log to see the data structure
  // console.log(data);

  // Execute or show an error message
  if (data.data && data.data.images.fixed_height.url) {
    const imageUrl = data.data.images.fixed_height.url;
    gifContainer.innerHTML = `<img src="${imageUrl}" alt="Random GIF">`;
  } else {
    gifContainer.innerHTML = "<p>No GIF found.</p>";
  }
}
