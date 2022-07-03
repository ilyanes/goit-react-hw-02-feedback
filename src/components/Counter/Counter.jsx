import { Component } from "react";
import { Container } from "../../App.styled";
import { Buttons } from "../Buttons/Buttons";
import Notification from "../Notification/Notification";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  //   allButtons = Object.keys(this.state);
  //   staticData = {};

  handleClick = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentage = Math.floor((good * 100) / totalFeedback);
    return percentage;
  };

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title={"Please leave feedback"}>
          <Buttons
            buttons={["good", "neutral", "bad"]}
            onClick={this.handleClick}
          ></Buttons>
        </Section>

        {total === 0 ? (
          <Notification message={"No feedback given"} />
        ) : (
          <Section title={"Statistics"}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percentage}
            />
          </Section>
        )}
      </Container>
    );
  }
}

export default Counter;
