// 1. Messi's goals function:
// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// ----------------------------------------------------------------------------------------------------------------

// 2. Return Negative:
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

const makeNegative = (num) => (num >= 0 ? num * -1 : num);

// ----------------------------------------------------------------------------------------------------------------

// 3. Terminal game move function:
// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  return position + roll * 2;
}

// ----------------------------------------------------------------------------------------------------------------

// 4. Personalized Message:
// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// ----------------------------------------------------------------------------------------------------------------

// 5. Keep Hydrated!:
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time * 0.5);
}

// ----------------------------------------------------------------------------------------------------------------

// 6. Opposites Attract:
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1;

// ----------------------------------------------------------------------------------------------------------------
