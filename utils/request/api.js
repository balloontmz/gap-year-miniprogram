const request = require('./config.js')

/**
 * 用户登录
 * @param {Object} params
 *  code 微信用户 code
 *  name 微信用户名
 *  avatar 微信头像
 */
exports.login = (params) => request._post('login', params)

/**
 * 获取包裹列表
 * @param {Object} params
 *  page
 *  size
 *  status 包裹状态 1：未入库 2：已入库
 */
exports.getPackages = (params) => request._get('package', params, { loading: false })

exports.getUser = () => request._get('user/me')

// 获取仓库地址列表信息
exports.getWarehouse = (params, config) => request._get('warehouse-address/get-list', params, config)

// 更新包裹入库提醒
exports.notify = () => request._post('user/notify', {}, { loading: false })

// 获取首页包裹、订单相关数量
exports.getQtyInfo = () => request._get('index', {}, { loading: false })

// 获取物品属性列表
exports.getPropList = () => request._get('prop', {}, { loading: false })

/**
 * 添加快递单号（包裹）
 * @param {Object} params
 *  express_num 快递单号
 *  package_name 物品名称
 *  package_value 物品价值（以分为单位）
 *  prop_id 包裹属性 id 数组
 */
exports.addPackage = (params) => request._post('package', params)

// 获取国家列表
exports.getCountrys = () => request._get('country', {}, { loading: false })

// 获取排序的国家列表
exports.getCountryBySort = () => request._get('country/sorted')

/**
 * 运费查询（路线查询）
 * @param params
 *  country_id 国家 id
 *  length 长
 *  width 宽
 *  height 高
 *  weight 重量
 *  prop_ids 所选包裹属性集合
 */
exports.expressQuery = (params, config = {}) => request._post('express/query', params, config)

/**
 * 根据包裹 id 获取包裹详情
 * @param {Number} id 包裹 id
 */
exports.getPackage = (id, params) => request._get(`package/${id}`, params)

/**
 * 修改包裹信息
 * @param {Number} id 包裹 id
 * @param {Object} params
 *  express_num 快递单号
 *  package_name 物品名称
 *  package_value 物品价值（以分为单位）
 *  prop_id 包裹属性 id 数组
 */
exports.updatePackage = (id, params) => request._put(`package/${id}`, params)

/**
 * 删除包裹
 * @param {Number} id 包裹 id
 */
exports.deletePackge = (id) => request._delete(`package/${id}`)

// 用户地址列表
exports.getAddressList = (params = {}) => request._get('address', params)

/**
 * 添加地址
 * @param {Object} params
 *  reciver_name 收件人姓名
 *  timezone 时区
 *  phone 电话
 *  country 国家 id
 *  city 城市
 *  street 街道
 *  door_no 门牌号
 *  postcode 邮编
 */
exports.addAddress = (params) => request._post('address', params)

/**
 * 删除地址
 * @param {Number} id 地址 id
 */
exports.deleteAddress = (id) => request._delete(`address/${id}`)

/**
 * 用户地址详情
 * @param {Number} id 地址 id
 */
exports.getAddress = (id) => request._get(`address/${id}`)

/**
 * 修改地址
 */
exports.updateAddress = (params) => request._put(`address/${params.id}`, params)

/**
 * 客户下单（提交转运）
 * @param {Object} params
 *  packages 包裹 id 数组
 *  address_id 收货地址 id
 *  express_line_id 快递线路 id
 *  add_service 订单增值服务 id 数组 可空
 */
exports.postOrder = (params) => request._post('order', params)

/**
 * 获取订单列表
 * @param {Object} params
 *  page 页
 *  size 数量
 *  status 1: 待处理 2:待支付 3：待发货 4：已发货 5：已签收
 */
exports.getOrderList = (params) => request._get('order', params, { loading: false })

/**
 * 获取订单详情
 * @param {Number} id 订单 id
 */
exports.getOrderDetail = (id, params) => request._get(`order/${id}`, params)

