import React, { useState } from "react";
import "./index.css";

const DuckGenerator = () => {
  const [duckURL, setDuckURL] = useState("");

  const fetchDuck = async () => {
    const response = await fetch(
      "https://api.allorigins.win/get?url=https://random-d.uk/api/random"
    );
    const data = await response.json();
    const jsonData = JSON.parse(data.contents);
    setDuckURL(jsonData.url);
  };

  return (
    <div className="duck-generator">
      <button className="duck-button" onClick={fetchDuck}>
        Generate Random Duck
      </button>
      {duckURL && (
        <div>
          <img src={duckURL} alt="Random Duck" className="duck-image" />
        </div>
      )}
    </div>
  );
};

export default DuckGenerator;
