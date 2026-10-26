import Navbar from "../components/Navbar";
import "../styles/MyAttendance.css";

function MyAttendance() {

    const totalParades = 50;
    const present = 47;
    const absent = totalParades - present;
    const percentage = ((present / totalParades) * 100).toFixed(1);

    return (

        <>
            <Navbar />

            <div className="attendance-page">

                <h1>📅 My Attendance</h1>

                <div className="attendance-cards">

                    <div className="attendance-card">
                        <h2>{totalParades}</h2>
                        <p>Total Parades</p>
                    </div>

                    <div className="attendance-card">
                        <h2>{present}</h2>
                        <p>Present</p>
                    </div>

                    <div className="attendance-card">
                        <h2>{absent}</h2>
                        <p>Absent</p>
                    </div>

                    <div className="attendance-card">
                        <h2>{percentage}%</h2>
                        <p>Attendance</p>
                    </div>

                </div>

                <div className="progress-section">

                    <h2>Attendance Progress</h2>

                    <div className="progress-bar">

                        <div
                            className="progress-fill"
                            style={{ width: `${percentage}%` }}
                        ></div>

                    </div>

                    <h3>{percentage}% Completed</h3>

                </div>

                <div className="eligibility">

                    {

                        percentage >= 75 ?

                            <h2 className="eligible">

                                ✅ Eligible for B / C Certificate

                            </h2>

                            :

                            <h2 className="not-eligible">

                                ❌ Not Eligible

                            </h2>

                    }

                </div>

            </div>

        </>

    );

}

export default MyAttendance;