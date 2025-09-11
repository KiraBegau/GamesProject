const args = process.argv.slice(2); // --> Nur die Argumente (Zahlen, Wörer,...) ohne den Pfad und den Speicherort)*//
const Benutzereingabe = args[0];

const sentence = args[0];
const words = sentence.split(" "); // --> teile den String nach jedem Leerzeichen (Satz zerlegen damit die Funktion auf alle Wörter einzeln angewendet werden kann)

function istKonsonant(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  return !vowels.includes(letter.toLowerCase()); // !vowels.incudes: Wenn der gewählte Buchstabe kein Vokal ist, dann...;toLowerCase--> Buchstaben für Computer klein machen, damit es für groß und kleinschreibung funktioniert)
} // Warum !Vowels statt Konsonanten: Sehr langes Array (26 Buchstaben minus Vokale),Muss auf Groß-/Kleinschreibung achten, Wenn man Buchstaben ändert oder andere Sprachen benutzt → schwer wartbar

function istVokal(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(letter.toLowerCase()); // vowels.incudes: Wenn der gewählte Buchstabe ein Vokal ist Konsonant ist, dann...;toLowerCase--> Buchstaben für Computer klein machen, damit es für groß und kleinschreibung funktioniert)
}

const pigLatinWords = words.map((word) => {
  const firstLetter = word[0];
  const secondLetter = word[1];

  if (istKonsonant(firstLetter) && istVokal(secondLetter)) {
    return word.slice(1) + firstLetter + "ay";
  } else if (istKonsonant(firstLetter) && istKonsonant(secondLetter)) {
    return word.slice(2) + firstLetter + secondLetter + "ay";
  } else if (istVokal(firstLetter)) {
    return word + "way";
  } else {
    console.log("Bedingung nicht erfüllt"); //Eigentlich braucht man kein Else weil mit irgendeiner dieser Kombis muss das Wort ja anfangen)
    return word;
  }
});
console.log("You got:", pigLatinWords.join(" "));
