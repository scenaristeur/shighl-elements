import { LitElement, html, css } from 'lit-element';
import  Shighl  from 'shighl'

class ShighlLoginIcon extends LitElement {
  static get properties() {
    return {
      mood: {type: String},
      webId: {type: String},
      pod: {type: Object},
      name: {type: String},
      photo: {type: String}
    }
  }

  constructor() {
    super();
    this.webId = null
    const sh = new Shighl()
    this.session = new sh.session()
    this.pod = new sh.pod()
    this.name = null
    this.photo = null
  }

  render() {
    return html`
    <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="css/fontawesome/css/all.css" rel="stylesheet">
    <div title="${this.webId}">
    ${this.webId == null ?
      html`<button type="button" class="btn btn-primary" @click="${this.login}"><i class="fas fa-sign-in-alt"></i>
      </button>`
      :html`
      <button type="button" class="btn btn-primary" @click="${this.logout}">
      ${this.photo != null ?
        html`<img class="rounded-circle" src="//images.weserv.nl/?url=${this.photo}&w=29&h=29">`
        :html`<i class="fas fa-user-circle fa-2x"></i>`
      }
      <i class="fas fa-sign-out-alt"></i>
      ${this.name}
      </button>
      `}
      </div>
      `;
    }

    async firstUpdated(){
      var self = this
      this.session.track(async function(webId){
        self.webId = webId
        if (webId != null){
          self.pod.webId = webId
          self.name = await self.pod.name
          self.photo = await self.pod.photo
        }else{
          self.name = null
          self.photo = null
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

  customElements.define('shighl-login-icon', ShighlLoginIcon);
