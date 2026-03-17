function BottomNav({
  active,
  onSwipeClick,
  onExploreClick,
  onChatClick,
  onSettingsClick,
}) {
  return (
    <nav className="bottom-nav">
      <button onClick={onSwipeClick} className={active === "swipe" ? "active" : ""}>
        Swipe & Match
      </button>
      <button onClick={onExploreClick} className={active === "explore" ? "active" : ""}>
        Explore
      </button>
      <button onClick={onChatClick} className={active === "chat" ? "active" : ""}>
        Chat
      </button>
      <button onClick={onSettingsClick} className={active === "settings" ? "active" : ""}>
        Settings
      </button>
    </nav>
  );
}

export default BottomNav;