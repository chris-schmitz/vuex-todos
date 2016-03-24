var Vuex = require('vuex')
var Vue = require('vue')
var ToDos = require('./ToDos/ToDos.vue')

new Vue({
    el: 'body',
    components: {
        todos: ToDos
    }
})