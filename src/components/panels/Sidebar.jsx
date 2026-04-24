import SettingsButton from "../SettingsButton";

export default function SidebarPanel({ setShowSettingsModal }) {
  return <section className="sidebar">
    <SettingsButton setShowSettingsModal={setShowSettingsModal} />
  </section>
}