/**
 * 客户确认收货
 * @param {Number} id 订单 id
 */
exports.checkedOrder = (id) => request._post(`order/check/${id}`)

/**
 * 下单须知列表
 * @param {Number}  type 1：常见问题 2：其余问题
 */
exports.getQuestions = (type) => request._get('order-notice', { type })

// 下单须知详情
exports.getQuestionDetail = (id) => request._get(`order-notice/${id}`)

/**
 * 投诉建议
 * @param {Object} params
 *  title 标题
 *  content 内容
 *  image 图片数组
 */
exports.postSuggestion = (params) => request._post('suggestion', params)

/**
 * 上传文件
 * @param {String} file 上传的文件路径
 */
exports.uploadImage = (file) => request._upload('uploads/image', file, 'image')

/**
 * 绑定邮箱
 * @param {String} email 邮箱地址
 */
exports.bindEmail = (email) => request._post('user/bind-email', { email })

// 获取时区列表
exports.getTimezones = () => request._get('timezone', {}, { loading: false })

// 获取财务流水列表
exports.getFinances = (params) => request._get('transaction', params, { loading: false })

/**
 * 获取订单支付参数
 * @param {Number} id 订单 id
 */
exports.getPay = (id) => request._post(`order/pay/${id}`)

/**
 * 优惠券列表
 * @param {Object} params
 *  page
 *  size
 *  avaliable 是否可用 （1：可用 2：不可用）默认全部
 */
exports.getCoupons = (params) => request._get('coupon', params)

// 获取要分享的图片
exports.getShareImg = () => request._post('user/share-coupon')

/**
 * 物流查询
 * @param {String} order_sn 物流单号
 */
exports.getExpress = (params) => request._get('tracking/query', params)

// 佣金列表
exports.getCommissions = (params) => request._get('commission', params, { loading: false })

// 用户代理信息
exports.getUserType = () => request._get('user/userinfo', {}, { loading: false })

// 获取支付二维码图片 id 支付方式 id
exports.getPayImage = (id) => request._get(`order/pay-method/${id}`, {}, { loading: false })

// 批量添加快递单号
exports.batchExpress = (params) => request._post('package/batch', params, { loadingTitle: '提交中...' })

// 获取支持的快递公司
exports.getExpressCompanys = () => request._get('express-company', {}, { loading: false })

// 预览订单
exports.previewOrder = (params) => request._post('order/h5-pay', params)

/**
 * 提交支付截图
 * @param {Object} params
 *  transfer_account 转账账号
 *  order_number 待支付订单号
 *  images 图片数组
 *  remark 备注
 */
exports.onTransfer = (params) => request._post('order/tran-info', params)

// 获取增值服务列表
exports.getAddValues = () => request._get('addvalue')

// 获取可用支付方式列表
exports.getPayMethods = () => request._get('order/pay-method')

// 支付金额为 0
exports.onZeroPay = (params) => request._post('order/pay/zero', params)

// 绑定用户手机号
exports.bindPhone = (params) => request._post('bind-phone', params)

// 获取重量单位、价格单位、长度单位
exports.getLocalization = () => request._get('localization', {}, { loading: false })

// 获取包裹可选服务
exports.getPackageService = () => request._get('package-opservice', {}, { loading: false })

// 获取分类列表
exports.getCategory = () => request._get('package-category')

// 获取后台配置的图片
exports.getMiniSetting = () => request._get('mini-setting', {} ,{ loading: false })

// 根据单号获取相应的 id 和判断单号是包裹还是订单号
exports.getTypeByNum = (num) => request._get('tracking/search', { keyword: num })

/**
 * 获取验证码
 * @param params
 *  receiver 收件人：邮箱或手机号
 *  action 动作 1：绑定邮箱 2：更改邮箱 3：更改手机号
 */
exports.getVerifyCode = (params) => request._post('user/verify-code', params)

