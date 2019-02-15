<template>
  <div class="event-entry">
    {{ event.dt | pretty_date }}
    {{ event.lat }}
    {{ event.lon }}
    {{ event.depth }}
    <div v-bind:style="magcolor">
      {{ event.mag }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Color from 'color'

console.log(Color)

export default {
  name: 'EventList',
  computed: {
    magcolor () {
      let t = this.event.mag * 50
      t = Math.min(Math.max(t, 0), 100)
      let c = Color('#59DC19')
      return {
        color: c.rotate(-t)
      }
    }
  },
  props: {'event': Object},
  filters: {
    pretty_date (date) {
      return moment(date).toString()
    }
  }
}
</script>

<style scoped lang="stylus">
ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
