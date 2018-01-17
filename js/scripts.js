
var output = [];
var countby = parseInt(prompt('I want to count by'));
var countto = parseInt(prompt('I want to count to:'));
  function ElementisNaN() {
    if (isNaN(countby)) {
      return 'Not a number';
    }
    else if (isNaN(countto)) {
      return 'Not a number';
    }
    for (index = countby; index <= countto; index += countby) {
    output.push(' ' + index);}
  }
alert(output);
