// console.info(1);
// function sayWellcome() {
//   console.info("Salut " + prenume + ",bine ai venit la noi");
// }
// var motto, favorite, links;
// motto = document.getElementById("motto");
// console.log(motto);

// var nume = "Ungur";
// var prenume = "Ionel";
// var owner = "Ungur 'I";
// var employed = true;
// var age = 40;
// var msg1 = 'ai zis "Nick"?';
// var msg2 = 'Nu ,am zis "Nicolae"';
// var template = 'text cu ghilimele"sau simple';
// function sayWellcome() {
//   console.info("Salut Ionel,bine ai venit la noi");
// }
// var skills = ["html", "css", "js"];
// prenume = "Nick";
// console.info("toate variabilele au fost initializate");
// console.log("nume");
// console.debug("auzi...? dar cum te cheama?-" + prenume);
// sayWellcome();
// sayWellcome();
// schimb valutar//
// console.info(0);

var x,y,z;
x=3;
y=6;
z=x+y;
function sum(){
  console.info("Adunam x cu y ");
   for (; x<y; x++){
    console.info("Daca x>y incrementam pe x de y ori pana x=y"); 
 }
   for (; x > y; y++){
    console.info("daca x<y incrementam pe y de x ori pana cand x=y")
  }
  console.info("rezultat x+y=z");
  sum (6);
}



// function learnIterators() {
  // function countTo(n) {
  //   console.info("sa numaram pana la " + n);
  //   for (var i = 1; i <= 10; i ++ ) {
  //     console.info(i);
  //   }
  //      var i = 1;
  //      for (var i=1 ; i <= n; n=9) {
  //        console.info(i);
  //        i=i+1;
  //        i++;
  //     }
  //    }

  // var 

  // function countDown(n) {
  //   var i = n;
  //   for (var i=10; i > 0;) {
  //     console.info(i);
  //     i--;
  //   }

  //   var i = n;
  //   while (i > 0) {
  //     console.info(i);
  //     i--;
  //   }
  //   countDown(10);
  //   countTo(10);
  // }
  // learnIterators();

// var cursEUR = 4.5;
// var myEur = 100;
// var myRON = 0;
// var friendEUR = 100;
// var friendRON = 0;
// //opreatori sunt: *, /,-

// var ATMFunds = 50000;
// var funds = 5000;

// function getExtractFee(ammount) {
//   var comision = ammount * 0.01;
//   if (comision < 2.5) {
//     console.warn("comision minim aplicat");
//     comision = 2.5;
//   }
//   return comision;
// }

// function extractFromATM(ammount) {
//   console.info("==== ==== ==== ==== ====");
//   console.info("suma extrasa este: " + ammount);
//   var comision = getExtractFee(ammount);
//   var totalExtract = ammount + comision;
//   if (totalExtract > funds) {
//     console.error("insuficient funds");
//     return;
//   }
//   if (ATMFunds < totalExtract) {
//     console.error(" ATM insuficient founds");
//   }

//   funds = funds - totalExtract;
//   // ATMFunds = ATMFunds - ammount;
//   ATMFunds -= ammount;
//   console.info("Sold curent: " + funds);
//   console.info("comision aplicat:" + comision);
//   console.info("==== ==== ==== ==== ====");
// }
// extractFromATM(1005); //nu e multiplu de 10
// extractFromATM(100000); //solduri insuficiente
// extractFromATM(3000);
// extractFromATM(3000);
// extractFromATM(100);
// extractFromATM(0);
// }
  }
// }