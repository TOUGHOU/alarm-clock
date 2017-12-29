class Clock {
  constructor (fn) {
    this.seconds = 0
    this.mins = 0
    this.hours = 0
    this.getCurrentTime()
    this.run(fn)
  }

  getCurrentTime () {
    let date = new Date()
    this.hours = this._padZero(date.getHours())
    this.mins = this._padZero(date.getMinutes())
    this.seconds = this._padZero(date.getSeconds())
  }

  run (fn) {
    setInterval(() => {
      this.seconds++
      this.seconds = this._padZero(this.seconds)
      this.count()
      fn({
        sec: this.seconds,
        min: this.mins,
        hour: this.hours
      })
    }, 1000)
  }

  count () {
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
  }

  _padZero (num) {
    if (num < 10) {
      return '0' + num
    }
    return num + ''
  }
}

export default Clock
