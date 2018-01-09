<template>
	 <ul class="nav_bar clearfix">
        <li v-for="(item, index) in nav" v-bind:class="{active: index == studyNum}">
        	<router-link v-bind:to="item.link">{{item.name}}</router-link>
        </li>
    </ul>
</template>
<script>
  export default {
    name: 'app',
    props: ['courseId', 'studyNum'],
    data () {
      return {
        nav: [
          {name: '章节', link: '/study?courseId=' + this.courseId},
          {name: '问答', link: '/qa?courseId=' + this.courseId},
          {name: '评论', link: '/comment?courseId=' + this.courseId}
        ]
      }
    }
  }
</script>