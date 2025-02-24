import { LitElement, html, css } from 'lit-element';
import  Shighl  from 'shighl'

class ShighlLoginBootStrap extends LitElement {
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
    <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="css/fontawesome/css/all.css" rel="stylesheet">
    <div title="${this.webId}">
    ${this.webId == null ?
      html`<button type="button" class="btn btn-primary" @click="${this.login}">Login</button>`
      :html`
      <button type="button" class="btn btn-primary" @click="${this.logout}">
      <slot name="before"></slot>
      Logout
      <slot name="after"></slot>
      </button>
      `}
      </div>
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

  customElements.define('shighl-login-bootstrap', ShighlLoginBootStrap);
