// const baseUrl = 'https://dev-jiyun-api-v2.nle-tech.com/api/client/' // 开发服
// const baseUrl = 'https://jiyun-test-api-v2.nle-tech.com/api/client/'  // 测试服
const baseUrl = 'https://api-jiyun-v2.haiouoms.com/api/client/'  // 正式服'

let lastCode = ''
// 无需登录接口白名单
const whiteList = ['mini-setting', 'express/query']
const request = ({
  url = '',
  params = {},
  loading = true,
  loadingTitle = '',
  ...config
} = {}) => {
  if (loading) {
    wx.showLoading({
      title: loadingTitle || '加载中...'
    })
  }
  let timeStart = Date.now()
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url),
      data: params,
      header: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `${wx.getStorageSync('token')}`,
        'X-Uuid': '730bfbed-33e7-4e25-aa2e-92dfd0dee72f'
      },
      ...config,
      complete: (res) => {
        wx.hideLoading()
        console.log('本次请求耗时：', Date.now() - timeStart, url, '返回值：', res.statusCode, params)
        if (res.statusCode >= 200 && res.statusCode < 300) {
          (!whiteList.includes(url)) && (lastCode = res.statusCode)
          resolve(res.data)
        } else if (res.statusCode === 401 && lastCode !== 401) {
          (!whiteList.includes(url)) && (lastCode = res.statusCode)
          wx.navigateTo({
            url: '/pages/authorize/authorize'
          })
          return
        } else if (lastCode !== 401 && res.statusCode >= 500) {
          (!whiteList.includes(url)) && (lastCode = res.statusCode)
          wx.showToast({
            icon: 'none',
            title: '服务器错误'
          })
          reject(res)
        }
      }
    })
  })
}

const upload = ({
  url = '',
  name = '',
  file = ''
} = {}) => {
  wx.showLoading({
    title: '上传中...'
  })
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: getUrl(url),
      filePath: file,
      name,
      header: {
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `${wx.getStorageSync('token')}`,
        'X-Uuid': '730bfbed-33e7-4e25-aa2e-92dfd0dee72f'
      },
      complete(res) {
        wx.hideLoading()
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(res.data))
        } else if (res.statusCode === 401) {
          wx.navigateTo({
            url: '/pages/authorize/authorize'
          })
          return
        } else if (res.statusCode >= 500) {
          wx.showToast({
            icon: 'none',
            title: '服务器错误'
          })
          reject(JSON.parse(res))
        } else {
          reject(JSON.parse(res))
        }
      }
    })
  })
}

const getUrl = (url) => {
  return baseUrl + url
}

// get 请求
const _get = (url, params = {}, config = {}) => {
  return request({
    url,
    params,
    ...config
  })
}

// post 请求
const _post = (url, params = {}, config = {}) => {
  return request({
    url,
    params,
    method: 'POST',
    ...config
  })
}

// put 请求
const _put = (url, params = {}, config = {}) => {
  return request({
    url,
    params,
    method: 'PUT',
    ...config
  })
}

// delete 请求
const _delete = (url, params = {}, config = {}) => {
  return request({
    url,
    params,
    method: 'DELETE',
    ...config
  })
}

const _upload = (url, file, name) => {
  return upload({ url, file, name })
}


module.exports = {
  _get,
  _post,
  _put,
  _delete,
  _upload
}