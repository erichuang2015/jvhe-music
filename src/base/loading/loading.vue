<template>
  <div class="loading-content">
    <img src="../../common/image/loading.gif" alt="loading-icon">
    <p>{{title}}</p>
  </div>

</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .loading-content{
    text-align center
    img{
      width 30px
      height 30px
    }
    p{
      color $color-text
      font-size $font-size-medium
    }
  }



</style>
