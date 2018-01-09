<style scoped>
	@import 'assets/css/common.css';
	@import 'assets/css/course_detail.css';
</style>
<template>
	<div id="courseDetail">
		<navbar v-bind:navNum="1"></navbar>
		<courseHead v-bind:courseId="courseId"></courseHead>
		<div v-for="(item, index) in detailInfo" v-if="item.id == courseId">
		    <!-- 内容部分 -->
		    <div class="content">
		        <div class="content_left">
		            <div class="kecheng_jieshao">
		                <h3>课程介绍</h3>
		                <p class="jieshao">{{item.intro}}</p>
		            </div>
		            <div class="kecheng_line">
		                <h3>课程提纲</h3>
		                <ul class="article">
		                    <li v-for="(itemCon, index) in item.courseList">
		                        <div>
		                            <h3 class="title">{{itemCon.subject}}</h3>
		                            <p>{{itemCon.con}}</p>
		                        </div>
		                    </li>
		                </ul>
		            </div>
		        </div>
		        <div class="content_right">
		        	<courseRight></courseRight>
		        	<button class="studay_btn" v-on:click="$router.push({path: './study?courseId', query: {courseId: courseId}})">开始学习</button>
		        </div>
		        <div class="clearfix"></div>
		        <div class="student_comment">
		            <h3>学生提问</h3>
		            <hudong v-bind:hdData="hdData"></hudong>
		        </div>
		    </div>
		</div>
	</div>
</template>
<script>
import navbar from '@/components/header'
import hudong from '@/components/hudong'
import courseHead from '@/components/courseHead'
import courseRight from '@/components/courseRight'

export default {
  name: 'app',
  components: {
    navbar,
    hudong,
    courseHead,
    courseRight
  },
  data () {
    return {
      courseId: '',
      hdData: [
        {pic: './static/images/tx-3.png', questioner: '邓超2', state: '提问', teacher: '周老师', link: '', course: '《java基础2》', con: '父类与子类之间的多态性，对父类的函数进行重新定义。如果在子类中定义某方法与其父类有相同的名称和参数，我们说该方法被重写 (Overriding)。在Java中，子类可继承父类中的方法，而不需要重新编写相同的方法。'},
        {pic: './static/images/tx-1.png', questioner: '孙俪2', state: '提问', teacher: '宋老师', link: '', course: '《数据库原理2》', con: '方法重载与重写的区别在哪里？'},
        {pic: './static/images/tx-2.png', questioner: '孟老师2', state: '回复', teacher: '刘亦菲', link: '', course: '《C语言教程2》', con: '方法重写：它是指子类和父类的关系，子类重写了父类的方法，但方法名、参数类型、参数个数必须相同！'},
        {pic: './static/images/tx-5.png', questioner: '牛老师2', state: '回复', teacher: '李晨', link: '', course: '《数据结构2》', con: '方法重载：就是在同一个类中，方法的名字相同，但参数个数、参数的类型或返回值类型不同！'},
        {pic: './static/images/tx-4.png', questioner: '范冰冰2', state: '提问', teacher: '张老师', link: '', course: '《数据分析2》', con: '在使用重载时只能通过相同的方法名、不同的参数形式实现。不同的参数类型可以是不同的参数类型，不同的参数个数，不同的参数顺序（参数类型必须不一样）'}
      ],
      detailInfo: [
        {
          id: '000',
          intro: '会计专业1课程介绍会计专业1课程介绍会计专业1课程介绍会计专业1课程介绍会计专业1课程介绍会计专业1课程介绍',
          courseList: [
            { subject: '会计专业1课程1', con: '会计专业1课程1内容' },
            { subject: '会计专业1课程2', con: '会计专业1课程2内容' },
            { subject: '会计专业1课程3', con: '会计专业1课程3内容' },
            { subject: '会计专业1课程4', con: '会计专业1课程4内容' },
            { subject: '会计专业1课程5', con: '会计专业1课程5内容' }
          ]
        },
        {
          id: '001',
          intro: '会计专业2课程介绍会计专业2课程介绍会计专业2课程介绍会计专业2课程介绍会计专业2课程介绍会计专业2课程介绍',
          courseList: [
            { subject: '会计专业2课程1', con: '会计专业2课程1内容' },
            { subject: '会计专业2课程2', con: '会计专业2课程2内容' },
            { subject: '会计专业2课程3', con: '会计专业2课程3内容' }
          ]
        },
        {
          id: '002',
          intro: '会计专业3课程介绍会计专业3课程介绍会计专业3课程介绍会计专业3课程介绍会计专业3课程介绍会计专业3课程介绍',
          courseList: [
            { subject: '会计专业3课程1', con: '会计专业3课程1内容' },
            { subject: '会计专业3课程2', con: '会计专业3课程2内容' },
            { subject: '会计专业3课程3', con: '会计专业3课程3内容' },
            { subject: '会计专业3课程4', con: '会计专业3课程4内容' },
            { subject: '会计专业3课程5', con: '会计专业3课程5内容' },
            { subject: '会计专业3课程6', con: '会计专业3课程6内容' }
          ]
        },
        {
          id: '010',
          intro: '数学类1课程介绍数学类1课程介绍数学类1课程介绍数学类1课程介绍数学类1课程介绍数学类1课程介绍',
          courseList: [
            { subject: '数学类1课程1', con: '数学类1课程1内容' },
            { subject: '数学类1课程2', con: '数学类1课程2内容' },
            { subject: '数学类1课程3', con: '数学类1课程3内容' },
            { subject: '数学类1课程4', con: '数学类1课程4内容' }
          ]
        },
        {
          id: '011',
          intro: '数学类2课程介绍数学类2课程介绍数学类2课程介绍数学类2课程介绍数学类2课程介绍数学类2课程介绍',
          courseList: [
            { subject: '数学类2课程1', con: '数学类2课程1内容' },
            { subject: '数学类2课程2', con: '数学类2课程2内容' },
            { subject: '数学类2课程3', con: '数学类2课程3内容' },
            { subject: '数学类2课程4', con: '数学类2课程4内容' }
          ]
        }
      ]
    }
  },
  mounted () {
    this.courseId = this.$route.query.courseId
  }
}
</script>