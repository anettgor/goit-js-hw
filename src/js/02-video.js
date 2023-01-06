import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorage = window.localStorage;

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    // console.log(data);
  }, 1000)
);

const getItem = localStorage.getItem('videoplayer-current-time');
const getItemFunction = () => {
  return getItem || 0;
};

player.setCurrentTime(getItemFunction()).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      console.log(
        `Error on setting current time ${getItem}.\nThe time was greater than the video\'s duration.`
      );
      break;

    default:
      console.log(`Unknown video error occured`);
      break;
  }
});
