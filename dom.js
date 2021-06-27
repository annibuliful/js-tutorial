// /**
//  * hide name with firstname id attribute
//  */
// // const btnHide = document.getElementById("btn-hide");
// // const firstnameDom = document.getElementById("firstname");

// // btnHide.addEventListener("click", () => {
// //   //   firstnameDom.style.display = "none";
// //   firstnameDom.remove();
// // });

// // // change color for firstname id attribute
// const btnColor = document.getElementById("btn-color");
// const inputColor = document.getElementById("input-color");
// const firstnameDom = document.getElementById("firstname");

// btnColor.addEventListener("click", () => {
//   firstnameDom.style.color = inputColor.value;
//   firstnameDom.style.fontSize = "20px";
// });

// /**
//  * append new node to exist tag
//  */
// const inputMessage = document.getElementById("input-message"); /*input*/
// const btnAddMessage = document.getElementById("btn-add"); /*button*/
// const boxMessage = document.getElementById("box-message"); /*div box*/
// const displayInputMessage = document.getElementById(
//   "dispay-input-message"
// ); /*p*/

// btnAddMessage.addEventListener("click", () => {
//   const message = inputMessage.value; /*new-mess = input*/
//   boxMessage.innerHTML =
//     boxMessage.innerHTML + `<p>${message}</p>`; /* div box = div box*/
// });

// append node to exist DOM
/*click button*/
// btnAddMessage.addEventListener("click", () => {
//   const message = inputMessage.value; /*new-mess = input*/
//   const pDom = document.createElement("a"); /*create new <a>*/
//   pDom.innerText = message; /* new<> = new-mess */
//   boxMessage.append(pDom); /*add btw*/
//   inputMessage.value = "";
// });

// // append node with url link to exist DOM
// btnAddMessage.addEventListener("click", () => {
//   const message = inputMessage.value;
//   const aDom = document.createElement("a");
//   aDom.innerText = message;
//   aDom.href = `http://${message}`;
//   boxMessage.append(aDom);
//   inputMessage.value = "";
// });

// // // render every change event of input message dom
// // inputMessage.addEventListener("change", (ev) => {
// //   console.log(ev);
// //   displayInputMessage.innerText = ev.target.value;
// // });

// /**
//  * acces to multiple node
//  */
// const listTextsDom = document.getElementsByClassName("text");
// const btnChangeTextColor = document.getElementById("btn-change-color");

// btnChangeTextColor.addEventListener("click", () => {
//   for (let i = 0; i < listTextsDom.length; i++) {
//     listTextsDom[i].style.color = "red";
//   }
// });

/* CCLT*/
// const hide_A = document.getElementById("numberA");
// const hide_B = document.getElementById("numberB");

// const hide_plus = document.getElementById("plus");
// const hide_minus = document.getElementById("minus");
// const hide_mul = document.getElementById("mul");
// const hide_div = document.getElementById("div");

// const show_ans = document.getElementById("answer");

// hide_plus.addEventListener("click", () => {
//   const num = Number(hide_A.value) + Number(hide_B.value);
//   show_ans.innerText = num;
//   hide_A.value = "";
//   hide_B.value = "";
// });

// hide_minus.addEventListener("click", () => {
//   const num2 = Number(hide_A.value) - Number(hide_B.value);
//   show_ans.innerText = num2;
//   hide_A.value = "";
//   hide_B.value = "";
// });

// hide_mul.addEventListener("click", () => {
//   const num3 = Number(hide_A.value * hide_B.value);
//   show_ans.innerText = num3;
//   hide_A.value = "";
//   hide_B.value = "";
// });

// hide_div.addEventListener("click", () => {
//   if (Number(hide_B.value) > 0) {
//     const num4 = Number(hide_A.value / hide_B.value);
//     show_ans.innerText = num4;
//     hide_A.value = "";
//     hide_B.value = "";
//   } else {
//     alert("ERROR");
//     console.log("ERROR");
//   }
// });

// /**
//  * del search
//  */
/* to-do list */
// const add_butt = document.getElementById("add_task"); /*butt*/
// const del_butt = document.getElementById("del_task"); /*del butt*/
// const new_taskbox = document.getElementById("new_task"); /*input*/
// const div_box = document.getElementById("div_box"); /*div box*/
// const show_newtask = document.getElementById("showtask"); /*p*/

/**Add butt's variable */

// add_butt.addEventListener("click", () => {
//   const new_task = new_taskbox.value; /* read once*/
//   const midDom = document.createElement("a");
//   midDom.innerText = new_task + "\n";
//   div_box.append(midDom);
//   //console.log("aaa", div_box);

//   new_taskbox.value = "";
// });

// del_butt.addEventListener("click", () => {
//   for (let i = 0; i < div_box.childNodes.length; i++) {
//     const data = new_taskbox.value + "\n";
//     if (data === div_box.childNodes[i].innerText) {
//       div_box.childNodes[i].remove();
//     }
//   }
// });

/**
 * del in each task /** update existing task information
 */

const add_butt = document.getElementById("add_task"); /*butt*/
const new_taskbox = document.getElementById("new_task"); /*input*/
const div_box = document.getElementById("div_box"); /*div box*/
const show_newtask = document.getElementById("showtask"); /*p*/

add_butt.addEventListener("click", () => {
  const new_task = new_taskbox.value; /* read once*/
  const midDom = document.createElement("a"); /*("input")*/
  const add_btn = document.createElement("button");
  const br_dom = document.createElement("br");
  midDom.innerHTML = new_task + " ";
  add_btn.innerText = "delete"; /* .value (for input) */
  div_box.append(midDom, add_btn, br_dom);
  new_taskbox.value = "";
  add_btn.addEventListener("click", () => {
    add_btn.remove();
    midDom.remove();
    /** in case of addEventListener when remove node element, event still observe chaging data in DOM.
     * So we need to call removeEventListner after remove Node
     */
    //del element => empty addEventListener => consume more memory
    add_btn.removeEventListener("click", () => {});
  });
});

new_taskbox.addEventListener("change", (event) => {
  /**
   * target is a property to keep target element information such as value, style, etc
   */
  console.log("event-info", {
    targetInfo: event.target,
  });
});

/* console.log("event-info", event.target.value); */
/* show in console: text=event-info, if value change => focus on the */

// del removeChild
// del_butt.addEventListener("click", (event) => {
//   console.log(div_box.childNodes, event);
//   // div_box.removeChild(div_box.childNodes[0])
// });

// function del_task() {
//   const del = document.getElementById("div_box");
//   delse.remove();
// }

// function add task
// function add_task() {
//   const on1 = document.createElement("input");
//   on1.setAttribute("type", "text"); /*string, str: value*/
//   on1.setAttribute("value", "list");
//   document.body.appendChild(on1);
// }

/**random color */
// for (i = 0; i < length.smt; i++) {}

/**del butt */

/*
to-do list

input + butt-newtask
lines of new tasks + del butt
*Change color -> for loop & +ascii?
*/
