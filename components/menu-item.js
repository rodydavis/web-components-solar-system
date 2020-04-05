class MenuItem extends HTMLElement {
  constructor() {
      super();
      const title = this.getAttribute("title") || "";
      const subtitle = this.getAttribute("subtitle") || "";
      this.innerHTML = `
      <mwc-list-item twoline graphic="avatar">
        <span>${title}</span>
        <span slot="secondary">${subtitle}</span>
        <span slot="graphic" class="material-icons inverted">language</span>
      </mwc-list-item>
      `;
  }
}

customElements.define('menu-item', MenuItem);