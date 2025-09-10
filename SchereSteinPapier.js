const args = process.argv.slice(2); // --> Nur die Argumente (Zahlen, Wörer,...) ohne den Pfad und den Speicherort)
const ZugSpieler = args[0];

// Mögliche Züge
const moves = ["rock", "paper", "scissors"];

// Eingabe prüfen
if (!moves.includes(ZugSpieler)) {
  console.error("Please choose rock, paper, or scissors");
  process.exit(1);
}

// Zufall für Computer
const ZugComputer = moves[Math.floor(Math.random() * moves.length)];

// Ausgabe
console.log(`You chose ${ZugSpieler}. Computer chose ${ZugComputer}.`);

// Gewinnerlogik
if (ZugSpieler === ZugComputer) {
  console.log("Draw!");
} else if (
  (ZugSpieler === "rock" && ZugComputer === "scissors") ||
  (ZugSpieler === "paper" && ZugComputer === "rock") ||
  (ZugSpieler === "scissors" && ZugComputer === "paper")
) {
  console.log("You win!");
} else {
  console.log("You lose!");
}
