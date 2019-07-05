<template>
  <v-app>

    <appHeader/>

    <v-content>

      <v-container grid-list-md>
        <router-view></router-view>
      </v-container>
      
    </v-content>

  </v-app>
</template>

<script>
// import {store} from './store/store'
import DataItemsService from './DataItemsService'
import appHeader from './components/Header'

export default {
  name: 'App',
  // store,
  components: {
    appHeader
  },
  async created(){

    let dataItems = []
    
    try {
      dataItems = await DataItemsService.getDataItems()
    } catch(e) {
      console.log(e);
    }
    this.$store.commit('data',dataItems)
    console.log(this.$store.state.data)
  }
}
</script>

<style>
body{
  color: #555;
}
</style>
