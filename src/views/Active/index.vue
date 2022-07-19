<template>
  <TodoLiVue :list="activeList" />
</template>

<script>
import TodoLiVue from '@/components/TodoLi.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    TodoLiVue
  },
  created() {
    this.$store.commit('changeCurrentState', 1)
  },
  computed: {
    ...mapGetters(['activeList'])
  }
}
</script>

<style>
</style>