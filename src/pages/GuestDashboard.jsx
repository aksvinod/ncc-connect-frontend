import Navbar from "../components/Navbar";
import "../styles/GuestDashboard.css";
import { useNavigate } from "react-router-dom";

function GuestDashboard() {

    const navigate = useNavigate();

    return (

        <>
            <Navbar />

            <div className="guest-container">

                <h1>🇮🇳 Welcome to NCC Connect 🇮🇳</h1>

                <p>
                    Explore National Cadet Corps and discover the opportunities available in our college.
                </p>

                <div className="guest-cards">

                    {/* About NCC */}

                    <div
                        className="guest-card"
                        onClick={() => navigate("/about-ncc")}
                    >
                        📖
                        <h3>About NCC</h3>
                        <p>Know about NCC, its motto and objectives.</p>
                    </div>

                    {/* Achievements */}

                    <div
                        className="guest-card"
                        onClick={() => navigate("/achievements")}
                    >
                        🏆
                        <h3>Achievements</h3>
                        <p>View achievements of our NCC Unit.</p>
                    </div>

                    {/* Gallery */}

                    <div
                        className="guest-card"
                        onClick={() => navigate("/gallery")}
                    >
                        🖼️
                        <h3>Gallery</h3>
                        <p>Explore parade, camps and activity photos.</p>
                    </div>

                    {/* Why Join NCC */}

                    <div
                        className="guest-card"
                        onClick={() => navigate("/why-join")}
                    >
                        🎖️
                        <h3>Why Join NCC?</h3>
                        <p>Benefits of becoming an NCC Cadet.</p>
                    </div>

                    {/* Events */}

                    <div
                        className="guest-card"
                        onClick={() => navigate("/guest-events")}
                    >
                        📅
                        <h3>Upcoming Events</h3>
                        <p>See upcoming NCC activities.</p>
                    </div>

                    {/* Officers */}

                    <div
                        className="guest-card"
                        onClick={() => navigate("/officers")}
                    >
                        👨‍✈️
                        <h3>Our Officers</h3>
                        <p>Meet the ANO and PI Staff.</p>
                    </div>

                    {/* Contact */}

                    <div
                        className="guest-card"
                        onClick={() => navigate("/contact")}
                    >
                        📞
                        <h3>Contact Us</h3>
                        <p>Reach the NCC Office.</p>
                    </div>

                    {/* FAQs */}

                    <div
                        className="guest-card"
                        onClick={() => navigate("/faqs")}
                    >
                        ❓
                        <h3>FAQs</h3>
                        <p>Frequently Asked Questions.</p>
                    </div>

                </div>

            </div>

        </>

    );

}

export default GuestDashboard;