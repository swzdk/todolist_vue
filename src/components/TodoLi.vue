<template>
  <li>
    <div id="item-template">
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          checked
        >
        <label>我是标题</label>
        <button class="destroy"></button>
      </div>
      <input
        class="edit"
        value="<%- title %>"
      >
    </div>
  </li>
</template>

<script>
export default {
  name: 'TodoLiVue'
}
</script>

<style>
</style>