import { Component } from "react";
import { Container, StyleNoFeedback, TitleStatics } from "./App.styled";
import { Buttons } from "./components/Buttons/Buttons";
import { Statistics } from "./components/Statistics/Statistics";

class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };
  allButtons = Object.keys(this.state);
  staticData = {};
  handleClick = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  render() {
    const values = Object.values(this.state);

    const countTotalFeedback = values.reduce((acc, value) => {
      return acc + value;
    }, 0);

    const countPositiveFeedbackPercentage =
      (this.state.Good / countTotalFeedback) * 100;

    this.staticData = {
      ...this.state,
      ...{
        total: countTotalFeedback,
        positive: countPositiveFeedbackPercentage,
      },
    };

    return (
      <Container>
        <h1>Please leave feedback</h1>
        <Buttons buttons={this.allButtons} onClick={this.handleClick}></Buttons>
        <TitleStatics>
          Statistics
          {countTotalFeedback !== 0 ? (
            <Statistics
              value={countPositiveFeedbackPercentage}
              total={countTotalFeedback}
              data={this.staticData}
            ></Statistics>
          ) : (
            <StyleNoFeedback>No feedback given</StyleNoFeedback>
          )}
        </TitleStatics>
      </Container>
    );
  }
}

export default App;
