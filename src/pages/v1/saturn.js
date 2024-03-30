const planetTextVenus = document.getElementById("planetTextSaturn");
const planetLink = document.getElementById("wikiLink");
const planetImage = document.getElementById("planetImage");
const overviewButton = document.getElementById("overviewButton");
const internalStructureButton = document.getElementById(
  "internalStructureButton"
);
const surfaceGeologyButton = document.getElementById("surfaceGeologyButton");

//Função para remover a classe "active" de todos os botões
function removeactiveSaturnClass() {
  overviewButton.classList.remove("activeSaturn");
  internalStructureButton.classList.remove("activeSaturn");
  surfaceGeologyButton.classList.remove("activeSaturn");
}

overviewButton.addEventListener("click", () => {
  planetTextSaturn.innerHTML = `
  Saturn is the sixth planet from the Sun and the <br />second-largest
  in the Solar System, after <br />Jupiter. It is a gas giant with an
  average radius <br />of about nine and a half times that of Earth.
  It <br />only has one-eighth the average density of Earth.
         `;
  planetImage.src = "../assets/planet/planet-saturn.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Saturn  ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveSaturnClass();
  overviewButton.classList.add("activeSaturn");
});

internalStructureButton.addEventListener("click", () => {
  planetTextSaturn.innerHTML = `
  Despite consisting mostly of hydrogen and <br />helium, most of Saturn's mass is
  not in the gas<br /> phase, because hydrogen becomes a <br />non-ideal liquid when the
  density is above 0.01<br /> g/cm3, which is reached at a radius containing <br />99.9%
  of Saturn's mass.         `;
  planetImage.src = "../assets/internal/planet-saturn-internal.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Saturn#Internal_structure  ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveSaturnClass();
  internalStructureButton.classList.add("activeSaturn");
});

surfaceGeologyButton.addEventListener("click", () => {
  planetTextSaturn.innerHTML = `
  The outer atmosphere of Saturn contains <br />96.3% molecular hydrogen and 3.25%
  helium <br />by volume. The planet's most famous feature is<br /> its prominent ring
  system, which is composed <br />mostly of ice particles with a smaller amount of<br />
  rocky debris and dust.         `;
  planetImage.src = "../assets/geology/geology-saturn.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Saturn#Atmosphere ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveSaturnClass();
  surfaceGeologyButton.classList.add("activeSaturn");
});
