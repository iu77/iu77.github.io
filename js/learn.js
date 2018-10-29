console.info(18);
function sayWellcome() {
  console.info("Salut " + prenume + ",bine ai venit la noi");
}
var motto, favorite, links;
motto = document.getElementById("motto");
console.log(motto);

var nume = "Ungur";
var prenume = "Ionel";
var owner = "Ungur 'I";
var employed = true;
var age = 41;
var msg1 = 'ai zis "Nick"?';
var msg2 = 'Nu ,am zis "Nicolae"';
var template = 'text cu ghilimele"sau simple';
function sayWellcome() {
  console.info("Salut Ionel,bine ai venit la noi");
}
var skills = ["html", "css", "js"];
prenume = "Nick";
console.info("toate variabilele au fost initializate");
console.log("nume");
console.debug("auzi...? dar cum te cheama?-" + prenume);
sayWellcome();
sayWellcome();

// schimb valutar//
var cursEUR = 4.5;
var myEur = 20;
var myRON = 0;
var friendEUR = 100;
var friendRON = 0;
//opreatori sunt: *, /,-

myRON = myEur * cursEUR;
console.info(" eu am " + myRON + " RON ");
friendRON = friendEUR * cursEUR * 0.99;
console.info(" tu ai " + friendRON + " RON ");
friendRON = friendEUR * cursEUR - (friendEUR * cursEUR * 1) / 100;
console.info(" tu ai " + friendRON + " RON ");

function extractFromATM(ammount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este: " + ammount);
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    console.warn("comision minim aplicat");
    comision = 2.5;
  }
  console.info("comision aplicat:" + comision);
  console.info("==== ==== ==== ==== ====");
}
extractFromATM(1000);
extractFromATM(100);
