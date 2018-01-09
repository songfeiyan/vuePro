<style scoped>
  @import 'assets/css/common.css';
	@import 'assets/css/course.css';
</style>
<template>
	<div id="course">
		<navbar navNum="1"></navbar>
		<!-- 课程分类 -->
    <div class="fenlei_box">
        <div class="title">全部课程</div>
        <div class="school">
            <p class="name">学院：</p>
            <ul class="school_list">
            	<li v-for="(item, index) in schoolName" v-on:click="tab(index)" v-bind:class="{fcGreen: index == schoolNum}">{{item}}</li>
            </ul>
        </div>
        <div class="major">
            <p class="name">专业：</p>
            <ul class="major_list">
                <li v-for="(item, index) in major[schoolNum]" v-bind:class="{fcGreen: schoolNum.toString()+index.toString() == majorId}" v-on:click="clickMajor(schoolNum.toString()+index.toString())">{{item}}</li>
            </ul>
        </div>
    </div>
    <!-- 课程列表 -->
    <div class="kecheng_body">
        <ul id="container">
	        <div  v-for="(items, index) in courseList" v-if="items.id == majorId">
	        	<li class="tp" v-for="(item, index) in items.list">
		            <a v-on:click="clickCourse(majorId.toString()+index.toString())">
		            <div class="pic">
			            <img v-bind:src="item.imgurl"/>
			            <div  class="triangle">
			            	<div class="shadow"></div>
		            	</div>
		            </div>
		            <p class="title">{{item.title}}</p>
		            <p class="con">{{item.con}}</p>
		            <p class="zan">{{item.zan}}</p>
		            </a>
	            </li>
	        </div>
        </ul>
    </div>
	</div>
</template>
<script>
import navbar from '@/components/header'

