import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

import API from "../services/ApiService";
import "../styles/Register.css";

function Register() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [registerData, setRegisterData] = useState({
        regNo: "",
        name: "",
        email: "",
        mobile: "",
        unit: "",
        wing: "",
        division: "",
        rank: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "unit") {

            if (value === "1(T) GIRLS NCC") {

                setRegisterData({
                    ...registerData,
                    unit: value,
                    wing: "Senior Wing (SW)",
                    division: "SWA"
                });

            } else {

                setRegisterData({
                    ...registerData,
                    unit: value,
                    wing: "",
                    division: ""
                });

            }

        } else {

            setRegisterData({
                ...registerData,
                [name]: value
            });

        }
    };

    const handleRegister = async (e) => {

        e.preventDefault();

        /* ==========================
           REQUIRED FIELD CHECK
        ========================== */

        if (
            registerData.regNo === "" ||
            registerData.name === "" ||
            registerData.email === "" ||
            registerData.mobile === "" ||
            registerData.unit === "" ||
            registerData.wing === "" ||
            registerData.division === "" ||
            registerData.rank === "" ||
            registerData.password === "" ||
            registerData.confirmPassword === ""
        ) {

            Swal.fire({
                icon: "warning",
                title: "All Fields Required",
                text: "Please fill all required fields before registering."
            });

            return;
        }

        /* ==========================
           PASSWORD CHECK
        ========================== */

        if (registerData.password !== registerData.confirmPassword) {

            Swal.fire({
                icon: "error",
                title: "Passwords do not match"
            });

            return;
        }

        try {

            const user = {

                regNo: registerData.regNo,
                name: registerData.name,
                email: registerData.email,
                mobile: registerData.mobile,
                password: registerData.password,

                unit: registerData.unit,
                wing: registerData.wing,
                division: registerData.division,
                rank: registerData.rank
            };

            /* ==========================
               SEND TO BACKEND
            ========================== */

            const response = await API.post(
                "/users/register",
                user
            );

            /* ==========================
               OTP SUCCESS
            ========================== */

            if (response.status === 200) {

                Swal.fire({
                    icon: "success",
                    title: "OTP Sent",
                    text: "An OTP has been sent to your registered email."
                });

                navigate("/otp-verification", {
                    state: {
                        email: registerData.email
                    }
                });

            }

        } catch (error) {

            console.error(error);

            if (error.response) {

                Swal.fire({
                    icon: "error",
                    title: "Registration Failed",
                    text: error.response.data
                });

            } else {

                Swal.fire({
                    icon: "error",
                    title: "Server Error",
                    text: "Unable to connect to server."
                });

            }
        }
    };

    return (

        <div className="register-page">

            {/* =================================
                LEFT SIDE - NCC IMAGE
            ================================= */}

            <section className="register-left">

                <div className="register-left-overlay"></div>

                {/* BRAND */}

                <div className="register-brand">

                    <div className="register-logo">

                        <div className="register-logo-icon">
                            ⚡
                        </div>

                        <div className="register-logo-name">
                            Connect<span>X</span>
                        </div>

                    </div>

                    <p>
                        AI Powered NCC and Sports Management System
                    </p>

                </div>

                {/* CENTER CONTENT */}

                <div className="register-left-content">

                    <div className="ncc-symbol">
                        🎖️
                    </div>

                    <h1>
                        Join the
                        <br />
                        <span>NCC Community</span>
                    </h1>

                    <p>
                        Create your NCC account and connect with
                        cadets, officers, camps, events, training
                        and achievements through ConnectX.
                    </p>

                    <div className="register-feature-grid">

                        <div className="register-feature">

                            <div className="feature-icon">
                                🎖️
                            </div>

                            <div>
                                <h3>NCC Activities</h3>
                                <p>Learn and participate</p>
                            </div>

                        </div>

                        <div className="register-feature">

                            <div className="feature-icon">
                                📅
                            </div>

                            <div>
                                <h3>Events & Camps</h3>
                                <p>Participate and train</p>
                            </div>

                        </div>

                        <div className="register-feature">

                            <div className="feature-icon">
                                🏆
                            </div>

                            <div>
                                <h3>Certificates</h3>
                                <p>Track achievements</p>
                            </div>

                        </div>

                        <div className="register-feature">

                            <div className="feature-icon">
                                🤖
                            </div>

                            <div>
                                <h3>AI Assistant</h3>
                                <p>Get instant guidance</p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* QUOTE */}

                <div className="register-quote">

                    <div className="quote-line"></div>

                    <p>
                        "Unity and Discipline"
                        <br />
                        "Service Before Self"
                    </p>

                </div>

            </section>


            {/* =================================
                RIGHT SIDE - REGISTRATION FORM
            ================================= */}

            <section className="register-right">

                <div className="register-card">

                    {/* HEADER */}

                    <div className="register-form-header">

                        <div className="form-header-icon">
                            🎖️
                        </div>

                        <div>

                            <h2>
                                Connect<span>X</span>
                            </h2>

                            <p>
                                AI Powered Cadet Management System
                            </p>

                        </div>

                    </div>

                    <h1>
                        Create NCC Account
                    </h1>

                    <p className="register-subtitle">
                        Register as an NCC Cadet
                    </p>


                    <form onSubmit={handleRegister}>

                        {/* NCC REGISTRATION NUMBER */}

                        <input
                            type="text"
                            name="regNo"
                            placeholder="NCC Registration Number"
                            className="form-control"
                            value={registerData.regNo}
                            onChange={handleChange}
                        />


                        {/* FULL NAME */}

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="form-control"
                            value={registerData.name}
                            onChange={handleChange}
                        />


                        {/* EMAIL */}

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="form-control"
                            value={registerData.email}
                            onChange={handleChange}
                        />


                        {/* MOBILE */}

                        <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile Number"
                            className="form-control"
                            value={registerData.mobile}
                            onChange={handleChange}
                        />


                        {/* NCC UNIT */}

                        <select
                            className="form-control"
                            name="unit"
                            value={registerData.unit}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select NCC Unit
                            </option>

                            <option value="1(T) ARTY BTY NCC">
                                1(T) ARTY BTY NCC
                            </option>

                            <option value="1(T) GIRLS NCC">
                                1(T) GIRLS NCC
                            </option>

                        </select>


                        {/* =================================
                            ARMY / OTHER UNIT
                        ================================= */}

                        {registerData.unit === "1(T) ARTY BTY NCC" && (

                            <>

                                {/* WING */}

                                <select
                                    className="form-control"
                                    name="wing"
                                    value={registerData.wing}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Wing
                                    </option>

                                    <option value="Army Wing">
                                        🪖 Army Wing
                                    </option>

                                    <option value="Air Wing">
                                        ✈️ Air Wing
                                    </option>

                                    <option value="Naval Wing">
                                        ⚓ Naval Wing
                                    </option>

                                </select>


                                {/* DIVISION */}

                                <select
                                    className="form-control"
                                    name="division"
                                    value={registerData.division}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Division
                                    </option>

                                    <option value="SDA">
                                        Senior Division A (SDA)
                                    </option>

                                    <option value="SDB">
                                        Senior Division B (SDB)
                                    </option>

                                    <option value="SWA">
                                        Senior Wing A (SWA)
                                    </option>

                                    <option value="SWB">
                                        Senior Wing B (SWB)
                                    </option>

                                </select>


                                {/* RANK */}

                                <select
                                    className="form-control"
                                    name="rank"
                                    value={registerData.rank}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Rank
                                    </option>

                                    <option value="Cadet">
                                        Cadet
                                    </option>

                                    <option value="Lance Corporal">
                                        Lance Corporal (LCPL)
                                    </option>

                                    <option value="Corporal">
                                        Corporal (CPL)
                                    </option>

                                    <option value="Sergeant">
                                        Sergeant (SGT)
                                    </option>

                                    <option value="Junior Under Officer">
                                        Junior Under Officer (JUO)
                                    </option>

                                    <option value="Senior Under Officer">
                                        Senior Under Officer (SUO)
                                    </option>

                                </select>

                            </>
                        )}


                        {/* =================================
                            GIRLS NCC
                        ================================= */}

                        {registerData.unit === "1(T) GIRLS NCC" && (

                            <>

                                <input
                                    type="text"
                                    className="form-control"
                                    value="Senior Wing (SW)"
                                    readOnly
                                />

                                <input
                                    type="text"
                                    className="form-control"
                                    value="Senior Wing A (SWA)"
                                    readOnly
                                />

                                <select
                                    className="form-control"
                                    name="rank"
                                    value={registerData.rank}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Rank
                                    </option>

                                    <option value="Cadet">
                                        Cadet
                                    </option>

                                    <option value="Lance Corporal">
                                        Lance Corporal (LCPL)
                                    </option>

                                    <option value="Corporal">
                                        Corporal (CPL)
                                    </option>

                                    <option value="Sergeant">
                                        Sergeant (SGT)
                                    </option>

                                    <option value="Junior Under Officer">
                                        Junior Under Officer (JUO)
                                    </option>

                                    <option value="Senior Under Officer">
                                        Senior Under Officer (SUO)
                                    </option>

                                </select>

                            </>
                        )}


                        {/* PASSWORD */}

                        <div className="password-box">

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                value={registerData.password}
                                onChange={handleChange}
                            />

                            <span
                                className="password-toggle"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword
                                    ? <FaEyeSlash />
                                    : <FaEye />
                                }
                            </span>

                        </div>


                        {/* CONFIRM PASSWORD */}

                        <div className="password-box">

                            <input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="form-control"
                                value={registerData.confirmPassword}
                                onChange={handleChange}
                            />

                            <span
                                className="password-toggle"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                            >
                                {showConfirmPassword
                                    ? <FaEyeSlash />
                                    : <FaEye />
                                }
                            </span>

                        </div>


                        {/* REGISTER */}

                        <button
                            type="submit"
                            className="btn-success"
                        >
                            🎖️ Register
                        </button>

                    </form>


                    {/* LOGIN */}

                    <div className="login-link">

                        <span>
                            Already have an account?
                        </span>

                        <Link to="/">
                            Login Here
                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Register;