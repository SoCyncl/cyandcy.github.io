class slimNavbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
    <div class="navbar">
      <div class="navigation">
          <a href="/"><div class="navlink">Home</div></a>
          <a href="/quill-and-terms.html"><div class="navlink">Quill&Terms</div></a>
          <a href="/characters/"><div class="navlink">Characters</div></a>
          <a href="/recap.html"><div class="navlink">Recap</div></a>
          <a href="/fun-fact-friday.html"><div class="navlink">Fun Fact Friday</div></a>
          <a href="/beastiary.html"><div class="navlink">Beastiary</div></a>
          <a href="/regions/"><div class="navlink">Regions</div></a>
      </div>
    </div>
      `;
    }
  }

  customElements.define('slimnav-block', slimNavbar);
