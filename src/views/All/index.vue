<template>
  <TodoLiVue :list="allList" />
</template>

<script>
import TodoLiVue from '@/components/TodoLi.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    TodoLiVue
  },
  created() {
    this.$store.commit('changeCurrentState', 0)
  },
  computed: {
    ...mapGetters(['allList'])
  }
}
</script>

<style>
</style>