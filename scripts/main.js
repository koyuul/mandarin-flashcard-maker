
/*
1: 
get input in characters, and then create list of:
    char to eng
    pinyin to eng
    char to pinyin
    pinyin & char to eng

get expandable form
    enter val and key like "val: key - val: key" or "val: key\n val: key\n" <- reversed lol
    check val and key full
    when press submit, take current vals of all, and then run execute func



2: 
input:
    ask user to input characters in their own boxes (a1 b1, a2 b2 ), char and english def
    create 3 new arrs:
        [for char to eng]
            already good
        [for char to pinyin]
            each char input -> apiget.text
       [for pinyin to eng]
            each (char input -> apiget.text) -> to eng 
    print in three boxes
        use same i in printing arrayss
*/
const textArea = document.getElementById("input");
const testArea = document.getElementById("test_output");
const pinyinify = require("pinyin");


document.getElementById("submit").addEventListener('click', function(){
    let arr_splitByLine = textArea.value.split('\n');
    console.log(arr_splitByLine)
    let arr_charToEng = arr_splitByLine.join("&#10;");
    testArea.innerHTML = arr_charToEng;
})


//Allows you to tab in textarea
textArea.addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // put caret at right position again
      this.selectionStart =
        this.selectionEnd = start + 1;
    }
  });