import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import dropdown from './dropdown'
import multiImages from './multi-images'


ClassicEditor.create( document.querySelector('#ckeditor') )

dropdown('dropdown')
multiImages('control-images')
