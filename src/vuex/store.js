import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    tasks: [
        {description: 'feed the dogs', complete: false},
        {description: 'walk with the baby', complete: false}
    ]
}

const mutations = {
    TOGGLECOMPLETE: (state, task) => {
        task.complete = !task.complete
    },
    ADDTASK: (state, task) => {
        let newTask = { description: task, complete: false}
        state.tasks.push(newTask)
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

module.exports = store