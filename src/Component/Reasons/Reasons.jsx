import React from 'react';
import Image1 from "../Image/img1.png";
import Image2 from "../Image/img2.png";
import Image3 from "../Image/img3.png";
import Image4 from "../Image/img4.png";
import Image5 from "../Image/image5.png";
import Image6 from "../Image/image6.png";
import Image7 from "../Image/image7.png";
import Image8 from "../Image/image8.png";


import "../Reasons/Reasons.css";

export default function Reasons() {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={Image1} alt='' />
            <img src={Image2} alt='' />
            <img src={Image3} alt='' />
            <img src={Image4} alt='' />
        </div>
        <div className="right-r"> 
        <span> some reasons</span>
        <div>
            <span className="stroke-text"> why</span>
            <span> choose us</span>
        </div>
        <div className='details-r'>
            <div>
                <img src={Image5} alt='' />
                <span>OVER 140+ EXPERT COACHS</span>
            </div>
            <div>
                <img src={Image5} alt='' />
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
                <img src={Image5} alt='' />
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
                <img src={Image5} alt='' />
                <span>RELIABLE PARTNERS</span>
            </div>

        </div>
        <span style={{
            color: "var(--gray)",
            fontWeight: "normal"
        }}>
        OUR PARTNERS
        </span>
        <div className="partners">
            <img src={Image6} alt="" />
            <img src={Image7} alt="" />
            <img src={Image8} alt="" />
            </div>
        </div>
      
    </div>
  )
}
