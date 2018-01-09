<style>
  
</style>
<template>
	<div class="teacher_body clearfix">
		<ul class="content">
          <li v-for="(item, index) in teacherInfo">
            <div class="con">
              <router-link v-bind:to="'/teacherDetail?teacherId='+item.id">
                <div class="pic" v-bind:style="{backgroundImage:'url('+item.img+')'}"></div>
                <p class="name">{{item.name}}</p>
              </router-link>
              <p class="describe ellipsis-1" v-show="item.department">{{item.department}}</p>
              <p class="subject ellipsis-2" v-show="item.descript">{{item.descript}}</p>
            </div>
          </li>
      </ul>
	</div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    props: ['teacherInfo']
  }
</script>