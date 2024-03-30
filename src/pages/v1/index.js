const planetText = document.getElementById("planetText");
const planetLink = document.getElementById("internalLink");
const planetImage = document.getElementById("planetImage");
const overviewButton = document.getElementById("overviewButton");
const internalStructureButton = document.getElementById(
  "internalStructureButton"
);
const surfaceGeologyButton = document.getElementById("surfaceGeologyButton");

//Função para remover a classe "active" de todos os botões
function removeActiveClass() {
  overviewButton.classList.remove("active");
  internalStructureButton.classList.remove("active");
  surfaceGeologyButton.classList.remove("active");
}

overviewButton.addEventListener("click", () => {
  planetText.innerHTML = `
         Mercury is the smallest planet in the Solar<br />
         System and the closest to the Sun. Its orbit <br />around the Sun
         takes 87.97 Earth days, the <br />shortest of all the Sun's planets.
         Mercury is one <br />of four terrestrial planets in the Solar
         System,<br />
         and is a rocky body like Earth.
         `;
  planetImage.src = "./assets/planet/planet-mercury.svg";

  //Adicionar a classe "active" apenas ao botão clicado
  removeActiveClass();
  overviewButton.classList.add("active");
});

internalStructureButton.addEventListener("click", () => {
  planetText.innerHTML = `
         Mercury appears to have a solid silicate crust <br />and mantle overlying a
         solid, iron sulfide outer <br />core layer, a deeper liquid core layer, and a<br />
         solid inner core. The planet's density is the <br />second highest in the Solar
         System at 5.427 <br />g/cm3, only slightly less than Earth's density. 
         `;
  planetImage.src = "./assets/internal/planet-mercury-internal.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure ">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeActiveClass();
  internalStructureButton.classList.add("active");
});

surfaceGeologyButton.addEventListener("click", () => {
  planetText.innerHTML = `
         Mercury's surface is similar in appearance to <br />that of the Moon, showing
         extensive mare-like <br />plains and heavy cratering, indicating that it<br /> has
         been geologically inactive for billions of <br />years. It is more heterogeneous
         than either <br />Mars's or the Moon’s. 
         `;
  planetImage.src = "/assets/geology/geology-mercury.svg";

  wikiLink.innerHTML = ` 
  <a id="internalLink" href="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology">
              Wikipedia
              <img id="source" src="/assets/icon-source.svg" alt="Source icon"
            /></a>
             `;

  //Adicionar a classe "active" apenas ao botão clicado
  removeActiveClass();
  surfaceGeologyButton.classList.add("active");
});
