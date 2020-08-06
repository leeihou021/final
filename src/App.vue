<template lang="pug">
  #app
      b-navbar(id='aa' toggleable='lg' type='dark' variant='danger')
        //- img(src="./assets/breakfast.svg")
        //- b-container(class='display:block')
        b-container
          router-link(to='/').d-flex.align-items-center.col-8.col-lg-11
            img(:src="'./img/breakfast.svg'")
            b-navbar-brand(href='/')
              h2.ml-3 家榮早餐
              h5.ml-3 J.R breakfast
      #aa
        b-navbar(toggleable='lg' type='light' variant='light' class='pb-2')
          b-navbar-brand
          b-container
            b-navbar-toggle(target='nav-collapse')
            b-collapse#nav-collapse(is-nav)
              b-navbar-nav
                b-nav-item(to='/about') 關於我們
                b-nav-item(to='/news') 活動消息
                b-nav-item(to='/shop') 產品介紹
                b-nav-item(to='/contact') 聯絡我們
            b-collapse.justify-content-end(is-nav)
              b-navbar-nav
                b-nav-item-dropdown(right)
                  template(v-slot:button-content)
                    span 管理選項
                  b-dropdown-item(v-if="user.length === 0" to="/login") 登入
                  b-dropdown-item(v-else to="/backside") 後台管理
                  b-dropdown-item(to="/back-news") 消息管理
                  b-dropdown-item(v-if="user.length === 0" to="/reg") 註冊
                  b-dropdown-item(v-else @click="logout") 登出
      router-view
      .float.p-1
        p.text-white.text-center.mt-3 Copyright © 2020 J.R breakfast All Rights Reserved
        p.text-white.text-center.m-2
          a(href='https://zh-tw.facebook.com/')
            <font-awesome-icon :icon="['fab', 'facebook-square']" class="mr-5" size="3x"/>
          a(href='https://line.me/zh-hant/')
            <font-awesome-icon :icon="['fab', 'line']" class="" size="3x"/>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      Height: 0
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    logout () {
      this.axios.delete(process.env.VUE_APP_APIURL + '/logout')
        .then(response => {
          const data = response.data
          if (data.success) {
            // 如果回來的資料 success 是 true
            alert('登出成功')
            // 呼叫 vuex 的登入
            this.$store.commit('logout')
            // 如果現在不是在首頁，跳到登出後的首頁
            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          } else {
            // 不是就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    },
    heartbeat () {
      this.axios.get(process.env.VUE_APP_APIURL + '/heartbeat')
        .then(response => {
          const data = response.data
          // 如果是登入中
          if (this.user.length > 0) {
            // 如果後端登入時間過期
            if (!data) {
              alert('登入時效已過')
              // 前端登出
              this.$store.commit('logout')
              // 如果現在不是在首頁，跳到登出後的首頁
              if (this.$route.path !== '/') {
                this.$router.push('/')
              }
            }
          }
        })
        .catch(() => {
          alert('發生錯誤')
          this.$store.commit('logout')
          // 如果現在不是在首頁，跳到登出後的首頁
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
  },
  mounted () {
    this.Height = document.documentElement.clientHeight - 100
    window.onresize = () => { this.Height = document.documentElement.clientHeight - 100 }
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 1000 * 5)
  }
}
</script>
