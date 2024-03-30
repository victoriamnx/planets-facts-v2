const planetTextVenus = document.getElementById("planetTextEarth");
const planetLink = document.getElementById("wikiLink");
const planetImage = document.getElementById("planetImage");
const overviewButton = document.getElementById("overviewButton");
const internalStructureButton = document.getElementById(
  "internalStructureButton"
);
const surfaceGeologyButton = document.getElementById("surfaceGeologyButton");

//Função para remover a classe "active" de todos os botões
function removeactiveEarthClass() {
  overviewButton.classList.remove("activeEarth");
  internalStructureButton.classList.remove("activeEarth");
  surfaceGeologyButton.classList.remove("activeEarth");
}

overviewButton.addEventListener("click", () => {
  planetTextEarth.innerHTML = `
  Third planet from the Sun and the only known<br />
            planet to harbor life. About 29.2% of Earth's<br />
            surface is land with remaining 70.8% is<br />
            covered with water. Earth's distance from the<br />
            Sun, physical properties and geological history<br />
            have allowed life to evolve and thrive.
         `;
  planetImage.src = "../assets/planet/planet-earth.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Earth ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveEarthClass();
  overviewButton.classList.add("activeEarth");
});

internalStructureButton.addEventListener("click", () => {
  planetTextEarth.innerHTML = `
  Earth's interior, like that of the other terrestrial<br /> planets, is divided into layers by their chemical<br /> or physical (rheological) properties. The outer <br />layer is a chemically distinct silicate solid crust,<br /> which is underlain by a highly viscous solid mantle.
         `;
  planetImage.src = "../assets/internal/planet-earth-internal.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Earth#Internal_structure ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveEarthClass();
  internalStructureButton.classList.add("activeEarth");
});

surfaceGeologyButton.addEventListener("click", () => {
  planetTextEarth.innerHTML = `
  The total surface area of Earth is about 510 <br />million km2. The continental crust consists of<br /> lower density material such as the igneous<br /> rocks granite and andesite. Less common is<br /> basalt, a denser volcanic rock that is the <br />primary constituent of the ocean floors.
         `;
  planetImage.src = "../assets/geology/geology-earth.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Earth#Surface ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveEarthClass();
  surfaceGeologyButton.classList.add("activeEarth");
});
