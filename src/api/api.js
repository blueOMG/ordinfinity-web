
import { get, post } from "../assets/js/axios";
/**
 * 获取配置信息
 */
export const getConfig = () => get("/config/info");
/**
 * 订阅
 */
export const preorder = (obj) => post("/create/pre_order", obj);
export const crorder = (obj) => post("/create/order", obj);
export const getTokensBalance = (obj) => post(`/balance/${obj.address}/${obj.token}`);