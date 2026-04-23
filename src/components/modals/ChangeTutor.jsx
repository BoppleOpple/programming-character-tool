export default function ChangeTutorModal({ continueOnClick, cancelOnClick }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Warning</h3>
        <p>Switching tutors will clear your current conversation. Continue?</p>
        <div className="modal-buttons">
          <button onClick={continueOnClick}>Continue</button>

          <button onClick={cancelOnClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
