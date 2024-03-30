const planetTextVenus = document.getElementById("planetTextNeptune");
const planetLink = document.getElementById("wikiLink");
const planetImage = document.getElementById("planetImage");
const overviewButton = document.getElementById("overviewButton");
const internalStructureButton = document.getElementById(
  "internalStructureButton"
);
const surfaceGeologyButton = document.getElementById("surfaceGeologyButton");

//Função para remover a classe "active" de todos os botões
function removeactiveNeptuneClass() {
  overviewButton.classList.remove("activeNeptune");
  internalStructureButton.classList.remove("activeNeptune");
  surfaceGeologyButton.classList.remove("activeNeptune");
}

overviewButton.addEventListener("click", () => {
  planetTextNeptune.innerHTML = `
  Neptune is the eighth and farthest-known Solar <br />planet from the
  Sun. In the Solar System, it is <br />the fourth-largest planet by
  diameter, the <br />third-most-massive planet, and the densest
  <br />giant planet. It is 17 times the mass of Neptune,<br />
  more massive than its near-twin Uranus.
         `;
  planetImage.src = "../assets/planet/planet-neptune.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Neptune ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveNeptuneClass();
  overviewButton.classList.add("activeNeptune");
});

internalStructureButton.addEventListener("click", () => {
  planetTextNeptune.innerHTML = `
  Neptune's internal structure resembles that of  <br />Uranus. Its atmosphere forms
  about 5% to 10%  <br />of its mass and extends perhaps 10% to 20% of <br /> the way
  towards the core. Increasing  <br />  concentrations of methane, ammonia and <br /> water
  are found in the lower regions.          `;
  planetImage.src = "../assets/internal/planet-neptune-internal.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Neptune#Internal_structure ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveNeptuneClass();
  internalStructureButton.classList.add("activeNeptune");
});

surfaceGeologyButton.addEventListener("click", () => {
  planetTextNeptune.innerHTML = `
  Neptune's atmosphere is 80% hydrogen and<br /> 19% helium. A trace amount of
  methane is also <br />present. Prominent absorption bands of <br />methane exist at
  wavelengths above 600 nm, <br />in the red and infrared portion of the spectrum.
           `;
  planetImage.src = "../assets/geology/geology-neptune.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Neptune#Atmosphere ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveNeptuneClass();
  surfaceGeologyButton.classList.add("activeNeptune");
});
