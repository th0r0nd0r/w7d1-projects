import React from 'react';



class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    // what are the props in this scenario?
    this.props.createTodo( todo ).then(
      () => this.setState({ title: '', body: '' })
    );
    // this.setState({
    //   title: "",
    //   body: ""
    // });
  }

  render() {
    // what are refs and what do they do?
    return (
      <form onSubmit={this.handleSubmit}>
        Title&#58;<br />
        <input

          type="text"
          value={this.state.title}
          onChange={this.update('title')}
          required
        />
        <br />
        Body&#58;<br />
        <input
          type="text"
          value={this.state.body}
          onChange={this.update('body')}
        />
        <br />
        <input
          type="radio"
          name={this.state.done}
          value="true"
          onChange={this.update('done')}
          />Done
        <input
          type="radio"
          name={this.state.done}
          value="false"
          checked
          onChange={this.update('done')}
          />Not Done
        <br />
        <br />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default TodoForm;
