function TopBar({ onScheduleClick, onNotificationClick }) {
  return (
    <header className="top-bar">
      <button onClick={onScheduleClick}>Schedule Hub</button>
      <button onClick={onNotificationClick}>Notification</button>
    </header>
  );
}

export default TopBar;