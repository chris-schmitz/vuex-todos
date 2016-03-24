<style lang="sass">
    div.task-list {
        border: 1px solid green;
        margin-bottom: 1px;
        padding: 20px;

        span{
            color: red;
        }

        .complete{
            color: grey;
            text-decoration: line-through;
        }
    }
</style>
<template>
    <div class="task-list" v-for="task in tasks">
        <span @click="toggleComplete(task)" :class="{'complete': task.complete}">{{ task.description }}</span>
    </div>
    <adds-task></add-stask>
</template>

<script>
    import store from '../vuex/store.js'

    import addsTask from './AddsTask.vue'

    export default {
        components:{
            addsTask
        },
        computed: {
            tasks: () => { 
                return store.state.tasks
            }
        },
        methods: {
            toggleComplete: (task) => {
                store.dispatch('TOGGLECOMPLETE', task)
            }
        }
    }
</script>