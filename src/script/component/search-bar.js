class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<input placeholder="Search football club" id=${this.searchElement} type="search">
        <button id="${this.searchButtonElement}" type="submit">Search</button>`;
    }
}

customElements.define('search-container', SearchBar);