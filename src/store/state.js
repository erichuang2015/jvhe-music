import { playMode } from 'common/js/config'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  orderPlayList: [],
  mode: playMode.order,
  currentIndex: -1
}
export default state
