<template>
  <div id="home">
    <b-carousel
      id="carousel"
      :interval="4000"
      fade
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        :img-src="'./img/carousel_01.jpg'"
      ></b-carousel-slide>
      <b-carousel-slide img-src="./img/carousel_02.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>
      <b-carousel-slide :img-src="'./img/carousel_03.jpg'"></b-carousel-slide>
      <b-carousel-slide :img-src="'./img/carousel_04.jpg'"></b-carousel-slide>
      <b-carousel-slide :img-src="'./img/carousel_05.jpg'"></b-carousel-slide>
    </b-carousel>
  <div class="container mt-5">
    <div id="news" class="">
      <h1 class="text-center mt-3">最新消息</h1>
      <div class="box mt-5">
      <ul v-for="(image, index) in images" :key='index'>
        <li><a href="http://localhost:8080/new#/news"> <span class="news-title "> {{ image.text }}</span></a><span class="news-time mr-2"> {{ image.day }} </span></li>
      </ul>
      </div>
    </div>
  </div>
  <div class="container">
  <div id="today">
    <h1 class="text-center mt-1 text-white">今日特價</h1>
      <div class="d-flex  justify-content-around align-items-center">
        <div class="col-12 col-lg-10">
              <div class="row">
                <div class="col-6 col-lg-3 mb-4">
                  <div class="card">
                    <img :src="'https://picsum.photos/300/200/?random=1'" class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title">義式濃縮咖啡</h5>
                      <p class="card-text">香醇綿密口味的咖啡</p>
                      <span>NT.100</span>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 mb-4">
                  <div class="card">
                    <img :src="'https://picsum.photos/300/200/?random=2'" class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title">美式冰咖啡</h5>
                      <p class="card-text">香醇綿密口味的咖啡</p>
                      <span>NT.100</span>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 mb-4">
                  <div class="card">
                    <img :src="'https://picsum.photos/300/200/?random=3'" class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title">拿鐵咖啡</h5>
                      <p class="card-text">香醇綿密口味的咖啡</p>
                      <span>NT.100</span>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 mb-4">
                  <div class="card">
                    <img :src="'https://picsum.photos/300/200/?random=4'" class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title">卡布奇諾</h5>
                      <p class="card-text">香醇綿密口味的咖啡</p>
                      <span>NT.100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div id="block" class="p-3">
  <div class="space mb-4"></div>
      <h1 class="text-center mb-5">店家位置</h1>
    <div class="embed-responsive embed-responsive-21by9 container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7080213475365!2d121.41715431500656!3d25.043980983967728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1591237554076!5m2!1szh-TW!2stw"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen>
      </iframe>
  </div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      images: []
    }
  },
  methods: {
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
