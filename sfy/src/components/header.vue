<template>
	<div>
		<div class="head_fixed" v-if="navNum != -1">
      <a href="http://www.lcu.edu.cn/" class="logo pull-left">
          <img src="../assets/css/imgs/logo.png" alt="聊城大学" title="聊城大学"/>
      </a>
      <ul class="nav">
          <li v-for="(item, index) in barData"  v-bind:class="{current: index == navNum}"><router-link v-bind:to="item.link">{{item.word}}</router-link></li>
      </ul>
      <div class="login">
          <div class="btn">
              <!-- <span class="icon" style="background-image: url(../assets/css/imgs/icon-login2.png);"></span> -->
              <a>登录</a>
          </div>
      </div>
    </div>
    <div class="head_box" v-else>
      <header class="head">
          <a href="http://www.lcu.edu.cn/" class="logo pull-left">
              <img src="../assets/css/imgs/logo1.png" alt="聊城大学" title="聊城大学"/>
          </a>
          <ul class="nav">
              <li v-for="(item, index) in barData"  v-bind:class="{current: index == 0}"><router-link v-bind:to="item.link">{{item.word}}</router-link></li>
          </ul>
          <div class="login">
              <input type="text" placeholder="请输入课程或老师"/>
              <div class="btn">
                  <span class="icon"></span>
                  <a>登录</a>
              </div>
          </div>
      </header>
    </div>
	</div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      barData: [
        {word: '首页', link: '/index'},
        {word: '课程', link: '/course'},
        {word: '名师', link: '/teacher'},
        {word: '个人中心', link: '/personal'}
      ]
    }
  },
  props: ['navNum']
}
</script>