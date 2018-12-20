function theBeatlesPlay(musicians, instruments) {
  var musicianString;
  var musicaianInstrument=[];
  for(var i=0; i<musicians.length; i++){
    musicianString= musicians[i]+ 'plays' + instruments[i];
    musiciansInstrument[i]=musicianString;
  }
  return musicaianInstrument();
}

function johnLennonFacts(facts) {
  var i=0;
  var newArray=[];
  while (facts.length > i) {
    newArray.push(`${facts[i]}` + "!!!");
    i++;
  }
  return newArray;
}
