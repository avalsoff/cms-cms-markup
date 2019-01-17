import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default function (selector) {
  document.querySelectorAll(selector)
    .forEach(node => {      
      ClassicEditor.create(node)
        .then(editor => {
          editor.ui.view.editable.editableElement.style.minHeight = '200px'
          editor.ui.view.element.style.marginBottom = '15px'
        })
    })
}