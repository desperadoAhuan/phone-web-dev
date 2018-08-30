import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Table from '@/components/Table'
import List from '@/components/List'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'List',
        component: List
    // }, {
    //     path: '/table',
    //     name: 'Table',
    //     component: Table
    }]
})
