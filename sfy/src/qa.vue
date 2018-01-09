<style scoped>
	@import 'assets/css/common.css';
	@import 'assets/css/study.css';
	@import 'assets/css/qa.css';
	.qa_box .ipt_row{
		overflow: hidden;
	}
	.error{
		margin-left: 85px;
	    color: red;
	    height: 14px;
	    font-size: 14px;
	}
	.content{
	    margin: 60px auto !important;
	  }
</style>
<template>
	<div id="qa">
		<navbar navNum="1"></navbar>
		<courseHead v-bind:courseId="courseId"></courseHead>
		<div class="content">
	    	<div class="content_left">
	    		<studyNav studyNum="1" v-bind:courseId="courseId"></studyNav>
	    		<div class="qa_box clearfix">
		            <div class="ipt_row">
		                <label for="question_head">标题：</label>
		                <input type="text" id="question_head" v-model="question_head" placeholder="请输入问题标题">
		            </div>
		            <div class="ipt_row">
		                <label for="question_con">内容：</label>
		                <textarea name="question_con" id="question_con" v-model="question_con" placeholder="请输入问题内容"></textarea>
		            </div>
		            <div class="ipt_row">
		            	<p class="error">{{errorMsg}}</p>
		                <button class="fabu_btn" v-on:click="fabu()">发布</button>
		            </div>
		        </div>
		        <ul class="content_body">
		            <li class="clearfix" v-for="(item, index) in qaData">
		                <div class="box_img">
		                    <div class="img"></div>
		                    <p class="nick">{{item.nick}}</p>
		                </div>
		                <div class="qa_con">
		                    <p class="q">{{item.question}}</p>
		                    <div v-if="item.answer">
		                    	<p class="a">
		                        <span>[最新回答]</span>
		                        <span class="a_p"></span>
		                        <a class="a_p_name">{{item.answerPerson}}</a>
		                        <p class="a_p_con">{{item.answer}}</p>
                    		</p>
		                    </div>
		                    <div v-else>
			                    <p class="a">
		                        	<p class="a_p_con" style="margin: 0 0 10px" v-if="item.questionCon">{{item.questionCon}}</p>
			                        <span class="fcYellow padded-0-30">快来回答，帮忙解决问题吧</span>
			                        <a href="qa_detail.html" class="fcGreen">我来回答</a>
			                    </p>
			                </div>
		                    <p class="time">
		                        <span>时间：<em>{{item.time}}</em></span>
		                        <span>浏览：<em>{{item.numPerson}}</em></span>
		                    </p>
		                </div>
		            </li>
		        </ul>
	    	</div>
	    	<div class="content_right">
	    		<courseRight></courseRight>
	    	</div>
    	</div>
	</div>
</template>
<script>
  import navbar from '@/components/header'
  import courseHead from '@/components/courseHead'
  import studyNav from '@/components/studyNav'
  import courseRight from '@/components/courseRight'

  export default {
    name: 'app',
    components: {
      navbar,
      courseHead,
      studyNav,
      courseRight
    },
    data () {
      return {
        errorMsg: '',
        question_head: '',
        question_con: '',
        courseId: this.$route.query.courseId,
        qaData: [
          { nick: '呵呵', question: 'sublime中编译sass文件怎么能让它自动换行', answer: 'compass是用ruby写的，安装compass需要安装ruby。成功安装ruby之后，如果Linux系统，命令行下输入sudo gem install compass，如果windows系统，输入gem install compass,就会安装compass。正常情况下，会把sass一起安装的。', answerPerson: '冰冷的雪人', time: '2017-10-10', numPerson: 50 },
          { nick: '落叶', question: '前端面试都会问什么面试题呢', questionCon: '我是一名有两年工作经验的前端开发，想知道现在面试官会问什么类型的面试题', answer: '', answerPerson: '', time: '2017-10-25', numPerson: 10 }
        ]
      }
    },
    methods: {
      fabu () {
        if (!this.question_head) {
          this.errorMsg = '请填写标题!'
          return false
        } else {
          this.errorMsg = ''
          const obj = {}
          obj['nick'] = '雪人'
          obj['question'] = this.question_head
          obj['questionCon'] = this.question_con
          obj['time'] = new Date().Format('yyyy-M-d')
          obj['numPerson'] = 0
          this.qaData.unshift(obj)
        }
      }
    },
    watch: {
      question_head (val, old) {
        if (val) {
          this.errorMsg = ''
        }
        if (old === ' ' && val === '') {
          this.errorMsg = ''
        }
        if (/^\s+/.test(val)) {
          this.errorMsg = '开头不能有空格'
          return false
        }
      }
    }
  }
</script>