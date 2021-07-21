import { useState } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FacebookOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";

function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const incrementFeedback = ({ target }) => {
    const button = target.textContent;
    switch (button) {
      case "Good":
        setGoodFeedback((prevState) => (prevState += 1));
        break;
      case "Neutral":
        setNeutralFeedback((prevState) => (prevState += 1));
        break;
      case "Bad":
        setBadFeedback((prevState) => (prevState += 1));
        break;
      default:
        break;
    }
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const resultPercent = parseInt((good / (good + neutral + bad)) * 100);
    const resultFeedbacks = isNaN(resultPercent) ? 0 : resultPercent;
    return resultFeedbacks;
  };

  const statistics =
    goodFeedback + neutralFeedback + badFeedback !== 0 ? true : false;

  return (
    <div className="App">
      <Section title={"Please leave feedback"}>
        <FacebookOptions onIncrementFeedback={incrementFeedback} />
      </Section>
      <Section title={"Statistics"}>
        {statistics ? (
          <Statistics
            feedBackState={[goodFeedback, neutralFeedback, badFeedback]}
            positiveFeedbackPerc={countPositiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <div>No feedback given</div>
        )}
      </Section>
    </div>
  );
}

export default App;
