import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/web',
    component: () => import('@/views/webSocket/web'),
    hidden: true
  },
  {
    path: '/fight',
    component: () => import('@/views/webSocket/fight'),
    hidden: true
  },
  {
    path: '/viewRemarks',
    component: () => import('@/views/report/ViewRemarks'),
    hidden: true
  },
  {
    path: '/socket',
    component: () => import('@/views/webSocket/socket'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/register',
    component: () => import('@/views/register/index.vue'),
    hidden: true
  },
  {
    path: '/realRegister',
    component: () => import('@/views/register/updateInformation.vue'),
    hidden: true
  },
  {
    path: '/Personal',
    name: 'Personal',
    component: () => import('@/layout/components/PersonalInfo.vue'),
    hidden: true

  },
  {
    path: '/TeaLabManage',
    name: 'TeaLabManage',
    component: () => import('@/views/dashboard/TeaIndex.vue'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }

]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 * TODO 将带有权限的页面写在这里，按照下面的格式设置roles数组，将会按照权限在左侧边栏渲染
 */
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/StuHome.vue'),
      meta: { title: '首页', icon: 'dashboard', roles: ['Student'] }
    },
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/TeaHome.vue'),
      meta: { title: '首页', icon: 'dashboard', roles: ['Teacher', 'ResponsibleTeacher', 'TeachingAssistant'] }
    }]
  },

  {
    path: '/calendar',
    component: Layout,
    name: 'Calendar',
    children: [
      {
        path: 'calendar',
        name: 'calendar',
        component: () => import('@/views/calendar/index.vue'),
        meta: { title: '日程管理', icon: 'el-icon-date' }
      }
    ]
  },
  {
    path: '/lab',
    component: Layout,
    meta: { title: '实验管理', icon: 'el-icon-s-help' },
    // hidden: true,
    children: [{
      path: 'stuLabManage',
      component: () => import('@/views/dashboard/StuIndex.vue'),
      hidden: true,
      meta: { title: '学生实验管理', roles: ['Student'] }
    },
    {
      path: 'labRep',
      name: 'LabRep',
      component: () => import('@/views/labReport.vue'),
      meta: { title: '发布实验', icon: 'form', roles: ['Teacher'] }
    },
    {
      path: 'markReport',
      name: 'MarkReport',
      component: () => import('@/views/report/MarkReport'),
      meta: { title: '报告评阅', icon: 'el-icon-check', roles: ['Teacher', 'ResponsibleTeacher', 'TeachingAssistant'] }
    },
    {
      path: 'submitReport',
      name: 'submitReport',
      component: () => import('@/views/report/submitReport.vue'),
      hidden: true
    }

    ]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: '实验管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'labRep',
  //       name: 'LabRep',
  //       component: () => import('@/views/labReport.vue'),
  //       meta: { title: '发布实验', icon: 'form', roles: ['Teacher'] }
  //     },

  // {
  //   path: 'report',
  //   name: 'Report',
  //   component: () => import('@/views/report/Report'),
  //   meta: { title: '报告填写', icon: 'form', roles: ['Student'] }
  // },
  //     {
  //       path: 'markReport',
  //       name: 'MarkReport',
  //       component: () => import('@/views/report/MarkReport'),
  //       meta: { title: '报告评阅', icon: 'el-icon-check', roles: ['Teacher', 'ResponsibleTeacher', 'TeachingAssistant'] }
  //     }
  //   ]
  // },
  {
    path: '/class',
    component: Layout,
    meta: { title: '班级管理', icon: 'form' },
    children: [
      {
        path: '/teacherClass',
        name: 'TeacherClass',
        // redirect: '/teacherClass',
        component: () => import('@/views/class/teacherClass.vue'),
        meta: { title: '教师班级管理', icon: 'form', roles: ['Teacher', 'ResponsibleTeacher', 'TeachingAssistant'] }
      },
      // {
      //   path: '/studentClass',
      //   name: 'StudentClass',
      //   // redirect: '/teacherClass',
      //   component: () => import('@/views/class/studentClass.vue'),
      //   meta: { title: '学生班级管理', icon: 'form', roles: ['Student'] }
      // },
      {
        path: '/stuClassInfo',
        name: 'stuClassInfo',
        // redirect: '/teacherClass',
        component: () => import('@/views/class/stuClassInfo.vue'),
        meta: { title: '班级信息', icon: 'form', roles: ['Teacher', 'ResponsibleTeacher', 'TeachingAssistant'] }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/Lab-Report-Management-System/Project-Frontend/',
        meta: { title: 'Project Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
