export class Time {
  private dateObject = new Date()

  // current date
  // adjust 0 before single digit date
  get date() {
    return `0 ${this.dateObject.getDate()}`.slice(-2).trim()
  }

  // current month
  get month() {
    return `0 ${this.dateObject.getMonth() + 1}`.slice(-2).trim()
  }

  // current year
  get year() {
    return this.dateObject.getFullYear()
  }

  // current hours
  get hours() {
    return this.dateObject.getHours()
  }

  // current minutes
  get minutes() {
    return this.dateObject.getMinutes()
  }

  // current seconds
  get seconds() {
    return this.dateObject.getSeconds()
  }

  // prints date in YYYY-MM-DD format
  get short() {
    return `${this.year}-${this.month}-${this.date}`
  }

  // prints date & time in YYYY-MM-DD HH:MM:SS format
  get long() {
    return `${this.year}-${this.month}-${this.date} ${this.hours}:${this.minutes}:${this.seconds}`
  }

  get longDash() {
    return `${this.year}-${this.month}-${this.date}-${this.hours}-${this.minutes}-${this.seconds}`
  }

  // prints time in HH:MM format
  get time() {
    return `${this.hours}:${this.minutes}`
  }
}
