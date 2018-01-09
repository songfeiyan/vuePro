<style scoped>
  @import 'assets/css/index.css';
</style>
<template>
  <div>
    <navbar navNum="-1"></navbar>
    <!-- 轮播图 -->
    <div class="lunbo">
        <div id="boxgallery" class="boxgallery" data-effect="effect-2">
            <div class="panel"><img src="../static/images/1.jpg" alt="Image 3"/></div>
            <!-- <div class="panel"><img src="./assets/images/2.jpg" alt="Image 4"/></div>
            <div class="panel"><img src="./assets/images/1.jpg" alt="Image 1"/></div>
            <div class="panel"><img src="./assets/images/2.jpg" alt="Image 2"/></div> -->
        </div>
    </div>
    <!-- 学校课程 -->
    <div class="kecheng_box">
        <div class="kecheng">
            <div class="kecheng_head" >
                <p class="title fc333">学校课程</p>
                <ul class="kecheng_nav clearfix">
                    <li v-for="(item, index) in tabs" v-bind:class="{current: index == num}" v-on:click="tab(index)"><a>{{item}}</a></li>
                    <li><a href="course.html" target="_blank">全部课程</a></li>
                </ul>
            </div>
            <div class="kecheng_body">
                <ul v-for="(itemCons, index) in tabContents" v-show="index == num">
                  <!-- <li v-for="(itemCon, index) in tabContents[index]"  class="tp" v-on:click="$router.push({path: '/detail'})"> -->
                  <li v-for="(itemCon, index) in tabContents[index]"  class="tp">
                    <router-link v-bind:to="'/courseDetail?courseId='+itemCon.id">
                      <div class="pic">
                        <img v-bind:src="itemCon.url"/>
                        <div  class="triangle">
                          <div class="shadow"></div>
                        </div>
                      </div>
                      <p class="title">{{itemCon.word}}</p>
                    </router-link>
                  </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 学校老师 -->
    <div class="teacher_box">
        <div class="teacher">
            <div class="teacher_head">
                <p class="title fc333 clearfix">
                    学校老师
                </p>
            </div>
            <teacherList v-bind:teacherInfo="teacherInfo"></teacherList>
        </div>
        <router-link to="/teacher" class="btn">所有老师</router-link>
    </div>
    <!-- 师生互动 -->
    <div class="hudong_box">
          <div class="hudong">
              <div class="hudong_head">
                  <p class="title fc333 clearfix">
                      课程互动
                  </p>
              </div>
              <hudong v-bind:hdData="hdData"></hudong>
          </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/header'
import teacherList from '@/components/teacher'
import hudong from '@/components/hudong'

export default {
  name: 'app',
  data () {
    return {
      // showBar: true,
      num: 0,
      tabs: ['精品课程', '最新课程'],
      tabContents: [
        [
          {id: '000', url: './static/images/kc0/kc1.jpg', word: '会计专业1'},
          {id: '001', url: './static/images/kc0/kc2.jpg', word: '会计专业2'},
          {id: '002', url: './static/images/kc0/kc3.jpg', word: '会计专业3'},
          {id: '010', url: './static/images/kc1/kc1.jpg', word: '数学类1'},
          {id: '011', url: './static/images/kc1/kc2.jpg', word: '数学类2'},
          {id: '000', url: './static/images/kc0/kc1.jpg', word: '会计专业1'},
          {id: '001', url: './static/images/kc0/kc2.jpg', word: '会计专业2'},
          {id: '002', url: './static/images/kc0/kc3.jpg', word: '会计专业3'}
        ],
        [
          {url: './static/images/kc9.jpg', word: 'ps基础'},
          {url: './static/images/kc10.jpg', word: 'PPT详解'},
          {url: './static/images/kc11.jpg', word: '大数据'},
          {url: './static/images/kc12.jpg', word: '高等数学'},
          {url: './static/images/kc13.jpg', word: '数学分析'},
          {url: './static/images/kc14.jpg', word: '快速入门韩语'},
          {url: './static/images/kc15.jpg', word: '建筑工程实例教程'},
          {url: './static/images/kc16.jpg', word: '会计学'}
        ]
      ],
      teacherInfo: [
        {id: '01', img: './static/images/teacher1.jpg', name: '邓超', department: '信息与计算科学系', descript: '任教java开发、数据库、数据分析,有着多年的教学经验'},
        {id: '02', img: './static/images/teacher2.jpg', name: '李晨', department: '数学与应用数学', descript: '任教高等代数、数据分析,有着多年的教学经验'},
        {id: '03', img: './static/images/teacher3.jpg', name: '郑爽', department: '网络安全', descript: '任教线性函数、数据分析,有着多年的教学经验'},
        {id: '04', img: './static/images/teacher4.jpg', name: '刘恺威', department: '电子科学', descript: '任教图像处理、photoShop,有着多年的教学经验'}
      ],
      teacherInfo2: [
        {img: './static/images/teacher5.jpg', name: '范冰冰', department: '信息与计算科学系2', descript: '任教java开发、数据库、数据分析,有着多年的教学经验2'},
        {img: './static/images/teacher1.jpg', name: '邓超', department: '数学与应用数学2', descript: '任教高等代数、数据分析,有着多年的教学经验2'},
        {img: './static/images/teacher2.jpg', name: '李晨', department: '网络安全2', descript: '任教线性函数、数据分析,有着多年的教学经验2'},
        {img: './static/images/teacher6.jpg', name: '刘诗诗', department: '电子科学2', descript: '任教图像处理、photoShop,有着多年的教学经验2'}
      ],
      hdData: [
        {pic: './static/images/tx-1.png', questioner: '邓超', state: '提问', teacher: '周老师', link: '', course: '《java基础》', con: '父类与子类之间的多态性，对父类的函数进行重新定义。如果在子类中定义某方法与其父类有相同的名称和参数，我们说该方法被重写 (Overriding)。在Java中，子类可继承父类中的方法，而不需要重新编写相同的方法。'},
        {pic: './static/images/tx-2.png', questioner: '孙俪', state: '提问', teacher: '宋老师', link: '', course: '《数据库原理》', con: '方法重载与重写的区别在哪里？'},
        {pic: './static/images/tx-3.png', questioner: '孟老师', state: '回复', teacher: '刘亦菲', link: '', course: '《C语言教程》', con: '方法重写：它是指子类和父类的关系，子类重写了父类的方法，但方法名、参数类型、参数个数必须相同！'},
        {pic: './static/images/tx-4.png', questioner: '牛老师', state: '回复', teacher: '李晨', link: '', course: '《数据结构》', con: '方法重载：就是在同一个类中，方法的名字相同，但参数个数、参数的类型或返回值类型不同！'},
        {pic: './static/images/tx-5.png', questioner: '范冰冰', state: '提问', teacher: '张老师', link: '', course: '《数据分析》', con: '在使用重载时只能通过相同的方法名、不同的参数形式实现。不同的参数类型可以是不同的参数类型，不同的参数个数，不同的参数顺序（参数类型必须不一样）'}
      ]
    }
  },
  components: {
    navbar,
    teacherList,
    hudong
  },
  methods: {
    tab (index) {
      this.num = index
    },
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
    // this.$store.commit('setCourseId', 'asd')
    // alert(this.$store.state.course.id)
  }
}
</script>


