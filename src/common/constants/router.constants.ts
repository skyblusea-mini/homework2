/** route 상수 */
const routerPath = Object.freeze({
  home: {
    root: '/',
  },
  artist: {
    root: '/artist:id',
  },
  letter: {
    root: '/letter',
  },
  mypage: {
    root: '/mypage',
    like: '/mypage/like',
    noti: '/mypage/noti',
    lang: '/mypage/lang',
  },
  alarm: {
    root: '/alarm',
  },
  faq: {
    root: '/faq',
  },
  term: {
    root: '/term',
  },
  userInfo: {
    root: '/user-info',
  },
  voucher: {
    root: '/voucher',
  },
  history: {
    root: '/history',
    letter: '/history/letter:id',
    call: '/history/call:id',
    audio: '/history/call:id:audioId',
  },
})

export default routerPath
