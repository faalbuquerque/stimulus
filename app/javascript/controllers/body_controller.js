import { Controller } from "@hotwired/stimulus"
import { useDebounce } from 'stimulus-use'

export default class extends Controller {
  static targets = ['searchTermSpan', 'mainContainer'];
  static debounces = [
    {
      name: 'search',
      wait: 2000
    }
  ];

  connect() {
    useDebounce(this)
  }

  search(event){
    const url = `http://127.0.0.1:3000/search?search=`;

    this.searchTermSpanTarget.innerText = event.target.value
    const urlTarget = url + event.target.value
    this.runSearch(urlTarget)
  }

  runSearch(urlTarget) {
    fetch(urlTarget).then(response =>{
      return response.json();
    })
    .then(data =>{
      this.mainContainerTarget.innerHTML = ''

      data.forEach(element => {
        let link = document.createElement('a');
        let lineBreak = document.createElement('br');
        link.setAttribute('href', `http://127.0.0.1:3000/articles/${element.id}`);
        link.innerHTML = element.title

        this.mainContainerTarget.appendChild(link);
        this.mainContainerTarget.appendChild(lineBreak);
      });
    });
  }
}
