import { LitElement, html, css } from 'lit-element';
import  Shighl  from 'shighl'


class ShighlUpdate extends LitElement {
  static get properties() {
    return {
      mood: {type: String},
      webId: {type: String},
      pod: {type: Object},
      friends: {type: Array},
    }
  }

  constructor() {
    super();
    this.webId = null
    const sh = new Shighl()
    this.session = new sh.session()
    this.pod = new sh.pod()
    this.friends = []
  }



  render() {
    return html`
    <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="css/fontawesome/css/all.css" rel="stylesheet">
    <div class="container">

    <div class="card">
    Update
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
          self.friends = await self.pod.friends
        }else{
          self.friends = []
        }
      })
    }




  }

  customElements.define('shighl-update', ShighlUpdate);
