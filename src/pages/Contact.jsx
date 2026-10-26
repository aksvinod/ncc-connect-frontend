import Navbar from "../components/Navbar";
import "../styles/Contact.css";

function Contact() {

    return (

        <>
            <Navbar />

            <div className="contact-container">

                <h1>📞 Contact NCC Unit</h1>

                <div className="contact-card">

                    <h2>🏫 College NCC Unit</h2>

                    <p><strong>College:</strong> XYZ Engineering College</p>

                    <p><strong>Address:</strong> Hyderabad, Telangana, India</p>

                    <p><strong>Phone:</strong> +91 9876543210</p>

                    <p><strong>Email:</strong> ncc@xyzcollege.edu.in</p>

                    <p><strong>Office Timings:</strong> 9:00 AM – 5:00 PM</p>

                </div>

                <div className="contact-card">

                    <h2>📍 Google Maps</h2>

                    <p>Google Map integration will be added in the backend version.</p>

                </div>

            </div>

        </>

    );

}

export default Contact;