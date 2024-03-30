const planetTextVenus = document.getElementById("planetTextVenus");
const planetLink = document.getElementById("wikiLink");
const planetImage = document.getElementById("planetImage");
const overviewButton = document.getElementById("overviewButton");
const internalStructureButton = document.getElementById(
  "internalStructureButton"
);
const surfaceGeologyButton = document.getElementById("surfaceGeologyButton");

//Função para remover a classe "active" de todos os botões
function removeactiveVenusClass() {
  overviewButton.classList.remove("activeVenus");
  internalStructureButton.classList.remove("activeVenus");
  surfaceGeologyButton.classList.remove("activeVenus");
}

overviewButton.addEventListener("click", () => {
  planetTextVenus.innerHTML = `
  Venus is the second planet from the Sun.<br />
  It is named after the Roman goddess of love and<br />
  beauty. As the brightest natural object in<br />
  Earth's night sky after the Moon, Venus can cast <br />shadows and
  can be, on rare occasions, visible <br />to the naked eye in broad
  daylight.
         `;
  planetImage.src = "../assets/planet/planet-venus.svg";

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveVenusClass();
  overviewButton.classList.add("activeVenus");
});

internalStructureButton.addEventListener("click", () => {
  planetTextVenus.innerHTML = `
  The similarity in size and density between <br />Venus and Earth suggests they
  share a similar<br /> internal structure: a core, mantle, and crust.<br /> Like that of
  Earth, Venusian core is most likely<br /> at least partially liquid because the
  two planets <br />have been cooling at about the same rate.
         `;
  planetImage.src = "../assets/internal/planet-venus-internal.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Venus#Internal_structure">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveVenusClass();
  internalStructureButton.classList.add("activeVenus");
});

surfaceGeologyButton.addEventListener("click", () => {
  planetTextVenus.innerHTML = `
  Much of the Venusian surface appears to have <br />been shaped by volcanic
  activity. Venus has <br />several times as many volcanoes as Earth, and <br />it has 167
  large volcanoes that are over 100 km <br />(60 mi) across. The only volcanic
  complex of <br />this size on Earth is the Big Island of Hawaii. 
         `;
  planetImage.src = "../assets/geology/geology-venus.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Venus#Surface_geology ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveVenusClass();
  surfaceGeologyButton.classList.add("activeVenus");
});
