import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorage = window.localStorage;
console.log(localStorage);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    // console.log(data);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    console.log(error);
    switch (error.name) {
      case 'RangeError':
        console.log(
          `Error on setting current time ${localStorage.getItem(
            'videoplayer-current-time'
          )}. The time was less than 0 or greater than the video\'s duration`
        );
        break;

      default:
        console.log(`Unknown video error occured`);
        break;
    }
  });
