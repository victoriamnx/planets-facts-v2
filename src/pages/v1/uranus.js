const planetTextUranus = document.getElementById("planetTextUranus");
const planetLink = document.getElementById("wikiLink");
const planetImage = document.getElementById("planetImage");
const overviewButton = document.getElementById("overviewButton");
const internalStructureButton = document.getElementById(
  "internalStructureButton"
);
const surfaceGeologyButton = document.getElementById("surfaceGeologyButton");

//Função para remover a classe "active" de todos os botões
function removeactiveUranusClass() {
  overviewButton.classList.remove("activeUranus");
  internalStructureButton.classList.remove("activeUranus");
  surfaceGeologyButton.classList.remove("activeUranus");
}

overviewButton.addEventListener("click", () => {
  planetTextUranus.innerHTML = `
  Uranus is the seventh planet from the Sun. Its <br />name is a
            reference to the Greek god of the <br />sky, Uranus according to
            Greek mythology,<br />
            was the great-grandfather of Ares. It has the <br />third-largest
            planetary radius and <br />fourth-largest planetary mass in the
            Solar System.
          
         `;
  planetImage.src = "../assets/planet/planet-uranus.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Uranus">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveUranusClass();
  overviewButton.classList.add("activeUranus");
});

internalStructureButton.addEventListener("click", () => {
  planetTextUranus.innerHTML = `
  The standard model of Uranus's structure is<br /> that it consists of three
        layers: a rocky<br /> (silicate/iron–nickel) core in the centre, an icy<br /> mantle in
        the middle and an outer gaseous <br />hydrogen/helium envelope. The core is<br />
        relatively small, with a mass of only 0.55 Earth<br /> masses.
         `;
  planetImage.src = "../assets/internal/planet-uranus-internal.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Uranus#Internal_structure">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveUranusClass();
  internalStructureButton.classList.add("activeUranus");
});

surfaceGeologyButton.addEventListener("click", () => {
  planetTextUranus.innerHTML = `
  The composition of Uranus's atmosphere is<br />  different from its bulk,
  consisting mainly of <br /> molecular hydrogen and helium. The helium<br />  molar
  fraction, i.e. the number of helium atoms <br /> per molecule of gas, is 0.15±0.03
  in the upper <br /> troposphere. 
         `;
  planetImage.src = "../assets/geology/geology-uranus.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Uranus#Atmosphere">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveUranusClass();
  surfaceGeologyButton.classList.add("activeUranus");
});
