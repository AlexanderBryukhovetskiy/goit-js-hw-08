// Add imports above this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

//onsole.log(SimpleLightbox);

const markup = galleryItems.reduce((acc, {original, preview, description} = item) => 
    acc + `<a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>`, "");
const imagesContainer = document.querySelector('.gallery');
imagesContainer.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', { 
    /* options */
    captionsData: "alt",
    captionDelay: 250 
});

