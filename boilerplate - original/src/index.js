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
  imagePreviewMaxHeight: 100,

  //filter
  allowImageFilter: true,
  imageFilterColorMatrix: [
    0.299,
    0.587,
    0.114,
    0,
    0,
    0.299,
    0.587,
    0.114,
    0,
    0,
    0.299,
    0.587,
    0.114,
    0,
    0,
    0.0,
    0.0,
    0.0,
    1,
    0,
  ]
})

// Add it to the DOM
const uploadArea = document.getElementById('uploadArea')
uploadArea.appendChild(pond.element)

const uploadButton = document.createElement('button')
uploadButton.innerHTML = 'Upload'
uploadArea.appendChild(uploadButton)


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
document.addEventListener('DOMContentLoaded', function () {

  let basicOptions = {
    type: 'loop',
    perPage: 3,
    rewind: true,
    speed: 1000,
    autoplay: true,
    easing: 'cubic-bezier(.645,.045,.335,1)',
    arrows: true,
    pagination: false,
    interval: 1000 * 5,
    pauseOnHover: false,
    pauseOnFocus: false,
    keyboard: false,
    drag: false
  };

  // var splide = new Splide('#splide').mount();
  let carousel = new Splide('#carousel', basicOptions);
  carousel.mount();
})





