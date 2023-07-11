import './FeedbackForm.css';

const FeedbackForm = ({ addFeedback }) => {
  const data = [
    { id: 1, value: 'good', text: 'Good' },
    { id: 2, value: 'neutral', text: 'Neutral' },
    { id: 3, value: 'bad', text: 'Bad' },
  ];

  const clickHandle = e => {
    const value = e.target.value;
    addFeedback(value);
  };
  return (
    <div className="feedbackBtns">
      {data.map(btn => {
        const { id, value, text } = btn;
        return (
          <button
            key={id}
            className="feedBackBtn"
            value={value}
            onClick={clickHandle}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};
export default FeedbackForm;
