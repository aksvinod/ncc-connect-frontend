import "./../styles/Dashboard.css";

function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar-left">
        <h2>🇮🇳 JAI HIND CADET</h2>
        <p>Welcome to NCC CONNECT - AI Powered NCC Management System</p>
      </div>

      <div className="navbar-right">

        <button className="nav-btn">
          🔔 Notifications
        </button>

        <button className="nav-btn">
          👤 My Profile
        </button>

        <button className="logout-btn">
          🚪 Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;