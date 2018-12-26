import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Choices from 'choices.js'

import dropdown from './dropdown'
import multiImages from './multi-images'

new Choices(document.querySelector('#choices'))
ClassicEditor.create( document.querySelector('#ckeditor') )

dropdown('dropdown')
multiImages('control-images')
