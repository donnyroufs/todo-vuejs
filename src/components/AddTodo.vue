<template>
    <form @submit="createTodo">
        <input 
            type="text" 
            placeholder="add todo..."
            v-model="todoText"
        >    
    </form>
</template>

<script>
import uuid from 'uuid';

export default {
    name: 'AddTodo',
    data: function() {
        return {
            todoText: '',
        }
    },
    methods: {
        createTodo: function(e) {
            e.preventDefault();
            const newTodo = {
                id: uuid.v4(),
                title: this.todoText,
                completed: false,
            }
            this.$emit('add-todo', newTodo);
            this.todoText = '';
        }
    }
}
</script>

<style scoped>

</style>