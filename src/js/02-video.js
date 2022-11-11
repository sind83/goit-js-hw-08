import * as storage from './storage';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEY = "videoplayer-current-time";

try {
    const actualMovieTime = storage.load(KEY);
    player.setCurrentTime(JSON.parse(actualMovieTime));
    // console.log("aktualnie załadowny czas:", actualMovieTime);
}
catch (error) {
    console.log('Something goes wrong...', error);
    console.log("Can't load actual time...");
}


player.on('timeupdate', throttle(() => {
    // console.log('Zapis co 1 sekundę');
    player.getCurrentTime().then((seconds) => {
        // console.log(seconds);
        storage.save(KEY, seconds);
    }).catch(function (error) {
        console.log('Something goes wrong...', error.name)
    });
}, 1000)

);
