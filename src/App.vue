<style type="text/css">
#app {
    font-family: "Open Sauce One", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.v-toolbar {
    flex: 0 !important;
}

.v-application .py-3 {
    text-align: center !important;
}

.v-card__text {
    text-align: center !important;
}
</style>
<template>
    <v-app>
        <c-header>

        </c-header>

        <c-side-bar>

        </c-side-bar>

        <v-main>
            <v-expand-transition>
                <router-view></router-view>
            </v-expand-transition>
        </v-main>

        <c-footer>

        </c-footer>

        <c-alert></c-alert>

        <keep-alive>
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialogbottom-transition">
                <component :is="currentComponent"></component>
            </v-dialog>
        </keep-alive>

    </v-app>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import CHeader from '@/components/CHeader.vue'
import CFooter from '@/components/CFooter.vue'
import CSideBar from '@/components/CSideBar.vue'
import CAlert from '@/components/CAlert.vue'
import Search from '@/views/Search.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Cart from '@/views/Cart.vue'

export default {
    name: 'App',
    components: {
        CHeader,
        CFooter,
        CSideBar,
        CAlert,
        Search,
        Login,
        Register,
        Cart
    },
    methods: {
        ...mapActions({
            setStatusDialog: 'dialog/setStatus'
        })
    },
    computed: {
        ...mapGetters({
            statusDialog: 'dialog/status',
            currentComponent: 'dialog/component'
        }),
        dialog: {
            get() {
                return this.statusDialog
            },
            set(value) {
                this.setStatusDialog(value)
            }
        }
    }
}
</script>