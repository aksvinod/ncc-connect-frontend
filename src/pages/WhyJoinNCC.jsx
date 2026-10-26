import Navbar from "../components/Navbar";
import "../styles/WhyJoinNCC.css";

function WhyJoinNCC() {

    const benefits = [

        {
            icon: "💪",
            title: "Discipline",
            description: "Develop self-discipline and responsibility in daily life."
        },

        {
            icon: "👨‍💼",
            title: "Leadership",
            description: "Improve leadership qualities and teamwork."
        },

        {
            icon: "🇮🇳",
            title: "Patriotism",
            description: "Serve the nation with pride and responsibility."
        },

        {
            icon: "🏕️",
            title: "National Camps",
            description: "Attend CATC, RDC, NIC, TSC and other national camps."
        },

        {
            icon: "🎯",
            title: "Defence Career",
            description: "Get preference in Army, Navy, Air Force and CAPF recruitments."
        },

        {
            icon: "📜",
            title: "B & C Certificates",
            description: "Earn nationally recognized NCC certificates."
        },

        {
            icon: "🧗",
            title: "Adventure Activities",
            description: "Enjoy trekking, firing, rock climbing and parasailing."
        },

        {
            icon: "🤝",
            title: "Social Service",
            description: "Participate in blood donation, plantation and awareness programmes."
        }

    ];

    return (

        <>
            <Navbar />

            <div className="why-container">

                <h1>🎖 Why Join NCC?</h1>

                <p>
                    NCC helps students become disciplined, confident and responsible citizens.
                </p>

                <div className="why-grid">

                    {benefits.map((item, index) => (

                        <div className="why-card" key={index}>

                            <div className="why-icon">
                                {item.icon}
                            </div>

                            <h2>{item.title}</h2>

                            <p>{item.description}</p>

                        </div>

                    ))}

                </div>

            </div>

        </>

    );

}

export default WhyJoinNCC;