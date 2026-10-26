import Navbar from "../components/Navbar";
import "../styles/ManageCadets.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ManageCadets() {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const cadets = [

        {
            regNo: "AP23SD001",
            name: "Vinod Kumar",
            rank: "Cadet",
            company: "Alpha",
            year: "4th Year"
        },

        {
            regNo: "AP23SD002",
            name: "Rahul",
            rank: "Cadet",
            company: "Bravo",
            year: "3rd Year"
        },

        {
            regNo: "AP23SD003",
            name: "Suresh",
            rank: "Cadet",
            company: "Charlie",
            year: "2nd Year"
        }

    ];

    const filteredCadets = cadets.filter((cadet) =>
        cadet.name.toLowerCase().includes(search.toLowerCase()) ||
        cadet.regNo.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <>
            <Navbar />

            <div className="cadets-container">

                <h1>👥 Manage Cadets</h1>

                <input
                    type="text"
                    placeholder="Search by Name or Regimental Number..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-box"
                />

                <table>

                    <thead>

                        <tr>

                            <th>Regimental No</th>

                            <th>Name</th>

                            <th>Rank</th>

                            <th>Company</th>

                            <th>Year</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredCadets.map((cadet, index) => (

                            <tr key={index}>

                                <td>{cadet.regNo}</td>

                                <td>{cadet.name}</td>

                                <td>{cadet.rank}</td>

                                <td>{cadet.company}</td>

                                <td>{cadet.year}</td>

                                <td>

                                    <button
                                        onClick={() => navigate("/cadet-profile")}
                                    >
                                        👁 View
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default ManageCadets;