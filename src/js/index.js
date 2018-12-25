import dropdown from './dropdown'
import u from 'umbrellajs'

dropdown('dropdown')

function drop(e) {
  e.stopPropagation()
  e.preventDefault()
  console.log('fires')
  const files = e.dataTransfer.files

  handleFiles(files)
}

const dropbox = u('.image-drop').first()
dropbox.addEventListener("drop", drop, false)
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function getItem() {
  const html =
    `<li class="control-images__item">
      <button class="control-images__main-btn"></button>
      <div class="control-images__img-wrapper">
        <img src="../../img/road.jpg" alt="" class="control-images__img">
      </div>
      <button class="control-images__close-btn js-inline-close"></button>
    </li>`
  const template = document.createElement('div')
  template.innerHTML = html
  return template.firstChild
}

function getInput(name) {
  const html =
    `<li class="control-images__item">
      <div class="image-drop image-drop--inline">
        <input multiple class="visually-hidden" type="file" id="${name}" name="${name}">
        <label class="image-drop__zone" for="${name}">
          Выберите или перетащите изображение
        </label>
      </div>
    </li>`
  const template = document.createElement('div')
  template.innerHTML = html
  return template.firstChild
}

const getName = (() => {
  let id = 0;
  return (name) => ++id + name
})()

function handleFiles(files) {
  console.log('1')
  Array.from(files).forEach(file => {
    if (!file.type.startsWith('image/')) {
      return
    }

    const item = getItem();
    item.file = file
    u('.control-images__item:last-of-type').before(item)
    const closeBtn = u(item).children().last();
    u(closeBtn).on('click', handleClose)

    const newInput = getInput( getName('slide-image') )
    u('.control-images__item:last-of-type')
      .addClass('visually-hidden')
      .after(newInput)
      
    u('.control-images__item:last-of-type')
      .find('input')
      .on('change', handleFiles)

    const reader = new FileReader()
    reader.onload = e => {
      const img = u(item).find('img').first()
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  })
}

u('#file').on('change', e => handleFiles(e.target.files))

u('.control-images__close-btn').on('click', handleClose)

function handleClose(event) {
  const item = u(event.target)
  if ( item.hasClass('js-inline-close') ) {
    item.closest('.control-images__item').remove()
    return
  } else {

  }
}