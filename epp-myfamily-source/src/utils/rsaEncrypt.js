import JSEncrypt from 'jsencrypt/bin/jsencrypt'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDNxoh4UCwIPRGpUwtt1ujU92/90RF\n' +
'+zD6uQr0MSV+tGwhDPiu4BrZb8YutTXNPxafcP0SmcHWKMeT/PISPcMzko9roeP7uHY6ul26/uaIt/Tx1KnNzg\n' +
'dpc5HZHY2N+CJ8CxsQnv1U14drumq3CxhMM6b50YZOXSP73xGJ1G1KYJwIDAQAB'

const privateKey = 'MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAM3GiHhQLAg9EalTC23W6N\n' +
'T3b/3REX7MPq5CvQxJX60bCEM+K7gGtlvxi61Nc0/Fp9w/RKZwdYox5P88hI9wzOSj2uh4/u4djq6Xbr+5oi39PHUq\n' +
'c3OB2lzkdkdjY34InwLGxCe/VTXh2u6arcLGEwzpvnRhk5dI/vfEYnUbUpgnAgMBAAECgYEAj49EwntcXNsOKU1wmc7\n' +
'nXTzLew6S4B1qVXTmI15FS6WiXBdRtO+p5fdcdSmlmy/Qbk4NfPjUZ/drRc5YxSHzLwfia13xq+xZr9Lc9etMNSU/Of\n' +
'fTIfL7dTOtSgl7qEKaOYSUKRonsadTkYEMsX0WDeGBXz/faLJ7iLrD+KQZAxECQQDsr319Dg/jPwO+A1Ps4PlZdgmQuQ\n' +
'UeX9NRzCu41QGVPhWHSGal0VXYEq4qeO3IsowI2eOc2F4KOIdHJfuKDRKlAkEA3pFQTubhTqBzF0BN0i9hoCfwFzVGlwE\n' +
'mGt1GGk3iu5evUWQYL4PU2HhZOjr6C6g4z1agDuGsu2APO2BP6P0B2wJATdH1hKSW/LS/Wj5l3cCqu4tf4cGzuSTwqjhj\n' +
'N8ZxWsyq72wSs/p8KysZMMXKCO8Ls+1QNUW+xcWIVRBcACwEMQJBAK68zZ00vP1bESDXFoIHOxFfaar+483YVA9RXCF4tq\n' +
'LrQvSWrjpXuTq+uebyuK+AQiHec8lbOp7dmvfV9McKJHMCQQCXgs3LzV+6ZQb6ttnV1jrR8kBty1JVh7gn155SaPaNTJfL\n' +
'HHAlCvpmyCag6AqazHnyqduVsLafvvfSmZxGqs62'

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对需要加密的数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey)
  return encryptor.decrypt(txt)
}

