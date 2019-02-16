<template>
  <div class="event-details">
    <div v-if="event" class="map-container">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer
          :url="url"
          :attribution="attribution" />
        <l-marker :lat-lng="marker" />
      </l-map>
    </div>
    <EventEntry v-if="event" class="event-entry" :event="event" />
    <div v-else>
      loading quake {{ id }} data
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { L } from 'vue2-leaflet';
import EventEntry from '@/components/EventEntry.vue'
import constants from '@/constants.js'
const API_ENDPOINT = constants.API_ENDPOINT

export default {
  name: 'EventDetails',
  data () {
    return {
      event: null,
      zoom: 6,
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }
  },
  computed: {
    id () { return this.$route.params.id },
    center () {
      return L.latLng(this.event.lat, this.event.lon)
    },
    marker () {
      return L.latLng(this.event.lat, this.event.lon)
    },
  },
  components: {
    EventEntry
  },
  mounted () {
    let req_url = API_ENDPOINT + 'quakes/' + this.id
    axios.get(req_url).then(response => {
      this.event = response.data
      this.loaded = true
    })
  },
}
</script>

<style scoped lang="stylus">
.event-entry
  width 100%
  display flex
  justify-content center
  align-items center
.map-container
  width 100%
  height 20rem
</style>
