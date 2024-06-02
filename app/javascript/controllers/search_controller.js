import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['searchTermSpan'];

  connect() {
    // alert('Carreguei!')
  }

  searchTerm(event){
    // alert('bataata!')
    this.searchTermSpanTarget.innerText = event.target.value

    // debugger
  }

}
