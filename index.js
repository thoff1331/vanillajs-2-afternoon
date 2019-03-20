console.log('mehhh')

const letters = [];
let listItem = document.getElementById('li');
const search = document.querySelector('input');

fetch('https://www.swapi.co/api/people?format=json')
.then(response => response.json())
.then(response => {
  letters.push(...response.results);
  render();
})
console.log(letters);
function filteredText() {
    function filterText() {
        const filtered = characters
            .filter(val => val.name.toLowerCase().includes(this.value.toLowerCase()))
            .map(val => `<li>${val.name}</li>`)
    
        if (filtered.length) {
            render(filtered)
        }
    }
    function render(array) {
        const html = array.join('');
        list.innerHTML = html;
    }
    
}
search.addEventListener('keyup', filterText );
