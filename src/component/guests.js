import React from "react";
import "../App.css";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image15 from "../images/image15.jpg";
import image16 from "../images/image16.jpg";
import image17 from "../images/image17.jpg";
import image18 from "../images/image18.jpg";
import image20 from "../images/image20.jpg";
import image21 from "../images/image21.jpg";

function Guests() {
  return (
    <div className="guest-background">
      <div className="background">
        <div>
          <img src={image2} alt="guest1" className="image-guest"></img>
          <span className="text">Mr.A</span>
          <button>Know More</button>
          <div></div>
        </div>
        <div>
          <img src={image3} alt="guest15" className="image-guest"></img>
          <span className="text">Mr.A</span>
          <button>Know More</button>
          <div></div>
        </div>
        <div>
          <img src={image4} alt="guest2" className="image-guest"></img>
          <span className="text">Mr.B</span>
          <button>Know More</button>
          <div></div>
        </div>
        <div>
          <img src={image17} alt="guest3" className="image-guest"></img>
          <span className="text">Mr.C</span>
          <button>Know More</button>
          <div></div>
        </div>
        <div>
          <img src={image15} alt="guest16" className="image-guest"></img>
          <span className="text">Mr.C</span>
          <button>Know More</button>
          <div></div>
        </div>
        <div>
          <img src={image10} alt="guest4" className="image-guest"></img>
          <span className="text">Mr.D</span>
          <button>Know More</button>
          <div></div>
        </div>
        <div>
          <img src={image11} alt="guest5" className="image-guest"></img>
          <span className="text">Mr.E</span>
          <button>Know More</button>
          <div></div>
        </div>
        <div>
          <img src={image12} alt="guest17" className="image-guest"></img>
          <span className="text">Mr.C</span>
          <button>Know More</button>
          <div></div>
        </div>
        <div>
          <img src={image18} alt="guest6" className="image-guest"></img>
          <span className="text">Mr.F</span>
          <button>Know More</button>
        </div>
        <div>
          <img src={image16} alt="guest18" className="image-guest"></img>
          <span className="text">Mr.C</span>
          <button>Know More</button>
        </div>
        <div>
          <img src={image20} alt="guest18" className="image-guest"></img>
          <span className="text">Mr.C</span>
          <button>Know More</button>
          <div></div>
        </div>{" "}
        <div>
          <img src={image21} alt="guest18" className="image-guest"></img>
          <span className="text">Mr.C</span>
          <button>Know More</button>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Guests;
