/**
 * @author ntishkevich
 */
function Singer(name, album) {
    this.name = name;
    this.album = album;
}

var pinkGuy =
    new Singer('Pink Guy', 'Pink Season');
console.log(pinkGuy);
//{name: 'Pink Guy', phrase: 'Pink Season'}