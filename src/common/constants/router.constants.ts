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
  noti: {
    noti: '/noti',
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
  history: {
    root: '/',
    letter: 'letter:id',
    call: 'call:id',
    audio: 'call:id:audioId',
  },
})

export default routerPath
