import { ActionButton } from './FeedbackOptions.styled';


export function FacebookOptions({onIncrementFeedback}) {
    return (
        <>
            <ActionButton onClick={e => onIncrementFeedback(e)}>Good</ActionButton>
            <ActionButton onClick={e => onIncrementFeedback(e)}>Neutral</ActionButton>
            <ActionButton onClick={e => onIncrementFeedback(e)}>Bad</ActionButton>
        </>
    );
}

