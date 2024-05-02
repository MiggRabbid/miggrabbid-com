const SmallButton = (props) => {
  const {
    className, isDisabled, onClick, icon, text,
  } = props;

  return (
    <div className={className}>
      <button type="button" onClick={onClick} disabled={isDisabled}>
        {icon}
        <p className="hidden">{text}</p>
      </button>
    </div>
  );
};

export default SmallButton;
