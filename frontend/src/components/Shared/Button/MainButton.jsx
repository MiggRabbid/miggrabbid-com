const MainButton = (props) => {
  const {
    className, onClick, isDisabled, text,
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
