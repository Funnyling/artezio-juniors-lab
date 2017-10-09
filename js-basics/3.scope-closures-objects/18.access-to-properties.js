/**
 * @author ntishkevich
 */
var singer = {
    name: 'Pink Guy',
    album: 'Pink Season'
};

singer['singSong'] = function(songName) {
    console.log('The next song is ' + songName
        + '. NNNYYYEEESSS');
};

singer['singSong']('Donald Trump Anthem');