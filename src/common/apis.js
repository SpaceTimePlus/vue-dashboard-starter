/**
 * Created by dh on 2018/4/1.
 */

// HOST -----------------------------------------------------------------------------
export const journalApiHost = process.env.JOURNAL_API_HOST
export const apiHost = process.env.API_HOST
// 接口组装 -----------------------------------------------------------------------------

/***
 * 日志接口
 * @param url 接口地址
 * @returns {*}
 */
export function journalApi (url) {
  return journalApiHost + url
}

/***
 * 微信接口
 * @param url 接口地址
 * @returns {*}
 */
export function api (url) {
  return apiHost + url
}

// API 列表 -------------------------------------------------------------------------

// 日志 API -------------------------------------------------------------------------

/**
 * 用户操作日志记录
 * @type {string}
 */
export const CREATE_JOURNAL = '/create/journal'

// 用户 -----------------------------------------------------------------------------
