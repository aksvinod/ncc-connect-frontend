import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SportsDashboard.css";

function SportsDashboard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Dashboard");

    const [athlete] = useState(() => {
        try {
            const saved = localStorage.getItem("connectx_sports_athlete");
            const data = saved ? JSON.parse(saved) : {};

            return {
                name: data.fullName || "Athlete",
                email: data.email || "Not connected",
                mobile: data.mobile || "Not connected",
                dob: data.dob || "Not provided",
                gender: data.gender || "Not provided",
                sport: data.sport || "Other",
                level: data.skillLevel || "Registered Athlete",
            };
        } catch {
            return {
                name: "Athlete",
                email: "Not connected",
                mobile: "Not connected",
                dob: "Not provided",
                gender: "Not provided",
                sport: "Other",
                level: "Registered Athlete",
            };
        }
    });

    const sportBackgrounds = {
        Athletics: "/images/running.jpg",
        Running: "/images/running.jpg",
        Cricket: "/images/cricket.jpg",
        Football: "/images/football.jpg",
        Basketball: "/images/basketball.jpg",
        Volleyball: "/images/volleyball.jpg",
        Badminton: "/images/badminton.jpg",
        "Table Tennis": "/images/tabletennis.jpg",
        Tennis: "/images/tennis.jpg",
        Kabaddi: "/images/kabaddi.jpg",
        Other: "/images/sports-stadium.jpg",
    };

    const sportBackground =
        sportBackgrounds[athlete.sport] || sportBackgrounds.Other;

    const upcomingEvents = [
        {
            id: 1,
            name: "Inter-College Athletics Meet",
            category: "Athletics",
            date: "Date to be announced",
            venue: "Venue to be announced",
            status: "Upcoming",
        },
        {
            id: 2,
            name: "Inter-College Sports Tournament",
            category: "Team Sports",
            date: "Date to be announced",
            venue: "Venue to be announced",
            status: "Upcoming",
        },
        {
            id: 3,
            name: "College Sports Selection Trials",
            category: "Selection Trials",
            date: "Date to be announced",
            venue: "Venue to be announced",
            status: "Upcoming",
        },
    ];

    // SIDEBAR MENU — Sports Offices & Facilities is included here.
    const menuItems = [
        { name: "Dashboard", icon: "🏠" },
        { name: "Sports Offices & Facilities", icon: "📍" },
        { name: "Sports Events", icon: "🏟️" },
        { name: "My Registrations", icon: "📋" },
        { name: "Attendance", icon: "📅" },
        { name: "Achievements", icon: "🏆" },
        { name: "Training Schedule", icon: "🏃" },
        { name: "Announcements", icon: "🔔" },
    ];

    const backgroundStyle = {
        backgroundImage: `linear-gradient(135deg, rgba(10, 42, 85, 0.88), rgba(10, 42, 85, 0.48)), url("${sportBackground}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    const openSportsOffices = () => {
        navigate("/sports-offices");
    };

    const renderDashboard = () => (
        <>
            <section className="sports-welcome-banner" style={backgroundStyle}>
                <div>
                    <span className="sports-eyebrow">ATHLETE PORTAL</span>
                    <h2>Welcome back, {athlete.name}! 👋</h2>
                    <p>
                        Stay active. Track your progress.
                        Achieve your goals.
                    </p>
                    <p className="sports-welcome-sport">
                        Your Sport: {athlete.sport}
                    </p>
                </div>

                <span className="sports-banner-icon">🏅</span>
            </section>

            <section className="sports-stats-grid">
                <article className="sports-stat-card">
                    <span className="sports-stat-icon blue">🏟️</span>
                    <div>
                        <p>Sports Events</p>
                        <h3>{upcomingEvents.length}</h3>
                        <small>Events to explore</small>
                    </div>
                </article>

                <article className="sports-stat-card">
                    <span className="sports-stat-icon green">📋</span>
                    <div>
                        <p>My Registrations</p>
                        <h3>0</h3>
                        <small>My event registrations</small>
                    </div>
                </article>

                <article className="sports-stat-card">
                    <span className="sports-stat-icon orange">🏆</span>
                    <div>
                        <p>Achievements</p>
                        <h3>0</h3>
                        <small>My achievements</small>
                    </div>
                </article>

                <article className="sports-stat-card">
                    <span className="sports-stat-icon purple">📅</span>
                    <div>
                        <p>Attendance</p>
                        <h3>--</h3>
                        <small>Attendance records</small>
                    </div>
                </article>
            </section>

            <section className="sports-content-card">
                <div className="sports-section-heading">
                    <div>
                        <h2>Upcoming Sports Events</h2>
                        <p>Explore competitions and college trials.</p>
                    </div>

                    <button
                        type="button"
                        className="sports-text-button"
                        onClick={() => setActiveTab("Sports Events")}
                    >
                        View All →
                    </button>
                </div>

                <div className="sports-event-grid">
                    {upcomingEvents.map((event) => (
                        <article className="sports-event-card" key={event.id}>
                            <span className="sports-event-icon">🏅</span>
                            <span className="sports-status">{event.status}</span>
                            <h3>{event.name}</h3>
                            <p>Sport: {event.category}</p>
                            <p>📅 {event.date}</p>
                            <p>📍 {event.venue}</p>

                            <button
                                type="button"
                                className="sports-primary-button"
                                onClick={() => setActiveTab("Sports Events")}
                            >
                                View Event
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            <section className="sports-bottom-card">
                <div>
                    <span>💪</span>
                    <div>
                        <h3>Your next achievement starts today!</h3>
                        <p>
                            Check upcoming events and prepare
                            for your next competition.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className="sports-primary-button"
                    onClick={() => setActiveTab("Sports Events")}
                >
                    Explore Sports
                </button>
            </section>

            {/* SPORTS OFFICES CARD ON DASHBOARD */}
            <section className="sports-content-card">
                <div className="sports-section-heading">
                    <div>
                        <h2>📍 Sports Offices & Facilities</h2>
                        <p>
                            Find sports offices, stadiums, sports grounds
                            and training facilities.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="sports-primary-button"
                        onClick={openSportsOffices}
                    >
                        View Locations →
                    </button>
                </div>
            </section>
        </>
    );

    const renderProfile = () => (
        <section
            className="sports-content-card sports-profile-background"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.94)), url("${sportBackground}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="sports-profile-heading">
                <div className="sports-profile-avatar">🏅</div>
                <h2>{athlete.name}</h2>
                <p>Your registered athlete profile</p>
                <span className="sports-profile-badge">{athlete.level}</span>
            </div>

            <div className="sports-profile-grid">
                <div>
                    <strong>Full Name</strong>
                    <span>{athlete.name}</span>
                </div>

                <div>
                    <strong>Email Address</strong>
                    <span>{athlete.email}</span>
                </div>

                <div>
                    <strong>Mobile Number</strong>
                    <span>{athlete.mobile}</span>
                </div>

                <div>
                    <strong>Sport / Game</strong>
                    <span>{athlete.sport}</span>
                </div>

                <div>
                    <strong>Date of Birth</strong>
                    <span>{athlete.dob}</span>
                </div>

                <div>
                    <strong>Gender</strong>
                    <span>{athlete.gender}</span>
                </div>

                <div>
                    <strong>Skill Level</strong>
                    <span>{athlete.level}</span>
                </div>
            </div>

            <p className="sports-note">
                Your profile details are loaded from the registration
                information saved in this browser.
            </p>
        </section>
    );

    const renderEvents = () => (
        <section className="sports-content-card">
            <div className="sports-section-heading">
                <div>
                    <h2>🏟️ Sports Events</h2>
                    <p>Explore competitions and selection trials.</p>
                </div>
            </div>

            <div className="sports-event-grid">
                {upcomingEvents.map((event) => (
                    <article className="sports-event-card" key={event.id}>
                        <span className="sports-event-icon">🏅</span>
                        <span className="sports-status">{event.status}</span>
                        <h3>{event.name}</h3>
                        <p>Sport: {event.category}</p>
                        <p>📅 {event.date}</p>
                        <p>📍 {event.venue}</p>

                        <button
                            type="button"
                            className="sports-primary-button"
                            onClick={() =>
                                alert(
                                    "Event registration is not connected to the backend yet."
                                )
                            }
                        >
                            Register for Event
                        </button>
                    </article>
                ))}
            </div>

            <p className="sports-note">
                These are sample events. Actual events and registration
                availability will be connected to the backend.
            </p>
        </section>
    );

    const renderSportsOffices = () => (
        <section className="sports-content-card">
            <div className="sports-section-heading">
                <div>
                    <h2>📍 Sports Offices & Facilities</h2>
                    <p>
                        Find sports offices, stadiums, grounds and
                        training facilities.
                    </p>
                </div>
            </div>

            <div className="sports-empty-state">
                <span>🗺️</span>
                <h3>Sports Locations Directory</h3>
                <p>
                    Open the sports locations directory to explore
                    facilities and their map locations.
                </p>

                <button
                    type="button"
                    className="sports-primary-button"
                    onClick={openSportsOffices}
                >
                    Open Sports Locations →
                </button>
            </div>
        </section>
    );

    const renderPlaceholder = (title, icon, description) => (
        <section className="sports-content-card">
            <h2>{icon} {title}</h2>

            <div className="sports-empty-state">
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </section>
    );

    const renderAnnouncements = () => (
        <section className="sports-content-card">
            <h2>🔔 Notifications &amp; Announcements</h2>

            <div className="sports-empty-state">
                <span>🔔</span>
                <h3>No new updates</h3>
                <p>
                    You're all caught up! New sports events,
                    registration updates and announcements
                    will appear here when available.
                </p>
            </div>
        </section>
    );

    const renderContent = () => {
        switch (activeTab) {
            case "Dashboard":
                return renderDashboard();

            case "My Profile":
                return renderProfile();

            case "Sports Offices & Facilities":
                return renderSportsOffices();

            case "Sports Events":
                return renderEvents();

            case "My Registrations":
                return renderPlaceholder(
                    "My Registrations",
                    "📋",
                    "Your event registrations will appear here after backend integration."
                );

            case "Attendance":
                return renderPlaceholder(
                    "Attendance",
                    "📅",
                    "Your practice and competition attendance records will appear here."
                );

            case "Achievements":
                return renderPlaceholder(
                    "Achievements",
                    "🏆",
                    "Your verified medals, competition results and certificates will appear here."
                );

            case "Training Schedule":
                return renderPlaceholder(
                    "Training Schedule",
                    "🏃",
                    "Your coach's training schedule and practice instructions will appear here."
                );

            case "Announcements":
                return renderAnnouncements();

            default:
                return renderDashboard();
        }
    };

    return (
        <div className="sports-dashboard">
            <aside className="sports-sidebar">
                <div className="sports-brand">
                    <span className="sports-brand-icon">⚡</span>

                    <div>
                        <h1>Connect<span>X</span></h1>
                        <p>Sports Portal</p>
                    </div>
                </div>

                <div className="sports-user-card">
                    <div className="sports-avatar">🏅</div>

                    <div className="sports-user-details">
                        <h3>{athlete.name}</h3>
                        <p>{athlete.sport}</p>
                    </div>
                </div>

                <p className="sports-menu-label">MAIN MENU</p>

                <nav className="sports-navigation">
                    {menuItems.map((item) => (
                        <button
                            type="button"
                            key={item.name}
                            className={`sports-menu-item ${
                                activeTab === item.name ? "selected" : ""
                            }`}
                            onClick={() => {
                                if (item.name === "Sports Offices & Facilities") {
                                    openSportsOffices();
                                } else {
                                    setActiveTab(item.name);
                                }
                            }}
                        >
                            <span>{item.icon}</span>
                            {item.name}
                        </button>
                    ))}
                </nav>

                <div className="sports-sidebar-footer">
                    <button
                        type="button"
                        className="sports-menu-item sports-logout"
                        onClick={() => navigate("/login")}
                    >
                        <span>↩️</span>
                        Back to Login
                    </button>

                    <p>ConnectX © 2026</p>
                </div>
            </aside>

            <main className="sports-main">
                <header className="sports-topbar">
                    <div>
                        <h2>{activeTab}</h2>
                        <p>
                            AI-Powered NCC &amp; Sports Management System
                        </p>
                    </div>

                    <div className="sports-topbar-right">
                        <button
                            type="button"
                            className="sports-notification"
                            title="Notifications"
                            aria-label="Open notifications"
                            onClick={() => setActiveTab("Announcements")}
                        >
                            🔔
                        </button>

                        <button
                            type="button"
                            className="sports-topbar-avatar"
                            title="My Profile"
                            aria-label="Open my profile"
                            onClick={() => setActiveTab("My Profile")}
                        >
                            🏅
                        </button>
                    </div>
                </header>

                <div className="sports-main-content">
                    {renderContent()}
                </div>

                <footer className="sports-footer">
                    ConnectX — Discipline, Fitness &amp; Excellence
                </footer>
            </main>
        </div>
    );
}

export default SportsDashboard;