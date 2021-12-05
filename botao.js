var button = document.getElementById("botao"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Cliques: " + count;
};

