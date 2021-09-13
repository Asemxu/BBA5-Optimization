export const ErrorMessage = ({ text }) => {
  return (
    <div className="message message__error">
      <i className="fas fa-exclamation-triangle"></i>
      <p>{text}</p>
    </div>
  );
};
