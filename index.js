isEnglish = true;

function rollDice1() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  // debugging use
  console.log("Get Dice Number 1:", randomNumber1);

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
  console.log("Get Dice Number 2:", randomNumber2);

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

  const h1 = document.querySelector("h1");
  const winner1_Text = isEnglish ? "Player 1 Wins!" : "恭喜你赢了!";
  const winner2_Text = isEnglish
    ? "Player 2 Wins!"
    : "哎哟哟! 你输了! 继续加油!";

  const draw_Text = isEnglish ? "Draw!" : "打成平手! 再来一次!";

  if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = winner1_Text;
  } else if (dice1 < dice2) {
    document.querySelector("h1").innerHTML = winner2_Text;
  } else {
    document.querySelector("h1").innerHTML = draw_Text;
  }
}

function changeLanguage() {
  isEnglish = !isEnglish;
  const h1 = document.querySelector("h1");
  const p1 = document.querySelector(".img1").previousElementSibling;
  const p2 = document.querySelector(".img2").previousElementSibling;
  const btn_RollDice = document.querySelector(".btnRollDice");
  const btn_ChangeLanguage = document.querySelector(".btnChangeLanguage");

  if (isEnglish) {
    h1.innerHTML = "Roll the Dice!";
    p1.innerHTML = "Player 1";
    p2.innerHTML = "Player 2";
    btn_RollDice.innerHTML = "Roll Dice";
    btn_ChangeLanguage.innerHTML = "Change Language";
  } else {
    h1.innerHTML = "转骰子游戏";
    p1.innerHTML = "玩家 1";
    p2.innerHTML = "玩家 2";
    btn_RollDice.innerHTML = "转骰子";
    btn_ChangeLanguage.innerHTML = "切换语言";
  }
}
