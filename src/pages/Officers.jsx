import Navbar from "../components/Navbar";
import "../styles/Officers.css";

function Officers() {

    const officers = [

        {
            name: "Captain Ramesh Kumar",
            rank: "Associate NCC Officer (ANO)",
            phone: "+91 9876543210",
            email: "ano@college.edu",
            photo: "/images/officers/officer1.jpg"
        },

        {
            name: "Lt. Vinay Kumar",
            rank: "PI Staff",
            phone: "+91 9876501234",
            email: "pi.staff@college.edu",
            photo: "/images/officers/officer2.jpg"
        }

    ];

    return (

        <>
            <Navbar />

            <div className="officers-container">

                <h1>👨‍✈️ Our Officers</h1>

                <p>Meet the officers who guide and train our NCC cadets.</p>

                <div className="officers-grid">

                    {officers.map((officer, index) => (

                        <div className="officer-card" key={index}>

                            <img
                                src={officer.photo}
                                alt={officer.name}
                            />

                            <h2>{officer.name}</h2>

                            <h4>{officer.rank}</h4>

                            <p>📞 {officer.phone}</p>

                            <p>✉️ {officer.email}</p>

                        </div>

                    ))}

                </div>

            </div>

        </>

    );

}

export default Officers;