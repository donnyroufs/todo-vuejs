<template>
    <div>
        <AddTodo v-on:add-todo='addTodoItem' />
        <ul>
            <TodoItem 
                v-for="todo in todos" 
                v-bind:key='todo.id' 
                v-bind:todo='todo'
                v-on:delete-todo='deleteTodo'
            />
        </ul>  
    </div>    
</template>


<script>
import request from '../utils/request';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export default {
    name: 'Todos',
    components: {
        TodoItem,
        AddTodo,
    },
    data: function() {
        return {
            todos: [
                { id: 1, title: 'My first todo!', completed: true },
                { id: 2, title: 'My second todo!', completed: false },
            ]
        }
    },
    methods: {
        addTodoItem: function(newTodo) {
            this.todos = [...this.todos, newTodo];
        },
        deleteTodo: function(eventId) {
            this.todos = this.todos.filter(({id}) => id !== eventId);
        }
    },
    created: async function() {
        const req = new Request('https://jsonplaceholder.typicode.com/todos?_limit=5');
        this.todos = await request(req);
    }
}
</script>

<style scoped>
    ul {
        width: 500px;
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>