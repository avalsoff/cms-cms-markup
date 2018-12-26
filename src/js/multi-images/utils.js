export function getItem(name) {
  const html =
    `<li class="${name}__item">
      <button type="button" class="${name}__main-btn"></button>
      <div class="${name}__img-wrapper">
        <img src="../img/road.jpg" alt="" class="${name}__img">
      </div>
      <button type="button" class="${name}__close-btn js-inline-close"></button>
    </li>`
  const template = document.createElement('div')
  template.innerHTML = html
  return template.firstChild
}

export function getInput(name, id) {
  const html =
    `<li class="${name}__item">
      <div class="image-drop image-drop--inline">
        <input class="visually-hidden ${name}__input" type="file" id="${id}" name="${id}">
        <label class="image-drop__zone ${name}__dropzone" for="${id}">
          Выберите изображение
        </label>
      </div>
    </li>`
  const template = document.createElement('div')
  template.innerHTML = html
  return template.firstChild
}

export const getId = (() => {
  let id = 1;
  return (name) => ++id + name
})()