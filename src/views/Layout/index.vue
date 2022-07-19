<template>
  <div>
    <section class="todoapp">
      <!-- 头部，无数据时只显示头部 -->
      <header class="header">
        <h1>todos</h1>
        <input
          v-model.trim="title"
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
          @keyup.enter="createTd"
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
          v-model="checkedALL"
        >
        <label for="toggle-all">Mark all as complete</label>
        <router-view></router-view>
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
import { setLocal } from '@/utils/storage'
import StateVue from '@/components/State.vue'
import { mapState } from 'vuex'
export default {
  components: {
    StateVue
  },
  data() {
    return {
      title: ''
    }
  },
  computed: {
    ...mapState(['todoList']),
    checkedALL: {
      get() {
        return this.todoList.every((item) => item.completed)
      },
      set(val) {
        this.todoList.forEach((item) => (item.completed = val))
      }
    }
  },
  methods: {
    createTd() {
      this.$store.commit('addTodoList', {
        id: this.todoList.length + 1,
        title: this.title,
        completed: false
      })
      this.title = ''
    }
  },
  watch: {
    todoList: {
      immediate: true,
      deep: true,
      handler(val) {
        setLocal('todoList', val)
      }
    }
  }
}
</script>

<style>
</style>