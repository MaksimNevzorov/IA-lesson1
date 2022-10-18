export default class Card extends HTMLElement {
    constructor() {
        super()
        this.data = JSON.parse(this.getAttribute('data'))
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${this.data.previe}" class="card-img-top" alt="${this.data.previe}">
        <div class="card-body">
            <h5 class="card-title">${this.data.title}</h5>
            <p class="card-text">${this.data.discription}</p>
            <p><strong>${this.data.prise}</strong></p>
            <a href="#" class="btn btn-primary">add</a>
        </div>
        </div>
        `
    }
}