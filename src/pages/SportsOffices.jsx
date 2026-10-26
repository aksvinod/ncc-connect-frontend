
import { useState } from "react";
import "../styles/SportsOffices.css";

const sportsOffices = [
  {
    id: 1,
    name: "Sports Authority of Telangana",
    category: "Sports Office",
    location: "Hyderabad, Telangana",
    sport: "All Sports",
    searchLocation: "Sports Authority of Telangana, Hyderabad",
  },
  {
    id: 2,
    name: "Gachibowli Stadium",
    category: "Sports Stadium",
    location: "Gachibowli, Hyderabad",
    sport: "Athletics",
    searchLocation: "Gachibowli Stadium, Hyderabad",
  },
  {
    id: 3,
    name: "Lal Bahadur Shastri Stadium",
    category: "Sports Stadium",
    location: "Fateh Maidan, Hyderabad",
    sport: "Athletics, Cricket",
    searchLocation: "Lal Bahadur Shastri Stadium, Hyderabad",
  },
  {
    id: 4,
    name: "Rajiv Gandhi International Cricket Stadium",
    category: "Cricket Stadium",
    location: "Uppal, Hyderabad",
    sport: "Cricket",
    searchLocation: "Rajiv Gandhi International Cricket Stadium, Uppal, Hyderabad",
  },
];

export default function SportsOffices() {
  const [search, setSearch] = useState("");
  const [selectedSport, setSelectedSport] = useState("All");

  const openMap = (location) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const filteredOffices = sportsOffices.filter((office) => {
    const matchesSearch = `${office.name} ${office.location} ${office.category} ${office.sport}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSport =
      selectedSport === "All" ||
      office.sport.toLowerCase().includes(selectedSport.toLowerCase());

    return matchesSearch && matchesSport;
  });

  return (
    <div className="sports-offices-page">
      <header className="offices-header">
        <div>
          <p className="offices-eyebrow">CONNECTX DIRECTORY</p>
          <h1>Sports Offices & Facilities</h1>
          <p>
            Discover sports offices, stadiums and sporting facilities.
            Open a location in Google Maps to check the route.
          </p>
        </div>
      </header>

      <section className="offices-search-section">
        <input
          type="text"
          placeholder="Search office, stadium or location..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search sports offices and facilities"
        />

        <select
          value={selectedSport}
          onChange={(event) => setSelectedSport(event.target.value)}
          aria-label="Filter by sport"
        >
          <option value="All">All Sports</option>
          <option value="Athletics">Athletics</option>
          <option value="Cricket">Cricket</option>
        </select>
      </section>

      <div className="offices-results-heading">
        <h2>Available Locations</h2>
        <span>{filteredOffices.length} locations</span>
      </div>

      {filteredOffices.length > 0 ? (
        <section className="offices-grid">
          {filteredOffices.map((office) => (
            <article className="office-card" key={office.id}>
              <div className="office-card-icon">🏟️</div>

              <div className="office-card-content">
                <span className="office-category">{office.category}</span>
                <h3>{office.name}</h3>

                <p className="office-location">
                  📍 {office.location}
                </p>

                <p className="office-sport">
                  <strong>Sports:</strong> {office.sport}
                </p>

                <button
                  className="office-map-button"
                  onClick={() => openMap(office.searchLocation)}
                  type="button"
                >
                  📍 View Location on Map ↗
                </button>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <div className="offices-empty">
          <h3>No locations found</h3>
          <p>Try another office name, location or sport.</p>
        </div>
      )}

      <p className="offices-note">
        Note: Locations open in Google Maps. Please verify the exact address
        and availability before visiting.
      </p>
    </div>
  );
}
