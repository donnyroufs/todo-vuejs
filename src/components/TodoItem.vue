<template>
    <li>
        <input type="checkbox" name="completed" v-model="completed">
        <span v-bind:class='{completed}'>
            {{ todo.title }}    
        </span>
        <button v-on:click='deleteTodo'>X</button>
    </li>
</template>
<script>
/*eslint-disable*/
export default {
    name: 'TodoItem',
    props: {
        todo: Object,
    },
    data: function() {
        return {
            completed: this.todo.completed,
        }
    },
    methods: {
        deleteTodo() {
            const { id } = this.todo;
            this.$emit('delete-todo', id);
        }
    },
}
</script>

<style scoped>
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        background: #222;
        padding: 1rem;
        margin: .5rem;
    }

    .completed {
        text-decoration: line-through;
    }
</style>