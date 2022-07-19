<template>
  <div>
    <section class="todoapp">
      <!-- 头部，无数据时只显示头部 -->
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
        >
      </header>
      <!-- 主体区域 -->
      <section
        class="main"
        v-if="todoList.length"
      >
        <input
          class="toggle-all"
          id="toggle-all"
          type="checkbox"
        >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <router-view></router-view>
        </ul>
      </section>
      <!-- 底部，有数据时显示 -->
      <footer
        v-if="todoList.length"
        class="footer"
      >
        <StateVue />
      </footer>
    </section>
    <!-- 作者信息 -->
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Written by <a href="https://github.com/addyosmani">swzdk</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script>
import StateVue from '@/components/State.vue'
import { mapState } from 'vuex'
export default {
  components: {
    StateVue
  },
  computed: {
    ...mapState(['todoList'])
  }
}
</script>

<style>
</style>