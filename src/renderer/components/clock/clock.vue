<script>
export default {
  data () {
    return {
      open: false,
      cloclList: [],
      timeValue: '',
      hours: 0,
      mins: 0,
      seconds: 0
    }
  },

  created () {
    this.getCurrentTime()
  },

  watch: {
    seconds () {
      this.clockCount()
    }
  },

  methods: {
    clockClick () {
      this.open = !this.open
    },
    clockChange (time) {
      this.timeValue = time
    },
    clockClear () {
      this.open = false
    },
    clockOk () {
      this.open = false
      this.cloclList.unshift(this.timeValue)
    },
    createClockItem () {
      let li = document.createElement('li')
      li.classList.add('clock-item')
      li.innerHTML = this.timeValue
    },
    getCurrentTime () {
      let date = new Date()
      this.hours = this._padZero(date.getHours()) // this._padZero(23)//
      this.mins = this._padZero(date.getMinutes()) // this._padZero(59)//
      this.seconds = this._padZero(date.getSeconds()) // this._padZero(8)//
      this.clockRun()
    },
    clockCount () {
      // console.log(this.seconds)
      if (+this.seconds > 59) {
        this.seconds = this._padZero(0)
        if (+this.mins >= 59) {
          this.mins = this._padZero(0)
          this.hours = this._padZero(this.hours++)
          if (+this.hours >= 23) {
            this.mins = this._padZero(0)
            this.hours = '00'
          } else {
            this.hours = this._padZero(this.hours++)
          }
        } else {
          this.mins++
          this.mins = this._padZero(this.mins)
        }
      }
    },
    clockRun () {
      setInterval(() => {
        this.seconds++
        this.seconds = this._padZero(this.seconds)
      }, 1000)
    },
    _padZero (num) {
      if (num < 10) {
        return '0' + num
      }
      return num + ''
    }
  }
}
</script>
<!-- 下班打卡提醒闹钟 -->
<template>
  <div class="clock-view">
    <div class="left-part">
      <ul class="clock-list">
        <li v-for="(clock, index) in cloclList" 
            :key="index"
            class="clock-item">{{clock}}</li>
      </ul>
    </div>
    <div class="right-part">
      <div class="clock-container">
        <span class="time-block">{{hours}}</span>
        <i>:</i>
        <span class="time-block">{{mins}}</span>
        <i>:</i>
        <span class="time-block">{{seconds}}</span>
      </div>
      <div class="toolbar">
        <TimePicker
            format="HH:mm"
            :open="open"
            :value="timeValue"
            confirm
            @on-change="clockChange"
            @on-clear="clockClear"
            @on-ok="clockOk">
            <a href="javascript:void(0)" @click="clockClick">
              <Button type="primary">
                <Icon type="ios-clock-outline"></Icon>
                设定闹钟
              </Button>
            </a>
        </TimePicker>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
  @clock-item-color: #4F9FE1;
  .clock-view {
    display: flex;
    height: 300px;
    .left-part {
      width: 200px;
      flex: 0 0 200px;
      background: #ccc;
      overflow: auto;
      .clock-list{
        .clock-item{
          margin-bottom: 3px;
          padding-left: 10px;
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          color: #fff;
          background: #097EE0;
          transition: background-color .3s ease;
          &:hover{
            background: #4F9FE1;
          }
        }
      }
    }
    .right-part {
      display: flex;
      flex: 1;
      // justify-content: space-around;
      align-items: center;
      flex-direction: column;
      .clock-container {
        display: flex;
        text-align: center;
        font-size: 30px;
        .time-block {
          flex: 1;
        }
      }
    }
  }
</style>