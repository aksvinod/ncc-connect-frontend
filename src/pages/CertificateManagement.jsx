import Navbar from "../components/Navbar";
import "../styles/CertificateManagement.css";
import { useState } from "react";

function CertificateManagement() {
    const [search, setSearch] = useState("");
    const [certificateType, setCertificateType] = useState("B Certificate");
    const [issueDate, setIssueDate] = useState("");
    const [status, setStatus] = useState("Pending");
    const [message, setMessage] = useState("");

    const [cadets, setCadets] = useState([
        {
            id: 1,
            regNo: "AP23SD001",
            name: "Vinod Kumar",
            certificate: "B Certificate",
            issueDate: "",
            status: "Pending"
        },
        {
            id: 2,
            regNo: "AP23SD002",
            name: "Rahul",
            certificate: "B Certificate",
            issueDate: "",
            status: "Pending"
        },
        {
            id: 3,
            regNo: "AP23SD003",
            name: "Suresh",
            certificate: "A Certificate",
            issueDate: "2026-05-20",
            status: "Issued"
        }
    ]);

    const filteredCadets = cadets.filter(
        (cadet) =>
            cadet.name.toLowerCase().includes(search.toLowerCase()) ||
            cadet.regNo.toLowerCase().includes(search.toLowerCase())
    );

    const updateCertificate = (id) => {
        setCadets(
            cadets.map((cadet) =>
                cadet.id === id
                    ? {
                          ...cadet,
                          certificate: certificateType,
                          issueDate: issueDate,
                          status: status
                      }
                    : cadet
            )
        );

        setMessage("✅ Certificate Updated Successfully!");

        setTimeout(() => {
            setMessage("");
        }, 3000);
    };

    return (
        <>
            <Navbar />

            <div className="certificate-container">

                <h1>📜 Certificate Management</h1>

                <p className="certificate-subtitle">
                    Manage NCC A, B and C Certificates
                </p>

                {message && (
                    <div className="success-message">
                        {message}
                    </div>
                )}

                {/* Search */}
                <div className="certificate-search">
                    <input
                        type="text"
                        placeholder="Search by Cadet Name or Regimental Number..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Certificate Table */}
                <div className="certificate-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Regimental No</th>
                                <th>Cadet Name</th>
                                <th>Certificate</th>
                                <th>Issue Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredCadets.map((cadet) => (
                                <tr key={cadet.id}>

                                    <td>{cadet.regNo}</td>

                                    <td>{cadet.name}</td>

                                    <td>
                                        <select
                                            value={certificateType}
                                            onChange={(e) =>
                                                setCertificateType(
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>A Certificate</option>
                                            <option>B Certificate</option>
                                            <option>C Certificate</option>
                                        </select>
                                    </td>

                                    <td>
                                        <input
                                            type="date"
                                            value={issueDate}
                                            onChange={(e) =>
                                                setIssueDate(e.target.value)
                                            }
                                        />
                                    </td>

                                    <td>
                                        <select
                                            value={status}
                                            onChange={(e) =>
                                                setStatus(e.target.value)
                                            }
                                        >
                                            <option>Pending</option>
                                            <option>Issued</option>
                                        </select>
                                    </td>

                                    <td>
                                        <button
                                            className="update-btn"
                                            onClick={() =>
                                                updateCertificate(cadet.id)
                                            }
                                        >
                                            💾 Save
                                        </button>
                                    </td>

                                </tr>
                            ))}

                            {filteredCadets.length === 0 && (
                                <tr>
                                    <td colSpan="6">
                                        No cadets found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default CertificateManagement;