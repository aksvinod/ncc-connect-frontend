import Navbar from "../components/Navbar";
import "./../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    return (

        <>
            <Navbar />

            <div className="dashboard-container">

                {/* My Profile */}
                <div
                    className="dashboard-card"
                    onClick={() => navigate("/profile")}
                >
                    <span>👤</span>
                    <h3>My Profile</h3>
                    <p>View your NCC profile</p>
                </div>

                {/* Announcements */}
                <div
                    className="dashboard-card"
                    onClick={() => navigate("/announcements")}
                >
                    <span>📢</span>
                    <h3>Announcements</h3>
                    <p>Latest NCC updates</p>
                </div>

                {/* Events */}
                <div
                    className="dashboard-card"
                    onClick={() => navigate("/events")}
                >
                    <span>📅</span>
                    <h3>Events</h3>
                    <p>Upcoming NCC events</p>
                </div>

                {/* Attendance */}
                <div
                    className="dashboard-card"
                    onClick={() => navigate("/my-attendance")}
                >
                    <span>📊</span>
                    <h3>My Attendance</h3>
                    <p>View attendance record</p>
                </div>

                {/* Camp Registration */}
                <div
                    className="dashboard-card"
                    onClick={() => navigate("/camp-registration")}
                >
                    <span>🏕️</span>
                    <h3>Camp Registration</h3>
                    <p>Register for NCC camps</p>
                </div>

                {/* Certificates */}
                <div
                    className="dashboard-card"
                    onClick={() => navigate("/certificates")}
                >
                    <span>📜</span>
                    <h3>Certificates</h3>
                    <p>View A, B & C Certificates</p>
                </div>

                {/* Achievements */}
                <div
                    className="dashboard-card"
                    onClick={() => navigate("/achievements")}
                >
                    <span>🏆</span>
                    <h3>Achievements</h3>
                    <p>Your achievements</p>
                </div>

                {/* Gallery */}
                <div
                    className="dashboard-card"
                    onClick={() => navigate("/gallery")}
                >
                    <span>🖼️</span>
                    <h3>Gallery</h3>
                    <p>View NCC activity photos</p>
                </div>

            </div>

        </>

    );

}

export default Dashboard;