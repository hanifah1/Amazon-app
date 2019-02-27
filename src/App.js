import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters";
import banner from "./banner1.jpg"
import item1 from "./react_item1.jpg"
import item2 from "./react_item2.jpg"
import item3 from "./react_item3.jpg"
import item4 from "./react_item4.jpg"
import item5 from "./react_item5.jpg"
import card from "./amazonCard.png"
import './app.css';

class App extends Component {
  state = {
    counters: [
      { id:1, value:1, price:24, name: 'AMERICAN PLANT EXCHANGE Lady Palm Rhapis Excelsa Indoor/Outdoor Live Plant 1 Gallon Clean Air of Toxins', image: item1},
      { id:2, value:1, price:24, name: 'AMERICAN PLANT EXCHANGE Green Sansevieria Trifasciata Zeylanica Live Plant 6" 1 Gallon Top Air Purifier!', image: item2},
      { id:3, value:1, price:24, name: 'Paper Mate Flair Felt Tip Pens, Medium Point (0.7mm), Black, 12 Count (Packaging may vary)', image: item3},
      { id:4, value:1, price:24, name: 'Starbucks Breakfast Blend Medium Roast Ground Coffee, 20-Ounce Bag', image: item4},
      { id:5, value:1, price:24, name: 'Kidz-Med VeraTemp 5-in-1 Non-Contact Thermometer #11900 With Pacifier Medicine Dispenser', image: item5}
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };


  render() {
    return (
      <React.Fragment>
        <img className='img-responsive' style={{ width: 1678 }} src={banner}/>

        <NavBar totalCounters= {this.state.counters.length}/>


        <div id="cart" className="col-md-6">
          <div id="cardOfferBanner" >
          <img className='img-responsive' src={card}/>
            <p>Get a $50 Amazon.com Gift Card instantly upon approval for the
            Amazon Rewards Visa Card</p>
          </div>


          <h2> Shopping Cart</h2>

          <div className="cartLabel">
            <p>Price <span className="cartLabel2">Quantity</span></p>
          </div>

          <main >
            <Counters
              counters={this.state.counters}
              onDelete={this.handleDelete}
            />
          </main>
        </div>

        <div id="rightPanel" className="col-md-6">
        <div id="underPanel">
        </div>
          <div id="totalBox">
            Part of your order qualifies for FREE Shipping. Choose this option at checkout. See details
          </div>
          <div id="totalBox2">
            Subtotal (5 items):
          <button type="button">Proceed to checkout</button>
          <p> or </p>
          </div>
        </div>


      </React.Fragment>
    );
  }
}

export default App;
