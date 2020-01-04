import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Todos from './Todos'
import AddTodo from './AddTodo'
import Navbar from './routs/Navbar'
import Home from './routs/Home.js'
import About from './routs/About'
import Contact from './routs/Contact'
import Post from './routs/Post'
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
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/:post_id" component={Post}/>
          </Switch>     
        </BrowserRouter>
        <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos}  deleteTodo ={this.deleteTodo}/> 
          <AddTodo  addTodo ={this.addTodo}/>
      </div>
    )
  }
}

export default App;