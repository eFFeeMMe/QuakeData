import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'
import _ from 'underscore'
import moment from 'moment'

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    setEvents (state, events) {
      state.events = events
    }
  },
  actions: {
    getEvents (context, {date0, date1}) {
      let dt0 = moment(date0).format()
      let dt1 = moment(date1).add(1, 'days').format()
      let req_url = process.env.VUE_APP_API_URL + 'quakes/' + dt0 + '/' + dt1
      console.log(req_url)
      axios.get(req_url).then(response => {
        let parsed_data = _.map(response.data, e => {
          return {
            ...e,
            //mag: e.mag.slice(0,3) NOPE better do this in presentation layer
          }
        })
        context.commit('setEvents', parsed_data)
      })
    }
  }
})
