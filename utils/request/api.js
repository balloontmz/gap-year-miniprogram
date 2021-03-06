const request = require('./config.js')

/**
 * 用户登录
 * @param {Object} params
 *  code 微信用户 code
 *  name 微信用户名
 *  avatar 微信头像
 */
// exports.login = (params) => request._post('login', params)

/**
 * 获取包裹列表
 * @param {Object} params
 *  page
 *  size
 *  status 包裹状态 1：未入库 2：已入库
 */
// exports.getPackages = (params) => request._get('package', params, { loading: false })

exports.taskList = (params) => request._get('todo/task', params, { loading: false })

exports.userTaskList = (params) => request._get('todo/user-task', params)
exports.createUserTask = (params) => request._post('todo/user-task', params)

exports.updateProcess = (params) => request._post('todo/user-task/update-process', params)
exports.quickComplete = (params) => request._post(`todo/user-task/quick-complete?process_id=${params.process_id}`, params)

exports.wxLogin = (params) => request._post('todo/wx-login', params)