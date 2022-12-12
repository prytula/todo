import { createStore } from "vuex";

export default createStore ({
    state: () => ({
        todo: JSON.parse(localStorage.getItem('storedData')) || [],
        editTodo: JSON.parse(localStorage.getItem('storedData_editTodo')) || {},
        createTodo: false
    }),
    getters: {
    },
    mutations: {
        addNewTodo(state, newTodo) {
            state.todo.push(newTodo)
            this.commit('updateTodo')
        },
        setCreateTodo(state, createTodo) {
            state.createTodo = createTodo
        },
        setEditTodo(state, editTodo) {
            state.editTodo = editTodo
            this.commit('updateTodo')
            localStorage.setItem('storedData_editTodo', JSON.stringify(state.editTodo))
        },
        removeTask(state, todo) {
            state.todo = state.todo.filter(el => el.id != todo.id)
            this.commit('updateTodo')
        },
        updateTodo(state) {
          localStorage.setItem('storedData', JSON.stringify(state.todo))
        },
        getTodoById: (state, id) => {
            state.editTodo = state.todo.filter( e => e.id == id )
        }
    },
    actions: {
        //  методы
    }
})