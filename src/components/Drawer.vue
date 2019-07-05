<template>
  <v-layout
    wrap
    style="height: 100%;">

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="../assets/logo.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

<!--           <v-list-tile-action>
            <v-icon @click="drawer = false">highlight_off</v-icon>
          </v-list-tile-action> -->

        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <router-link
          tag="a"
          class="v-list__tile v-list__tile--link theme--light"
          v-for="item in items"
          :to="item.link"
          :key="item.title">

          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="pink">{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </router-link>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
  import {eventBus} from '../main';
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'home', link : '/' },
          { title: 'Oclocks', icon: 'alarm' , link : '/oclocks' }
        ]
      }
    },
    // watch : {
    //   drawer(){
    //     this.$store.commit('drawer',this.drawer)
    //     console.log(this.$store.state.drawer)
    //   }
    // },
    created() {
      eventBus.$on('openDrawer',d => {
        this.drawer = d;  
      });
    }
  }
</script>