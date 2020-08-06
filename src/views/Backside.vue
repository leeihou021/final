<template>
  <div id="back">
  <div id="top" class="">
    <div id="title-back"></div><h1 class="m-0">後台管理</h1>
    <img :src="'/img/carousel_04.jpg'">
  </div>
  <div class="container">
    <div class=" mb-3 mt-3">
      <h2 class="text-center mb-4 mt-4"> 檔案上傳管理</h2>
    </div>
    <form @submit="submit" class="mb-5">
      <b-form-file
          v-model="file"
          :state="state"
          placeholder="選擇檔案或拖曳至此"
          drop-placeholder="將檔案拖曳至此"
          required
          browse-text="瀏覽"
          accept="image/*"
          @input="validateFile">
      </b-form-file>
      <p class="text-danger"> </p>
      <!-- 分類 -->
    <div class="sort mb-3">
      <b-form-select
      v-model="selected"
      :options="options"
      placeholder="選擇商品分類"
      ></b-form-select>
    </div>
    <b-form-textarea
      v-model="description"
      placeholder="資料說明"
      rows="3" max-rows="6"
      maxlength="200"
      @input="validateText"
      :state="textstate">
    </b-form-textarea>
    <b-button class="mt-3"  type="submit" variant="primary">上傳</b-button>
    </form>
  <div>
  <b-card no-body class="mb-3">
    <b-tabs card v-model="activetab">
      <b-tab no-body :title="t" class="p-3" v-for="(t, index) of tabs" :key="index">
        <b-row >
          <b-col class="col-12 col-md-6 col-lg-3 mb-4" style="" v-for="(image, idx) in Pagination" :key='idx'>
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
                    <h6 class="text-center mb-3"> {{ image.type }} </h6>
                    <hr>
                    <pre v-if="!image.edit"> {{ image.text }} </pre>
                    <b-form-textarea v-else v-model="image.model"></b-form-textarea>
                  </b-card-body>
            </b-card>
          </b-col>
        </b-row>
    </b-tab>
        </b-tabs>
      </b-card>
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
      text: '',
      description: '',
      state: null,
      textstate: null,
      selected: null,
      options: [
        { value: null, text: '選擇商品分類', disabled: true },
        { value: '特餐', text: '特餐' },
        { value: '漢堡', text: '漢堡' },
        { value: '鐵板麵', text: '鐵板麵' }
      ],
      tabs: [
        '特餐',
        '漢堡',
        '鐵板麵'
      ],
      activetab: 0
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
        fd.append('image', this.file)
        fd.append('description', this.description)
        fd.append('type', this.selected)
        this.axios.post(process.env.VUE_APP_APIURL + '/file', fd, {
          // 因為 axios 預設是送 json，所以要自己設定成 formdata
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          this.images.push(
            {
              type: this.selected,
              text: this.description,
              src: process.env.VUE_APP_APIURL + '/file/' + response.data.name,
              _id: response.data._id,
              edit: false,
              model: response.data.name
            }
          )
          this.file = null
          this.description = ''
          this.selected = null
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
      this.axios.patch(process.env.VUE_APP_APIURL + '/file/' + image._id, { description: image.model })
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
    // 直接前往抓取圖片原本的位置，如果少了這行，刪除時會造成刪除錯誤
    del (image) {
      this.axios.delete(process.env.VUE_APP_APIURL + '/file/' + image._id)
        .then(response => {
          const idx = this.images.findIndex(i => {
            return i === image
          })
          this.images.splice(idx, 1)
        })
        .catch(() => {
          alert('發生錯誤')
        })
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    // this.image = 圖片，(image => image.type === this.tabs[this.activetab])在圖片中找到目前分類 .slice(this.currentPage - 1)並去切出此頁要顯示甚麼
    Pagination () {
      return this.images.filter(image => image.type === this.tabs[this.activetab]).slice(this.currentPage - 1)
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_APIURL + '/files')
      .then(response => {
        this.images = response.data.result.map(d => {
          return {
            type: d.type,
            text: d.description,
            src: process.env.VUE_APP_APIURL + '/file/' + d.name,
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
