/**
 * @author ntishkevich
 */

var film = {
    name: 'Snatch',
    director: 'Guy Ritchie',
    year: 2000
};

film['genre'] = 'Comedy';
film.country = 'Great Britain';
console.log(film); // { name: 'Snatch', country: Great Britain, director:
// 'Guy Ritchie', year: 2000, genre: 'Comedy' }

delete film.country;
delete film['director'];
console.log(film); // { name: 'Snatch', year: 2000, genre: 'Comedy' }

film.name = null;
film.year = undefined;
console.log(film); //{ name: null, year: undefined, genre: 'Comedy' }

