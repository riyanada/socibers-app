<template>
    <v-app-bar dark color="primary">
        <v-app-bar-nav-icon v-if="isHome" @click="setSideBar(!sideBar)"></v-app-bar-nav-icon>
        <v-btn v-if="!isHome" icon @click="$router.go(-1)">
            <v-icon>arrow_back</v-icon>
        </v-btn>

        <v-toolbar-title class="flex text-center">Socibers</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="cart()">
            <v-badge left overlap color="orange" v-if="countCart > 0">
                <span slot="badge" v-if="countCart > 0">{{ countCart }}</span>
                <v-icon>shopping_cart</v-icon>
            </v-badge>
            <v-badge v-else>
                <v-icon>shopping_cart</v-icon>
            </v-badge>
        </v-btn>

        <v-text-field v-if="isHome" @click="search()" slot="extension" hide-details append-icon="mic" text label="Search"
            prepend-inner-icon="search" solo-inverted></v-text-field>
    </v-app-bar>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'c-header',
    methods: {
        ...mapActions({
            setSideBar(value) {
                this.$store.commit('setSideBar', value)
            },
            setStatusDialog: 'dialog/setStatus',
            setComponent: 'dialog/setComponent'
        }),
        search() {
            this.setStatusDialog(true)
            this.setComponent('search')
            this.setSideBar(false)
        },
        cart() {
            this.setStatusDialog(true)
            this.setComponent('cart')
            this.setSideBar(false)
        }
    },
    computed: {
        ...mapGetters({
            sideBar: 'sideBar',
            countCart: 'cart/count'
        }),
        isHome() {
            return (this.$route.path === '/')
        }
    }
}
</script>