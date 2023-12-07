
import { get, post } from "../assets/js/axios";
/**
 * 获取配置信息
 */
export const getConfig = () => get("/config/info");
/**
 * 获取用户信息
 */
export const getUserinfo = () => get("/user/info");
/**
 * 获取钱包签名的字符串
 */
export const getOnce = (obj) => post("/user/nonce", obj);

/**
 * 获取钱包签名的字符串
 */
export const login = (obj) => post("/user/token", obj);
/**
 * 用户升级
 */
export const upgrade = () => post("/user/upgrade");
/**
 * 获取首页图片
 */
export const getHomeSource = (obj) => get("/mediaResource/all", obj);
/**
 * 获取帮助中心
 */
export const getHelp = (obj) => get("/help/page", obj);
/**
 * 获取流水记录
 */
export const getFlow = (obj) => get("/flow/page", obj);
/**
 * 获取资产
 */
export const getAssets = () => get("/assets/info");
/**
 * 获取成交量
 */
export const getVolume = () => get("/volume/info");
/**
 * 获取nft等级
 */
export const getnftLevel = () => get("/task/level");
/**
 * 获取nft列表
 */
export const getnftList = (obj) => get("/task/page", obj);
/**
 * 获取nft详情
 */
export const getnftDetail = (obj) => get("/task/detail", obj);
/**
 * 收藏/取消收藏 nft
 */
export const collectNFT = (obj) => post("/task/collect", obj);
/**
 * 参与nft
 */
export const joinNFT = (obj) => post("/task/join", obj);
/**
 * 获取质押列表
 */
export const getPledgeList = (obj) => get("/pledge/page", obj);
/**
 * 参与质押
 */
export const joinPledge = (obj) => post("/pledge/join", obj);
/**
 * 获取邀请关系
 */
export const getInviteInfo = () => get("/invitation/info");
/**
 * 获取我的下级
 */
export const getInviteChild = (obj) => get("/invitation/child", obj);
/**
 * 获取nft订单
 */
export const getnftOrder = (obj) => get("/taskOrder/page", obj);
/**
 * 是否有未读消息
 */
export const getUnread = () => get("/notice/isHasUnreadNotice");
/**
 * 获取消息
 */
export const getNotice = (obj) => get("/notice/page", obj);
/**
 * 获取消息详情
 */
export const getNoticeDetail = (obj) => get("/notice/detail", obj);
/**
 * 获取质押订单
 */
export const getPledgeOrder = (obj) => get("/pledgeOrder/page", obj);
/**
 * 获取质押订单
 */
export const getnftOrderCount = () => get("/taskOrder/statistics");
/**
 * 获取质押订单
 */
export const getPledgeOrderCount = () => get("/pledgeOrder/statistics");
/**
 * 兑换
 */
export const exchangeCoin = (obj) => post("/exchange/token", obj);
/**
 * 兑换记录
 */
export const getExchangeRecord = (obj) => get("/exchange/page", obj);
/**
 * 贷款列表
 */
export const getLoanList = (obj) => get("/borrowed/page", obj);
/**
 * 申请贷款
 */
export const applyLoan = (obj) => get("/borrowed/apply", obj);
/**
 * 贷款记录
 */
export const getLoanRecord = (obj) => get("/borrowed/apply/list", obj);
/**
 * 还款
 */
export const repaymentLoan = (obj) => get("/borrowed/repayment", obj);
/**
 * 申请提现
 */
export const applyWithdraw = (obj) => post("/withdraw/apply", obj);
/**
 * 提现记录
 */
export const getWithdrawRecord = (obj) => get("/withdraw/page", obj);
/**
 * 开关机器人
 */
export const enbaleRobot = () => post("/bot/enable");
/**
 * 机器人收益统计
 */
export const getRebotStatistics = () => get("/bot/statistics");
/**
 * 订阅
 */
export const subscribeMsg = (obj) => post("/user/subscribe", obj);
/**
 * 订阅
 */
export const getLang = () => get("/lang/app");
/**
 * 代理规则
 */
export const getRule = () => get("/incomeConfig/info");
/**
 * 活动列表
 */
export const getActivityModalInfo = () => get("/depositActivity/info");
/**
 * 活动列表
 */
export const getActivityList = (obj) => get("/depositActivity/page", obj);
/**
 * 活动详情
 */
export const getActivityDetail = (obj) => get("/depositActivity/detail", obj);
/**
 * 参加活动
 */
export const joinActivity = (obj) => post("/depositActivity/join", obj);