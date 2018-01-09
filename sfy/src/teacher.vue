<style scoped>
  @import 'assets/css/common.css';
	@import 'assets/css/teacher.css';
	.teacher_body{
		width: 1200px;
		height: auto;
	}
</style>
<template>
	<div id="teacher">
		<navbar navNum="2"></navbar>
		<teacherList v-bind:teacherInfo="teacherInfo"></teacherList>
	</div>
</template>
<script>
import navbar from '@/components/header'
import teacherList from '@/components/teacher'

export default {
  name: 'app',
  data () {
    return {
      teacherInfo: [
        {id: '01', img: './static/images/teacher1.jpg', name: '邓超', department: '信息与计算科学系', descript: '任教java开发、数据库、数据分析,有着多年的教学经验'},
        {id: '02', img: './static/images/teacher2.jpg', name: '李晨', department: '数学与应用数学', descript: '任教高等代数、数据分析,有着多年的教学经验'},
        {id: '03', img: './static/images/teacher3.jpg', name: '郑爽', department: '网络安全', descript: '任教线性函数、数据分析,有着多年的教学经验'},
        {id: '04', img: './static/images/teacher4.jpg', name: '刘恺威', department: '电子科学', descript: '任教图像处理、photoShop,有着多年的教学经验'},
        {id: '05', img: './static/images/teacher5.jpg', name: '范冰冰', department: '信息与计算科学系2', descript: '任教java开发、数据库、数据分析,有着多年的教学经验2'},
        {id: '06', img: './static/images/teacher1.jpg', name: '邓超', department: '信息与计算科学系', descript: '任教高等代数、数据分析,有着多年的教学经验2'},
        {id: '07', img: './static/images/teacher2.jpg', name: '李晨', department: '数学与应用数学', descript: '任教线性函数、数据分析,有着多年的教学经验2'},
        {id: '08', img: './static/images/teacher6.jpg', name: '刘诗诗', department: '电子科学2', descript: '任教图像处理、photoShop,有着多年的教学经验2'}
      ]
    }
  },
  components: {
    navbar,
    teacherList
  }
}
</script>