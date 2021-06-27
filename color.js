const aaa = document.getElementById("checker"); /*p*/
const check1 = document.getElementById("check1"); /*color*/
const amount = document.getElementById("amount"); /*input*/
const submit = document.getElementById("submit"); /*button-input*/
let listColors = []; /* to keep #colors */
let answer = document.getElementById("answer"); /*text show <p>*/
let ans;

submit.addEventListener("click", () => {
  listColors = []; /* reset array */
  let i = Number(amount.value);

  console.log("i", i);
  for (i; i > 0; i--) {
    console.log("aaaa");
    /** we have to create node element inside loop to prevent append()
     * add duplicated node because append() will not app duplicate node into existing DOM
     */
    const colortab = document.createElement("button");
    colortab.className = "btn";
    // console.log("colorTab", colortab, randomColor());
    const colorInfo = randomColor();
    colortab.style.backgroundColor = colorInfo; /*seperate each #*/
    colortab.setAttribute("colorInfo", colorInfo); // set custom attribute for each colorTab
    listColors.push(colorInfo); /*collected each # hex color format*/
    // "#000000" <- [0 - 9, a - f]
    // Math.random [0,1] 0.0 - 1.0
    // Math.random() * 100
    const newline = document.createElement("br");
    /*append = add smt to the last child. if already added, != add*/
    /**
     * append will check current node already added to DOM or not?
     * if yes, nothing to do
     * if no, add it to DOM
     */
    check1.append(colortab, newline);
    colortab.addEventListener("click", (event) => {
      console.log(
        "event",
        event.target.getAttribute("colorInfo")
      ); /*focus on its info*/
      /**event = บอกว่า click colortab อันไหนอยู่ */
      if (ans === event.target.getAttribute("colorInfo")) {
        /*check if ans = focus on its info*/
        correct();
      } else {
        incorrect();
      }
    });
  }
  amount.value = "";
  ans =
    listColors[
      Math.round(Math.random() * listColors.length - 1)
    ]; /*run pass addlistener, so ans has new value before colorTab/addlistener works*/
  answer.innerText = ans; /* already string, no need to .value*/
});

function randomColor() {
  let letter = "0123456789ABCDEF";
  let hashtag = "#";
  const listChars =
    letter.split(""); /* split string to array of each letter/character */
  // console.log("listChars", listChars);
  for (let n = 0; n < 6; n++) {
    hashtag += listChars[Math.round(Math.random() * listChars.length - 1)]; // index start 0 until 15, so -1
    // parseInt to convert to int *ปัดขึ้น
    // Math.round => 0.5  *ปัดเลขปกติ
    /* random the correct one */
  }
  return hashtag;
}

function incorrect() {
  aaa.innerText = "wrong";
  aaa.style.color = "red";
}

function correct() {
  aaa.innerText = "correct";
  aaa.style.color = "green";
}

function reset() {
  window.location.reload();
}
