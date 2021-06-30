//upload
import * as FilePond from 'filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageFilter from 'filepond-plugin-image-filter'
// carousel
import Splide from '@splidejs/splide'

//upload
FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageFilter
)

// Create a upload component
const pond = FilePond.create({
  name: 'filepond',
  allowImagePreview: true,
  imagePreviewMaxHeight: 200,
  // allowProcess: true,
  // storeAsFile: true,
  credits: false,
})

// next instance
const pond1 = FilePond.create({
  // element: document.getElementById('hidden-div1'),
  name: 'filter1',

  //filter
  allowImageFilter: true,
  imageFilterColorMatrix: [
    0.299, 0.587, 0.114, 0, 0,
    0.299, 0.587, 0.114, 0, 0,
    0.299, 0.587, 0.114, 0, 0,
    0.0, 0.0, 0.0, 1, 0,
  ]
})
pond1.addFile(pond)

const pond2 = FilePond.create({
  // element: document.getElementById('hidden-div2'),
  name: 'filter2',

  //filter
  allowImageFilter: true,
  imageFilterColorMatrix: [
    1.000,  0.000,  0.000,  0.000,  0.800,
    0.200,  0.200,  0.300,  0.000,  0.000,
    0.100,  0.000,  0.000,  0.000,  0.200,
    0.000,  0.000,  0.000,  1.000,  0.000
  ]
})
pond2.addFile(pond)

const pond3 = FilePond.create({
  // element: document.getElementById('hidden-div3'),
  name: 'filter3',

  //filter
  allowImageFilter: true,
  imageFilterColorMatrix: [
    0.600,  0.000,  0.300,  0.000,  0.000,
    0.200,  0.000,  0.400,  0.000, 0.000,
    0.100,  0.000,  0.700,  0.000,  0.000,
    0.000,  0.000,  0.000,  1.000,  0.000
  ]
})
pond3.addFile(pond)


// Add uploadArea to the DOM
const uploadArea = document.getElementById('uploadArea')
uploadArea.appendChild(pond.element)
// const hiddenArea = document.getElementById('hiddenArea')



// Add upload Button to upload Area
const uploadButton = document.createElement('button')
uploadButton.innerHTML = 'Upload'
uploadArea.appendChild(uploadButton)

// THEORY
// 1. click button -> event handler:
//     Add pond to carousel
// CHALLANGE
// Add mutliple instances of pond to carousel

const addImage = () => {
  const image = document.querySelector('canvas')
  const slide = document.createElement('div')
  slide.classList.add('splide__slide')
  const slideList = document.getElementsByClassName('splide__list')[0]
  if (!image) return
  slide.appendChild(image)
  slideList.appendChild(slide)
}

//filters for original image
const filters = []
const addFilters = () => {
  filters.push(pond1)
  filters.push(pond2)
  filters.push(pond3)
  filters.forEach(() => {
    addImage()
  })
}



uploadButton.addEventListener ('click', () => {
  addImage()
  addFilters()
  const carousel = document.getElementById('carousel')
  carousel.classList.remove('hidden')
  const uploadArea = document.getElementById('uploadArea')
  uploadArea.classList.add('hidden')
  //show download area
  const downloadArea = document.getElementById('downloadArea')
  downloadArea.classList.remove('hidden')
})

//restart programm --- Doenst work (pond needs to be restarted(preview image removed))
const restartButton = document.getElementById('restart')

const newPond = FilePond.create({
  name: 'filepond',
  allowImagePreview: true,
  imagePreviewMaxHeight: 200,
  // allowProcess: true,
  // storeAsFile: true,
  credits: false,
})

restartButton.addEventListener ('click', () => {
  uploadArea.classList.remove('hidden')
  uploadArea.appendChild(newPond)
  const downloadArea = document.getElementById('downloadArea')
  downloadArea.classList.add('hidden')
})


// How to save the image to localStorage??
let allImages = []
allImages.push(pond)

const savedImages = () => {
  localStorage.setItem('allImages', JSON.stringify(allImages))
}

savedImages()


// Read existing images from localStorage
const loadImages  = () => {
  const imagesJSON = localStorage.getItem('allImages')

  try {
    return imagesJSON ? JSON.parse(imagesJSON) : []
  } catch (e) {
    return []
  }
}

loadImages()

//Wie kann ich mehrere Instances=Images mit Filtern erzeugen?






// carousel
document.addEventListener('DOMContentLoaded', () => {

  let basicOptions = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    // rewind: true,
    speed: 1000,
    interval: 1000 * 5,
    autoplay: true,
    easing: 'cubic-bezier(.645,.045,.335,1)',
    focus: 'center',
    width: 900,
    fixedHeight: '20rem',
    cover: true,
    // heightRatio: 0.45,
    gap: 25,
    padding: {
      left: '3rem',
      right: '3rem',
    },
    arrows: true,
    pagination: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    keyboard: false,
    drag: false,
    accessibility: true
  }

  let carousel = new Splide('#carousel', basicOptions);
  carousel.mount()
})





