import Navbar from "../components/Navbar";
import "../styles/Attendance.css";

function Attendance() {
  return (
    <>
      <Navbar />

      <div className="attendance-container">

        <h2>📊 Attendance</h2>

        {/* Summary Cards */}

        <div className="attendance-cards">

          <div className="attendance-card">
            <h3>📅</h3>
            <h4>Total Parades</h4>
            <p>45</p>
          </div>

          <div className="attendance-card">
            <h3>✅</h3>
            <h4>Present</h4>
            <p>42</p>
          </div>

          <div className="attendance-card">
            <h3>❌</h3>
            <h4>Absent</h4>
            <p>3</p>
          </div>

          <div className="attendance-card">
            <h3>📈</h3>
            <h4>Attendance %</h4>
            <p>93%</p>
          </div>

        </div>

        {/* Attendance History */}

        <div className="attendance-table">

          <h3>Attendance History</h3>

          <table>

            <thead>

              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>12-Jul-2026</td>
                <td>Regular Parade</td>
                <td className="present">Present</td>
              </tr>

              <tr>
                <td>09-Jul-2026</td>
                <td>Weapon Training</td>
                <td className="present">Present</td>
              </tr>

              <tr>
                <td>06-Jul-2026</td>
                <td>Drill Practice</td>
                <td className="absent">Absent</td>
              </tr>

              <tr>
                <td>02-Jul-2026</td>
                <td>Physical Training</td>
                <td className="present">Present</td>
              </tr>

            </tbody>

          </table>

        </div>

        <button className="download-btn">
          📄 Download Attendance Report
        </button>

      </div>
    </>
  );
}

export default Attendance;