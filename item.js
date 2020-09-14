class Item {
    constructor(content) {
        this.content = content;
        this.state = false;
        this._items = [];
        this.el = document.createElement('li');
        this.registerListeners();
        this.setContent(content);
    }

    addItem(item) {
        this._items = [...this._items, item];
        this.el.append(item.el);
    }

    registerListeners() {
        this.el.addEventListener('click', () => {
            this.toggleState();
        });
    }

    setContent(content) {
        this.el.innerText = content;
    }

    toggleState(state) {
        this.state = !this.state;
        this.el.classList.toggle('crossed');
    }
}