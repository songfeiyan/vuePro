<template>
	<div>
		<div class="kecheng_body">
	        <ul id="container clearfix">
	        	<li class="tp" v-for="(itemCourse, index) in courseData">
	                <router-link v-bind:to="'/courseDetail?courseId='+itemCourse.id">
	                    <div class="pic">
	                    	<img v-bind:src="itemCourse.imgurl" />
		                    <div  class="triangle">
		                    	<div class="shadow"></div>
		                    </div>
	                    </div>
	                	<p class="title" style="border: none;">{{itemCourse.title}}</p>
	                </router-link>
	            </li>
	        </ul>
		</div>
	</div>
</template>
<script>
  export default({
    name: 'app',
    props: ['courseData']
  })
</script>