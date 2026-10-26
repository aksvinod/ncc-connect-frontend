import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import OTPVerification from "./pages/OTPVerification";
import ResetPassword from "./pages/ResetPassword";
import MyProfile from "./pages/MyProfile";
import Attendance from "./pages/Attendance";
import Announcements from "./pages/Announcements";
import Events from "./pages/Events";
import GuestDashboard from "./pages/GuestDashboard";
import AboutNCC from "./pages/AboutNCC";
import Achievements from "./pages/Achievements";
import Gallery from "./pages/Gallery";
import WhyJoinNCC from "./pages/WhyJoinNCC";
import Officers from "./pages/Officers";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import OfficerDashboard from "./pages/OfficerDashboard";
import ManageCadets from "./pages/ManageCadets";
import CadetProfile from "./pages/CadetProfile";
import AttendanceAdmin from "./pages/AttendanceAdmin";
import MyAttendance from "./pages/MyAttendance";
import CampRegistration from "./pages/CampRegistration";
import CertificateManagement from "./pages/CertificateManagement";
import SportsRegister from "./pages/SportsRegister";
import SportsDashboard from "./pages/SportsDashboard";
import SportsOffices from "./pages/SportsOffices";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* =========================
                    COMMON LOGIN PAGE
                ========================= */}

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />


                {/* =========================
                    NCC REGISTRATION
                ========================= */}

                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* =========================
                    SPORTS REGISTRATION
                ========================= */}

                <Route
                    path="/sports-register"
                    element={<SportsRegister />}
                />


                {/* =========================
                    NCC OTP
                ========================= */}

                <Route
                    path="/otp-verification"
                    element={<OTPVerification />}
                />


                {/* =========================
                    NCC DASHBOARD
                ========================= */}

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />


                {/* =========================
                    SPORTS DASHBOARD
                ========================= */}

                <Route
                    path="/sports-dashboard"
                    element={<SportsDashboard />}
                />


                {/* =========================
                    FORGOT PASSWORD
                ========================= */}

                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />


                {/* =========================
                    RESET PASSWORD
                ========================= */}

                <Route
                    path="/reset-password"
                    element={<ResetPassword />}
                />


                {/* =========================
                    NCC PROFILE
                ========================= */}

                <Route
                    path="/profile"
                    element={<MyProfile />}
                />


                {/* =========================
                    ATTENDANCE
                ========================= */}

                <Route
                    path="/attendance"
                    element={<Attendance />}
                />


                {/* =========================
                    ANNOUNCEMENTS
                ========================= */}

                <Route
                    path="/announcements"
                    element={<Announcements />}
                />


                {/* =========================
                    EVENTS
                ========================= */}

                <Route
                    path="/events"
                    element={<Events />}
                />


                {/* =========================
                    GUEST DASHBOARD
                ========================= */}

                <Route
                    path="/guest-dashboard"
                    element={<GuestDashboard />}
                />


                {/* =========================
                    ABOUT NCC
                ========================= */}

                <Route
                    path="/about-ncc"
                    element={<AboutNCC />}
                />


                {/* =========================
                    ACHIEVEMENTS
                ========================= */}

                <Route
                    path="/achievements"
                    element={<Achievements />}
                />


                {/* =========================
                    GALLERY
                ========================= */}

                <Route
                    path="/gallery"
                    element={<Gallery />}
                />


                {/* =========================
                    WHY JOIN NCC
                ========================= */}

                <Route
                    path="/why-join"
                    element={<WhyJoinNCC />}
                />


                {/* =========================
                    OFFICERS
                ========================= */}

                <Route
                    path="/officers"
                    element={<Officers />}
                />


                {/* =========================
                    CONTACT
                ========================= */}

                <Route
                    path="/contact"
                    element={<Contact />}
                />


                {/* =========================
                    FAQS
                ========================= */}

                <Route
                    path="/faqs"
                    element={<FAQs />}
                />


                {/* =========================
                    OFFICER DASHBOARD
                ========================= */}

                <Route
                    path="/officer-dashboard"
                    element={<OfficerDashboard />}
                />


                {/* =========================
                    MANAGE CADETS
                ========================= */}

                <Route
                    path="/manage-cadets"
                    element={<ManageCadets />}
                />


                {/* =========================
                    CADET PROFILE
                ========================= */}

                <Route
                    path="/cadet-profile"
                    element={<CadetProfile />}
                />


                {/* =========================
                    ATTENDANCE ADMIN
                ========================= */}

                <Route
                    path="/attendance-admin"
                    element={<AttendanceAdmin />}
                />


                {/* =========================
                    MY ATTENDANCE
                ========================= */}

                <Route
                    path="/my-attendance"
                    element={<MyAttendance />}
                />


                {/* =========================
                    CAMP REGISTRATION
                ========================= */}

                <Route
                    path="/camp-registration"
                    element={<CampRegistration />}
                />


                {/* =========================
                    CERTIFICATE MANAGEMENT
                ========================= */}

                <Route
                    path="/certificate-management"
                    element={<CertificateManagement />}
                />

                <Route
    path="/sports-dashboard"
    element={<SportsDashboard />}
/>
<Route path="/sports-offices" element={<SportsOffices />} />





            </Routes>

        </BrowserRouter>

    );

}

export default App;