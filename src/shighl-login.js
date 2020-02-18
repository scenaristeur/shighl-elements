import { LitElement, html, css } from 'lit-element';
import  Shighl  from 'shighl'

class ShighlLogin extends LitElement {
  static get properties() {
    return {
      mood: {type: String},
      webId: {type: String},
    }
  }

  constructor() {
    super();
    this.webId = null
    const sh = new Shighl()
    this.session = new sh.session()
  }

  render() {
    return html`
    ${this.webId == null ?
      html`<button @click="${this.login}">Login</button>`
      :html`
      ${this.webId}<br>
      <button @click="${this.logout}">Logout</button>
      `}
      `;
    }

    async firstUpdated(){
      var self = this
      this.session.track(function(webId){
        self.webId = webId
      })
    }

    login(){
      this.session.login()
    }

    logout(){
      this.session.logout()
    }
  }

  customElements.define('shighl-login', ShighlLogin);
