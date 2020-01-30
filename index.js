function theBeatlesPlay(musicians, instruments) {
  var listBeatles = [];
  for (var i = 0; i < musicians.length; i++) {
    listBeatles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return listBeatles;
}

function johnLennonFacts(array) {
  var emptyarray = [];
  var count = array.length
  while (count > 0) {
    for (var i = 0; i < array.length; i++) {
      emptyarray.push(`${array[i]}!!!`);
    i++;
  }
  return array;
}