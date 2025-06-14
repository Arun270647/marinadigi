// The data type for each location
type LocationDataType = {
  location: string;
  address: string;
  phone: string;
  mapLink: string;
};

// An array of all your location data, now with only the first item
const locations: LocationDataType[] = [
  {
    location: "Ayanavaram, Chennai",
    address: "No 38/68a Palayakara Street",
    phone: "+91 97899 03547",
    mapLink: "https://www.google.com/maps/search/?api=1&query=No+38/68a+Palayakara+Street,Ayanavaram,Chennai",
  },
];

// A component to display a single location box
const LocationBox = ({
  location,
  address,
  phone,
  mapLink,
}: LocationDataType) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="location-boxes">
        <div className="img1">
          <img src="/assets/img/icons/location3.svg" alt="Location Icon" />
        </div>
        <div className="space32"></div>
        <a href={mapLink} target="_blank" rel="noopener noreferrer">
          {location} <br className="d-lg-block d-none" /> {address}
        </a>
        <div className="space24"></div>
        <p>Phone Number</p>
        <a href={`tel:${phone}`}>{phone}</a>
        <div className="space32"></div>
      </div>
    </div>
  );
};

// The main section component that displays all locations
const LocationSection = () => {
  return (
    <div className="location-section-area sp2 bg2">
      <div className="container">
        {/* The location header has been removed as requested */}
        <div className="space60 d-lg-block d-none"></div>
        <div className="space30 d-lg-none d-block"></div>
        <div className="row justify-content-center">
          {/* We map over the locations array and render a LocationBox for each one */}
          {locations.map((loc) => (
            <LocationBox
              key={loc.location}
              location={loc.location}
              address={loc.address}
              phone={loc.phone}
              mapLink={loc.mapLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
