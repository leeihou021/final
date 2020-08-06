<template>
<div id="contact">
  <div id="top" class="">
    <div id="title-back"></div><h1 class="m-0">聯絡我們</h1>
    <img :src="'./img/carousel_04.jpg'">
  </div>
  <div id="contact-box">
    <div class="container mt-5 p-5">
      <h3>若有任何問題或建議，歡迎隨時來信與我們聯繫，我們會儘快處理並回覆您的意見 !</h3>
      <div class="d-flex flex-wrap mb-3">
      </div>
        <div class="d-flex flex-wrap">
          <div class="mr-2">
            <font-awesome-icon :icon="['far', 'clock']" size="lg"/></div><p>客服時間：週一至週五 10:00至12:00 / 13:00至16:00</p>
        </div>
        <div>
          <div class="d-flex flex-wrap">
            <font-awesome-icon :icon="['fas', 'phone-square-alt']" class="mr-2" size="lg"/>
            <p>TEL：02-4953-6511</p>
        </div>
        <div class="d-flex flex-wrap">
            <font-awesome-icon :icon="['far', 'envelope']" class="mr-2" size="lg"/>
            <p>Email：contact@JRbreakfast.com.tw</p>
        </div>
        <div class="contact-table">
          <div class="container p-0">
            <img :src="'./img/contact.png'" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    state () {
      return this.name.length >= 3
    },
    invalidFeedback () {
      if (this.name.length > 3) {
        return ''
      } else if (this.name.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return 'Please enter something'
      }
    },
    validFeedback () {
      return this.state === true ? 'Thank you' : ''
    }
  },
  data () {
    return {
      name: '',
      selected: ''
    }
  }
}
</script>
