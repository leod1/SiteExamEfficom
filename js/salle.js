
function addElement () {
    var person = prompt("Entrer de nom de la salle", "Salle");

    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(person); //Text
        newDiv.appendChild(newContent);
        document.getElementById('menu').appendChild(newDiv);
        newDiv.classList.add('litxt');
    }
  }