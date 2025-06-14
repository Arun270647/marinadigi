import React from "react";

// Define the type for a location object
type LocationDataType = {
  location: string;
  address: string;
  phone: string;
  mapLink: string; // The URL for the map
};

// Your location data with a functional map link
const locations: LocationDataType[] = [
  {
    location: "Ayanavaram, Chennai",
    address: "No 38/68a Palayakara Street",
    phone: "+91 97899 03547",
    // This URL will open a search for the address on Google Maps
    mapLink: "https://www.google.com/maps/search/?api=1&query=No+38/68a+Palayakara+Street,Ayanavaram,Chennai",
  }
];

// A component to render a single location box
const LocationBox = ({
  location,
  address,
  phone,
  mapLink,
}: LocationDataType) => {
  return (
    // The column structure remains the same
    <div className="col-lg-4 col-md-6">
      <div className="location-boxes">
        <div className="img1">
          <img src="/assets/img/icons/location3.svg" alt="Location Icon" />
        </div>
        <div className="space32"></div>
        {/* This link now uses the mapLink and opens in a new tab */}
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

// The main section component
const LocationSection = () => {
  return (
    <div className="location-section-area sp2 bg2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 m-auto">
            <div className="location-header text-center heading2">
              <h5>Location</h5>
              <h2>Our Location</h2>
            </div>
          </div>
        </div>
        <div className="space60 d-lg-block d-none"></div>
        <div className="space30 d-lg-none d-block"></div>
        {/* By adding 'justify-content-center' to the row, any columns inside 
          will be horizontally centered. This is perfect for when you have only one item.
        */}
        <div className="row justify-content-center">
          {locations.map((loc) => (
            <LocationBox
              key={loc.location} // It's better to use a unique string for the key
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
