export default function AssignmentUploadModal({
  uploadOnClick,
  cancelOnClick,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Would you like to add a copy of your assignment for context?</h3>
        <div className="modal-buttons">
          <button onClick={uploadOnClick}>Upload</button>
          <button onClick={cancelOnClick}>Skip</button>
        </div>
      </div>
    </div>
  );
}
