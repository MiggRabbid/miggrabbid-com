const MainButton = (props) => {
  const {
    className, onClick, text, isDisabled,
  } = props;
  return (
    <div className={className}>
      <button type="submit" onClick={onClick} disabled={isDisabled}>
        {text}
      </button>
    </div>
  );
};

export default MainButton;
