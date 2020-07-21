import { LitElement, html, css } from 'lit-element';
import  Shighl  from 'shighl'
import './shighl-login-icon.js'
import './shighl-person.js'

import './crud/shighl-create.js'
import './crud/shighl-read.js'
import './crud/shighl-update.js'
import './crud/shighl-delete.js'

//import { ShexFormModel, FormModel } from '@inrupt/solid-sdk-forms';
//import { ShexFormModel } from '../src/classes/shex-form-model'


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
    this.shape_url = "https://holacratie.solid.community/public/Schema/todo.shex"
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

    <shighl-create shape_url="${this.shape_url}" workspace="${this.workspace}"></shighl-create>
    </div>

    <div class="card">
    Read
    <shighl-read shape_url="${this.shape_url}" workspace="${this.workspace}"></shighl-read>
    </div>

    <div class="card">
    Update
    <shighl-update shape_url="${this.shape_url}" workspace="${this.workspace}"></shighl-update>
    </div>

    <div class="card">
    Delete
    <shighl-delete shape_url="${this.shape_url}" workspace="${this.workspace}"></shighl-delete>
    </div>

    </div>
    `;
  }



  async firstUpdated(){
    var self = this
    this.session.track(async function(webId){
      self.webId = webId
      self.pod.webId = webId
      if (webId != null){
        if (self.workspace == "default"){
          let st = await self.pod.storage
          self.workspace = `${st+"public/"}`
          console.log(self.workspace)
        }else{
          console.log("Must implement a way to change workspace")
        }
      }else{
        //  self.friends = []
      }
    })

    console.log("SolidForms",solidForms)

    const formModel = new solidForms.FormModel();
    console.log(formModel)
//https://github.com/inrupt/solid-sdk-forms/blob/develop/test/shex-form-model.test.ts
    shexLoader.load([this.shape_url], [], [], []).then(loaded => {
       if (loaded.schema){
         console.log("LOADED",loaded.schema)
         console.log(loaded.schema)
         loaded.schema.start = "https://holacratie.solid.community/public/Todo"
         const shexClass = new solidForms.ShexFormModel(loaded.schema);
         console.log("classe",shexClass)
         const formModelOutput = shexClass.convert();
         console.log("form",formModelOutput)
         //  app.schema = JSON.stringify(loaded.schema);
        // app.parseSchema(loaded.schema)
         //  console.log(Object.entries(loaded.schema.shapes))
       }
     }, err => {
       //  log(err, "ERROR loadShex")
       console.log("erreur ",err)
       alert(err.message)
     }
   );

const url = 'https://shexshapes.inrupt.net/public/notifocation.shex'
const instance = new solidForms.FormModel(url)
    const fileExt = instance.schemaType(url)
    console.log("inst",instance)
    const shexClass2 = new solidForms.ShexFormModel(instance);
    console.log("classe",shexClass2)
    const formModelOutput2 = shexClass2.convert();
    console.log("form",formModelOutput2)
  //  const schema = await formModel.parseShEx("http://shex.io/examples/Issue.shex");
  /*const schema = {
  type: 'Schema',
  start: 'hola:Todo',
  _prefixes: { acl: 'http://www.w3.org/ns/auth/acl#', hola: "https://holacratie.solid.community/public/" },
  shapes: [{ id: 'https://holacratie.solid.community/public/Schema/todo.shex', type: 'Shape' }]
}*/

  }




}

customElements.define('shighl-crud', ShighlCrud);
