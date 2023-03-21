<template>
<div>

    <v-list
      flat
      
    >
    <div v-for="todo in todos" :key="todo.id" class="box ">

      <v-list-item
      v-on:click="doneTodo(todo.id)"
      >
        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox :input-value="todo.done"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title :class="{'text-decoration-line-through' : todo.done}"> 
              {{todo.title}}
            </v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </div>
  </v-list>
  </div>
</template>

 <script>

export default {
    name: 'Todo',
    data(){
      return{
        todos:[
          {
            id:1,
            title:'heading',
            done:true
          },
          {
            id:2,
            title:'monday',
            done:false,
          },
          {
            id:3,
            title:'tues',
            done:false,
          },
        ]
      }
    },
    methods:{
      doneTodo(id){
      let todo= this.todos.filter(todo => todo.id===id)[0]
        todo.done= !todo.done
        console.warn(todo.done)
      }
    }
    
  }

</script>
<style>
.box{
  width: 234px;
  height: 34px;
  margin: 3px 3px;
  display: flex;
  background-color: #DEC9FF;
  align-items: center;
}
</style>