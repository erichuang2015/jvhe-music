import { mapGetters, mapMutations, mapActions } from 'vuex'
import { playMode } from 'common/js/config'
import { shuffle } from 'common/js/util'

export const playListMixin = {
  mounted () {
    this.handlePlayList(this.playList)
  },
  activated () {
    this.handlePlayList(this.playList)
  },
  computed: {
    ...mapGetters(['playList'])
  },
  watch: {
    playList (newValue) {
      this.handlePlayList(newValue)
    }
  },
  methods: {
    handlePlayList () {
      throw new Error('it must be have  handlePlayList methods function')
    }
  }
}

export const playModeMixin = {
  computed: {
    playModeIco () {
      return this.mode === playMode.order ? 'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random'
    },
    ...mapGetters(['mode', 'currentSong', 'playList', 'orderPlayList', 'likeList'])
  },
  methods: {
    changePlayMode () {
      const mode = (this.mode + 1) % 3
      this.setPlayMode(mode)
      let list = null
      if (this.mode === playMode.random) {
        list = shuffle(this.orderPlayList)
      } else {
        list = this.orderPlayList
      }
      this.restCurrentIndex(list)
      this.setPlayList(list)
    },
    restCurrentIndex (list) {
      let index = list.findIndex((item) => {
        return item.id === this.currentSong.id
      })
      this.setCurrentIndex(index)
    },
    getFavoriteIcon (song) {
      return this.checkIsFavoriteSong(song) ? 'icon-favorite' : 'icon-not-favorite'
    },
    checkIsFavoriteSong (song) {
      let index = this.likeList.findIndex((item) => {
        return item.id === song.id
      })
      return index > -1
    },
    toggleFavoriteSong (song) {
      if (this.checkIsFavoriteSong(song)) {
        this.deleteOneLikeSongOnLikeList(song)
      } else {
        this.saveLikeSongOnLikeList(song)
      }
    },
    ...mapMutations({
      setPlayList: 'SET_PLAYLIST',
      setPlayMode: 'SET_MODE',
      setCurrentIndex: 'SET_CURRENTINDEX'
    }),
    ...mapActions(['deleteOneLikeSongOnLikeList', 'saveLikeSongOnLikeList'])

  }
}

export const searchMixin = {
  data () {
    return {
      newInputWord: '',
      refreshDelay: 400
    }
  },
  methods: {
    showInputWord (newInputWord) {
      this.newInputWord = newInputWord
    },
    getBlur () {
      this.$refs.searchBox.blur()
    },
    saveHistory () {
      this.saveSearchHistory(this.newInputWord)
      if (this.$refs.topTips) {
        this.$refs.topTips.show()
      }

    },
    deleteOne (item) {
      this.deleteOneSearchHistory(item)
    },
    changeWord (key) {
      this.$refs.searchBox.setInput(key)
    },
    ...mapActions(['saveSearchHistory', 'deleteOneSearchHistory'])

  },
  computed: {
    ...mapGetters(['searchHistory'])
  }
}
