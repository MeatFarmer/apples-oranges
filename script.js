console.log('test');

//longerString takes to strings return the longer one
function longerString() {
  console.log('button clicked - longerString');
  var string1 = prompt ("Enter a String!");
  var string2 = prompt ("Enter another String!");
  console.log(string1, string2);

  //compare strings
  if(string1.length > string2.length){
    alert(string1 + " is longest");
    return string1;
  }else if
    (string2.length > string1.length){
    alert(string2 + " is longest");
    return string2;
  } else {
    alert ('strings were equal length!');
    return;
  }
  // bug: what if they are the same length?
}
