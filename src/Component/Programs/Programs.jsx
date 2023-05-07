import React from 'react';
import "../Style/Programs.css";
import {programsData } from "../Data/ProgramsData";
import Arrow from "../Image/arrow.png";
export default function Programs() {
  return (
    <div className="Programs" id="programs">
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span> 
            <span>Programs</span>
            <span className='stroke-text' >to shape you</span>
        </div>

        <div className="program-categories">
            {
                programsData.map((program) =>(
                    <div className="category">
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Join Now</span>
                    <img src={Arrow} alt=''/></div>
                </div>
                )
                   
            )
            }
        </div>
      
    </div>
  )
}
