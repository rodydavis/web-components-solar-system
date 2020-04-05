class ModelCard extends HTMLElement {
  constructor() {
      super();
      const title = this.getAttribute("title") || "";
      const usdz = this.getAttribute("usdz") || "";
      const source = this.getAttribute("src") || "";
      const details = this.getAttribute("details") || "Just a planet";
      this.innerHTML = `
      <div id="card">
        <!-- All you need to put beautiful, interactive 3D content on your site: -->
        <model-viewer src="${source}"
          ios-src="${usdz}"
          alt="A 3D model of a planet" shadow-intensity="1" camera-controls interaction-prompt="auto" auto-rotate ar
          magic-leap>
        </model-viewer>
        <section class="attribution">
          <span>
            <h1>${title}</h1>
            <span>${details}</span>
          </span>
          <a class="cc" href="https://creativecommons.org/licenses/by/2.0/" target="_blank">
            <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg">
            <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg">
          </a>
        </section>

      </div>
      `;
  }
}

//  <model-card
//           title="Sun"
//           src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fsun.glb?v=1585766035668"
//           usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fsun.usdz?v=1585723438533"
//           details="15,000,000°C"
//         ></model-card>

//         <model-card
//           title="Earth"
//           src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fearth.glb?v=1585766460900"
//           usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fearth.usdz?v=1585724447170"
//           details="-89.2°C to 70.7°C"
//         ></model-card>

//         <model-card
//           title="Pluto"
//           src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fpluto.glb?v=1585767824274"
//           usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fpluto.usdz?v=1585723437951"
//           details="-223°C"
//         ></model-card>

//         <model-card
//           title="Jupiter"
//           src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fjupiter.glb?v=1585767259427"
//           usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fjupiter.usdz?v=1585723436147"
//           details="-145°C"
//         ></model-card>

//         <model-card
//           title="Moon"
//           src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fmoon.glb?v=1585767341680"
//           usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fmoon.usdz?v=1585723435953"
//           details="-173°C to 127°C"
//         ></model-card>

//         <model-card
//           title="Saturn"
//           src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fsaturn.glb?v=1585767820096"
//           usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fsaturn.usdz?v=1585723437935"
//           details="-178°C"
//         ></model-card>

//         <model-card
//           title="Uranus"
//           src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Furanus.glb?v=1585767815480"
//           usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Furanus.usdz?v=1585723438750"
//           details="-224°C"
//         ></model-card>

//         <model-card
//           title="Neptune"
//           src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fneptune.glb?v=1585767819973"
//           usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fneptune.usdz?v=1585723437176"
//           details="-218°C"
//         ></model-card>

//         <model-card
//           title="Mercury"
//           src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fmercury.glb?v=1585767319909"
//           usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fmercury.usdz?v=1585723437971"
//           details="-184°C to 465°C"
//         ></model-card>

//         <model-card
//           title="Venus"
//           src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fvenus.glb?v=1585767824673"
//           usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fvenus.usdz?v=1585723439097"
//           details="460°C"
//         ></model-card>

//         <model-card
//           title="Mars"
//           src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fmars.glb?v=1585767291307"
//           usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fmars.usdz?v=1585723437187"
//           details="-153°C to -55°C"
//         ></model-card>

customElements.define('model-card', ModelCard);