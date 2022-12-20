// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach(galleryItem => {
  const link = document.createElement('a');
  gallery.appendChild(link);
  link.classList.add('gallery__item');
  link.href = galleryItem.original;

  const newImg = document.createElement('img');
  newImg.classList.add('gallery__image');
  newImg.setAttribute('src', galleryItem.preview);
  newImg.setAttribute('alt', galleryItem.description);
  link.appendChild(newImg);
});

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
