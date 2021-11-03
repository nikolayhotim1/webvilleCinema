'use strict';
class Movie {
    constructor(title, genre, rating, showtimes) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.showtimes = showtimes;

        this.getNextShowing = function () {
            let now = new Date().getTime();

            for (let i = 0; i < this.showtimes.length; i++) {
                let showtime = getTimeFromString(this.showtimes[i]);

                if ((showtime - now) > 0) {
                    return 'Next showing of ' + this.title + ' is ' + this.showtimes[i];
                }
            }

            return null;
        };
    }
}

function getTimeFromString(str) {
    let theTime = new Date();
    let time = str.match(/(\d+)(?::(\d\d))?\s*(p?)/);

    theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    theTime.setMinutes(parseInt(time[2]) || 0);

    return theTime.getTime();
}

const banzaiMovie = new Movie(
    'Buckaroo Banzai',
    'Cult Classic',
    5,
    ['1:00pm', '5:00pm', '7:00pm', '11:00pm']
);

const plan9Movie = new Movie(
    'Plan 9 from Outer Space',
    'Cult Classic',
    2,
    ['3:00pm', '7:00pm', '11:00pm']
);

const forbiddenPlanetMovie = new Movie(
    'Forbidden Planet',
    'Classic Sci-fi',
    5,
    ['5:00pm', '9:00pm']
);

alert(banzaiMovie.getNextShowing());
alert(plan9Movie.getNextShowing());
alert(forbiddenPlanetMovie.getNextShowing());
