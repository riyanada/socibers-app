import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.pink.lighten1, // #E53935
                secondary: colors.pink.accent1, // #FFCDD2
                accent: colors.pink.darken4, // #3F51B5
            },
        },
    },
})