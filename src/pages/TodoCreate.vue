<template>
    <div>
       <router-link class='home-link' :to="{ name: 'Home' }">
            <h1>Todo list</h1>
       </router-link>
       
        <div class="form">
            <input type="text" v-model="newTask.title" placeholder="..." class="form__header_input">
            {{task}}
            <div class="form__wrapper">
                <div class="form__task">
                    <div 
                        class="form__task_text"
                        v-for="task in newTask.list" 
                        :key="task"
                        >
                        
                        <div class="form__task_left">
                            <input 
                                v-if="task.checked == true"
                                type="checkbox" 
                                checked 
                                @change="task.checked = !task.checked"
                                >
                            <input 
                                v-else
                                type="checkbox"  
                                @change="task.checked = !task.checked"
                                >
                            <input 
                                type="text"
                                v-model="task.text"
                                >
                        </div>
                        <button class="remove" @click="removeTask(task)"><svg xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg></button>
                    </div>
                </div>
                <div class="form__add">
                    <input 
                        type="text" 
                        placeholder="Task..." 
                        class="todo__input" 
                        v-model="inputText"
                        >
                    <button @click="addTask" class="create_button">+</button>
                </div>

                <div class="form__create">
                    <div @click="createTodo">
                        <button class="button">Create</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

// import todoItems from '@/components/todoItems.vue'

export default {
    name: 'TodoCreate',
    
    components: {
        // todoItems
    },
    data() {
        return {
            inputText: 'Помыть утку',
            newTask: {
                id: Number, 
                title: 'Test',
                list: [
                ]
            }
        }
    },
    methods: {
        addTask() {
            if (this.inputText == '') return
            
            this.newTask.list.push({id: new Date().getTime(), text: this.inputText, checked: false})
            this.inputText = ''
        },
        removeTask(task) {
            this.newTask.list = this.newTask.list.filter(el => el.id != task.id)
        },
        createTodo() {
            if (this.newTask.list.length == 0) return
            this.newTask.id = new Date().getTime()

            this.addNewTodo(this.newTask)
            this.setCreateTodo(false)

            this.newTask = {
                id: Number, 
                title: 'Test',
                list: [
                ]
            }
            
            this.$router.push({ name: 'Home' })
        },
        ...mapMutations({
            addNewTodo: 'addNewTodo',
            setCreateTodo: 'setCreateTodo'
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
    max-width: 100%;
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
    width: 100%;
    padding: 20px 0;
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
    width: 95%;
}
.form__task_text input:focus {
    border-bottom: 2px solid rgb(98, 180, 122);
}

.todo__input {
    font-weight: bold;
    width: 86%;
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
    width: 12%;
    height: 35px;
    margin-left: 0px;
    font-weight: bold;
}

.form .create_button:hover {
    opacity: .9;
}

.form__create {
    width: 100%;
    margin-top: 30px;
}

.form__create .button {
    width: 100%;
    font-size: 16px;
    height: 50px;
    margin-bottom: 0;
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