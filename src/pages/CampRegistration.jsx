import Navbar from "../components/Navbar";
import "../styles/CampRegistration.css";
import { useState } from "react";

function CampRegistration() {

    const [registered, setRegistered] = useState({});

    const camps = [

        {
            id: 1,
            name: "CATC Camp",
            location: "Hyderabad",
            date: "20 Aug 2026",
            seats: 120
        },

        {
            id: 2,
            name: "Republic Day Camp",
            location: "New Delhi",
            date: "15 Jan 2027",
            seats: 50
        },

        {
            id: 3,
            name: "Trekking Camp",
            location: "Araku",
            date: "10 Sep 2026",
            seats: 60
        }

    ];

    const registerCamp = (id) => {

        setRegistered({
            ...registered,
            [id]: true
        });

    };

    return (

        <>
            <Navbar />

            <div className="camp-container">

                <h1>🏕 NCC Camp Registration</h1>

                <div className="camp-grid">

                    {

                        camps.map((camp) => (

                            <div
                                key={camp.id}
                                className="camp-card"
                            >

                                <h2>{camp.name}</h2>

                                <p><strong>📍 Location:</strong> {camp.location}</p>

                                <p><strong>📅 Date:</strong> {camp.date}</p>

                                <p><strong>👥 Seats:</strong> {camp.seats}</p>

                                {

                                    registered[camp.id] ?

                                        <button className="registered-btn">

                                            ✅ Registered

                                        </button>

                                        :

                                        <button
                                            onClick={() => registerCamp(camp.id)}
                                        >

                                            Register

                                        </button>

                                }

                            </div>

                        ))

                    }

                </div>

            </div>

        </>

    );

}

export default CampRegistration;