import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

/***
 * GET 请求
 * @param url
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
export function get (url, responseType, headers) {
  if (!responseType) {
    responseType = 'json'
  }
  if (!headers) {
    headers = {
      Accept: 'application/json'
    }
  }
  return axios({
    method: 'get',
    url,
    responseType,
    headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error)
    }
  })
}

/***
 * POST 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
export function post (url, data, responseType, headers) {
  if (!responseType) {
    responseType = 'json'
  }
  if (!headers) {
    headers = {
      Accept: 'application/json'
    }
  }
  return axios({
    method: 'post',
    url,
    data,
    responseType,
    headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error)
    }
  })
}

/***
 * PUT 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
export function put (url, data, responseType, headers) {
  if (!responseType) {
    responseType = 'json'
  }
  if (!headers) {
    headers = {
      Accept: 'application/json'
    }
  }
  return axios({
    method: 'put',
    url,
    data,
    responseType,
    headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error)
    }
  })
}

/***
 * DELETE 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
export function del (url, responseType, headers) {
  if (!responseType) {
    responseType = 'json'
  }
  if (!headers) {
    headers = {
      Accept: 'application/json'
    }
  }
  return axios({
    method: 'delete',
    url,
    responseType,
    headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error)
    }
  })
}

/**
 * 返回json数据
 * @param response
 * @returns {*}
 */
export function parseResponse (response) {
  // 检查状态
  if (response.status >= 200 && response.status < 400) {
    return response.data
  }
}
