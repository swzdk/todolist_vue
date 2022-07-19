import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
    currentState: 0
  },
  getters: {
    allList(state) {
      return state.todoList
    },
    activeList(state) {
      return state.todoList.filter((item) => !item.completed)
    },
    completedList(state) {
      return state.todoList.filter((item) => item.completed)
    },
    UncompletedCounts(state) {
      return state.todoList.filter((item) => !item.completed).length
    }
  },
  mutations: {
    addTodoList(state, payload) {
      state.todoList.unshift(payload)
    },
    changeCurrentState(state, payload) {
      state.currentState = payload
    },
    clearCompleted(state) {
      state.todoList = state.todoList.filter((item) => !item.completed)
    },
    editTodoTitle(state, payload) {
      const index = state.todoList.findIndex((item) => item.id === payload.id)
      state.todoList[index].title = payload.title
    }
  },
  actions: {},
  modules: {}
})
