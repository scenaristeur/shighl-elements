import { LitElement, html, css } from 'lit-element';
const auth = require('solid-auth-client')

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
    const sh = new Shighl()
  //  console.log(sh)
  //  sh.test()
    this.webId = null
    this.session = new sh.session()
  //  this.pod = new sh.pod()
  //  console.log(this.session)
  //  console.log(this.pod)

  }

  static get styles() {
    return css`.mood { color: green; }`;
  }

  render() {
    return html`
    Web Components are <span class="mood">${this.mood}</span>!
    <br>

    ${this.webId == null ?
      html`<button @click="${this.login}">Login</button>
      `
      :html`
      ${this.webId}<br>
      <button @click="${this.logout}">Logout</button>
      `}

      `;
    }

    async firstUpdated(){
      var self = this
      this.session.track(function(webId){
        console.log(webId)
        self.webId = webId
      })
    }


    login(){
      this.session.login()
    }

    logout(){
      this.session.logout()
    //  this.webId = "out"
    }
  }

  customElements.define('shighl-login', ShighlLogin);
