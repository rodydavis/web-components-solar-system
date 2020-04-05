class DetailCard extends HTMLElement {
  constructor() {
      super();
      const title = this.getAttribute("title") || "";
      const temp = this.getAttribute("temp") || "";
      const model = this.getAttribute("model") || "";
      const usdz = this.getAttribute("usdz") || "";
    var sb = [];
    sb.push(`
      <model-card
        title="Sun"
        src="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fsun.glb?v=1585766035668"
        usdz="https://cdn.glitch.com/87e23bdd-2436-4ae3-ac20-2a7b64e549ab%2Fsun.usdz?v=1585723438533"
        details="15,000,000°C"
      ></model-card>
    `);
    
    sb.push(`
      <mwc-list-item twoline graphic="avatar" hasmeta>
        <span>Temperature</span>
        <span slot="secondary">15,000,000°C</span>
        <span slot="graphic" class="material-icons inverted">ac_unit</span>
      </mwc-list-item>
    `);
    this.innerHTML = sb.join("");
  }
}

customElements.define('detail-card', DetailCard);