import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'
import _ from 'underscore'

const API_ENDPOINT = 'http://127.0.0.1:8000/ingvapi/'


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
    getEvents (context, {dt0, dt1}) {
      axios.get(API_ENDPOINT + 'quakes/' + dt0 + '/' + dt1).then(response => {
        let parsed_data = _.map(response.data, e => {
          return {
            ...e,
            mag: e.mag.slice(0,3)
          }
        })
        context.commit('setEvents', parsed_data)
      })
    }
  }
})
