<template>
  <TodoLiVue :list="completedList" />
</template>

<script>
import TodoLiVue from '@/components/TodoLi.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    TodoLiVue
  },
  created() {
    this.$store.commit('changeCurrentState', 2)
  },
  computed: {
    ...mapGetters(['completedList'])
  }
}
</script>

<style>
</style>