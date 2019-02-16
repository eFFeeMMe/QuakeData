<template>
  <div class="filter-box">
    <div style="flex-grow:1"></div>
    <h1><router-link to="/">Quake Data</router-link></h1>
    <div class="filter-widget">
      <div>from</div>
      <input v-model="date0" type="date" />
    </div>
    <div class="filter-widget>">
      <div>to (included)</div>
      <input v-model="date1" type="date" />
    </div>
    <div class="filter-widget">
      <button @click="getEvents">Search</button>
    </div>
    <div style="flex-grow:1"></div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'home',
  data () {
    return {
      date0: moment().subtract(10, 'days').format('YYYY-MM-DD'),
      date1: moment().format('YYYY-MM-DD')
    }
  },
  components: {},
  methods: {
    getEvents () {
      let date0 = this.date0;
      let date1 = this.date1;
      this.$store.dispatch('getEvents', {date0, date1})
    }
  },
  mounted () {
    this.getEvents()
  },
}
</script>
<style lang="stylus" scoped>
h1
  font-family ubuntu, sans-serif
  font-size 3rem
  font-weight 900
  a
    text-decoration none
    color rgb(64, 82, 100)
  a:hover
    color rgb(44, 62, 80)

button 
  color white
  background-color rgb(44, 62, 80)
  border none
  border-radius 1000px
  padding .5rem 2rem
  font-size 1.5rem
  &:hover
    background-color grey
  &:active
    background-color orange

.filter-box
  background-image radial-gradient(
    at 73% 147%,
    #EADFDF 59%,
    #ECE2DF 100%
    ),
    radial-gradient(
      at 91% 146%,
      rgba(255,255,255,0.50) 47%,
      rgba(0,0,0,0.50) 100%
    )
  background-blend-mode screen
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
  min-height 8rem
  border-bottom .5 rem solid #dab0a4
  margin-bottom 2rem

.filter-widget
  padding 1rem

</style>
