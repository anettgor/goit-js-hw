# About

This repository consists of three tasks to practice different JS functions.

### Task 1: Gallery

This code imports SimpleLightbox package to create an image gallery. It logs an
array of gallery items to the console and creates a list of gallery items in the
HTML document using the imported galleryItems array. When a gallery item is
clicked, the SimpleLightbox is triggered to display the full-sized images with
customizable options such as captions and zooming.

### Task 2: Video

The code imports Vimeo video player package and throttle function from lodash
library to set up a Vimeo player on an HTML element with an ID of
"vimeo-player". The player's current time is saved to the browser's localStorage
every second, and the current time is retrieved and set to the player's current
time if it is not null. If it is null, the player's current time is set to 0.

### Task 3: Feedback

This code handles user feedback form submission by saving the form state in the
browser's localStorage. When the page is loaded, the saved form state is
retrieved and the form fields' values are set to the saved values. When the form
is submitted, the code prevents the default behavior, resets the form fields,
removes the saved form state from localStorage, and logs the email and message
values to the console. Additionally, the throttle function from the lodash
library is used to limit the frequency of saving the email value in localStorage
to every 500 milliseconds.

## Libraries

- SimpleLightBox
- Vimeo-player
- Lodash
