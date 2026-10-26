import Navbar from "../components/Navbar";
import "../styles/OfficerDashboard.css";
import { useNavigate } from "react-router-dom";

function OfficerDashboard() {

    const navigate = useNavigate();

    return (

        <>
            <Navbar />

            <div className="officer-dashboard">

                <h1>👨‍✈️ Officer Dashboard</h1>

                <p>Welcome Officer! Manage all NCC activities from one place.</p>

                <div className="officer-grid">

                    {/* Manage Cadets */}
                    <div
                        className="officer-card"
                        onClick={() => navigate("/manage-cadets")}
                    >
                        👥
                        <h3>Cadets</h3>
                        <p>View and manage cadets</p>
                    </div>

                    {/* Announcements */}
                    <div
                        className="officer-card"
                        onClick={() => navigate("/announcements")}
                    >
                        📢
                        <h3>Announcements</h3>
                        <p>Post announcements</p>
                    </div>

                    {/* Events */}
                    <div
                        className="officer-card"
                        onClick={() => navigate("/events-admin")}
                    >
                        📅
                        <h3>Events</h3>
                        <p>Manage events</p>
                    </div>

                    {/* Gallery */}
                    <div
                        className="officer-card"
                        onClick={() => navigate("/gallery-admin")}
                    >
                        🖼️
                        <h3>Gallery</h3>
                        <p>Upload activity photos</p>
                    </div>

                    {/* Attendance */}
                    <div
                        className="officer-card"
                        onClick={() => navigate("/attendance-admin")}
                    >
                        ✅
                        <h3>Attendance</h3>
                        <p>Mark cadet attendance</p>
                    </div>

                    {/* Camp Management */}
                    <div
                        className="officer-card"
                        onClick={() => navigate("/camp-management")}
                    >
                        🏕️
                        <h3>Camps</h3>
                        <p>Manage NCC camps</p>
                    </div>

                    {/* Certificates */}
                    <div
                        className="officer-card"
                        onClick={() => navigate("/certificate-management")}
                    >
                        📜
                        <h3>Certificates</h3>
                        <p>Issue B & C Certificates</p>
                    </div>

                    {/* Reports */}
                    <div
                        className="officer-card"
                        onClick={() => navigate("/reports")}
                    >
                        📊
                        <h3>Reports</h3>
                        <p>View attendance & event reports</p>
                    </div>

                </div>

            </div>

        </>

    );

}

export default OfficerDashboard;