function abrirPlanner() {
  document.getElementById("planner").classList.add("ativo");
}

function fecharPlanner() {
  document.getElementById("planner").classList.remove("ativo");
}

function gerarPlano() {

  const objetivo =
    document.getElementById("objetivo").value ||
    "seu objetivo";

  const prazo =
    document.getElementById("prazo").value ||
    "o prazo definido";

  const resultado =
    document.getElementById("resultado");

  resultado.innerHTML = `
    <strong>🎯 Seu plano começou!</strong>
    <br><br>

    <b>Objetivo:</b> ${objetivo}
    <br>

    <b>Prazo:</b> ${prazo}

    <br><br>

    <b>Próximos passos:</b>

    <br><br>

    1️⃣ Divida seu objetivo em pequenas metas.

    <br><br>

    2️⃣ Escolha uma ação para fazer todos os dias.

    <br><br>

    3️⃣ Acompanhe seu progresso toda semana.

    <br><br>

    🔥 <b>Comece hoje com uma pequena ação.</b>
  `;

  resultado.classList.add("ativo");
}

document.addEventListener("click", function(event) {

  const planner =
    document.getElementById("planner");

  if (event.target === planner) {
    fecharPlanner();
  }

});
