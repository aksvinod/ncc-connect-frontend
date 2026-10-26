import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import API from "../services/ApiService";
import "../styles/OTPVerification.css";

function OTPVerification() {

    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email;

    const [otp, setOtp] = useState("");

    // If user opens page directly
    if (!email) {

        Swal.fire({
            icon: "error",
            title: "Session Expired",
            text: "Please register again."
        });

        navigate("/register");

        return null;
    }

    // ==========================
    // Verify OTP
    // ==========================

    const handleVerifyOtp = async (e) => {

        e.preventDefault();

        if (otp.trim() === "") {

            Swal.fire({
                icon: "warning",
                title: "Enter OTP"
            });

            return;
        }

        try {

            const response = await API.post(
                "/otp/verify",
                {
                    email: email,
                    otp: otp
                }
            );

            Swal.fire({
                icon: "success",
                title: "🇮🇳 JAI HIND, CADET!",
                text: response.data
            }).then(() => {

                navigate("/");

            });

        }

        catch (error) {

            console.error(error);

            Swal.fire({
                icon: "error",
                title: "OTP Verification Failed",
                text:
                    error.response?.data ||
                    "Invalid or Expired OTP"
            });

        }

    };

    // ==========================
    // Resend OTP
    // ==========================

    const handleResendOtp = async () => {

        try {

            const response = await API.post(
                "/otp/send",
                {
                    email: email
                }
            );

            Swal.fire({
                icon: "success",
                title: "OTP Sent",
                text: response.data
            });

        }

        catch (error) {

            console.error(error);

            Swal.fire({
                icon: "error",
                title: "Unable to Resend OTP"
            });

        }

    };

    return (

        <div className="otp-container">

            <div className="otp-card">

                <h2>NCC CONNECT</h2>

                <h4>OTP Verification</h4>

                <p>

                    OTP has been sent to

                    <br />

                    <strong>{email}</strong>

                </p>

                <form onSubmit={handleVerifyOtp}>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter 6 Digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="btn btn-success w-100"
                    >
                        Verify OTP
                    </button>

                </form>

                <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={handleResendOtp}
                >
                    Resend OTP
                </button>

            </div>

        </div>

    );

}

export default OTPVerification;