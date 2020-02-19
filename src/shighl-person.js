import { LitElement, html, css } from 'lit-element';
import  Shighl  from 'shighl'

class ShighlPerson extends LitElement {
  static get properties() {
    return {
      webId: {type: String},
      pod: {type: Object},
      name: {type: String},
      photo: {type: String}
    }
  }

  constructor() {
    super();
    this.webId = null
    this.name = null
    this.photo = null
    const sh = new Shighl()
    this.session = new sh.session()
    this.pod = new sh.pod()
  }

  render() {
    return html`
    <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="css/fontawesome/css/all.css" rel="stylesheet">

    <div class="col  mb-4">
    <div class="card h-100">
    ${this.photo != null && this.photo != "undefined" ?
    html`<img class="card-img-top rounded-circle img-thumbnail"  src="//images.weserv.nl/?url=${this.photo}&w=100&h=100">`
    :html`<i class="card-img-top img-thumbnail fas fa-user-circle fa-5x"></i>`
  }
  <div class="card-body">
  <h5 class="card-title">${this.name}</h5>
  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
  </div>
  <div class="card-footer">
  <small class="text-muted">${this.webId}</small>
  </div>
  </div>
  </div

  `;
}

async firstUpdated(){
  this.pod.webId = this.webId
  this.name = await this.pod.name
  this.photo = await this.pod.photo
}

}

customElements.define('shighl-person', ShighlPerson);
