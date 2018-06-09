import React from 'react';

class Todo extends React.Component {
  state = {
    list: [],
    item: '',
    mundo: 'Estado de noelillo'
  };

  onSubmit = (ev) => {
    ev.preventDefault();

    this.setState({
      list: [...this.state.list, this.state.item],
      item: ''
    },
    () => { console.log(this.state.list)},
  )
  }

  render() {
    return (
      <div>
        <h1>Lista de cosas por hacer</h1>
        <form action="" onSubmit={this.onSubmit}>
          <input
           type="text"
           value={this.state.item}
           onChange={(ev) => { this.setState({ item: ev.target.value }) }}
           className="form-control"
          />
        </form>
      </div>
      )
  }
}

export default Todo;
