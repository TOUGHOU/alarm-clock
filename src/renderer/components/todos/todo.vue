<script>
import * as type from 'electron'
const Dialog = type.remote.dialog

export default {
  data () {
    return {
      inputVal: '',
      targetList: []
    }
  },

  components: {},

  computed: {},

  created () {

  },

  methods: {
    addTarget (e) {
      if (e.keyCode === 13) {
        this.targetList.push(this.inputVal)
        this.inputVal = ''
      }
    },
    notice () {
      let notice = new Notification('这是提示', {
        body: '这是内容'
      })

      notice.onclick = () => {
        console.log('通知被点击')
      }
    },
    dialogShow () {
      Dialog.showOpenDialog({
        title: '这是啥'
      })
    }
  }
}
</script>
<!--  -->
<template>
  <div class="todo-view">
    <div class="title"><Icon type="calendar"></Icon>Todo List</div>
    <Input v-model="inputVal" 
           placeholder="Enter something..." 
           class="input"
           @on-keypress="addTarget($event)">
    </Input>
    <div class="target-view">
      <ul>
        <li v-for="(target, index) in targetList" 
            :key="index"
            @click="notice">
            {{target}}
        </li>
      </ul>
    </div>
    <div>
      <Button type="primary" @click.native="dialogShow">dialog</Button>
    </div>
  </div>
</template>

<style lang='less' scoped>
.todo-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .input {
    width: 100%;
  }
  .ivu-input{
    height: 50px;
  }
  .target-view {
    margin-top: 20px;
    width: 100%;
    height: 300px;
    color: #fff;
    overflow: auto;
    ul > li {
      margin-top: 5px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 3px;
      background-color: #57a3f3;
    }
  }
}
</style>