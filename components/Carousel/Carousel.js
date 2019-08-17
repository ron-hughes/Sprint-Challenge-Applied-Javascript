/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imgArr = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg']

function Carousel(imgArr){
  const div = document.createElement('div')
    div.classList.add('carousel')
  const imgOne = document.createElement('img')
  const leftButton = document.createElement('div')
    leftButton.classList.add('left-button')
  const rightButton = document.createElement('div')
    rightButton.classList.add('right-button')

  // keep array index

  let i = 0;

  imgOne.src = imgArr[i]


  //
  leftButton.addEventListener('click', () => {
    if (i < 1){
      // do nothing
    }
    else {
      // decrement index by 1
    i--
    imgOne.src = imgArr[i] 
    }
  })


  rightButton.addEventListener('click', () => {
      // increment index by 1
      if (i < 3) {
        i++
      imgOne.src = imgArr[i] 
      }
    
  })


  div.appendChild(leftButton)
  div.appendChild(imgOne)
  div.appendChild(rightButton)

  return div

}



let carousel_container = document.querySelector('.carousel-container')



let carousel = Carousel(imgArr)
carousel_container.appendChild(carousel)