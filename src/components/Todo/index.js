import React from 'react';
import Item from './Item';

class Todo extends React.Component {
  state = {
    list: [],
    item: '',
    mundo: 'Estado de noelillo'
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    this.setState({
      list: [...this.state.list,
        {
          text: this.state.item,
          done: false
        }
      ],
      item: ''
    }, () => {
      console.log(this.state.list)
    })
  }

  handleInputChange = (index) => {
    let todoList = this.state.list;
    this.setState( () => {
      todoList[index] = {...todoList[index], done: !todoList[index].done }
      return { list: todoList }
    }, () => { console.log(this.state.list) })
  }

  countUndone = () => {
    return this.state.list.reduce((counter, item) => {
      if (!item.done) return counter + 1
      else return counter
    }, 0)
  }

  render() {
    return (
      <div>
        <h1>Lista de cosas por hacer</h1>
        <h3>tareas por hacer: {this.countUndone()}</h3>
        <form className="todo-form input-group" action="" onSubmit={this.onSubmit}>
          <input
           type="text"
           value={this.state.item}
           onChange={(ev) => { this.setState({ item: ev.target.value }) }}
           className="form-control"
          />
        </form>

        <ul>

          {this.state.list.map((element, index) => {
            return <Item item={element} key={index} index={index} handleInputChange={this.handleInputChange}/>
          })}
        </ul>
      </div>
      )
  }
}

export default Todo;
