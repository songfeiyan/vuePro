<style scoped lang="">
	@import 'assets/css/common.css';
	@import 'assets/css/personal.scss';
</style>

<template>
	<div id="personal"  style="background:#eee">
		<navbar navNum="3"></navbar>
		<div class="body_head">
	        <div class="body_head_con">
	            <div class="touxiang pull-left">
	                <img src="./assets/css/imgs/tx-1.png" alt="">
	            </div>
	            <div class="con pull-left">
	                <h3 class="nick">{{nickNew}}</h3>
	                <p class="info">{{signNew}}</p>
	            </div>
	        </div>
	    </div>
	    <div class="body_con">
	    	<div class="menu_list pull-left">
	            <ul>
	                <li v-for="(item, index) in navLeft" v-bind:class="{active: index == currentNum}" v-on:click="tabs(index)">
	                    <span class="icon"></span>{{item}}
	                </li>
	            </ul>
	            <div class="border-t">
	                <img src="./assets/css/imgs/nav_bottom2.png" alt="">
	            </div>
        	</div>
        	<div class="body_right pull-right">
	            <courseList v-bind:courseData="courseData"  v-show="currentNum == 0"></courseList>
            	<teacherList v-bind:teacherInfo="teacherInfo" v-show="currentNum == 1"></teacherList>
            	<div class="setting" v-show="currentNum == 2">
                    <div class="input-row">
                        <label for="name">昵称</label>
                        <input type="text" placeholder="修改昵称" id="name" v-model="nick">
                    </div>
                    <div class="input-row">
                        <label for="say">签名</label>
                        <input type="text" placeholder="修改您的个性签名" id="say" v-model="sign">
                    </div>
                    <div class="input-row clearfix">
                        <label class="pull-left">头像</label>
                        <img src="./assets/css/imgs/tx-1.png" alt="" id="touxiang">
                        <div class="btn_box">
                            <span class="fc999 fs12">支持jpg、gif、png或bmp格式的图片，建议文件小于20M</span><br>
                            <div class="upload_btn">
                                修改头像
                                <input type="file" class="upload_file" >
                            </div>
                        </div>
                    </div>
                    <div class="input-row">
                        <button class="save_btn" v-on:click="saveBtn()">保存</button>
                    </div>
                </div>
            </div>
        	</div>
        </div>
	    </div>
	</div>
</template>
<script>
  import navbar from '@/components/header'
  import courseList from '@/components/courseList'
  import teacherList from '@/components/teacher'
  export default({
    name: 'app',
    components: {
      navbar,
      courseList,
      teacherList
    },
    data () {
      return {
        currentNum: 0,
        navLeft: ['我的课程', '我的老师', '个人设置'],
        nick: '',
        sign: '',
        nickNew: '冰冷的雪人',
        signNew: '人类被赋予了一种工作，那就是精神的成长。',
        courseData: [
          {id: '011', imgurl: './static/images/kc1/kc2.jpg', title: '数学类2'},
          {id: '002', imgurl: './static/images/kc0/kc3.jpg', title: '会计专业3'},
          {id: '001', imgurl: './static/images/kc0/kc2.jpg', title: '会计专业2'},
          {id: '010', imgurl: './static/images/kc1/kc1.jpg', title: '数学类1'},
          {id: '000', imgurl: './static/images/kc0/kc1.jpg', title: '会计专业1'}
        ],
        teacherInfo: [
          {id: '02', img: './static/images/teacher2.jpg', name: '李晨'},
          {id: '03', img: './static/images/teacher3.jpg', name: '郑爽'},
          {id: '05', img: './static/images/teacher5.jpg', name: '范冰冰'}
        ]
      }
    },
    methods: {
      tabs (num) {
        this.currentNum = num
      },
      saveBtn () {
        if (!this.nick && !this.sign) {
          alert('请输入昵称和签名！')
          return false
        }
        if (this.nick === this.nickNew) {
          alert('所修改的昵称与之前昵称重复，请重新输入')
          return false
        }
        if (this.sign === this.signNew) {
          alert('所修改的签名与之前签名重复，请重新输入')
          return false
        }
        if (this.nick) {
          this.nickNew = this.nick
        }
        if (this.sign) {
          this.signNew = this.sign
        }
      }
    }

  })
</script>