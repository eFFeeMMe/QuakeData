<template>
  <div class="event-entry">
    <div class="ev-loc">
      {{ event.location }}
    </div>
    <div class="ev-dt">
      <div>
        Date: {{ event_date }}
      </div>
      <div>
        Time: {{ event_time }}
      </div>
    </div>
    <div class="ev-latlondepth">
      <div>
        Lat: {{ event.lat }}
      </div>
      <div>
        Lon: {{ event.lon }}
      </div>
      <div>
        Depth: {{ event_depth }}
      </div>
    </div>
    <div class="ev-magnitude" v-bind:style="mag_style">
      {{ event_mag }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Color from 'color'

export default {
  name: 'EventEntry',
  computed: {
    event_date () {
      return moment(this.event.dt).format('LL')
    },
    event_time () {
      return moment(this.event.dt).format('LT')
    },
    event_depth () {
      return this.event.depth.split('.')[0] + 'm'
    },
    event_mag () {
      return this.event.mag.slice(0, 3)
    },
    mag_style () {
      // green mag: 1, red mag: 4
      let t = (this.event.mag - 1. ) / 3.
      let hue = t * 100
      hue = Math.min(hue, 100)
      hue = Math.max(hue, 0)
      return {
        color: Color('#59DC19').rotate(-hue)
      }
    }
  },
  props: {'event': Object}
}
</script>

<style scoped lang="stylus">
.event-entry
  width 40rem
  padding .25rem
  display flex
  flex-wrap wrap
  align-items center
  justify-content space between

.ev-loc
  width 10rem

.ev-dt
  width 10rem

.ev-latlondepth
  width 10rem

.ev-magnitude
  font-size 2rem
  width 4rem
</style>
