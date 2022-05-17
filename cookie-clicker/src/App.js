import React, { Component } from "react";
import "./App.css";
import CookieClicker from "./components/CookieClicker";
import ClickerItem from "./components/ClickerItem";
import SecondItem from "./components/SecondItem";
import RestartButton from "./components/RestartButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 0,
      amount: {
        toClick: 1,
        toSecond: 0
      }
    };
  }

  componentWillMount() {
    let initialState = JSON.parse(localStorage.getItem("cookie"));
    if (initialState) {
      // load the initial state from localStorage
      this.setState({
        currency: initialState.currency,
        amount: {
          toClick: initialState.amount.toClick,
          toSecond: initialState.amount.toSecond
        }
      });
    }
    this.getCurrency();
    this.saveCurrentState();
  }

  incrementCurrency = () => {
    this.setState({
      currency: this.state.currency + this.state.amount.toClick
    });
  };

  subtractCurrency = price => {
    if (this.state.currency >= price) {
      this.setState({
        currency: this.state.currency - price
      });
      return true;
    }
    return false;
  };

  incrementAmountToClick = (price, addAmount) => {
    if (this.subtractCurrency(price)) {
      this.setState({
        amount: {
          ...this.state.amount,
          toClick: this.state.amount.toClick + addAmount
        }
      });
    }
  };

  incrementAmountToSecond = (price, addAmount) => {
    if (this.subtractCurrency(price)) {
      this.setState({
        amount: {
          ...this.state.amount,
          toSecond: this.state.amount.toSecond + addAmount
        }
      });
    }
  };

  getCurrency = () => {
    setInterval(() => {
      if (this.state.amount.toSecond > 0) {
        this.setState({
          currency: this.state.currency + this.state.amount.toSecond / 5
        });
      }
    }, 200);
  };

  saveCurrentState = () => {
    setInterval(() => {
      localStorage.setItem("cookie", JSON.stringify(this.state));
    }, 3000);
  };

  restartState = () => {
    this.setState({
      currency: 0,
      amount: {
        toClick: 1,
        toSecond: 0
      }
    });
    localStorage.removeItem("cookie");
  };

  render() {
    return (
      <main className="App">
        <div className="header">
          <div className="currency">
            {"You have "}
            <span id="cookie-count">{Math.round(this.state.currency)}</span>
            {" cookies"}
            <br/>
            <span id="cookies-per-second">{this.state.amount.toSecond}</span> cookies per second
            <br/>
            <span id="cookies-per-click">{this.state.amount.toClick}</span> cookies per click
          </div>
          <CookieClicker
            incrementCurrency={this.incrementCurrency}
          />
          <RestartButton
            restartState={this.restartState}
          />
        </div>
        <div className="store">
          <div className="menu">
            <div className="menu-header">
              Multipliers
            </div>
            <div className="menu-items">
            <ClickerItem
              amount="5"
              incrementAmount={() => this.incrementAmountToClick(5, 3)}
            />
            <ClickerItem
              amount="25"
              incrementAmount={() => this.incrementAmountToClick(25, 15)}
            />
            <ClickerItem
              amount="100"
              incrementAmount={() => this.incrementAmountToClick(100, 60)}
            />
            </div>
          </div>
          <div className="menu">
            <div className="menu-header">
              Autoclickers
            </div>
            <div className="menu-items">
            <SecondItem
              amount="500"
              incrementAmount={() => this.incrementAmountToSecond(500, 5)}
            />
            <SecondItem
              amount="10000"
              incrementAmount={() => this.incrementAmountToSecond(10000, 100)}
            />
            <SecondItem
              amount="100000"
              incrementAmount={() => this.incrementAmountToSecond(100000, 1000)}
            />
            </div>
          </div>
        </div>
       <div className="waveWrapper waveAnimation">
         <div className="waveWrapperInner bgTop">
           <div className="wave waveTop"></div>
         </div>
         <div className="waveWrapperInner bgMiddle">
           <div className="wave waveMiddle"></div>
         </div>
         <div className="waveWrapperInner bgBottom">
           <div className="wave waveBottom"></div>
         </div>
       </div>
      </main>
    );
  }
}

export default App;
