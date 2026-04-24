import gearSVG from "../assets/gear.svg";

export default function SettingsButton({ setShowSettingsModal }) {
  return (
    <button
      className="settings-button"
      onClick={() => setShowSettingsModal(true)}
      aria-label="Open settings"
    >
      <img className="settings-button-icon" src={gearSVG} title="Settings"></img>
    </button>
  );
}
