import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import '@/assets/css/public.css'
import footerBar from '@/components/footer'

Vue.use(Vuex)

Vue.config.productionTip = false

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
const store = new Vuex.Store({
  state: {
    course: {
      courseId: ''
    }
  },
  mutations: {
    setCourseId (state, args) {
      state.course.courseId = args
    }
  }
})

/* eslint-disable no-new */
window['vm'] = new Vue({
  el: '#app',
  store,
  router,
  data: {
    a: '1'
  },
  components: {
    footerBar
  },
  template: `<div><router-view></router-view><footerBar></footerBar></div>`
})
