function loadRandomDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((data) => data.json())
    .then((res) => {
      if (res.status !== "success") {
        return;
      }

      const imgSrc = res.message;

      document.querySelector(".js-img").innerHTML = `
        <img 
            src='${res.message}'
            width='500'>
        `;
    });
}

loadRandomDogImage();

document
  .querySelector(".reload-btn")
  .addEventListener("click", loadRandomDogImage);
