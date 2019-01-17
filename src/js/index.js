import Choices from 'choices.js'

import dropdown from './dropdown'
import controlImages from './control-images'
import classicEditor from './ck-editor'

new Choices('.js-choice')
classicEditor('.ckeditor')

controlImages('.control-images')
dropdown('dropdown')
dropdown('table-dropdown')