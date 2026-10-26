import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Calendar from "react-calendar";
import Modal from "react-modal";

import "react-calendar/dist/Calendar.css";
import "../styles/Events.css";

Modal.setAppElement("#root");

function Events() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [modalOpen, setModalOpen] = useState(false);

    const [eventName, setEventName] = useState("");
    const [venue, setVenue] = useState("");
    const [time, setTime] = useState("");
    const [dressCode, setDressCode] = useState("");
    const [description, setDescription] = useState("");

    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {

    if (modalOpen) {

        document.body.style.overflow = "hidden";

    } else {

        document.body.style.overflow = "auto";

    }

    return () => {

        document.body.style.overflow = "auto";

    };

}, [modalOpen]);

    const saveEvent = () => {

        console.log({

            date: selectedDate,
            eventName,
            venue,
            time,
            dressCode,
            description

        });

        setSuccessMessage("✅ Event Added Successfully!");

        setTimeout(() => {

            setModalOpen(false);

            setSuccessMessage("");

            setEventName("");
            setVenue("");
            setTime("");
            setDressCode("");
            setDescription("");

        }, 3000);

    };

    return (

        <>
            <Navbar />

            <div className="events-container">

                <h1>📅 NCC Event Calendar</h1>

                <Calendar

                    value={selectedDate}

                    onClickDay={(date) => {

                        setSelectedDate(date);
                        setModalOpen(true);
                        setSuccessMessage("");

                    }}

                />

                <div className="selected-date">

                    <h2>Selected Date</h2>

                    <p>

                        {selectedDate.toLocaleDateString("en-GB", {

                            day: "2-digit",
                            month: "long",
                            year: "numeric"

                        })}

                    </p>

                </div>

            </div>

            <Modal

                isOpen={modalOpen}

                onRequestClose={() => setModalOpen(false)}

                className="event-modal"

                overlayClassName="event-overlay"

            >

                <h2>📅 Add Event</h2>

                <p>

                    <strong>Date :</strong>{" "}

                    {selectedDate.toLocaleDateString("en-GB", {

                        day: "2-digit",
                        month: "long",
                        year: "numeric"

                    })}

                </p>

                <input

                    type="text"

                    placeholder="Event Name"

                    value={eventName}

                    onChange={(e) => setEventName(e.target.value)}

                />

                <input

                    type="text"

                    placeholder="Venue"

                    value={venue}

                    onChange={(e) => setVenue(e.target.value)}

                />

                <input

                    type="time"

                    value={time}

                    onChange={(e) => setTime(e.target.value)}

                />

                <input

                    type="text"

                    placeholder="Dress Code"

                    value={dressCode}

                    onChange={(e) => setDressCode(e.target.value)}

                />

                <textarea

                    rows="5"

                    placeholder="Description"

                    value={description}

                    onChange={(e) => setDescription(e.target.value)}

                />

                {successMessage && (

                    <p className="success-message">

                        {successMessage}

                    </p>

                )}

                <button onClick={saveEvent}>

                    💾 Save Event

                </button>

            </Modal>

        </>

    );

}

export default Events;