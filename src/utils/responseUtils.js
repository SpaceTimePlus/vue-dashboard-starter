/**
 * 解析返回的数据
 * @param response
 * @returns {*}
 */
export function parseResponse (response, type) {
  if (!type || type === 'json') {
    let result = JSON.parse(response)
    if (result.head.code === 1) {
      return result.body.data
    }
  } else if (type === 'protobuf') {
    return response
  }
}
