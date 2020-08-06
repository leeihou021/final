<template>
<div id="about">
  <div id="top" class="">
    <div id="title-back"></div><h1 class="m-0">關於我們</h1>
    <img :src="'/img/carousel_01.jpg'">
  </div>
  <div class="d-flex justify-content-center align-items-center">
  <div class="container p-0 bg-white mt-5">
    <div class="d-flex justify-content-center  flex-wrap float-left">
      <u-animate-container class="col-lg-5 col-12 p-0">
        <u-animate
          name="animate__bounce"
          delay="0s"
          duration="1.5s"
          :iteration="1"
          :offset="100"
          animateClass="animated"
          :begin="false"
          >
          <img class="a" :src="'https://picsum.photos/1920/1080/?random=1'" alt="">
        </u-animate>
      </u-animate-container>
      <div class="col-lg-7 col-12 mt-5 overflow-hidden">
      <h1 class="ml-4 mb-5 text-danger">安心吃，放心喝</h1>
      <p class="ml-4">
二十多年以來，『家榮』早餐漢堡加盟店遍佈了台、澎、金、馬各地，是本土速食連鎖加盟業中加盟店數最多、最受歡迎體系之一。 家榮國際集團在經營漢堡連鎖速食體系之初衷，就是要讓全台龐大的外食人口可享受既方便又迅速的美味早餐，因而研發出多樣口味，美而美國際集團擁有全國第一家檢驗合格的早餐連鎖優良食品工廠登記證，所有銷售的產品均具有華南產物5000萬元產品責任險，也奠立了本土速食連鎖業界第一品牌的地位，讓消費者吃得放心，加盟者賺得安心。</p></div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center align-items-center">
  <div class="container p-0 bg-white mt-5">
    <div class="d-flex justify-content-center  flex-wrap float-left">
      <u-animate-container class="col-lg-5 col-12 p-0">
        <u-animate
          name="animate__backInLeft"
          delay="0s"
          duration="1.5s"
          :iteration="1"
          :offset="100"
          animateClass="animated"
          :begin="false"
          >
          <img class="a" :src="'https://picsum.photos/1920/1080/?random=3'" alt="">
        </u-animate>
      </u-animate-container>
      <div class="col-lg-7 col-12 mt-5 overflow-hidden">
      <h1 class="ml-4 mb-5 text-danger">隨著時代向前</h1>
      <p class="ml-4">
隨著生活水準提升及消費者需求改變，近年來在家榮國際餐飲集團的努力經營之下，推出複合式經營模式、發展各種精緻輕食、早午餐形式，明亮簡潔的全新店面設計裝潢，呈現出嶄新的「家榮」風貌，讓你花小錢也能有高品質的用餐享受。

因應網路時代的來臨，從街坊的親切鄰居到優質食材團購人氣賣家，「家榮」突破傳統早餐店的經營模式。</p></div>
      </div>
    </div>
  </div>
  <div class="mt-5"></div>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
