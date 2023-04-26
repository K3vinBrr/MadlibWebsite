 function getOption() {
        selectElement = document.querySelector('#select1')  ;
        output = selectElement.value;
        document.querySelector('.output').textContent = output;
    }

function generatethething() {
      var adjective1 = document.getElementById("adjective1").value;
      var adjective2 = document.getElementById("adjective2").value;
      var noun1 = document.getElementById("noun1").value;
      var verb1 = document.getElementById("verb1").value;
      var name1 = document.getElementById("name1").value;
      var sentence = document.getElementById("sentence").value;

      selectElement = document.querySelector('#select1')  ;
      output = selectElement.value;
      document.querySelector('.output').textContent = output;


      var thetext = "Once upon a time, there was a high school student named " + name1 + " every morning " + name1 + " would wake up feeling " + adjective1 + " and ready to take on the day. However, one morning " + name1 + " accidentally " + verb1 + " the alarm clock, causing them to oversleep. In a rush, " + name1 + " threw on some " + adjective2 + " clothes and ran out the door. On the way to school " + name1 + " realized they had forgotten " + noun1 + " at home. Despite feeling embarrassed, " + name1 + " decided to just " + output + " it and pretend everything was okay. At the end of the day " + name1 + " decided to " + sentence + "." ;


      document.getElementById("thetext").textContent = thetext;
      
}
