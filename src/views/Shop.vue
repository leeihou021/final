<template lang="pug">
#shop
  #top
    #title-back
    h1.m-0 產品介紹
    img.top-img(:src="'/img/carousel_03.jpg'")
  b-container.pt-2
    #menu-box
      b-row.mt-5
        b-col(sm='12'  md='4' lg='3')
          ul.mt-3.ml-3
            div.mt-5
              li(v-for='(menu, idx) in menus' :key='idx' @click="select(menu.effect)").mt-3.list-group-item
                b-link {{ menu.title }}
                //- (v-bind:class='{ active: isActive }')
        b-col(sm='12' md='8' lg="9").p-0
          .header
            h3.text-center 特餐餐點
            hr
          .main
            b-row.m-0
              b-col(v-for="(image, idx) in images" :key="idx" v-if="food==='All'").col-6.col-lg-3.p-2.mb-1.text-center.d-flex.flex-wrap.justify-content-center
                div
                  .pic.mb-1
                    img(:src="image.src" @click="image.popupActivo=true").mb-2.p-0
                  p.text-center.mb-3 {{ image.text }}
              b-col(v-for="(image, idx) in images" :key="idx" v-if="image.type === food").col-6.col-lg-3.p-2.mb-5.text-center.flex-wrap
                div
                  .pic.mb-1
                    img(:src="image.src"  @click="image.popupActivo=true").mb-2.p-0.flex-wrap
                  p.text-center.mb-3 {{ image.text }}
        vs-popup.holamundo(:active.sync="image.popupActivo" v-for="(image, idx) in images" :key="idx" title="餐點")
          .pic
            img(:src="image.src" :style="{objectFit:'cover',maxWidth:'100%'}")
</template>
<script>
export default {
  data () {
    return {
      name: 'work',
      food: 'All',
      file: null,
      text: '',
      state: null,
      description: '',
      textstate: null,
      images: [],
      menus: [
        { title: '全部餐點', effect: 'All' },
        { title: '特餐餐點', effect: '特餐' },
        { title: '漢堡類', effect: '漢堡' },
        { title: '鐵板麵', effect: '鐵板麵' }
      ]
    }
  },
  methods: {
    select (name) {
      this.food = name
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_APIURL + '/files')
      .then(response => {
        this.images = response.data.result.map(d => {
          return {
            popupActivo: false,
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
