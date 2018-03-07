let dbclickDisable = function (event) {
    event.preventDefault()
    event.stopPropagation()
    return false
  }
  
  export default {
    mounted () {
      this.$el.addEventListener('dblclick', dbclickDisable)
    },
    destroyed () {
      this.$el.removeEventListener('dblclick', dbclickDisable)
    },
    methods: {
      getData (statusFieldname, url, params) {
        let status = []
        if (Object.prototype.toString.call(statusFieldname) === '[object Array]') {
          status = statusFieldname
        } else {
          status.push(statusFieldname)
        }
        return new Promise((resolve, reject) => {
          let inv = setInterval(() => {
            status.forEach(s => {
              this[s] = true
            })
          }, 20)
          this.$http.get(url, { params }).then((res) => {
            clearInterval(inv)
            status.forEach(s => {
              this[s] = false
            })
            resolve(res)
          }).catch(res => {
            clearInterval(inv)
            status.forEach(s => {
              this[s] = false
            })
            reject(res)
          })
        })
      },
      postData (statusFieldname, url, params) {
        let status = []
        if (Object.prototype.toString.call(statusFieldname) === '[object Array]') {
          status = statusFieldname
        } else {
          status.push(statusFieldname)
        }
        return new Promise((resolve, reject) => {
          let inv = setInterval(() => {
            status.forEach(s => {
              this[s] = true
            })
          }, 10)
          this.$http.post(url, params).then((res) => {
            // console.log(res)
            clearInterval(inv)
            status.forEach(s => {
              this[s] = false
            })
            resolve(res)
          }).catch(res => {
            clearInterval(inv)
            status.forEach(s => {
              this[s] = false
            })
            reject(res)
          })
        })
      },
      putData (statusFieldname, url, params) {
        let status = []
        if (Object.prototype.toString.call(statusFieldname) === '[object Array]') {
          status = statusFieldname
        } else {
          status.push(statusFieldname)
        }
        return new Promise((resolve, reject) => {
          let inv = setInterval(() => {
            status.forEach(s => {
              this[s] = true
            })
          }, 10)
          this.$http.put(url, params).then((res) => {
            clearInterval(inv)
            status.forEach(s => {
              this[s] = false
            })
            resolve(res)
          }).catch(res => {
            clearInterval(inv)
            status.forEach(s => {
              this[s] = false
            })
            reject(res)
          })
        })
      },
      deleteData (statusFieldname, url, params) {
        let status = []
        if (Object.prototype.toString.call(statusFieldname) === '[object Array]') {
          status = statusFieldname
        } else {
          status.push(statusFieldname)
        }
        return new Promise((resolve, reject) => {
          let inv = setInterval(() => {
            status.forEach(s => {
              this[s] = true
            })
          }, 10)
          this.$http.delete(url, params).then((res) => {
            clearInterval(inv)
            status.forEach(s => {
              this[s] = false
            })
            resolve(res)
          }).catch(res => {
            clearInterval(inv)
            status.forEach(s => {
              this[s] = false
            })
            reject(res)
          })
        })
      }
    }
  }
  