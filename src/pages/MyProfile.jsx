import Navbar from "../components/Navbar";
import "../styles/MyProfile.css";

function MyProfile() {
  return (
    <>
      <Navbar />

      <div className="profile-container">

        <div className="profile-card">

          <h2>👤 MY PROFILE</h2>

          <div className="profile-image">

            <img
              src="/images/default-ncc.png"
              alt="Cadet"
            />

            <button className="photo-btn">
              Change Photo
            </button>

          </div>

          <div className="profile-details">

            <div className="profile-row">
              <strong>Name</strong>
              <span>Golla Vinod Kumar</span>
            </div>

            <div className="profile-row">
              <strong>Regimental No</strong>
              <span>TG/23/SDA/176194</span>
            </div>

            <div className="profile-row">
              <strong>Rank</strong>
              <span>Sergeant</span>
            </div>

            <div className="profile-row">
              <strong>Wing</strong>
              <span>Army Wing</span>
            </div>

            <div className="profile-row">
              <strong>Unit</strong>
              <span>1(T) ARTY BTY NCC</span>
            </div>

            <div className="profile-row">
              <strong>Division</strong>
              <span>SDA</span>
            </div>

            <div className="profile-row">
              <strong>Email</strong>
              <span>vinod@gmail.com</span>
            </div>

            <div className="profile-row">
              <strong>Mobile</strong>
              <span>6302314992</span>
            </div>

            <div className="profile-row">
              <strong>Status</strong>
              <span className="verified">✅ Verified</span>
            </div>

          </div>

          <div className="profile-buttons">

            <button>Edit Email</button>

            <button>Edit Mobile</button>

            <button>Change Password</button>

          </div>

        </div>

      </div>
    </>
  );
}

export default MyProfile;