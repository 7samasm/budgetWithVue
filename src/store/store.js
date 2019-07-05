import 	Vue  from 'vue'
import  Vuex from 'vuex'
import  data from './modules/data'
import  add from './modules/add'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        data,
        add
    }
})


// import Vue from 'vue';
// import Vuex from 'vuex';

// import stocks from './modules/stocks';
// import portfolio from './modules/portfolio';

// import * as actions from './actions';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     actions,
//     modules: {
//         stocks,
//         portfolio
//     }
// });