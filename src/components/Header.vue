<template>
    <nav>
        <v-toolbar>
            <v-toolbar-side-icon @click = "openDrawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">

                <router-link 
                    to="/" 
                    tag="button" 
                    class="v-btn v-btn--flat theme--light">Home</router-link>

                <router-link 
                    to="/oclocks" 
                    tag="button" 
                    class="v-btn v-btn--flat theme--light">Oclocks</router-link>                    
            </v-toolbar-items>
        </v-toolbar>
        <drawer></drawer>
    </nav>
</template>
<script>
    import {eventBus} from '../main';
    import drawer  from './Drawer.vue';

    export default {
        data() {
            return {
                title : "Home"
            }
        },
        components: {
            drawer,
        },
        methods:{
            openDrawer()
            {
              eventBus.$emit('openDrawer',true);
            }
        }
    }
</script>