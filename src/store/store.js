import 	Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state :
    {
        data : [],
        drawer : false
    },
    getters :
    {
    	data  : state => state.data,
    	drawer: state => state.drawer
    },
    mutations :
    {
    	data(state,val) {
    		state.data = val
    	},
    	drawer(state,boolValue) {
    		state.drawer = boolValue
    	}
    }
})