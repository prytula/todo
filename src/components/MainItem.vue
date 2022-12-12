<template>
    <div class="task">
        <div class="task__text" >
            <div class="task__header">
                <div class="task__title">
                    {{task.title}}
                </div>
            
                <div class="task__btns">
                    <router-link :to="'/todo-edit/'+task.id" @click="setEditTodo(task)">
                        <button class="edit">
                            <svg xmlns="http://www.w3.org/2000/svg" height="503pt" viewBox="0 0 503 503.12533" width="503pt"><path d="m16.050781 503.125c-4.179687 0-8.277343-1.640625-11.304687-4.691406-3.96875-3.96875-5.570313-9.730469-4.203125-15.167969l30.035156-120.554687c.703125-2.816407 2.15625-5.398438 4.203125-7.445313l338.113281-338.113281c22.867188-22.871094 60.09375-22.871094 82.964844 0l30.164063 30.164062c22.871093 22.871094 22.871093 60.097656 0 82.964844l-338.109376 338.113281c-2.050781 2.046875-4.632812 3.519531-7.445312 4.203125l-120.554688 30.035156c-1.28125.34375-2.5625.492188-3.863281.492188zm44.480469-128.382812-22.527344 90.410156 90.410156-22.527344 334.996094-334.976562c10.390625-10.390626 10.390625-27.328126 0-37.71875l-30.164062-30.164063c-10.410156-10.410156-27.351563-10.390625-37.71875 0zm76.074219 82.347656h.214843zm0 0"/><path d="m422.6875 187.007812c-4.097656 0-8.195312-1.558593-11.308594-4.691406l-90.515625-90.496094c-6.253906-6.253906-6.253906-16.386718 0-22.636718 6.25-6.25 16.382813-6.25 22.632813 0l90.519531 90.519531c6.25 6.25 6.25 16.382813 0 22.632813-3.160156 3.113281-7.253906 4.671874-11.328125 4.671874zm0 0"/><path d="m136.605469 473.089844c-4.097657 0-8.191407-1.558594-11.304688-4.695313l-90.519531-90.515625c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.636719 0l90.515625 90.519531c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.136719-7.230469 4.695313-11.328125 4.695313zm0 0"/></svg>
                        </button>
                    </router-link>
                    
                    <button class="remove" 
                        @click="$emit('removeTodoList', task)"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
                    </button>
                </div>
            </div>
            <div
                class="task__todo"
                v-for="(item) in getTaskArray"
                :key="item.id"
                >
                <div v-if="item.checked" class="checked">
                    {{item.text}}
                </div>
                <div v-else>
                    {{item.text}}
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props: {
        task: [Object]
    },
    methods: {
        ...mapMutations({
            setEditTodo: 'setEditTodo'
        })
    },
    computed: {
        getTaskArray() {
            return this.task.list.filter((elem, index) => index < 3)
        }
    }
}
</script>

<style scoped>
.task {
    border: 2px solid rgb(98, 180, 122);
    border-radius: 10px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding-bottom: 15px;
}

.task__text {
    font-weight: bold;
    width: 100%;
    text-align: left;
    border: 0;
    outline: none !important;
    border-bottom: 1px solid transparent;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.task__text:focus {
    border-bottom: 1px solid #000;
}

.task__header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    padding: 15px 20px 15px 20px;
    background: rgb(98, 180, 122);
    color: #fff;
    box-sizing: border-box;
    border-radius: 7px 7px 0 0;
}

.task__todo {
    font-size: 16px;
    padding-left: 20px;
    padding-top: 15px;
}

.task__todo label {
    cursor: pointer;
    display: flex;
    align-items: center;
}

.task__todo input {
    font-size: 30px;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    width: 17px;
    height: 17px;
    margin-right: 10px;
}

.task__btns {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.remove svg , .edit svg {
    max-width: 20px;
    max-height: 20px;
}

.checked {
    text-decoration: line-through;
}

button {
    background: unset;
    border: unset;
    outline: unset;
    cursor: pointer;
}

button img {
    width: 20px;
}
</style>