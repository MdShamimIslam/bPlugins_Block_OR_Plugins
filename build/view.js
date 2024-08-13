/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Common/MP3Player.js":
/*!********************************************!*\
  !*** ./src/Components/Common/MP3Player.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const defaultCoverImg = 'https://i.ibb.co/1qDChXj/cassette-tape-square.jpg';
const MP3Player = (selector, songs = []) => {
  const element = typeof selector == 'string' ? document.querySelector(selector) : selector;
  const cover = element.querySelector('#cover');
  const disc = element.querySelector('#disc');
  const title = element.querySelector('#title');
  const artist = element.querySelector('#artist');
  const progressContainer = element.querySelector('#progressContainer');
  const progress = element.querySelector('#progress');
  const timer = element.querySelector('#timer');
  const duration = element.querySelector('#duration');
  const prev = element.querySelector('#prev');
  const play = element.querySelector('#play');
  const next = element.querySelector('#next');
  let songIndex = 0;

  // Load the given song
  const loadSong = song => {
    cover.src = song.cover?.url || defaultCoverImg;
    disc.src = song.audio?.url;
    title.textContent = song.title;
    artist.textContent = song.artist;
    // duration.textContent = song.duration;
    disc.addEventListener('loadedmetadata', function () {
      duration.innerHTML = toHHMMSS(disc.duration);
    });
  };
  loadSong(songs[songIndex]);

  // Toggle play and pause
  function playPauseMedia() {
    if (disc.paused) {
      const allAudioEls = document.querySelectorAll('audio');
      allAudioEls.forEach(audioEl => audioEl?.pause());
      disc.play();
    } else {
      disc.pause();
    }
  }

  // Convert time
  function toHHMMSS(time) {
    var sec_num = parseInt(time, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return `${parseInt(hours) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`;
  }

  // Update icon
  function updatePlayPauseIcon() {
    if (disc.paused) {
      play.classList.remove('pauseBtn');
      play.classList.add('playBtn');
    } else {
      play.classList.remove('playBtn');
      play.classList.add('pauseBtn');
    }
  }

  // Update progress bar
  function updateProgress() {
    progress.style.width = disc.currentTime / disc.duration * 100 + '%';
    var hours = Math.floor(disc.currentTime / 3600);
    var minutes = Math.floor((disc.currentTime - hours * 3600) / 60);
    var seconds = Math.floor(disc.currentTime - hours * 3600 - minutes * 60);
    // let minutes = Math.floor(disc.currentTime / 60);
    // let seconds = Math.floor(disc.currentTime % 60);
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    timer.textContent = `${parseInt(hours) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`;
  }

  // Reset the progress
  function resetProgress() {
    progress.style.width = 0 + '%';
    timer.textContent = '0:00';
  }

  // Go to previous song
  function gotoPreviousSong() {
    if (songIndex === 0) {
      songIndex = songs.length - 1;
    } else {
      songIndex = songIndex - 1;
    }
    const isDiscPlayingNow = !disc.paused;
    loadSong(songs[songIndex]);
    resetProgress();
    if (isDiscPlayingNow) {
      playPauseMedia();
    }
  }

  // Go to next song
  function gotoNextSong(playImmediately) {
    const goToNext = () => {
      if (songIndex === songs.length - 1) {
        songIndex = 0;
      } else {
        songIndex = songIndex + 1;
      }
      const isDiscPlayingNow = !disc.paused;
      loadSong(songs[songIndex]);
      resetProgress();
      if (isDiscPlayingNow || playImmediately) {
        playPauseMedia();
      }
    };
    if (songIndex < songs.length - 1) {
      goToNext();
    } // Stop at end of album
  }

  // Change song progress when clicked on progress bar
  function setProgress(ev) {
    const totalWidth = this.clientWidth;
    const clickWidth = ev.offsetX;
    const clickWidthRatio = clickWidth / totalWidth;
    disc.currentTime = clickWidthRatio * disc.duration;
  }

  // Play/Pause when play button clicked
  play.addEventListener('click', playPauseMedia);

  // Various events on disc
  disc.addEventListener('play', updatePlayPauseIcon);
  disc.addEventListener('pause', updatePlayPauseIcon);
  disc.addEventListener('timeupdate', updateProgress);
  disc.addEventListener('ended', gotoNextSong.bind(null, true));

  // Go to next song when next button clicked
  prev.addEventListener('click', gotoPreviousSong);

  // Go to previous song when previous button clicked
  next.addEventListener('click', gotoNextSong.bind(null, false));

  // Move to different place in the song
  progressContainer.addEventListener('click', setProgress);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MP3Player);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Common_MP3Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Common/MP3Player */ "./src/Components/Common/MP3Player.js");


document.addEventListener('DOMContentLoaded', () => {
  const mp3PlayerEls = document.querySelectorAll('.wp-block-bpmp-mp3-player');
  mp3PlayerEls.forEach(mp3PlayerEl => {
    const attributes = JSON.parse(mp3PlayerEl.dataset.attributes);
    const {
      audioProperties
    } = attributes;
    (0,_Components_Common_MP3Player__WEBPACK_IMPORTED_MODULE_1__["default"])(mp3PlayerEl, audioProperties);
    mp3PlayerEl?.removeAttribute('data-attributes');
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map