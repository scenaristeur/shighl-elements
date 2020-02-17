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
    console.log(sh)
    sh.test()
    this.webId = null
    this.session = new sh.session()
    this.pod = new sh.pod()
    console.log(this.session)
    console.log(this.pod)
  }

  static get styles() {
    return css`.mood { color: green; }`;
  }

  render() {
    return html`
    Web Components are <span class="mood">${this.mood}</span>!
    <br>
    ${this.webId}
    <button @click="${this.login}">Login</button>
    <button @click="${this.logout}">Logout</button>

    `;
  }

  async firstUpdated(){
    var app = this
    auth.trackSession(session => {
      if (!session){
        app.webId = null
        console.log('The user is not logged in')
      }

      else
      {
        app.webId =  `${session.webId}`
        console.log(`The user is ${session.webId}`)
      }

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
