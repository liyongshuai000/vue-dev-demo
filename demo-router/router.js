//路由配置
export function configRouter (router) {

  //普通页面
  router.map({ 

    '/about': { 
      component: require('./page/about.vue')
    },
 
    //子页面路由设置subRoutes 
    '/user/:userId': {
      component: require('./page/user/index.vue'),
      subRoutes: { 
        'profile/:something': {
          component: require('./page/user/profile.vue')
        }, 
      }
    },

    //404页面
    '*': {
      component: require('./page/404.vue')
    },
  })

  //路由重定向
  router.redirect({
    '/info': '/about',
    '/my/:userId': '/user/:userId'
  })

   
}
