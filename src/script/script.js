let enviar = document.querySelector(".submit");
let botoes = document.querySelectorAll(".btn");
let message = document.querySelector(".message");

let hidden = document.getElementById("hidden");
let mainHidden = document.getElementById("main-hidden");

let selctedBtn = null;

function updateMessage() {
  if (selctedBtn !== null) {
    message.innerHTML = `you selected ${selctedBtn} of 5`;
  } else {
    message.innerHTML = "you haven't selected any button yet";
  }
}

botoes.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    selctedBtn = parseInt(botao.value);
    updateMessage();
    botoes.forEach((formatBtn) => {
      formatBtn.style.background = "";
      formatBtn.style.color = "";
    });

    if (botao.value < 3) {
      botao.style.background = "red";
    } else {
      botao.style.background = "green";
    }
  });
});

enviar.addEventListener("click", (e) => {
  e.preventDefault();
  hidden.style.display = "flex";
  mainHidden.style.display = "none";
});
