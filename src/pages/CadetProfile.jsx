import Navbar from "../components/Navbar";
import "../styles/CadetProfile.css";

function CadetProfile() {

    const cadet = {

        photo: "/images/default-ncc.png",

        name: "Vinod Kumar",

        regimentalNo: "AP23SD001",

        rank: "Cadet",

        company: "Alpha Company",

        year: "4th Year",

        mobile: "9876543210",

        email: "vinod@gmail.com",

        bloodGroup: "O+",

        attendance: "94%",

        certificate: "B Certificate",

        achievements: "Best Cadet - CATC",

        emergency: "9876500000"

    };

    return (

        <>
            <Navbar />

            <div className="profile-container">

                <div className="profile-card">

                    <img
                        src={cadet.photo}
                        alt="Cadet"
                    />

                    <h1>{cadet.name}</h1>

                    <h3>{cadet.rank}</h3>

                </div>

                <div className="details-card">

                    <table>

                        <tbody>

                            <tr>
                                <td>Regimental Number</td>
                                <td>{cadet.regimentalNo}</td>
                            </tr>

                            <tr>
                                <td>Company</td>
                                <td>{cadet.company}</td>
                            </tr>

                            <tr>
                                <td>Year</td>
                                <td>{cadet.year}</td>
                            </tr>

                            <tr>
                                <td>Mobile</td>
                                <td>{cadet.mobile}</td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td>{cadet.email}</td>
                            </tr>

                            <tr>
                                <td>Blood Group</td>
                                <td>{cadet.bloodGroup}</td>
                            </tr>

                            <tr>
                                <td>Attendance</td>
                                <td>{cadet.attendance}</td>
                            </tr>

                            <tr>
                                <td>Certificate</td>
                                <td>{cadet.certificate}</td>
                            </tr>

                            <tr>
                                <td>Achievements</td>
                                <td>{cadet.achievements}</td>
                            </tr>

                            <tr>
                                <td>Emergency Contact</td>
                                <td>{cadet.emergency}</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </>

    );

}

export default CadetProfile;