'use strict';
const movie1 = {
    title: 'Plan 9 from Outer Space',
    genre: 'Cult Classic',
    rating: 2,
    showtimes: ['3:00pm', '7:00pm', '11:00pm']
};

const movie2 = {
    title: 'Forbidden Planet',
    genre: 'Classic Sci-fi',
    rating: 5,
    showtimes: ['5:00pm', '9:00pm']
};

const movie3 = {
    title: 'Buckaroo Banzai',
    genre: 'Cult Classic',
    rating: 5,
    showtimes: ['1:00pm', '5:00pm', '7:00pm', '11:00pm']
};

function getNextShowing(movie) {
    let now = new Date().getTime();

    for (let i = 0; i < movie.showtimes.length; i++) {
        let showtime = getTimeFromString(movie.showtimes[i]);

        if ((showtime - now) > 0) {
            return 'Next showing of ' + movie.title + ' is ' + movie.showtimes[i];
        }
    }

    return null;
}

function getTimeFromString(str) {
    let theTime = new Date();
    let time = str.match(/(\d+)(?::(\d\d))?\s*(p?)/);

    theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    theTime.setMinutes(parseInt(time[2]) || 0);

    return theTime.getTime();
}

let nextShowing = getNextShowing(movie1);
alert(nextShowing);

nextShowing = getNextShowing(movie2);
alert(nextShowing);

nextShowing = getNextShowing(movie3);
alert(nextShowing);