/**
 * 用户绑定邮箱
 * @param params
 *  email 邮箱
 *  verify_code 验证码
 *  user_id 用户 id
 */
exports.bindEmail = (params) => request._post('bind-email', params)

/**
 * 用户更改手机号
 * @param params
 *  phone 手机号
 *  code 验证码
 */
exports.changePhone = (params) => request._post('user/change-phone', params)

/**
 * 用户更改邮箱
 * @param params
 *  email 邮箱
 *  code 验证码
 */
exports.changeEmail = (params) => request._post('user/change-email', params)

/**
 * 已签收订单评价
 * @param params
 *  order_id 订单 id
 *  content 评价内容
 *  score 评价分数
 *  images 图片数组 可空
 */
exports.onComment = (params) => request._post('order-comment', params)

// 评论区 评论列表
exports.getComments = (params) => request._get('order-comment', params, { loading: false })

// 申请成为代理
exports.agentApply = (params) => request._post('agent/apply', params)

/**
 * 我的推广
 * has_order 1 ：存在订单 0 ：尚未下单
 */
exports.mySub = (params) => request._get('agent/my-sub', params, { loading: false })

// 获取推广好友数量
exports.mySubCount = () => request._get('agent/my-sub-count', {}, { loading: false })

// 获取用户代理状态
exports.getAgentStatus = () => request._get('agent/status', {}, { loading: false })

// 申请提现列表
exports.getApplyCommission = (params, config) => request._get('balance/apply-commission-list', params, config)

/**
 * 用户不同状态下得佣金列表
 * @param params
 *  settled 结算状态 0 未结算  1 已结算 2 申请提现中 3  已提现  只有已结算佣金可提现
 */
exports.getNormalCommission = (params, config) => request._get('commission/normal-list', params, config)

/**
 * 用户申请佣金提现
 * @param params
 *  commission_ids 佣金列表 ids
 *  withdraw_type 提现类型 1 余额提现 2 微信提现 3 支付宝提现
 *  withdraw_account 提现账号
 *  remark 备注
 */
exports.apllyWithdraw = (params) => request._post('balance/apply-commission-withdraw', params)

/**
 * 提现详情
 * @param id 提现 id
 */
exports.withdrawDetail = (id) => request._get(`balance/apply-commission-detail/${id}`)

// 视频列表
exports.getVideos = (params, config) => request._get('video-tutorial', params, config)

// 获取当前余额
exports.getBalance = () => request._get('balance/get-balance')

/**
 * 微信余额充值
 * @param params
 *  type 支付方式 1 小程序支付 2 二维码支付 默认小程序
 *  amount 充值金额
 */
exports.wechatRecharge = (params) => request._post('balance/wechat-recharge', params)

/**
 * 转账余额充值
 * @param params
 *  transfer_account 账号
 *  tran_amount 支付金额
 *  images 图片数组
 *  remark
 *  payment_type_id 支付类型 id
 */
exports.tranRecharge = (params) => request._post('balance/tran-info', params)

// 获取充值列表
exports.getRecharges = (params) => request._get('balance/apply-recharge-list', params, { loading: false })

// chrome 插件扫码登录
exports.onChromeLogin = (params) => request._post('user/scan-chrome-code', params)

/**
 * 余额支付
 * @param params
 *   order_id 订单 id
 */
exports.payBalance = (params) => request._post('order/pay/balance', params)

// 获取权限相关信息
exports.getPermmision = () => request._get('permissions', {}, { loading: false })

// 获取分享相关信息
exports.getShareInfo = () => request._get('user/share-info')

// 获取代理审核通过时的弹窗提示
exports.getAgentAlter = () => request._get('agent/agent-alert', {}, { loading: false })

// 公告列表
exports.getNotices = (params) => request._get('announcement', params, { loading: false })

// 公告详情
exports.getNoticeDetail = (id) => request._get(`announcement/${id}`)

// 首页公告
exports.getIndexNotice = () => request._get('announcement/index-announcement', {}, { loading: false })