<template>
  <div id="app">
    <EventSearch/>
    <router-view/>
  </div>
</template>
<script>
import EventSearch from '@/components/EventSearch.vue'

export default {
  components: {
    EventSearch
  }
}
</script>

<style lang="stylus">
body
  margin 0

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

a
  font-weight bold
  color #2c3e50
  &.router-link-exact-active
    color #42b983
</style>
