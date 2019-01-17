import Vue from 'vue/dist/vue.esm'
import uuid from 'uuid/v4'

export default function (selector) {
  document.querySelectorAll(selector)
    .forEach(node => {
      new Vue({
        el: node,
        data() {
          return {
            thumbs: [
              {
                id: uuid(),
                file: null,
                src: null,
                showInput: true,
                showThumb: false
              }
            ],
            mainImageId: null,
          }
        },
        methods: {
          loadImage(e, el) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onload = e => {
              el.file = file
              el.src = e.target.result
              el.showInput = false
              el.showThumb = true
              this.addElement()
            }
            reader.readAsDataURL(file)
          },

          addElement() {
            this.thumbs.push({
              id: uuid(),
              file: null,
              src: null,
              showInput: true,
              showThumb: false
            })
          },

          rmLocalElement(index) {
            this.$delete(this.thumbs, index)
          },

          rmRemoteElement(index) {
            // TODO: Rm from server
          },

          setMainImage(id) {
            this.mainImageId = id
          }
        }
      })
    })
}

