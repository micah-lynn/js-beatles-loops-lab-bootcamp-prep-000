function theBeatlesPlay(musicians, instruments) {
  var listBeatles = [];
  for (var i = 0; i < musicians.length; i++) {
    listBeatles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return listBeatles;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"];
  var array = [];
  var i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}