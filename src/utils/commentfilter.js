import Vue from 'vue'
import moment from 'moment'
Vue.filter('datefilter', (data) => {
    return moment(data).format('YYYY-MM-DD')
})