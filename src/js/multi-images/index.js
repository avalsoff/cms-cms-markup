import u from 'umbrellajs'
import { getInput, getItem, getId } from './utils'

function handleChange(e, name, mainBlock) {
  const files = e.target.files
  Array.from(files).forEach(file => {
    if (!file.type.startsWith('image/')) {
      return
    }

    const item = getItem(name);
    mainBlock.find(`.${name}__item:last-of-type`).before(item)
    const closeBtn = u(item).children().last()
    
    const newInput = getInput(name, getId('slide-image') )
    const currentInput = mainBlock.find(`.${name}__item:last-of-type`)
    currentInput.addClass('visually-hidden').after(newInput)
    
    u(closeBtn).on('click', e => handleClose(e, name, currentInput) )

    mainBlock.find(`.${name}__item:last-of-type`)
      .find('input')
      .on('change', e => handleChange(e, name, mainBlock))

    const reader = new FileReader()
    reader.onload = e => {
      const img = u(item).find('img').first()
      img.file = file
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  })
}

function handleClose(event, name, currentInput) {
  const item = u(event.target)
  if ( item.hasClass('js-inline-close') ) {
    currentInput.remove()
    item.closest(`.${name}__item`).remove()
    return
  } else {

  }
}

export default function(name) {
  if ( !u(`.${name}`).length ) {
    return
  }

  const mainBlock = u(`.${name}`)

  mainBlock.find(`.${name}__input`).on('change', e => handleChange(e, name, mainBlock) )
  
  mainBlock.find(`.${name}__close-btn`).on('click', e => handleClose(e, name))
}