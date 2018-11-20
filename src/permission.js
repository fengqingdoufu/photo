// 本js文件适用于动态页面加载
// import store from './store'
// const whiteList = ['/login', '/404', '/'] // 不重定向白名单
// let whiteList = []
// for (var i = 0; i < initRouters.length; i++) {
//   if (!initRouters[i].children && initRouters[i].hidden) {
//     whiteList.push(initRouters[i].name)
//   } else {
//     for (var j = 0; j < initRouters[i].children.length; j++) {
//       if (initRouters[i].children[j].hidden) {
//         whiteList.push(initRouters[i].children[j].name)
//       }
//     }
//   }
// }
router.beforeEach((to, from, next) => {
  // NProgress.start()
  // if (getToken()) {
  //   if (to.path === '/login') {
  //     next({ name: 'dashboard' })
  //   } else {
  //     if (store.getters.roles.length === 0) {
  //       store.dispatch('GetInfo').then(res => { // 拉取用户信息
  //         // console.log(res)
  //         let roles = []
  //         roles.push(res.data.user.RolePermissions || 'user')
  //         store.commit('SET_ROLES', roles)
  //         store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
  //           router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
  //           next({...to, replace: true}) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
  //         })
  //         next()
  //       }).catch(() => {
  //         store.dispatch('FedLogOut').then(() => {
  //           Message.error('验证失败,请重新登录')
  //           next({ path: '/login' })
  //         })
  //       })
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.name) !== -1) {
  //     next()
  //   } else {
  //     next('/login')
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  // NProgress.done() // 结束Progress
})
