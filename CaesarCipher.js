const args = process.argv.slice(2); // --> Nur die Argumente (Zahlen, Wörer,...) ohne den Pfad und den Speicherort)*//
const Benutzereingabe = args[0];

const sentence = args[0];
const words = sentence.split(" ");
const shift = parseInt(args[1]); // --> Nimm die zweite Eingabe (args 1) und mache daraus eine richtige Zahl (parseInt)
let encrypted = "";
// let i =0 --> beginne beim ersten Buchstaben/Wert i=Stelle des Wortes also: wenn i kleiner (also stelle niedriger als letzte Stelle des Wortes)
//  dann läuft die Schleife weiter
for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i]; //Wenn i = 0, dann sentence[i] → "h".  Wenn i = 1, dann sentence[i] → "a" usw.--> Const char speichert diese Werte in der variablen chart
  if (char >= "a" && char <= "z") {
    // wenn char (wert von oben) größer oder gleich a und kleiner oder gleich z, dann:...
    let shifted = ((char.charCodeAt(0) - 97 + shift) % 26) + 97; // char.charCodeAt(0) -->
    // nimm den Buchstaben (Char) und wandel ihn in eine Zahl (Zahlencode) um. -97: Macht aus "a" = 97 → 0 ; "b" = 98 → 1 ; Buchstaben in 0–25 umwandeln ; shift= plus Verschiebung ; 26% --> Stellt sicher, dass wir im Alphabet bleiben.
    encrypted += String.fromCharCode(shifted); //wandel die Zahl zurück in einen Buchstaben. Beispiel: shifted = 100 → "d". encrypted += hängt diesen Buchstaben ans Ende der Variable encrypted an
  } else if (char >= "A" && char <= "Z") {
    // Großbuchstaben
    let shifted = ((((char.charCodeAt(0) - 65 + shift) % 26) + 26) % 26) + 65;
    encrypted += String.fromCharCode(shifted);
  } else {
    // Alles andere unverändert anhängen
    encrypted += char;
  }
}
console.log(encrypted);
