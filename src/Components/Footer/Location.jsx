import React, { useEffect, useState } from 'react';
import { getLocations } from '../../Service';

function Location() {
  const [locations, setLocations] = useState([]);


  useEffect(() => {
    getLocations()
      .then(response => {
        setLocations(response.data);
      })
      .catch(error => {
        console.error("Error fetching locations:", error);
      });
  }, []);


  return (
    <div style={{ padding: '20px' }}>
      {locations?.length === 0 ? (
        <p>No locations found.</p>
      ) : (
        locations.map(loc => (
          <div key={loc.id}
            style={{ marginBottom: '30px', border: '1px solid #ccc',
              padding: '10px',borderRadius: '8px' }}>
            <h2>{loc.name || "Location"}</h2>
            <p>{loc.address}</p>

            <a
              href={loc.google_maps_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', marginBottom: '10px' }}
            >
              Open in Google Maps
            </a>

            {loc.latitude && loc.longitude && (
            <iframe
  title={loc.name || `map-${loc.id}`}
  width="100%"
  height="300"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  src={`https://www.google.com/maps?q=${loc.latitude},${loc.longitude}&hl=es&z=14&output=embed`}
/>

            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Location;

