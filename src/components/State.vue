<template>
  <div id="stats-template">
    <span
      class="todo-count"
      v-if="todoList.length"
    >
      <strong>{{UncompletedCounts}}</strong> {{ UncompletedCounts <= 1 ? 'item' : 'items'}} left
    </span>
    <ul class="filters">
      <li
        v-for="item in state"
        :key="item.id"
      >
        <a
          :class="{selected:item.id===currentState}"
          :href="`#/${item.name}`"
        >{{item.UpFirstName}}</a>
      </li>
    </ul>
    <button
      v-if="todoList.length - UncompletedCounts>0"
      class="clear-completed"
      @click="$store.commit('clearCompleted')"
    >Clear completed</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'stateVue',
  data() {
    return {
      state: [
        {
          id: 0,
          name: 'all',
          UpFirstName: 'All'
        },
        {
          id: 1,
          name: 'active',
          UpFirstName: 'Active'
        },
        {
          id: 2,
          name: 'completed',
          UpFirstName: 'Completed'
        }
      ]
    }
  },
  computed: {
    ...mapState(['currentState', 'todoList']),
    ...mapGetters(['UncompletedCounts'])
  }
}
</script>

<style>
</style>