export default {
  name: 'app',
  components: {
    navbar
  },
  data () {
    return {
      schoolNum: 0,
      majorId: '00',
      schoolName: ['数学科学学院', '计算机学院', '音乐学院', '文学院', '外国语学院', '体育学院', '政治与公共管理学院', '生命科学学院', '药学院', '商学院', '机械与汽车工程学院', '美术学院', '农学院', '历史文化与旅游学院', '物理科学与信息工程学院', '教育科学学院', '建筑工程学院', '环境与规划学院', '化学化工学院', '法学院', '传媒技术学院', '材料科学与工程学院'],
      major: [
        ['会计专业', '数学师范类专业', '信息与计算科学专业'],
        ['网络工程专业', '软件工程专业', '电子商务专业', '信息管理与信息系统专业'],
        ['音乐学专业', '音乐表演专业', '舞蹈学专业'],
        ['汉语言文学', '广播电视学', '秘书学'],
        ['外国语学院专业1', '外国语学院专业2', '外国语学院专业3', '外国语学院专业4'],
        ['体育学院专业1', '体育学院专业2', '体育学院专业3', '体育学院专业4'],
        ['政管学院专业1', '政管学院专业2'],
        ['生命学院专业1', '生命学院专业2', '生命学院专业3', '生命学院专业4'],
        ['药学院专业1', '药学院专业2', '药学院专业3'],
        ['商学院专业1', '商学院专业2'],
        ['汽车学院专业1', '汽车学院专业2', '汽车学院专业3', '汽车学院专业4'],
        ['美术学院专业1', '美术学院专业2', '美术学院专业4'],
        ['农学院专业1', '农学院专业2', '农学院专业3', '农学院专业4', '农学院专业5'],
        ['历史学院专业1', '历史学院专业2'],
        ['理工学院专业1', '理工学院专业2', '理工学院专业3', '理工学院专业4'],
        ['教育学院专业1', '教育学院专业2', '教育学院专业3'],
        ['建工学院专业1', '建工学院专业2'],
        ['环规学院专业1', '环规学院专业2', '环规学院专业3', '环规学院专业4', '环规学院专业5'],
        ['化工学院专业1', '化工学院专业2', '化工学院专业3'],
        ['法学院专业1', '法学院专业2'],
        ['传媒学院专业1', '传媒学院专业2', '传媒学院专业3', '传媒学院专业4'],
        ['材料学院专业1', '材料学院专业2', '材料学院专业3']
      ],
      courseList: [
        {
          id: '00',
          list: [
            {imgurl: './static/images/kc0/kc1.jpg', title: '会计专业1', con: '跨级专业内容解读1', zan: 100},
            {imgurl: './static/images/kc0/kc2.jpg', title: '会计专业2', con: '跨级专业内容解读2', zan: 110},
            {imgurl: './static/images/kc0/kc3.jpg', title: '会计专业3', con: '跨级专业内容解读3', zan: 120},
            {imgurl: './static/images/kc0/kc4.jpg', title: '会计专业4', con: '跨级专业内容解读4', zan: 140},
            {imgurl: './static/images/kc0/kc5.jpg', title: '会计专业5', con: '跨级专业内容解读5', zan: 150},
            {imgurl: './static/images/kc0/kc6.jpg', title: '会计专业6', con: '跨级专业内容解读6', zan: 160}
          ]
        },
        {
          id: '01',
          list: [
            {imgurl: './static/images/kc1/kc1.jpg', title: '数学类1', con: '数学类专业内容解读1', zan: 80},
            {imgurl: './static/images/kc1/kc2.jpg', title: '数学类2', con: '数学类专业内容解读2', zan: 90},
            {imgurl: './static/images/kc1/kc3.jpg', title: '数学类3', con: '数学类专业内容解读3', zan: 20},
            {imgurl: './static/images/kc1/kc4.jpg', title: '数学类4', con: '数学类专业内容解读4', zan: 100},
            {imgurl: './static/images/kc1/kc5.jpg', title: '数学类5', con: '数学类专业内容解读5', zan: 1500},
            {imgurl: './static/images/kc1/kc6.jpg', title: '数学类6', con: '数学类专业内容解读6', zan: 110},
            {imgurl: './static/images/kc1/kc7.jpg', title: '数学类7', con: '数学类专业内容解读7', zan: 180}
          ]
        },
        {
          id: '02',
          list: [
            {imgurl: './static/images/kc2/kc1.jpg', title: '信息与计算科学1', con: '信息与计算科学专业内容解读1', zan: 180},
            {imgurl: './static/images/kc2/kc2.jpg', title: '信息与计算科学2', con: '信息与计算科学专业内容解读2', zan: 190},
            {imgurl: './static/images/kc2/kc3.jpg', title: '信息与计算科学3', con: '信息与计算科学专业内容解读3', zan: 120},
            {imgurl: './static/images/kc2/kc4.jpg', title: '信息与计算科学4', con: '信息与计算科学专业内容解读4', zan: 1100},
            {imgurl: './static/images/kc2/kc5.jpg', title: '信息与计算科学5', con: '信息与计算科学专业内容解读5', zan: 200},
            {imgurl: './static/images/kc2/kc6.jpg', title: '信息与计算科学6', con: '信息与计算科学专业内容解读6', zan: 230},
            {imgurl: './static/images/kc2/kc7.jpg', title: '信息与计算科学7', con: '信息与计算科学专业内容解读7', zan: 90},
            {imgurl: './static/images/kc2/kc8.jpg', title: '信息与计算科学8', con: '信息与计算科学专业内容解读8', zan: 95}
          ]
        },
        {
          id: '10',
          list: [
            {imgurl: './static/images/kc1/kc9.jpg', title: '网络工程专业1', con: '网络工程专业专业内容解读1', zan: 180},
            {imgurl: './static/images/kc1/kc10.jpg', title: '网络工程专业2', con: '网络工程专业专业内容解读2', zan: 190},
            {imgurl: './static/images/kc1/kc11.jpg', title: '网络工程专业3', con: '网络工程专业专业内容解读3', zan: 120},
            {imgurl: './static/images/kc1/kc12.jpg', title: '网络工程专业4', con: '网络工程专业专业内容解读4', zan: 1100},
            {imgurl: './static/images/kc1/kc13.jpg', title: '网络工程专业5', con: '网络工程专业专业内容解读5', zan: 200},
            {imgurl: './static/images/kc1/kc14.jpg', title: '网络工程专业6', con: '网络工程专业专业内容解读6', zan: 230},
            {imgurl: './static/images/kc1/kc15.jpg', title: '网络工程专业7', con: '网络工程专业专业内容解读7', zan: 90},
            {imgurl: './static/images/kc1/kc16.jpg', title: '网络工程专业8', con: '网络工程专业专业内容解读8', zan: 95}
          ]
        },
        {
          id: '11',
          list: [
            {imgurl: './static/images/kc3/kc1.jpg', title: '软件工程专业1', con: '软件工程专业专业内容解读1', zan: 80},
            {imgurl: './static/images/kc3/kc2.jpg', title: '软件工程专业2', con: '软件工程专业专业内容解读2', zan: 90},
            {imgurl: './static/images/kc3/kc3.jpg', title: '软件工程专业3', con: '软件工程专业专业内容解读3', zan: 20},
            {imgurl: './static/images/kc3/kc4.jpg', title: '软件工程专业4', con: '软件工程专业专业内容解读4', zan: 100}
          ]
        }
      ]
    }
  },
  methods: {
    tab (index) {
      this.schoolNum = index
    },
    clickMajor (index) {
      this.majorId = index
    },
    clickCourse (id) {
      this.$store.commit('setCourseId', id)
      this.$router.push({path: 'courseDetail?courseId', query: {courseId: id}})
    }
  }
}
</script>