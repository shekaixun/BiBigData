import Vue from 'vue'
import Router from 'vue-router'
const Index = (resolve) => { require(['../components/index/index'], resolve) }

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      meta: {
        pageTitle: '首页',
        requireAuth: false,
        isHide: true
      }
    },
    {
      path: '/index',
      component: Index,
      meta: {
        pageTitle: '首页',
        isHide: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  typeof to.meta.pageTitle !== 'undefined' && setDocumentTitle(to.meta.pageTitle)// 设置公共title
  if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
    let login = false
    Vue.http.get('/api/v1/login/check-login').then((res) => {
      login = JSON.parse(res.bodyText).returnValue
      if (login) { // 判断是否登录
        next()
      } else { // 没登录则跳转到登录界面
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      }
    })
  } else {
    next()
  }
})

let setDocumentTitle = function (title) {
  document.title = title
  // let ua = navigator.userAgent
  // if (/\bMicroMessenger\/([\d\.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
  //   let i = document.createElement('iframe')
  //   i.src = '/favicon.ico'
  //   i.style.display = 'none'
  //   i.onload = function () {
  //     setTimeout(function () {
  //       i.remove()
  //     }, 9)
  //   }
  //   document.body.appendChild(i)
  // }
}

export default router