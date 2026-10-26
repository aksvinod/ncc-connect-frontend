import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
    const navigate = useNavigate();

    const [type, setType] = useState("sports");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            alert(
                type === "sports"
                    ? "Please enter your registered Sports email."
                    : "Please enter your NCC email or enrollment number."
            );
            return;
        }

        if (!password.trim()) {
            alert("Please enter your password.");
            return;
        }

        /*
         * TEMPORARY LOGIN
         *
         * Later we will connect this with:
         * React → Spring Boot → MySQL
         */

        if (type === "sports") {
            // Sports login
            navigate("/sports-dashboard");
        } else {
            // NCC login
            navigate("/dashboard");
        }
    };

    const handleOTP = () => {
        if (!email.trim()) {
            alert(
                type === "sports"
                    ? "Please enter your registered Sports email."
                    : "Please enter your email or NCC enrollment number."
            );
            return;
        }

        alert("OTP will be sent to your registered email.");
    };

    const handleRegister = () => {
        if (type === "sports") {
            navigate("/sports-register");
        } else {
            navigate("/register");
        }
    };

    return (
        <div className="login-page">

            {/* =====================================================
                LEFT SECTION
            ====================================================== */}

            <section className="login-left">

                <div className="hero-overlay"></div>

                {/* BRAND */}

                <div className="brand-section">

                    <div className="connect-logo">

                        <span className="logo-symbol">
                            ⚡
                        </span>

                        <span className="logo-text">
                            Connect<span>X</span>
                        </span>

                    </div>

                    <p>
                        AI Powered NCC and Sports Management System
                    </p>

                </div>


                {/* HERO CONTENT */}

                <div className="hero-content">

                    <h1>
                        One Platform,
                        <br />
                        Two Forces,
                        <br />
                        <span>Countless Opportunities</span>
                    </h1>

                    <p className="hero-description">
                        ConnectX brings together the spirit of NCC and
                        the energy of Sports — connecting cadets,
                        athletes, officers, administrators and the public
                        in one platform.
                    </p>


                    {/* FEATURES */}

                    <div className="features">

                        <div className="feature">

                            <div className="feature-icon">
                                🎖️
                            </div>

                            <h3>
                                NCC
                            </h3>

                            <p>
                                Discipline
                            </p>

                            <small>
                                Unity | Service
                            </small>

                        </div>


                        <div className="feature">

                            <div className="feature-icon">
                                🏃
                            </div>

                            <h3>
                                Sports
                            </h3>

                            <p>
                                Fitness
                            </p>

                            <small>
                                Excellence | Teamwork
                            </small>

                        </div>


                        <div className="feature">

                            <div className="feature-icon">
                                📅
                            </div>

                            <h3>
                                Events & Camps
                            </h3>

                            <p>
                                Learn | Train
                            </p>

                            <small>
                                Grow
                            </small>

                        </div>


                        <div className="feature">

                            <div className="feature-icon">
                                🏆
                            </div>

                            <h3>
                                Certificates
                            </h3>

                            <p>
                                & Achievements
                            </p>

                            <small>
                                Your Efforts Matter
                            </small>

                        </div>

                    </div>

                </div>


                {/* QUOTE */}

                <div className="hero-quote">

                    <div className="quote-line"></div>

                    <p>
                        “Discipline Builds Character,
                        <br />
                        Sports Builds Strength,
                        <br />
                        Together They Build a Better You.”
                    </p>

                </div>

            </section>


            {/* =====================================================
                RIGHT SECTION
            ====================================================== */}

            <section className="login-right">

                <div className="top-message">
                    Together for a Stronger Tomorrow
                </div>


                {/* LOGIN CARD */}

                <div className="login-card">

                    {/* LOGO */}

                    <div className="login-logo">

                        <div className="mini-logos">

                            <div className="ncc-logo">
                                🎖️
                            </div>

                            <div className="logo-divider"></div>

                            <div className="sports-logo">
                                🏃
                            </div>

                        </div>


                        <h2>
                            Connect<span>X</span>
                        </h2>

                        <p>
                            AI Powered NCC and Sports Management System
                        </p>

                    </div>


                    {/* TITLE */}

                    <h1>
                        Login to Your Account
                    </h1>

                    <p className="login-subtitle">
                        Choose your role and access your services
                    </p>


                    {/* =================================================
                        NCC / SPORTS
                    ================================================== */}

                    <div className="login-selector">

                        {/* NCC */}

                        <button
                            type="button"
                            className={
                                type === "ncc"
                                    ? "selector-card active"
                                    : "selector-card"
                            }
                            onClick={() => {
                                setType("ncc");
                                setEmail("");
                                setPassword("");
                            }}
                        >

                            <span className="selector-icon">
                                🎖️
                            </span>

                            <span className="selector-content">

                                <strong>
                                    NCC
                                </strong>

                                <small>
                                    Login as Cadet / Officer
                                </small>

                            </span>

                        </button>


                        {/* SPORTS */}

                        <button
                            type="button"
                            className={
                                type === "sports"
                                    ? "selector-card active"
                                    : "selector-card"
                            }
                            onClick={() => {
                                setType("sports");
                                setEmail("");
                                setPassword("");
                            }}
                        >

                            <span className="selector-icon">
                                🏃
                            </span>

                            <span className="selector-content">

                                <strong>
                                    Sports
                                </strong>

                                <small>
                                    Login as Athlete / User
                                </small>

                            </span>

                        </button>

                    </div>


                    {/* =================================================
                        FORM
                    ================================================== */}

                    <form onSubmit={handleLogin}>

                        {/* EMAIL */}

                        <div className="input-group">

                            <span className="input-icon">
                                ✉
                            </span>

                            <input
                                type="email"
                                placeholder={
                                    type === "sports"
                                        ? "Sports Registered Email"
                                        : "Email or NCC Enrollment Number"
                                }
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                autoComplete="username"
                            />

                        </div>


                        {/* PASSWORD */}

                        <div className="input-group">

                            <span className="input-icon">
                                🔒
                            </span>

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                autoComplete="current-password"
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword
                                    ? "🙈"
                                    : "👁️"}
                            </button>

                        </div>


                        {/* OPTIONS */}

                        <div className="login-options">

                            <label className="remember-label">

                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={(e) =>
                                        setRemember(e.target.checked)
                                    }
                                />

                                <span>
                                    Remember Me
                                </span>

                            </label>


                            <button
                                type="button"
                                className="forgot-btn"
                                onClick={() =>
                                    navigate("/forgot-password")
                                }
                            >
                                Forgot Password?
                            </button>

                        </div>


                        {/* LOGIN */}

                        <button
                            type="submit"
                            className="login-button"
                        >

                            <span>
                                ↪
                            </span>

                            Login

                        </button>

                    </form>


                    {/* OR */}

                    <div className="or-section">

                        <div></div>

                        <span>
                            OR
                        </span>

                        <div></div>

                    </div>


                    {/* OTP */}

                    <button
                        type="button"
                        className="otp-button"
                        onClick={handleOTP}
                    >

                        <span>
                            ✉
                        </span>

                        Login with OTP

                    </button>


                    {/* REGISTER */}

                    <div className="register-text">

                        <span>
                            Don't have an account?
                        </span>

                        <button
                            type="button"
                            onClick={handleRegister}
                        >
                            Register Here
                        </button>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Login;