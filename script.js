const app = document.getElementById('app');

const input = document.createElement('input');
input.type = 'text';

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        input.value.trim() && list.addItem(new Item(input.value));
        input.value = '';
    }
});


app.append(input);

const list = new List(app);
list.addItem(new Item('First'));
list.addItem(new Item('Second'));
list.addItem(new Item('Third'));

// list.toggleItem(1);
// setTimeout(() => {
//     list.toggleItem(1);
// }, 1000);

console.log(document.body.children);
const div = document.createElement('div');
document.body.append(div);

const div1 = document.createElement('div');
document.body.append(div1);
div1.className = 'div1';

const div2 = document.createElement('div');
div1.append(div2);
div2.className = 'div2';


const div3 = document.createElement('div');
div2.append(div3);
div3.className = 'div3';


div1.addEventListener('click', () => console.log('Click 1'));
div2.addEventListener('click', () => console.log('Click 2'));
div3.addEventListener('click', (e) => {
    console.log('Click 3');
    e.stopImmediatePropagation();
});
div3.addEventListener('click', (e) => {
    console.log('Click 4');
    e.stopPropagation();
});

const link = document.createElement('a');
link.href = 'https://www.google.com/search?q=dfh&oq=dfh&aqs=chrome..69i57j0l2j46j0j46l3.519j0j7&sourceid=chrome&ie=UTF-8';
link.innerText = 'link';
link.setAttribute('title', 'link');
document.body.append(link);
link.addEventListener('click', (e) => {
    console.log('Logic...');
    e.preventDefault();
});

