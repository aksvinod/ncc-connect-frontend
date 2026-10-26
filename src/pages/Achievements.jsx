import Navbar from "../components/Navbar";
import "../styles/Achievements.css";

function Achievements() {

    const achievements = [
        {
            title: "Republic Day Camp (RDC)",
            icon: "🇮🇳",
            description: "Cadets selected for the prestigious Republic Day Camp held in New Delhi."
        },
        {
            title: "Combined Annual Training Camp (CATC)",
            icon: "🏕️",
            description: "Successful participation in annual NCC training camps."
        },
        {
            title: "Blood Donation Camp",
            icon: "🩸",
            description: "Cadets actively participated in voluntary blood donation drives."
        },
        {
            title: "Tree Plantation",
            icon: "🌱",
            description: "Environmental awareness through plantation drives."
        },
        {
            title: "Firing Competition",
            icon: "🎯",
            description: "Cadets won medals in firing competitions."
        },
        {
            title: "Best Cadet Awards",
            icon: "🏆",
            description: "Cadets received Best Cadet awards at various levels."
        }
    ];

    return (
        <>
            <Navbar />

            <div className="achievement-container">

                <h1>🏆 NCC Achievements</h1>

                <div className="achievement-grid">

                    {achievements.map((item, index) => (

                        <div className="achievement-card" key={index}>

                            <div className="achievement-icon">
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

export default Achievements;