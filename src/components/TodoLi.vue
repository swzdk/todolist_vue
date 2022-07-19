<template>
  <ul class="todo-list">
    <li
      v-for="(item,index) in list"
      :key="item.id"
      :class="{editing:item.id === editedId,completed:item.completed}"
      @dblclick="dblEdit(item.id,index)"
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
          type="text"
          class="edit"
          v-model.trim="item.title"
          :id="+item.id"
          @keyup.enter="editTitle($event,item.id)"
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
  },
  data() {
    return {
      editedId: null
    }
  },
  methods: {
    dblEdit(id, index) {
      this.editedId = id
      this.$nextTick(() => {
        const ipt = document.getElementById(+id)
        ipt.focus()
      })
    },
    editTitle(event, id) {
      this.$store.commit('editTodoTitle', {
        id,
        title: event.target.value
      })
      event.target.value = ''
      this.editedId = null
    }
  }
}
</script>

<style>
</style>