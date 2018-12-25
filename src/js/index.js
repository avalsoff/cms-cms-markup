import dropdown from './dropdown'
import u from 'umbrellajs'

dropdown('dropdown');

function drop(e) {
  e.stopPropagation()
  e.preventDefault()

  const files = e.dataTransfer.files
  
  handleFiles(files)
}

const preview = u('#preview').nodes[0]

function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith('image/')) {
      continue
    }

    const img = document.createElement('img');
    img.classList.add('obj');
    img.file = file;
    preview.appendChild(img); // Assuming that 'preview' is the div output where the content will be displayed.

    const reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  }
}

u('#file').on('change', e => handleFiles(e.target.files))