/** 서비스 상수 */
const service = Object.freeze({
    api: {
      contentType: 'application/json; charset=utf-8',
      // TODO: host 명시 필요
      host: import.meta.env.VITE_HOST,
    },
})


export default service
