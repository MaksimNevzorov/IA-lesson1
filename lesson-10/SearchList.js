export default class SearchList extends HTMLElement {
    constructor() {
        super();

        this.data = JSON.parse(this.getAttribute('data'));
    }

    connectedCallback() {
        this.render()
        console.log(this.data)
    }

    render() {
        this.innerHTML = `
        <ul>
            ${this.data
                .map((item) => `<li> ${item}`)
                .join('')
            }
        </ul>
        `
    }
}
customElements.define('search-list', SearchList)