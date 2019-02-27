import React, { Component } from "react";
import '../counterStyles.css';


class Counter extends Component {
  state = {
    count: this.props.counter.value,
    totalPrice: this.props.counter.price
  };


handleIncrement = (product) => {
  this.setState({ count: this.state.count + 1});
  this.setState({totalPrice: this.state.totalPrice + 24});
};

handleDecrement = (product) => {
  if(this.state.count > 0){
    this.setState({ count: this.state.count - 1});
   }
  if(this.state.count > 0){
   this.setState({totalPrice: this.state.totalPrice - 24});
  }
};

  render() {

    return (
      <div id='items'>

      <div id="itemInfo">
        <img id="images" src={this.props.counter.image}/>
        <h4>{this.props.counter.name}</h4>
        <p>In Stock<br />
        Eligible for FREE Shipping<br />
        Gift options not available. Learn more</p>

        <a onClick={() => this.props.onDelete(this.props.counter.id)} id="delete">Delete </a>
      </div>

        <div id="quantity">
          <span style={{ fontSize: 18 }} className={this.getBadgeClasses()}>
            {this.formatCounter()}
          </span>
          <button
          onClick= {(product) => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm m-2">+</button>
          <button
          onClick= {(product) => this.handleDecrement(product)}
          className="btn btn-secondary btn-sm">-</button>
        </div>

      <p id="price">Price: {this.state.totalPrice}</p>

      </div>


    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";

    return classes;
  }

//this is to chage the count label to a number if greater than 0
  formatCounter() {
    const { count } = this.state;
    return count;
  }
}

export default Counter;
