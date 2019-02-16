<template>
  <div class="event-list">
    <div class="events">
      <div class="event-box"
           v-for="event in events"
          :key="event.id">
        <EventEntry :event="event"></EventEntry>
        <div>
          <router-link :to="'/quake/' + event.id">
            details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventEntry from './EventEntry.vue'


export default {
  name: 'EventList',
  components: {
    EventEntry
  },
  props: {},
  computed: mapState(['events']),
}
</script>

<style scoped lang="stylus">
.event-list
  padding 1rem

.event-box
  display flex
  justify-content center
  align-items center
  margin-bottom 2rem

a
  color #42b983
</style>
