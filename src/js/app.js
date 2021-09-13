const navCabecalho = Array.from(
  document.querySelectorAll(".botoes-cabecalho > *")
);

navCabecalho.forEach((elemento) => {
  const conteudoPadrao = elemento.innerHTML;

  elemento.onmouseover = (e) => {
    e.preventDefault();

    elemento.innerHTML = `< ${conteudoPadrao} >`;
    elemento.classList.add("verde-principal-color");
  };

  elemento.onmouseout = (e) => {
    e.preventDefault();

    elemento.innerHTML = `${conteudoPadrao}`;
    elemento.classList.remove("verde-principal-color");
  };

  elemento.onclick = (e) => {
    e.preventDefault();

    const destinoOriginal = document.querySelectorAll(
      elemento.getAttribute("href")
    )[0];

    if (destinoOriginal.id === "experiencias-sobremim") {
      window.scrollTo(0, destinoOriginal.scrollHeight - 140);
    } else if (destinoOriginal.id === "tecnologias") {
      window.scrollTo(0, destinoOriginal.scrollHeight - 95);
    } else if (destinoOriginal.id === "contatos") {
      window.scrollTo(0, destinoOriginal.scrollHeight - -900);
    }
  };
});
