import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SportsRegister.css";

function SportsRegister() {

    const navigate = useNavigate();


    // ================================
    // FORM DATA
    // ================================

    const [formData, setFormData] = useState({

        fullName: "",

        email: "",

        mobile: "",

        dob: "",

        gender: "",

        sport: "",

        skillLevel: "",

        password: "",

        confirmPassword: "",

        terms: false

    });


    // ================================
    // ERRORS
    // ================================

    const [errors, setErrors] = useState({});


    // ================================
    // PASSWORD VISIBILITY
    // ================================

    const [showPassword, setShowPassword] =
        useState(false);

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);


    // ================================
    // PAGE SCROLL
    // ================================

    useEffect(() => {

        document.body.style.overflow = "hidden";

        return () => {

            document.body.style.overflow = "auto";

        };

    }, []);


    // ================================
    // HANDLE CHANGE
    // ================================

    const handleChange = (e) => {

        const {
            name,
            value,
            type,
            checked
        } = e.target;


        setFormData((previousData) => ({

            ...previousData,

            [name]:
                type === "checkbox"
                    ? checked
                    : value

        }));


        setErrors((previousErrors) => ({

            ...previousErrors,

            [name]: ""

        }));

    };


    // ================================
    // VALIDATION
    // ================================

    const handleSubmit = (e) => {

        e.preventDefault();


        const newErrors = {};


        // FULL NAME

        if (!formData.fullName.trim()) {

            newErrors.fullName =
                "Full name is required.";

        }


        // EMAIL

        if (!formData.email.trim()) {

            newErrors.email =
                "Email address is required.";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email
            )
        ) {

            newErrors.email =
                "Enter a valid email address.";

        }


        // MOBILE

        if (!formData.mobile.trim()) {

            newErrors.mobile =
                "Mobile number is required.";

        } else if (
            !/^[6-9]\d{9}$/.test(
                formData.mobile
            )
        ) {

            newErrors.mobile =
                "Enter a valid 10-digit mobile number.";

        }


        // DOB

        if (!formData.dob) {

            newErrors.dob =
                "Date of birth is required.";

        }


        // GENDER

        if (!formData.gender) {

            newErrors.gender =
                "Gender is required.";

        }


        // SPORT

        if (!formData.sport) {

            newErrors.sport =
                "Please select a sport.";

        }


        // SKILL

        if (!formData.skillLevel) {

            newErrors.skillLevel =
                "Please select your skill level.";

        }


        // PASSWORD

        if (!formData.password) {

            newErrors.password =
                "Password is required.";

        } else if (
            formData.password.length < 6
        ) {

            newErrors.password =
                "Password must contain at least 6 characters.";

        }


        // CONFIRM PASSWORD

        if (!formData.confirmPassword) {

            newErrors.confirmPassword =
                "Please confirm your password.";

        } else if (
            formData.password !==
            formData.confirmPassword
        ) {

            newErrors.confirmPassword =
                "Passwords do not match.";

        }


        // TERMS

        if (!formData.terms) {

            newErrors.terms =
                "You must accept the Terms & Conditions.";

        }


        // SHOW ALL ERRORS

        setErrors(newErrors);


        if (
            Object.keys(newErrors).length > 0
        ) {

            return;

        }


        // TEMPORARY SUCCESS

        const athlete = {
    fullName: formData.fullName,
    email: formData.email,
    mobile: formData.mobile,
    dob: formData.dob,
    gender: formData.gender,
    sport: formData.sport,
    skillLevel: formData.skillLevel,
};

localStorage.setItem("connectx_sports_athlete", JSON.stringify(athlete));

