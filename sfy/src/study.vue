<style scoped>
	@import 'assets/css/common.css';
	@import 'assets/css/study.css';
  .content{
    margin: 60px auto !important;
  }
</style>
<template>
	<div id="study">
		<navbar navNum="1"></navbar>
		<courseHead v-bind:courseId="courseId"></courseHead>
		<div class="content">
        <div class="content_left">
				  <studyNav studyNum="0" v-bind:courseId="courseId"></studyNav>
  				<ul class="content_body">
              <li v-for="(item, index) in courseList">
                  <div class="list_cell_head" v-on:click="toggle(item)">{{item.title}}<span class="pull-right down"></span></div>
                  <ul class="list_cell_body" v-show="item.isShow">
                      <li v-for="(itemCon, index2) in item.detail">
                          <div class="pull-left">{{(index+1)+'.'+(index2+1)}}&nbsp;&nbsp;{{itemCon.con}}</div>
                          <div class="pull-right">
                              <a target="_blank" v-bind:href="itemCon.link">下载</a>
                          </div>
                      </li>
                  </ul>
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
      courseId: this.$route.query.courseId,
      courseList: [
        {
          title: '第一章课程介绍',
          detail: [
            { con: '第一节课后题详解', link: 'http://pan.baidu.com/s/1bnXzarH' },
            { con: '第二节课件', link: 'http://pan.baidu.com/s/1bnXzarH' },
            { con: '第一章总结课件', link: 'http://pan.baidu.com/s/1bnXzarH' }
          ]
        },
        {
          title: '第二章教学内容',
          detail: [
            { con: '第一节课件', link: 'http://pan.baidu.com/s/1bnXzarH' },
            { con: '第一二节课后练习答案', link: 'http://pan.baidu.com/s/1bnXzarH' },
            { con: '第三节课后作业', link: 'http://pan.baidu.com/s/1bnXzarH' }
          ]
        },
        {
          title: '第三章教学内容',
          detail: [
            { con: '第一节课件', link: 'http://pan.baidu.com/s/1bnXzarH' },
            { con: '第一二节课后练习答案', link: 'http://pan.baidu.com/s/1bnXzarH' },
            { con: '第三节课后作业', link: 'http://pan.baidu.com/s/1bnXzarH' }
          ]
        },
        {
          title: '第四章教学内容',
          detail: [
            { con: '第一节课件', link: 'http://pan.baidu.com/s/1bnXzarH' },
            { con: '第二节课件', link: '/http://pan.baidu.com/s/1bnXzarH' }
          ]
        },
        {
          title: '第五章教学内容',
          detail: [
            { con: '第一节课件', link: 'http://pan.baidu.com/s/1bnXzarH' },
            { con: '第二节课件', link: '/http://pan.baidu.com/s/1bnXzarH' },
            { con: '第三节课件', link: '/http://pan.baidu.com/s/1bnXzarH' },
            { con: '第四节课件', link: '/http://pan.baidu.com/s/1bnXzarH' },
            { con: '第五节课件', link: '/http://pan.baidu.com/s/1bnXzarH' }
          ]
        }
      ]
    }
  },
  methods: {
    toggle (obj) {
      this.$nextTick(() => {
        this.$set(obj, 'isShow', !obj.isShow)
      })
    }
  }
}
</script>