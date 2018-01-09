<style scoped>
	@import 'assets/css/common.css';
	@import 'assets/css/teacher_detail.css';
</style>
<template>
	<div id="teacherDetail">
		<navbar navNum="2"></navbar>
    	<div class="container">
            <div class="intro_teacher">
                <p class="title">老师介绍：</p>
                <div v-for="(item, index) in teacherData" v-if="item.id == teacherId">
	                <div class="intro_body mTop30 clearfix">
	                    <div class="pic pull-left">
	                        <img v-bind:src="item.img" alt="">
	                    </div>
	                    <div class="intro pull-right">
	                        <p class="name mTop10">{{item.name}}</p>
	                        <p class="job mTop20">{{item.department}}老师</p>
	                        <p class="con mTop20">{{item.descript}}</p>
	                    </div>
	                </div>
	                <div class="course mTop30">
	                    <p class="title">主讲课程：</p>
                      <courseList v-bind:courseData="item.courseData"></courseList>
	                </div>
                </div>
            </div>
    	</div>
	</div>
</template>
<script>
  import navbar from '@/components/header'
  import courseList from '@/components/courseList'
  export default({
    name: 'app',
    components: {
      navbar,
      courseList
    },
    data () {
      return {
        teacherId: this.$route.query.teacherId,
        teacherData: [
          {id: '01', img: './static/images/teacher1.jpg', name: '邓超', department: '信息与计算科学系', descript: '任教java开发、数据库、数据分析,有着多年的教学经验,老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍', courseData: [{id: '000', imgurl: './static/images/kc0/kc1.jpg', title: '会计专业1'}, {id: '001', imgurl: './static/images/kc0/kc2.jpg', title: '会计专业2'}]},
        {id: '02', img: './static/images/teacher2.jpg', name: '李晨', department: '数学与应用数学', descript: '任教高等代数、数据分析,有着多年的教学经验,老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍', courseData: [{id: '002', imgurl: './static/images/kc0/kc3.jpg', title: '会计专业3'}]},
        {id: '03', img: './static/images/teacher3.jpg', name: '郑爽', department: '网络安全', descript: '任教线性函数、数据分析,有着多年的教学经验,老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍', courseData: [{id: '010', imgurl: './static/images/kc1/kc1.jpg', title: '数学类1'}]},
        {id: '04', img: './static/images/teacher4.jpg', name: '刘恺威', department: '电子科学', descript: '任教图像处理、photoShop,有着多年的教学经验,老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍', courseData: [{id: '011', imgurl: './static/images/kc1/kc2.jpg', title: '数学类2'}]},
        {id: '05', img: './static/images/teacher5.jpg', name: '范冰冰', department: '信息与计算科学系2', descript: '任教java开发、数据库、数据分析,有着多年的教学经验,老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍', courseData: [{id: '010', imgurl: './static/images/kc1/kc1.jpg', title: '数学类1'}]},
        {id: '06', img: './static/images/teacher1.jpg', name: '邓超', department: '信息与计算科学系', descript: '任教java开发、数据库、数据分析,有着多年的教学经验,老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍', courseData: [{id: '000', imgurl: './static/images/kc0/kc1.jpg', title: '会计专业1'}, {id: '001', imgurl: './static/images/kc0/kc2.jpg', title: '会计专业2'}]},
        {id: '07', img: './static/images/teacher2.jpg', name: '李晨', department: '数学与应用数学', descript: '任教高等代数、数据分析,有着多年的教学经验,老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍', courseData: [{id: '002', imgurl: './static/images/kc0/kc3.jpg', title: '会计专业3'}]},
        {id: '08', img: './static/images/teacher6.jpg', name: '刘诗诗', department: '电子科学2', descript: '任教线性函数、数据分析,有着多年的教学经验,老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍老师的详情介绍，老师的详情介绍老师的详情介绍老师的详情介绍', courseData: [{id: '010', imgurl: './static/images/kc1/kc1.jpg', title: '数学类1'}]}
        ]
      }
    }
  })
</script>