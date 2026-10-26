import Navbar from "../components/Navbar";
import "../styles/Gallery.css";

function Gallery() {

    const images = [

        { id: 1, title: "Independence Day Parade", image: "/images/gallery/independence1.jpg" },

        { id: 2, title: "Republic Day Parade", image: "/images/gallery/republic1.jpg" },

        { id: 3, title: "CATC Camp", image: "/images/gallery/camp1.jpg" },

        { id: 4, title: "Tree Plantation", image: "/images/gallery/plantation1.jpg" },

        { id: 5, title: "Blood Donation Camp", image: "/images/gallery/blood1.jpg" },

        { id: 6, title: "Firing Practice", image: "/images/gallery/firing1.jpg" },

        { id: 7, title: "Sports Competition", image: "/images/gallery/sports1.jpg" },

        { id: 8, title: "Cultural Activities", image: "/images/gallery/cultural1.jpg" }

    ];

    return (

        <>
            <Navbar />

            <div className="gallery-container">

                <h1>📸 NCC Gallery</h1>

                <p>
                    Explore memorable moments of our NCC Unit.
                </p>

                <div className="gallery-grid">

                    {images.map((item) => (

                        <div className="gallery-card" key={item.id}>

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                            <h3>{item.title}</h3>

                        </div>

                    ))}

                </div>

            </div>

        </>

    );

}

export default Gallery;