import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/index'
import CourseDetail from '@/courseDetail'
import Course from '@/course'
import Teacher from '@/teacher'
import Study from '@/study'
import Qa from '@/qa'
import Comment from '@/comment'
import TeacherDetail from '@/TeacherDetail'
import Personal from '@/personal'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/index', name: '首页', component: Index },
    { path: '/courseDetail', name: '课程详情页', component: CourseDetail },
    { path: '/course', name: '课程列表', component: Course },
    { path: '/teacher', name: '教师列表', component: Teacher },
    { path: '/study', name: '章节学习', component: Study },
    { path: '/qa', name: '课程问答页面', component: Qa },
    { path: '/comment', name: '课程评论页', component: Comment },
    { path: '/teacherDetail', name: '老师详情页', component: TeacherDetail },
    { path: '/personal', name: '个人中心', component: Personal },
    { path: '/', redirect: '/index' }
  ]
})
