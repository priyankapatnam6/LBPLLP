import React, { useEffect } from "react";

export default function ProfessionalSoftwareFonts() {
  const text =
    "Empowering Insurance Providers with Reliable Software Solutions";

  // Add custom font stack as first entry
  const fonts = [
    "Eurostile", "Bank Gothic", 'Microgramma',
    "Inter",
    "Poppins",
      "Roboto",
    "Lobster",
    "Oswald",
    "Merriweather",
    "Raleway",
    "Pacifico",
    "Bebas Neue",
    "Playfair Display",
    "Fira Code",
    "Quicksand",
    "Ubuntu",
    "Anton",
    "Amatic SC",
    "Montserrat",
    "Exo 2",
    "Questrial",
    "Work Sans",
    "Lato",
    "Source Sans Pro",
    "Rubik",
    "Nunito",
    "Open Sans",
    "Urbanist",
    "Raleway",
    "IBM Plex Sans",
    "PT Sans",
    "Mulish",
    "Asap",
    "Hind",
    "Manrope",
    "Plus Jakarta Sans",
    "Outfit",
    "Space Grotesk",
    "DM Sans",
    "Fira Sans",
    "Fira Code",
    "Jost",
    "Kanit",
    "Heebo",
    "Overpass",
    "Barlow",
    "Barlow Condensed",
    "Sora",
    "Titillium Web",
    "Sen",
    "Oxanium",
    "Signika",
    "Alegreya Sans",
    "Chivo",
    "Catamaran",
  ];

  const weights = [200, 300, 400, 500, 600, 700];

  // Dynamically load Google Fonts (skip custom fonts)
  useEffect(() => {
    fonts.forEach((font) => {
      // Skip the first custom font stack
      if (font.includes("Eurostile")) return;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${font.replace(
        / /g,
        "+"
      )}:wght@200;300;400;500;600;700&display=swap`;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        maxHeight: "80vh",
        overflowY: "scroll",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      {fonts.map((font) => (
        <div key={font} style={{ marginBottom: "20px" }}>
          <h3 style={{ fontFamily: font }}>{font}</h3>
          {weights.map((weight) => (
            <p
              key={weight}
              style={{
                fontFamily: font,
                fontWeight: weight,
                fontSize: "20px",
                margin: "4px 0",
              }}
            >
              {weight}: {text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
