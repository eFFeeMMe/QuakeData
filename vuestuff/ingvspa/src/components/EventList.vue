<template>
  <div class="event-list">
    <h2>Ricerca Terremoti</h2>
    <div class="filters">
      <div class="filterdiv">
        <h3>dal</h3>
        <input v-model="dt0" type="date" />
      </div>
      <div class="filterdiv>">
        <h3>al</h3>
        <input v-model="dt1" type="date" />
      </div>
      <div class="filterdiv">
        <button @click="getEvents">Ricerca</button>
      </div>
    </div>
    <div class="events">
      <EventEntry
        v-for="event in events"
        :key="event.id"
        :event="event">
      </EventEntry>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import EventEntry from './EventEntry.vue'


export default {
  name: 'EventList',
  data () {
    return {
      dt0: moment().subtract(10, 'days').format('YYYY-MM-DD'),
      dt1: moment().format('YYYY-MM-DD')
    }
  },
  components: {
    EventEntry
  },
  props: {
    msg: String
  },
  computed: mapState(['events']),
  methods: {
    getEvents () {
      let dt0 = this.dt0;
      let dt1 = this.dt1;
      this.$store.dispatch('getEvents', {dt0, dt1})
    }
  },
  mounted () {
    this.getEvents()
  }
}
</script>

<style scoped lang="stylus">

.filterdiv
  padding .5rem .5rem .5rem .5rem

h3
  margin .25rem 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
