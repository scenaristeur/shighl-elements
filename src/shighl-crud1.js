import { LitElement, html, css } from 'lit-element';
import  Shighl  from 'shighl'
import './shighl-login-icon.js'
import './shighl-person.js'

import './crud/shighl-create.js'
import './crud/shighl-read.js'
import './crud/shighl-update.js'
import './crud/shighl-delete.js'


class ShighlCrud extends LitElement {
  static get properties() {
    return {
      mood: {type: String},
      webId: {type: String},
      pod: {type: Object},
      shape_url: {type: String},
      workspace: {type: String}
    }
  }

  constructor() {
    super();
    this.webId = null
    const sh = new Shighl()
    this.session = new sh.session()
    this.pod = new sh.pod()
    console.log("POD",this.pod)
    this.workspace = "public"
  }



  render() {
    return html`
    <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="css/fontawesome/css/all.css" rel="stylesheet">
    <div class="container">
    ${this.shape_url}

    <shighl-login-icon></shighl-login-icon>

    <div class="card">
    Create

    <shighl-create shape_url="${this.shape_url}"></shighl-create>
    </div>

    <div class="card">
    Read
    <shighl-read></shighl-read>
    </div>

    <div class="card">
    Update
    <shighl-update></shighl-update>
    </div>

    <div class="card">
    Delete
    <shighl-delete></shighl-delete>
    </div>

    </div>
    `;
  }



  firstUpdated(){
    var self = this
    this.session.track(async function(webId){
      self.webId = webId
      self.pod.webId = webId
      if (webId != null){
        if (self.workspace == "default"){
          let st = await self.pod.storage
          self.pod.st = `${st+"public/"}`
          console.log(self.pod)
        }else{
          console.log("Must implement a way to change workspace")  
        }
      }else{
        //  self.friends = []
      }
    })
  }




}

customElements.define('shighl-crud', ShighlCrud);
