function rollDice1() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  // debugging use
  // console.log("Get Dice Number 1:", randomNumber1);

  switch (randomNumber1) {
    case 1:
      // Do something for 1
      document.querySelector(".img1").setAttribute("src", "images/dice1.png");
      break;
    case 2:
      // Do something for 2
      document.querySelector(".img1").setAttribute("src", "images/dice2.png");
      break;
    case 3:
      // Do something for 3
      document.querySelector(".img1").setAttribute("src", "images/dice3.png");
      break;
    case 4:
      // Do something for 4
      document.querySelector(".img1").setAttribute("src", "images/dice4.png");
      break;
    case 5:
      // Do something for 5
      document.querySelector(".img1").setAttribute("src", "images/dice5.png");
      break;
    case 6:
      // Do something for 6
      document.querySelector(".img1").setAttribute("src", "images/dice6.png");
      break;
    default:
      console.log("Something went wrong");
      break;
  }

  return randomNumber1;
}

function rollDice2() {
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  // debugging use
  // console.log("Get Dice Number 2:", randomNumber2);

  switch (randomNumber2) {
    case 1:
      // Do something for 1
      document.querySelector(".img2").setAttribute("src", "images/dice1.png");
      break;
    case 2:
      // Do something for 2
      document.querySelector(".img2").setAttribute("src", "images/dice2.png");
      break;
    case 3:
      // Do something for 3
      document.querySelector(".img2").setAttribute("src", "images/dice3.png");
      break;
    case 4:
      // Do something for 4
      document.querySelector(".img2").setAttribute("src", "images/dice4.png");
      break;
    case 5:
      // Do something for 5
      document.querySelector(".img2").setAttribute("src", "images/dice5.png");
      break;
    case 6:
      // Do something for 6
      document.querySelector(".img2").setAttribute("src", "images/dice6.png");
      break;
    default:
      console.log("Something went wrong");
      break;
  }

  return randomNumber2;
}

function playTheGame() {
  const dice1 = rollDice1();
  const dice2 = rollDice2();

  if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (dice1 < dice2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
