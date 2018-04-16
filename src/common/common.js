/**
 * Created by athena on 2017/9/14.
 */
/**
 * 绑卡excel表头
 * @type {{}}
 */
export const EXCEL_HEADER_BIND_CARD = {
  '持卡人卡号': 'bankcard',
  '持卡人姓名': 'name',
  '持卡人身份证号': 'idcard',
  '持卡人银行预留手机号': 'mobile'
}

/***
 * OSS host
 * @type {string}
 */
export const OSS_HOST = process.env.OSS_HOST

/***
 * OSS_BUCKET
 * @type {string}
 */
export const OSS_BUCKET = process.env.OSS_BUCKET

/***
 * OSS_REGION
 * @type {string}
 */
export const OSS_REGION = process.env.OSS_REGION

/***
 * CDN host
 * @type {string}
 */
export const CDN_HOST = process.env.CDN_HOST
