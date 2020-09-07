class Item {
    constructor(content) {
        this.content = content;
        this.state = false;
    }

    toggleState(state) {
        this.state = !this.state;
    }
}