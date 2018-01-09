<template>
	<div>
	    <div class="hudong_list_box">
	        <ul class="hudong_list" id="hudong_list">
	        <li class="hudong_list_cell" v-for="(item, index) in hdData">
	              <div class="touxiang" v-bind:style="{backgroundImage: 'url('+item.pic+')'}"></div>
	              <div class="hudong_body">
	                <p class="nick">
	                  <span>{{item.questioner}}</span>{{item.state}}
	                  <span>{{item.teacher}}</span>
	                </p>
	                <a href=""><p class="course">{{item.course}}</p></a>
	                <p class="con_body ellipsis-1">{{item.con}}</p>
	              </div>
	            </li>
	            <li class="hudong_list_cell" v-for="(item, index) in hdData">
	              <div class="touxiang" v-bind:style="{backgroundImage: 'url('+item.pic+')'}"></div>
	              <div class="hudong_body">
	                <p class="nick">
	                  <span>{{item.questioner}}</span>{{item.state}}
	                  <span>{{item.teacher}}</span>
	                </p>
	                <a href=""><p class="course">{{item.course}}</p></a>
	                <p class="con_body ellipsis-1">{{item.con}}</p>
	              </div>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
  export default {
    name: 'app',
    props: ['hdData'],
    methods: {
      scrollTop () {
        var hdList = document.getElementById('hudong_list')
        var h = hdList.offsetHeight
        var t = 0
        setInterval(function () {
          t--
          hdList.style.webkitTransform = 'translateY(' + t + 'px)'
          if (t <= -1 * (h / 2)) {
            t = 0
          }
        }, 50)
      }
    },
    mounted () {
      this.scrollTop()
    }
  }
</script>