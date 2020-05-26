import React from "react";
import "../App.css";
import image5 from "../images/image5.jpg";
import image7 from "../images/image7.jpg";
import image6 from "../images/image6.jpg";
import image8 from "../images/image8.jpg";

function Gallary() {
  return (
    <div className="home">
      <div>
        <img src={image5} alt="gallary1" className="image-gallary"></img>
      </div>
      <div>
        {" "}
        <img src={image6} alt="gallary2" className="image-gallary"></img>
      </div>
      <div>
        {" "}
        <img src={image7} alt="gallary3" className="image-gallary"></img>
      </div>
      <div>
        <img src={image8} alt="gallary4" className="image-gallary"></img>
      </div>
    </div>
  );
}

export default Gallary;
