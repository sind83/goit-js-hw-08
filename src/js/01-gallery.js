// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector("div.gallery");

const galleryImg = galleryItems.map((picture) => `<a class="gallery__item" href=${picture.original}>
<img class="gallery__image" src=${picture.preview} alt= "${picture.description}" />
</a>`).join("");
gallery.insertAdjacentHTML('beforeend', galleryImg);

new SimpleLightbox('.gallery a', { captionPosition: 'outside', captionsData: 'alt', captionDelay: '250' });

