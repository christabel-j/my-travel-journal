export default function Entry({ location }) {
  return (
    <main>
      <div className="entry">
        <img
          src={location.img.src}
          alt={location.img.alt}
          className="location-img col"
        ></img>
        <div className="col location-info">
          <div className="marker-and-place">
            <img
              src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png"
              alt="marker image"
              className="marker"
            ></img>
            <div>
              {location.country}
              <span className="location-link">
                <a href={location.googleMapsLink} target="_blank">
                  View on Google Maps
                </a>
              </span>
            </div>
          </div>
          <h2>{location.title}</h2>
          <h4>{location.dates}</h4>
          <p>{location.text}</p>
        </div>
      </div>
    </main>
  );
}
