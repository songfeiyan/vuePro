<template>
	<div>
		<div v-for="(item, index) in detailHead" v-if="item.id == courseId">
			<div class="course_bg" v-bind:style="{backgroundImage: 'url('+ item.imgUrl +')'}">
		        <div class="course_infos">
		            <div class="infos">
		                <h1>{{item.title}}</h1>
		                <div class="bottom">
		                    <p class="teacher">
		                        授课老师：<span v-for="(itemTeacher, index) in item.teacher">{{itemTeacher}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
		                    </p>
		
		                    <p class="guanzhu">
		                        <span><em>{{item.number}}</em>人已学习</span>
		                    </p>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
	</div>
</template>
<script>
  export default {
    name: 'app',
    props: ['courseId'],
    data () {
      return {
        detailHead: [
          {
            id: '000',
            imgUrl: './static/images/kc0/kc1.jpg',
            title: '会计专业1',
            teacher: ['周老师', '宋老师'],
            number: 30
          },
          {
            id: '001',
            imgUrl: './static/images/kc0/kc2.jpg',
            title: '会计专业2',
            teacher: ['牛老师'],
            number: 50
          },
          {
            id: '002',
            imgUrl: './static/images/kc0/kc3.jpg',
            title: '会计专业3',
            teacher: ['江老师', '孙老师', '赵老师'],
            number: 20
          },
          {
            id: '010',
            imgUrl: './static/images/kc1/kc1.jpg',
            title: '数学类1',
            teacher: ['王老师', '周老师'],
            number: 60
          },
          {
            id: '011',
            imgUrl: './static/images/kc1/kc2.jpg',
            title: '数学类2',
            teacher: ['郑老师'],
            number: 100
          }
        ]
      }
    }
  }
</script>