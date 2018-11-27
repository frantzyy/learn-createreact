import React, { Component } from 'react';

class Counter extends Component {
  //option 1 binding this for eventing
  // constructor() {
  //   super();
  //   console.log('Constructor', this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  //
  // handleIncrement() {
  //   console.log('increment clicked!', this);
  // }

  //option 2 binding this for eventing
  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componenWillUnmount');
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-secondary btn-sm btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = 'badge m-s badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
