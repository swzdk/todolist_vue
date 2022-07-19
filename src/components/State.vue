<template>
  <div id="stats-template">
    <!-- <span class="todo-count"><strong><%= remaining %></strong> <%= remaining === 1 ? 'item' : 'items' %> left</span> -->
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
    <button class="clear-completed">Clear completed</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    ...mapState(['currentState'])
  }
}
</script>

<style>
</style>