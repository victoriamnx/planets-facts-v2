const planetTextVenus = document.getElementById("planetTextJupiter");
const planetLink = document.getElementById("wikiLink");
const planetImage = document.getElementById("planetImage");
const overviewButton = document.getElementById("overviewButton");
const internalStructureButton = document.getElementById(
  "internalStructureButton"
);
const surfaceGeologyButton = document.getElementById("surfaceGeologyButton");

//Função para remover a classe "active" de todos os botões
function removeactiveJupiterClass() {
  overviewButton.classList.remove("activeJupiter");
  internalStructureButton.classList.remove("activeJupiter");
  surfaceGeologyButton.classList.remove("activeJupiter");
}

overviewButton.addEventListener("click", () => {
  planetTextJupiter.innerHTML = `
  Jupiter is the fifth planet from the Sun and the <br />largest in
  the Solar System. It is a gas giant with<br />
  a mass two and a half times that of all the other <br />planets in
  the Solar System combined, but less<br />
  than one-thousandth the mass of the Sun.
         `;
  planetImage.src = "../assets/planet/planet-jupiter.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Jupiter">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveJupiterClass();
  overviewButton.classList.add("activeJupiter");
});

internalStructureButton.addEventListener("click", () => {
  planetTextJupiter.innerHTML = `
  When the Juno arrived in 2016, it found that <br />Jupiter has a very diffuse core
  that mixes into<br /> its mantle. A possible cause is an impact from a <br />planet of
  about ten Earth masses a few million <br />years after Jupiter's formation, which
  would <br />have disrupted an originally solid Jovian core. 
         `;
  planetImage.src = "../assets/internal/planet-jupiter-internal.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Jupiter#Internal_structure">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveJupiterClass();
  internalStructureButton.classList.add("activeJupiter");
});

surfaceGeologyButton.addEventListener("click", () => {
  planetTextJupiter.innerHTML = `
  The best known feature of Jupiter is the Great <br />Red Spot, a persistent
  anticyclonic storm <br />located 22° south of the equator. It is known to<br /> have
  existed since at least 1831, and possibly <br />since 1665.         `;
  planetImage.src = "../assets/geology/geology-jupiter.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href=" https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeactiveJupiterClass();
  surfaceGeologyButton.classList.add("activeJupiter");
});
