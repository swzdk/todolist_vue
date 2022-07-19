<template>
  <ul class="todo-list">
    <li
      v-for="item in list"
      :key="item.id"
      :class={editing:false}
    >
      <div id="item-template">
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            v-model="item.completed"
          >
          <label>{{item.title}}</label>
          <button class="destroy"></button>
        </div>
        <input
          class="edit"
          value=""
        >
      </div>
    </li>
  </ul>

</template>

<script>
export default {
  name: 'TodoLiVue',
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>