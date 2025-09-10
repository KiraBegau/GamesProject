const args = process.argv.slice(2); // --> Nur die Argumente (Zahlen, Wörer,...) ohne den Pfad und den Speicherort)*//
const Benutzereingabe = args[0];

const word = Benutzereingabe;
const firstLetter = word[0];
const secondLetter = word[1];

function istKonsonant(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  return !vowels.includes(letter.toLowerCase());
}

function istVokal(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(letter.toLowerCase());
}
if (istKonsonant(firstLetter) && istVokal(secondLetter)) {
  const FallEins = word.slice(1) + firstLetter + "ay";
  console.log("Pig Latin:", FallEins);
} else if (istKonsonant(firstLetter) && istKonsonant(secondLetter)) {
  const FallZwei = word.slice(2) + firstLetter + secondLetter + "ay";
  console.log("New Word:", FallZwei);
} else if (istVokal(firstLetter)) {
  const FallDrei = word + "way";
  console.log("New Word:", FallDrei);
} else {
  console.log("Bedingung nicht erfüllt"); //Eigentlich braucht man kein Else weil mit irgendeiner dieser Kombis muss das Wort ja anfangen)
}
