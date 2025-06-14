const photoList = document.querySelector(".photos");

const makeMaket = (photos) => {
    return photos.map((photo) => {
        return `<li>
            <img class="photo" src="${photo.webformatURL}" alt="photo" />
        </li>`;
    }).join("");
};

const linkButton = document.querySelector(".load-button");
let currentPage = 1;

linkButton.addEventListener("click", () => {
    currentPage++;
    fetch(`https://pixabay.com/api/?key=50853697-ccd9acb9abbdf256f1feb5e3f&q=yellow+flowers&image_type=photo&page`)
        .then((response) => response.json())
        .then((data) => {
                photoList.innerHTML += makeMaket(data.hits);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});