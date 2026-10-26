import Navbar from "../components/Navbar";
import "../styles/AttendanceAdmin.css";
import { useState } from "react";

function AttendanceAdmin() {

    const [selectedDate, setSelectedDate] = useState("");
    const [company, setCompany] = useState("Alpha Company");

    const [cadets, setCadets] = useState([
        {
            id: 1,
            name: "Vinod Kumar",
            present: false
        },
        {
            id: 2,
            name: "Rahul",
            present: false
        },
        {
            id: 3,
            name: "Suresh",
            present: false
        },
        {
            id: 4,
            name: "Akash",
            present: false
        }
    ]);

    const toggleAttendance = (id) => {

        setCadets(
            cadets.map((cadet) =>
                cadet.id === id
                    ? { ...cadet, present: !cadet.present }
                    : cadet
            )
        );

    };

    const saveAttendance = () => {

        console.log(cadets);

        alert("✅ Attendance Saved Successfully");

    };

    return (

        <>
            <Navbar />

            <div className="attendance-container">

                <h1>✅ Attendance Management</h1>

                <div className="attendance-top">

                    <div>

                        <label>Date</label>

                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />

                    </div>

                    <div>

                        <label>Company</label>

                        <select
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        >

                            <option>Alpha Company</option>

                            <option>Bravo Company</option>

                            <option>Charlie Company</option>

                        </select>

                    </div>

                </div>

                <table>

                    <thead>

                        <tr>

                            <th>Cadet Name</th>

                            <th>Present</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            cadets.map((cadet) => (

                                <tr key={cadet.id}>

                                    <td>{cadet.name}</td>

                                    <td>

                                        <input
                                            type="checkbox"
                                            checked={cadet.present}
                                            onChange={() => toggleAttendance(cadet.id)}
                                        />

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

                <button
                    className="save-btn"
                    onClick={saveAttendance}
                >

                    💾 Save Attendance

                </button>

            </div>

        </>

    );

}

export default AttendanceAdmin;