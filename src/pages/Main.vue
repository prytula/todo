<template>
    <div>
        <router-link class="home-link" :to="{ name: 'Home' }">
            <h1>Todo list</h1>
       </router-link>

        <main-item 
            v-for="task in todo" 
            :task="task"
            :key="task"
            @removeTodoList="setRemoveTask"
        >
        </main-item>

        <div class="create">
            <router-link :to="{ name: 'TodoCreate' }" @click="setCreateTodo">
                <button class="button">Create new todo list</button>
            </router-link>
        </div>

        <main-dialog v-if="removeTaskPopup">
            <div class="form">
                <div class="form__wrapper">
                    <div class="form__add">
                        Вы точно хотите удалить таску?
                    </div>
                    <div class="form__create">
                        <button @click="removeTodoList" class="button red">ДА</button>
                        <button @click="removeTaskPopup=false" class="button silver">нет</button>
                    </div>
                    
                </div>
            </div>
        </main-dialog>
    </div>
</template>

<script>

import MainItem from '@/components/MainItem.vue'
import mainDialog from '@/components/MainDialog.vue'
import { mapMutations, mapState } from "vuex";

export default {
    components: {
        MainItem,
        mainDialog
    },
    data() {
        return {
            removeTaskPopup: false,
        }
    },
    methods: {
        removeTodoList() {
            this.removeTaskPopup = false
            let todo = this.removeTodo
            this.removeTask(todo)
        },
        setRemoveTask(todo) {
            this.removeTodo = todo
            this.removeTaskPopup = true
        },
        ...mapMutations ({
            setCreateTodo: 'setCreateTodo',
            removeTask: 'removeTask'
        })
    },
    computed: {
        ...mapState ({
            todo: state => state.todo
        })
    }
}
</script>

<style scoped>

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    background: #fff;
    box-sizing: border-box;
    border-radius: 10px;
}

.form__header_input {
    border: 0;
    font-size: 18px;
    padding: 20px;
    box-sizing: border-box;
    font-weight: bold;
    color: #fff;
    background: rgb(98, 180, 122);
    width: 100%;
    border-radius: 7px 7px 0 0;
    outline: none;
}

.form__header_input:focus {
    text-decoration: underline;
}

.form__header_input::placeholder {
    color: #fff;
}

.form__wrapper {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.form__add {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.form__task {
    width: 100%;
}

.form__task_text {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
}

.form__task_left {
    display: flex;
    justify-content: space-between;
    width: 91%;
}
.form__task_text input {
    border: 0;
    box-sizing: border-box;
    font-size: 16px;
    /* width: 100%; */
    outline: none;
    border-bottom: 2px solid transparent;
    font-weight: bold;
}


.form__task_left input[type='text'] {
    width: 90%;
}
.form__task_text input:focus {
    border-bottom: 2px solid rgb(98, 180, 122);
}

.todo__input {
    font-weight: bold;
    width: 78%;
    text-align: left;
    border: 0;
    font-size: 20px;
    outline: none !important;
    box-sizing: border-box;
    padding: 15px 20px 15px 0;
    border-radius: 0;
    color: #000;
    height: 40px;

    
    border: 0;
    border-bottom: 2px solid rgb(98, 180, 122);
    box-sizing: border-box;
    font-size: 16px;
    outline: none;
    font-weight: bold;
}

.form .create_button {
    border: 3px solid rgb(98, 180, 122);
    background: rgb(98, 180, 122);
    color: #fff;
    font-size: 20px;
    margin-left: 10px;
    border-radius: 15px;
    cursor: pointer;
    width: 20%;
    height: 30px;
    margin-left: 0px;
    font-weight: bold;
}

.form .create_button:hover {
    opacity: .9;
}

.form__add {
    display: flex;
    align-items: center;
    justify-content: center;
}

.form__create {
    width: 100%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form__create .button {
    width: 20%;
    font-size: 16px;
    height: 40px;
    margin-bottom: 0;
    margin-right: 10px;
}

.remove {
    border: 0;
    background: unset;
    cursor: pointer;
    opacity: .6;
}

.remove:hover {
    opacity: 1;
}

.remove svg {
    max-width: 20px;
    max-height: 20px;
}

</style>