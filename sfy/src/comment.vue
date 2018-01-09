<style scoped>
	@import 'assets/css/common.css';
	@import 'assets/css/study.css';
	@import 'assets/css/comment.css';
	.content{
		width: 1200px;
	    margin: 60px auto !important;
	    overflow: hidden;
	  }
	.content_body > li {
	    padding: 10px 0;
	    border-bottom: 1px solid #eee;
	}
</style>
<template>
	<div>
		<navbar navNum="1"></navbar>
		<courseHead v-bind:courseId="courseId"></courseHead>
		<div class="content">
    		<div class="content_left">
    			<studyNav studyNum="2" v-bind:courseId="courseId"></studyNav>
    			<div class="comment clearfix">
		            <textarea name="txt" id="txt" placeholder="说点什么吧" v-model="comment_body"></textarea>
		            <span><em id="num">{{comment_num}}</em>/300</span>
		        </div>
		        <div class="btn_box clearfix">
		            <button class="fabiao_btn" v-on:click="fabu()">发表</button>
		        </div>
		        <ul class="content_body">
		        	<li class="clearfix" v-for="(item, index) in commentData">
		                <div class="box_img">
		                    <div class="img" v-bind:style="{backgroundImage: 'url('+ item.img +')'}"></div>
		                    <p class="nick">{{item.nick}}</p>
		                </div>
		                <div class="comment_body">
		                    <div class="comment_con">
		                        <p class="comment_con_top">{{item.con}}</p>
		                        <p class="fs12 fc999 mTop10">
		                            时间：<span>{{item.time}}</span>
		                        </p>
		                    </div>
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
  import courseRight from '@/components/courseRight'
  import courseHead from '@/components/courseHead'
  import studyNav from '@/components/studyNav'

  export default({
    name: 'app',
    components: {
      navbar,
      courseHead,
      courseRight,
      studyNav
    },
    data () {
      return {
        courseId: this.$route.query.courseId,
        comment_body: '',
        comment_num: 0,
        commentData: [
          { nick: '昵称1', img: './static/images/tx-3.png', con: '还好，经常听正常的语速，突然这么快，有些不适应。但是中间的问题，真的很好。还好，经常听正常的语速，突然这么快，有些不适应。但是中间的问题，真的很好。谢谢', time: '2017-10-30' },
          { nick: '昵称2', img: './static/images/tx-2.png', con: '如果您对CSS一无所知，建议您先学习CSS的相关知识。如果您想一步登天，那么您必将摔得体无完肤', time: '2017-10-29' }
        ]
      }
    },
    watch: {
      comment_body (val, old) {
        if (/^\s+/.test(val)) {
          this.comment_body = ''
          return false
        }
        this.comment_num = this.comment_body.length
        if (this.comment_num > 300) {
          this.comment_body = this.comment_body.substr(0, 300)
        }
      }
    },
    methods: {
      fabu () {
        if (!this.comment_body) {
          alert('请输入内容')
        } else {
          const obj = {}
          obj['nick'] = '呵呵'
          obj['img'] = './static/images/tx-1.png'
          obj['con'] = this.comment_body
          obj['time'] = new Date().Format('yyyy-M-d')
          this.commentData.unshift(obj)
        }
      }
    }
  })
</script>