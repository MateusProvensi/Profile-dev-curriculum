function getBody() {
  return document.getElementsByTagName('body')[0]
}

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

      const rolagemSerFeita = getBody().classList.contains('english') ? 190 : 140
      window.scrollTo(0, destinoOriginal.scrollHeight - rolagemSerFeita);

    } else if (destinoOriginal.id === "tecnologias") {

      const rolagemSerFeita = getBody().classList.contains('english') ? 50 : 95
      window.scrollTo(0, destinoOriginal.scrollHeight - rolagemSerFeita);

    } else if (destinoOriginal.id === "contatos") {
      window.scrollTo(0, destinoOriginal.scrollHeight - -900);
    }
  };
});
