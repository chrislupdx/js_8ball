
function return_response() {
var responses = ["cheesepuffs", "without dignity", "that was innapropriate", "I need to call the police now", "time is a flat circle", "only time will tell", "yes", "no"]


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
responses = shuffle(responses);
alert(responses[0])

}




// function grabQuerent(querent) {
//   var querent = document.getElementById("querent").value;
//   console.log("querent in grabQuerent is "+ querent)
// }
