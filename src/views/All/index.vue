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
  computed: {
    ...mapGetters(['allList'])
  }
}
</script>

<style>
</style>