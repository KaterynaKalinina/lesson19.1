class List {
    constructor(elWrapper) {
        this.elWrapper = elWrapper;
        this._items = [];
        this.el = document.createElement('div');
        this.render();
    }

    addItem(item) {
        this._items = [...this._items, item];
        const index = this._items.length-1;
        const cross = new Cross();
        const listElementWrapper = document.createElement('div');
        listElementWrapper.append(item.el);
        listElementWrapper.append(cross.el);

        cross.el.addEventListener('click', () => {
            this._items.splice(index);
            listElementWrapper.remove();
        });
        this.el.append(listElementWrapper);
    }

    // createCross() {
    //     const cross = document.createElement('span');
    //     cross.innerText = 'X';
    //     return cross;
    // }

    deleteItem(index) {
        const el = [...this._items];
        el.splice(index, 1);
        this._items = el;
        this.render();
    }

    toggleItem(index) {
        this._items[index].toggleState();
        this.render();

    }

    render() {
        this.elWrapper.append(this.el);
    }
}






    // renderItems() {
    //     return `
    //     <ul id = "todo-list">
    //          ${this._items.map((item) => `
    //          <li class='${item.state ? 'crossed' : ''}'>${item.content}</li>`
    //             )
    //         .join('')}
    //     </ul>
    //     `;
    // }

    // renderItemsByDOMMethods() {

    //     this._items.forEach((item) => {
    //         const li = document.createElement('li');
    //         this.ul.append(li);
    //     });
    //     this.elWrapper.append(ul);
    // }