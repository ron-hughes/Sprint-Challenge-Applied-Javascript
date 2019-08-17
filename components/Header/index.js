// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const div = document.createElement('div')
    div.classList.add('header') 
const spanDate = document.createElement('span')
    spanDate.classList.add('date')
const h1 = document.createElement('h1')
const spanTemp = document.createElement('span')
    spanTemp.classList.add('temp')

    spanDate.textContent = 'MARCH 28, 2019'
    h1.textContent = 'Lambda Times'
    spanTemp.textContent = '98°'

    div.appendChild(spanDate)
    div.appendChild(h1)
    div.appendChild(spanTemp)

    return div

}

let headerContainer = document.querySelector('.header-container');

let header = Header()

headerContainer.appendChild(header)