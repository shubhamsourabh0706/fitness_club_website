import React, { useState } from "react";
import "../Testimonials/Testimonials.css";
import {testimonialsData} from "../Data/testimonials";
import Arrow1 from "../Image/left arrow.png";
import Arrow2 from "../Image/right arrow.png";
import { motion } from "framer-motion";

export default function Testimonials() {
  const transition = {type: 'spiring', duration :3}
    const[selected, setSelected] = useState(0);
    const tLength = testimonialsData.length
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.span
        key={selected}
        initial={{opacity: 0, x:100}}
        animate={{opacity: 1, x:0}}
        exit={{opacity: 0, x : -100}}
        transition={transition}>
            {testimonialsData[selected].review}
        </motion.span>
        <span>
            <span style={{color: 'var(--orange)'}}>
                {testimonialsData[selected].name}
            </span>{" "}
            - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
        initial={{opacity: 0, x: -100}}
        transition={{...transition, duration:2}}
        whileInView={{opacity:1, x:0}}
        ></motion.div>
        <motion.div
        initial={{opacity: 0, x:100}}
        transition={{...transition, duration:2}}
        whileInView={{opacity:1, x:0}}></motion.div>
        <motion.img
        key={selected}
        initial={{opacity: 0, x:100}}
        animate={{opacity: 1, x:0}}
        exit={{opacity: 0, x : -100}}
        transition={transition}
         src={testimonialsData[selected].image} alt=""/>
        <div className="arrows">
            <img onClick={() =>{
                selected === 0 ? setSelected(tLength - 1) :setSelected((prev)=> prev-1);
            }}
            src={Arrow1} alt="" />
            <img onClick={() =>{
                selected === tLength - 1 ? setSelected(0) : setSelected((prev)=> prev + 1);
            }}
            src={Arrow2}alt="" />
        </div>
      </div>
    </div>
  );
}
