<template>
  <div id="new">
  <div id="top" class="">
    <div id="title-back"></div><h1 class="m-0">後台管理</h1>
    <img :src="'/img/carousel_04.jpg'">
  </div>
  <div class="container">
    <div class=" mb-3 mt-3">
      <h2 class="text-center mb-4 mt-4"> 消息上傳管理</h2>
    </div>
    <form @submit="submit" class="mb-5">
      <b-form-file
          v-model="file"
          :state="state"
          placeholder="選擇封面或拖曳至此"
          drop-placeholder="將檔案拖曳至此"
          required
          browse-text="瀏覽"
          accept="image/*"
          @input="validateFile">
      </b-form-file>
      <div>
    <label for="example-datepicker">請選擇日期</label>
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
  </div>
    <b-form-textarea rows="10"
      v-model="description"
      placeholder="消息內容"
      max-rows="10"
      maxlength="200"
      @input="validateText"
      :state="textstate">
    </b-form-textarea>
    <b-button class="mt-3"  type="submit" variant="primary">發布</b-button>
    </form>
  <div>
        <b-row >
          <b-col class="col-12 col-md-6 col-lg-3 mb-4" style="" v-for="(image, index) in images" :key='index'>
            <b-card class="">
              <div class="img-size">
                <img :src="image.src" class="img-back"></div>
                  <b-card-body>
                    <b-btn class="mb-2" v-if="image.edit" variant="danger" @click="cancel(image)">取消</b-btn>
                    <b-btn class="mb-2" v-else variant="light" @click="edit(image)">編輯</b-btn>
                    <b-btn v-if="image.edit" variant="info" @click="update(image)">更新</b-btn>
                    <b-btn c v-else variant="danger" @click="del(image)">刪除</b-btn>
                    <hr>
                    <!-- 產品說明 -->
                    <p class="text-center mb-2"> {{ image.day }} </p>
                    <p v-if="!image.edit"> {{ image.text }} </p>
                    <b-form-textarea v-else v-model="image.model"></b-form-textarea>
                  </b-card-body>
            </b-card>
          </b-col>
        </b-row>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      images: [],
      file: null,
      value: null,
      text: '',
      description: '',
      state: null,
      textstate: null
    }
  },
  methods: {
    validateFile () {
      if (this.file != null) {
        if (this.file.size >= 5209 * 3648 || !this.file.type.includes('image')) {
          this.state = false
          this.file = null
        } else {
          this.state = true
        }
      }
    },
    validateText () {
      if (this.description.length > 200) {
        this.textstate = false
      }
      // this.textstate = (!this.description.length > 200)
    },
    submit (event) {
      event.preventDefault()
      if (this.file === null || this.file.size >= 5209 * 3648 || !this.file.type.includes('image')) {
        alert('檔案格式不符')
      } else {
        // FormData 可以同時傳送檔案和表單資料
        const fd = new FormData()
        fd.append('day', this.value)
        fd.append('image', this.file)
        fd.append('description', this.description)
        this.axios.post(process.env.VUE_APP_APIURL + '/new', fd, {
          // 因為 axios 預設是送 json，所以要自己設定成 formdata
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          this.images.push(
            {
              day: this.value,
              text: this.description,
              src: process.env.VUE_APP_APIURL + '/new/' + response.data.name,
              _id: response.data._id,
              edit: false,
              model: response.data.name
            }
          )
          this.value = null
          this.file = null
          this.description = ''
        }).catch(error => {
          alert(error.response.data.message)
        })
      }
    },
    edit (image) {
      image.edit = true
      image.model = image.text
    },
    update (image) {
      this.axios.patch(process.env.VUE_APP_APIURL + '/new/' + image._id, { description: image.model })
        .then(response => {
          image.edit = false
          image.text = image.model
        })
        .catch(() => {
          alert('發生錯誤')
        })
    },
    cancel (image) {
      image.edit = false
      image.model = image.text
    },
    del (image) {
      this.axios.delete(process.env.VUE_APP_APIURL + '/new/' + image._id)
        .then(response => {
          const index = this.images.findIndex(i => {
            return i === image
          })
          this.images.splice(index, 1)
        })
        .catch(() => {
          alert('發生錯誤')
        })
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_APIURL + '/news')
      .then(response => {
        this.images = response.data.result.map(d => {
          return {
            day: d.day,
            text: d.description,
            src: process.env.VUE_APP_APIURL + '/new/' + d.name,
            _id: d._id,
            edit: false,
            model: d.name
          }
        })
      })
      .catch(() => {
        alert('發生錯誤')
      })
  }
}
</script>
