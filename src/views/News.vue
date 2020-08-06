<template>
<div id="news-page">
  <div id="top" class="">
    <div id="title-back"></div><h1 class="m-0">最新消息</h1>
    <img :src="'/img/carousel_02.jpg'">
  </div>
  <div id="main-box">
    <div class="container">
    <h3 class="text-center mt-5">最新消息</h3> <hr>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center" v-for="(image, index) in items" :key='index'>
        <div class="pbox">
        <a href="http://localhost:8080/#/infor">
        <div class="pic"><img :src='image.src' class="s"></div>
        <p class="picbox text-center mb-2">{{ (image.text.length > 10) ? image.text.substr(0,25)  + '...' :image.text }}</p></a>
        <p class="text-center mb-5"> {{ image.day }} </p>
        </div>
      </div>
    </div>
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        :number-of-pages="numberOfPages"
        :link-gen="linkGen"
        @change="onPageChanged"
        pills
        use-router
        align="center"
      ></b-pagination>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      images: [],
      items: this.images,
      perPage: 9,
      currentPage: 1
    }
  },
  methods: {
    paginate (pageSize, pageNumber) {
      const boxsToParse = this.images.slice()
      this.items = boxsToParse.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      )
    },
    onPageChanged (page) {
      this.paginate(this.perPage, page - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    linkGen (pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    rows () {
      return this.images.length
    },
    numberOfPages () {
      return parseInt(this.rows / this.perPage) + 1
    }
  },
  mounted () {
    this.paginate(this.perPage, 0)
    this.axios.get(process.env.VUE_APP_APIURL + '/news')
      .then(response => {
        this.images = response.data.result.map(d => {
          return {
            popupActivo: false,
            day: d.day,
            text: d.description,
            src: process.env.VUE_APP_APIURL + '/new/' + d.name,
            _id: d._id,
            edit: false,
            model: d.name
          }
        })
        this.paginate(this.perPage, 0)
      })
      .catch(() => {
        alert('發生錯誤')
      })
  }
}
</script>
