import {StatList, StatListItem} from './Statistics.style'

export function Statistics({ feedBackState, positiveFeedbackPerc }) {
    const [ goodFeedback, neutralFeedback, badFeedback ] =  feedBackState;
    return (
        <StatList>
            <StatListItem>Good: {goodFeedback}</StatListItem>
            <StatListItem>Neutral: {neutralFeedback}</StatListItem>
            <StatListItem>Bad: {badFeedback}</StatListItem>
            <StatListItem>Total: {goodFeedback + neutralFeedback + badFeedback}</StatListItem>
            <StatListItem>Positive feedbacks: {positiveFeedbackPerc(goodFeedback, neutralFeedback, badFeedback)}%</StatListItem>
        </StatList>
    );
}