alert("Sports account created successfully!");
navigate("/login");


        // IMPORTANT
        // Go to COMMON LOGIN page

        navigate("/login");

    };


    // ================================
    // JSX
    // ================================

    return (

        <div className="sports-register-page">


            {/* =================================
                LEFT SIDE
            ================================= */}

            <section className="sports-register-left">

                <div className="sports-left-overlay"></div>


                {/* BRAND */}

                <div className="sports-brand">

                    <div className="sports-connect-logo">

                        <span className="sports-logo-symbol">
                            ⚡
                        </span>

                        <span className="sports-logo-text">

                            Connect<span>X</span>

                        </span>

                    </div>


                    <p>
                        AI Powered NCC and Sports Management System
                    </p>

                </div>


                {/* CONTENT */}

                <div className="sports-left-content">


                    <div className="sports-big-icon">
                        🏃
                    </div>


                    <h1>

                        Join the

                        <br />

                        <span>
                            Sports Community
                        </span>

                    </h1>


                    <p>

                        Create your Sports account and connect
                        with athletes, coaches, facilities,
                        events and training opportunities
                        through ConnectX.

                    </p>


                    {/* HIGHLIGHTS */}

                    <div className="sports-highlights">


                        <div className="sports-highlight">

                            <span>
                                🏟️
                            </span>

                            <div>

                                <strong>
                                    Sports Facilities
                                </strong>

                                <small>
                                    Discover available facilities
                                </small>

                            </div>

                        </div>


                        <div className="sports-highlight">

                            <span>
                                🏆
                            </span>

                            <div>

                                <strong>
                                    Events & Competitions
                                </strong>

                                <small>
                                    Participate and compete
                                </small>

                            </div>

                        </div>


                        <div className="sports-highlight">

                            <span>
                                💪
                            </span>

                            <div>

                                <strong>
                                    Training
                                </strong>

                                <small>
                                    Improve your skills
                                </small>

                            </div>

                        </div>


                        <div className="sports-highlight">

                            <span>
                                🤖
                            </span>

                            <div>

                                <strong>
                                    AI Assistant
                                </strong>

                                <small>
                                    Get instant sports guidance
                                </small>

                            </div>

                        </div>


                    </div>

                </div>


                {/* QUOTE */}

                <div className="sports-register-quote">

                    <div className="sports-quote-line"></div>

                    <p>

                        "Champions are made through

                        <br />

                        dedication, discipline and teamwork."

                    </p>

                </div>


            </section>



            {/* =================================
                RIGHT SIDE
            ================================= */}

            <section className="sports-register-right">

                <div className="sports-register-card">


                    {/* HEADER */}

                    <div className="sports-register-header">

                        <div className="sports-mini-icon">
                            🏃
                        </div>


                        <div>

                            <h2>
                                Connect<span>X</span>
                            </h2>

                            <p>
                                Sports Registration
                            </p>

                        </div>

                    </div>


                    <h1>
                        Create Sports Account
                    </h1>


                    <p className="sports-register-subtitle">

                        Register as an athlete or sports user

                    </p>



                    {/* =================================
                        FORM
                    ================================= */}

                    <form
                        onSubmit={handleSubmit}
                        noValidate
                    >


                        {/* FULL NAME */}

                        <div className="sports-input-group">

                            <label>
                                Full Name
                            </label>


                            <div
                                className={
                                    errors.fullName
                                        ? "sports-input-wrapper input-error"
                                        : "sports-input-wrapper"
                                }
                            >

                                <span className="sports-input-icon">
                                    👤
                                </span>


                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />

                            </div>


                            {errors.fullName && (

                                <span className="field-error">

                                    {errors.fullName}

                                </span>

                            )}

                        </div>



                        {/* EMAIL */}

                        <div className="sports-input-group">

                            <label>
                                Email Address
                            </label>


                            <div
                                className={
                                    errors.email
                                        ? "sports-input-wrapper input-error"
                                        : "sports-input-wrapper"
                                }
                            >

                                <span className="sports-input-icon">
                                    ✉
                                </span>


                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />

                            </div>


                            {errors.email && (

                                <span className="field-error">

                                    {errors.email}

                                </span>

                            )}

                        </div>



                        {/* MOBILE */}

                        <div className="sports-input-group">

                            <label>
                                Mobile Number
                            </label>


                            <div
                                className={
                                    errors.mobile
                                        ? "sports-input-wrapper input-error"
                                        : "sports-input-wrapper"
                                }
                            >

                                <span className="sports-input-icon">
                                    📱
                                </span>


                                <input
                                    type="tel"
                                    name="mobile"
                                    placeholder="Enter 10-digit mobile number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    maxLength="10"
                                />

                            </div>


                            {errors.mobile && (

                                <span className="field-error">

                                    {errors.mobile}

                                </span>

                            )}

                        </div>



                        {/* DOB + GENDER */}

                        <div className="sports-two-column">


                            {/* DOB */}

                            <div className="sports-input-group">

                                <label>
                                    Date of Birth
                                </label>


                                <div
                                    className={
                                        errors.dob
                                            ? "sports-input-wrapper input-error"
                                            : "sports-input-wrapper"
                                    }
                                >

                                    <span className="sports-input-icon">
                                        📅
                                    </span>


                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                    />

                                </div>


                                {errors.dob && (

                                    <span className="field-error">

                                        {errors.dob}

                                    </span>

                                )}

                            </div>



                            {/* GENDER */}

                            <div className="sports-input-group">

                                <label>
                                    Gender
                                </label>


                                <div
                                    className={
                                        errors.gender
                                            ? "sports-input-wrapper input-error"
                                            : "sports-input-wrapper"
                                    }
                                >

                                    <span className="sports-input-icon">
                                        ⚥
                                    </span>


                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select Gender
                                        </option>

                                        <option value="Male">
                                            Male
                                        </option>

                                        <option value="Female">
                                            Female
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>

                                    </select>

                                </div>


                                {errors.gender && (

                                    <span className="field-error">

                                        {errors.gender}

                                    </span>

                                )}

                            </div>


                        </div>



                        {/* SPORT + SKILL */}

                        <div className="sports-two-column">


                            {/* SPORT */}

                            <div className="sports-input-group">

                                <label>
                                    Sport / Game
                                </label>


                                <div
                                    className={
                                        errors.sport
                                            ? "sports-input-wrapper input-error"
                                            : "sports-input-wrapper"
                                    }
                                >

                                    <span className="sports-input-icon">
                                        🏅
                                    </span>


                                    <select
                                        name="sport"
                                        value={formData.sport}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select Sport
                                        </option>

                                        <option value="Athletics">
                                            Athletics
                                        </option>

                                        <option value="Cricket">
                                            Cricket
                                        </option>

                                        <option value="Football">
                                            Football
                                        </option>

                                        <option value="Basketball">
                                            Basketball
                                        </option>

                                        <option value="Volleyball">
                                            Volleyball
                                        </option>

                                        <option value="Badminton">
                                            Badminton
                                        </option>

                                        <option value="Table Tennis">
                                            Table Tennis
                                        </option>

                                        <option value="Tennis">
                                            Tennis
                                        </option>

                                        <option value="Kabaddi">
                                            Kabaddi
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>

                                    </select>

                                </div>


                                {errors.sport && (

                                    <span className="field-error">

                                        {errors.sport}

                                    </span>

                                )}

                            </div>



                            {/* SKILL */}

                            <div className="sports-input-group">

                                <label>
                                    Skill Level
                                </label>


                                <div
                                    className={
                                        errors.skillLevel
                                            ? "sports-input-wrapper input-error"
                                            : "sports-input-wrapper"
                                    }
                                >

                                    <span className="sports-input-icon">
                                        ⭐
                                    </span>


                                    <select
                                        name="skillLevel"
                                        value={formData.skillLevel}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select Level
                                        </option>

                                        <option value="Beginner">
                                            Beginner
                                        </option>

                                        <option value="Intermediate">
                                            Intermediate
                                        </option>

                                        <option value="Advanced">
                                            Advanced
                                        </option>

                                        <option value="Professional">
                                            Professional
                                        </option>

                                    </select>

                                </div>


                                {errors.skillLevel && (

                                    <span className="field-error">

                                        {errors.skillLevel}

                                    </span>

                                )}

                            </div>


                        </div>



                        {/* PASSWORD */}

                        <div className="sports-input-group">

                            <label>
                                Password
                            </label>


                            <div
                                className={
                                    errors.password
                                        ? "sports-input-wrapper input-error"
                                        : "sports-input-wrapper"
                                }
                            >

                                <span className="sports-input-icon">
                                    🔒
                                </span>


                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />


                                <button
                                    type="button"
                                    className="sports-password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >

                                    {showPassword
                                        ? "🙈"
                                        : "👁️"
                                    }

                                </button>

                            </div>


                            {errors.password && (

                                <span className="field-error">

                                    {errors.password}

                                </span>

                            )}

                        </div>



                        {/* CONFIRM PASSWORD */}

                        <div className="sports-input-group">

                            <label>
                                Confirm Password
                            </label>


                            <div
                                className={
                                    errors.confirmPassword
                                        ? "sports-input-wrapper input-error"
                                        : "sports-input-wrapper"
                                }
                            >

                                <span className="sports-input-icon">
                                    🔐
                                </span>


                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={
                                        formData.confirmPassword
                                    }
                                    onChange={handleChange}
                                />


                                <button
                                    type="button"
                                    className="sports-password-toggle"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >

                                    {showConfirmPassword
                                        ? "🙈"
                                        : "👁️"
                                    }

                                </button>

                            </div>


                            {errors.confirmPassword && (

                                <span className="field-error">

                                    {errors.confirmPassword}

                                </span>

                            )}

                        </div>



                        {/* TERMS */}

                        <div className="sports-terms-container">

                            <label className="sports-terms">

                                <input
                                    type="checkbox"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                />


                                <span>

                                    I agree to the{" "}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            alert(
                                                "ConnectX Sports Terms & Conditions"
                                            )
                                        }
                                    >

                                        Terms & Conditions

                                    </button>

                                    {" "}and Privacy Policy.

                                </span>

                            </label>


                            {errors.terms && (

                                <span className="field-error terms-error">

                                    {errors.terms}

                                </span>

                            )}

                        </div>



                        {/* REGISTER BUTTON */}

                        <button
                            type="submit"
                            className="sports-register-button"
                        >

                            <span>
                                🏃
                            </span>

                            Create Sports Account

                        </button>


                    </form>



                    {/* =================================
                        LOGIN HERE
                    ================================= */}

                    <div className="sports-login-text">

                        <span>
                            Already have a Sports account?
                        </span>


                        <button
                            type="button"
                            onClick={() =>
                                navigate("/login")
                            }
                        >

                            Login Here

                        </button>

                    </div>


                </div>

            </section>

        </div>

    );

}

export default SportsRegister;