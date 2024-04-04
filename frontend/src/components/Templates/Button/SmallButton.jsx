const SmallButton = (props) => {
  const {
    className, onClick, isDisabled, text,
  } = props;

  return (
    <div className={className}>
      <button type="button" onClick={onClick} disabled={isDisabled}>
        {text}
      </button>
    </div>
  );
};

export default SmallButton;
