export default function TutorSelectionModal({ lionOnClick, pandaOnClick }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Please select an AI tutor!</h3>
        <div className="modal-buttons">
          <button className="lion" onClick={lionOnClick}>
            Strict, teacher-like
          </button>
          <button className="panda" onClick={pandaOnClick}>
            Friendly, peer like
          </button>
        </div>
      </div>
    </div>
  );
}
