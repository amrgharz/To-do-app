import React, {Component} from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component{

  state = {
    todos:
    [
      {id:1, content:"learn react" },
      {id:2, content:"play call of duty"}
    ]
  }
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id;
    })
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) =>{
    todo.id = Math.random()
    const adtodo = [...this.state.todos, todo]
    this.setState({
      todos: adtodo
    })
  }
  render(){

    return(
      <div className="todos container">
        <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos}  deleteTodo ={this.deleteTodo}/> 
          <AddTodo  addTodo ={this.addTodo}/>
      </div>
    )
  }
}

export default App;