const util = {
  isLogin,
  logout,
  getCurrentUserInfo,
  formatTime,
  curTab
}

//是否处于登录状态
function isLogin() {
  let user = localStorage.getItem("userToken")
  if (user) {
    return true
  } else {
    return false
  }
}

//获取用户信息
function getCurrentUserInfo() {
  return JSON.parse(localStorage.getItem("userInfo"))
}

//注销登录
function logout() {
  localStorage.clear()
}

//时间处理
function formatTime(timeStr) {
  let timeDate = new Date(timeStr)
  let year = timeDate.getFullYear()
  let month = timeDate.getMonth() + 1
  let date = timeDate.getDate()
  let hour = timeDate.getHours()
  let minute = timeDate.getMinutes()
  let second = timeDate.getSeconds()
  month = formatCtrl(month)
  date = formatCtrl(date)
  hour = formatCtrl(hour)
  minute = formatCtrl(minute)
  second = formatCtrl(second)
  return `${year}-${month}-${date} ${hour}:${minute}:${second}`
}

//不足两位数的，前面补0
function formatCtrl(str) {
  return str < 10 ? "0" + str : str
}

//切换tab时，给当前tab添加class
function curTab(ele) {
  ele.classList.add("current-tab")
  nextEle(ele)
  preEle(ele)
}

function nextEle(ele) {
  while (ele.nextElementSibling) {
    ele.nextElementSibling.classList.remove("current-tab")
    ele = ele.nextElementSibling
  }
}

function preEle(ele) {
  while (ele.previousElementSibling) {
    ele.previousElementSibling.classList.remove("current-tab")
    ele = ele.previousElementSibling
  }
}

export default util
