const planetTextVenus = document.getElementById("planetTextMars");
const planetLink = document.getElementById("wikiLink");
const planetImage = document.getElementById("planetImage");
const overviewButton = document.getElementById("overviewButton");
const internalStructureButton = document.getElementById(
  "internalStructureButton"
);
const surfaceGeologyButton = document.getElementById("surfaceGeologyButton");

//Função para remover a classe "active" de todos os botões
function removeactiveMarsClass() {
  overviewButton.classList.remove("activeMars");
  internalStructureButton.classList.remove("activeMars");
  surfaceGeologyButton.classList.remove("activeMars");
}

overviewButton.addEventListener("click", () => {
  planetTextMars.innerHTML = `
   Mars is the fourth planet from the Sun and the <br />second-smallest
            planet in the Solar System, <br />being larger than only Mercury. In
            English,<br />
            Mars carries the name of the Roman god of <br />war and is often
            referred to as the "Red Planet".
         `;
  planetImage.src = "../assets/planet/planet-mars.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Mars  ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveMarsClass();
  overviewButton.classList.add("activeMars");
});

internalStructureButton.addEventListener("click", () => {
  planetTextMars.innerHTML = `
  Like Earth, Mars has differentiated into a dense <br />metallic core overlaid by less dense materials.<br /> 
  Scientists initially determined that the core is at <br />least partially liquid. Current models of its<br /> 
  interior imply a core consisting primarily of iron <br />and nickel with about 16–17% sulfur.
         `;
  planetImage.src = "../assets/internal/planet-mars-internal.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Mars#Internal_structure ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveMarsClass();
  internalStructureButton.classList.add("activeMars");
});

surfaceGeologyButton.addEventListener("click", () => {
  planetTextMars.innerHTML = `
  Mars is a terrestrial planet whose surface  <br />consists of minerals containing silicon and  <br />
  oxygen, metals, and other elements that <br />typically make up rock. The surface is primarily<br /> 
  composed of tholeiitic basalt, although parts<br /> 
  are more silica-rich than typical basalt.
         `;
  planetImage.src = "../assets/geology/geology-mars.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Mars#Surface ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveMarsClass();
  surfaceGeologyButton.classList.add("activeMars");
});
