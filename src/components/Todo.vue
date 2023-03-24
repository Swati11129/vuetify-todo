<template>
<v-container>
    <div class="yourTasks">
        <span>Your tasks: {{ complete }}/ {{ total }} </span>
    </div>
    <div style="display: flex;">
        <v-text-field class="textfield" v-model.trim="newTodoTitle" outlined label="Get groceries" clearabfa-pull-left  @keyup.enter="addTodo">
        </v-text-field>
        <v-btn @click="addTodo" color="#F5F1FF" purple--text class="pa-0 mx-3 my-1 x-small addbtn" v-bind:disabled="!newTodoTitle" >Add
        </v-btn>
    </div>

    <v-list flat>
        <div v-for="todo in todos" :key="todo.id" class="box ">
          <v-list-item v-on:click="doneTodo(todo.id)">
                <template v-slot:default>
                    <v-list-item-action>
                        <v-checkbox v-bind:input-value="todo.done"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title :class="{'text-decoration-line-through' : todo.done }">
                            {{todo.title}}
                        </v-list-item-title>
                    </v-list-item-content>
                </template>
            </v-list-item>
            <v-btn pa-1 my-10px color="error" class="mx-2 " @click.stop="deleteTodo(todo.id)">
                REMOVE
            </v-btn>
        </div>
    </v-list>

</v-container>
</template>

<script>

export default {
    name: 'Todo',
    data() {
        return {
            newTodoTitle: '',
            todos: [ ],
        }
    },
    computed: {
        complete() {

            let len = this.todos.length
            function todocallback(todo){
               
               
                 return todo.done!=true
              }

              const completedTodos=this.todos.filter(todocallback).length
              // console.log(completedTodos,"no of strike through")
              len=len-completedTodos;
               


              return len;

            // function  callbackfnc(element,index,array ){

            // }
            // let functionvariable=()=>{

            // }
            // let callbackfnc=()=>{

            // }
            // let strike= this.todos.filter(callbackfnc)
        },
        total() {
          console.log("consoled check")
            return this.todos.length
        },
      },
      methods: {

        addTodo() {
          let newTodo = {
            id: Date.now(),
            title: this.newTodoTitle,
            done: false
            
          }
          if(this.newTodoTitle){
            this.todos.push(newTodo)
          }
          
            this.newTodoTitle = ''
        },
        doneTodo(id) {
            let todo = this.todos.filter(todo => todo.id === id)[0]
            todo.done = !todo.done
            
               function todocallbackchecked(todo){
                     return todo.done==true
                   }

                   const arrchecked=this.todos.filter(todocallbackchecked)
                    function todocallbackunchecked(todo){
                        return todo.done!=true
                     }

                   const arrunchecked=this.todos.filter(todocallbackunchecked)

                   let combined=[...arrchecked,...arrunchecked]
                   this.todos=combined

            // let todos=[
            //   {
            //     id: 1,
            //     title: "shampoo",
            //     done: false
            //   },
            //   {
            //     id: 2,
            //     title: "apple",
            //     done: false
            //   },
            //   {
            //     id: 3,
            //     title: "juice",
            //     done: false
            //   }]

            // return value of filter an array
            // [ {
            //     id: 1,
            //     title: "shampoo",
            //     done: false
            //   },
          // ]

              // return value of find only a single element not an array
              //  {
              //   id: 1,
              //  title: "shampoo",
              //  done: false
              //  }

        },
        
      
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },

    }

}
</script>

<style scoped>
.container {
    margin-right: auto;
    margin-left: 20%;
}

.box {
    width: 70%;
    height: 50pxpx;

    display: flex;
    background-color: #DEC9FF;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;
}

.v-input {
    max-width: 65%;
}

.textfield {
    font-size: large;
    margin-bottom: 10px;
}

.addbtn {
    min-height: 45px;
    font-size: large;
    color: purple;
    min-width: 47px;
    padding: 0px 0px;
    text-transform: none;

}

.v-btn:not(.v-btn--round).v-size--default {
    height: 36px;
    min-width: 48px;
}

.yourTasks {
    font-weight: 550;

    font-family: monospace;
    margin-bottom: 10px;
    font-size: xx-large
}
</style>
