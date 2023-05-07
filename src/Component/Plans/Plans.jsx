import React from "react";
import Image9 from "../Image/image9.png";
import { plansData } from "../Data/plansData";
import "../Plans/Plans.css";

export default function Plans() {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{gap: "2rem"}}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
            <div className="plan">
                {plan.icon}
                <span> {plan.name}</span>
                <span>₹ {plan.price}</span>
                <div className="features">
                    {plan.features.map((feature,i)=>(
                        <div className="feature">
                            <img src={Image9} alt="" />
                            <span key={i}>{feature}</span>

                        </div>

                    ))}
                </div>
                <div>
                    <span>See more benefit--</span>
                    </div>
                    <button className="btn">Join now</button>
                

            </div>
        ))}
      </div>
    </div>
  );
}
