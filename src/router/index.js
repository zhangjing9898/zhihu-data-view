import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import wordCloud from '@/components/wordCloud'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      name:'wordCloud',
      component: wordCloud
    }
  ]
})
