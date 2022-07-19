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
    }
  },
  mutations: {
    addTodoList(state, payload) {
      state.todoList.unshift(payload)
    },
    changeCurrentState(state, payload) {
      state.currentState = payload
    }
  },
  actions: {},
  modules: {}
})
