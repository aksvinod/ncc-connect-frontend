import Navbar from "../components/Navbar";
import "../styles/Announcements.css";

function Announcements() {

    return (

        <>
            <Navbar />

            <div className="announcement-container">

                <h2>📢 Announcements</h2>

                <div className="announcement-card">

                    <h3>🇮🇳 Independence Day Parade</h3>

                    <p className="date">
                        📅 15-Aug-2026
                    </p>

                    <p>
                        All cadets should report to the college
                        ground before 6:30 AM in complete NCC
                        uniform.
                    </p>

                    <span>
                        Posted By :
                        ANO Officer
                    </span>

                </div>

                <div className="announcement-card">

                    <h3>🏕 CATC Camp Selection</h3>

                    <p className="date">
                        📅 20-Aug-2026
                    </p>

                    <p>
                        Selected cadets should report
                        to the NCC Office with all
                        required documents.
                    </p>

                    <span>
                        Posted By :
                        Senior Under Officer
                    </span>

                </div>

                <div className="announcement-card">

                    <h3>🩸 Blood Donation Camp</h3>

                    <p className="date">
                        📅 25-Aug-2026
                    </p>

                    <p>
                        Blood Donation Camp will be
                        conducted in the College
                        Auditorium.
                    </p>

                    <span>
                        Posted By :
                        NCC Officer
                    </span>

                </div>

            </div>

        </>

    );

}

export default Announcements;