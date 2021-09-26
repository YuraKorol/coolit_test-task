export default {
  data() {
    return {
      image: ''
    }
  },
  methods: {
    imgParser(img) {
      const reader = new FileReader()
      reader.onload = e => {
        this.image = e.target.result
      }
      reader.readAsDataURL(img)
    }
  }
}
