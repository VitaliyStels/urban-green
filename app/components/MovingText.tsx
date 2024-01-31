'use client'
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

interface MovingTextProps {
    direction: number,
    textOne: string,
    textTwo: string,
    bottomBorder: boolean
}

const MovingText: React.FC<MovingTextProps> = ({direction, textOne, textTwo, bottomBorder}) => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const fourthText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
  
    useEffect( () => {
      requestAnimationFrame(animate);
    }, [])

      const animate = () => {
        if(xPercent < -100){
          xPercent = 0;
        }
        else if(xPercent > 0){
          xPercent = -100;
        }
        gsap.set(fourthText.current, {xPercent: xPercent})
        gsap.set(thirdText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        gsap.set(firstText.current, {xPercent: xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
      }


    return (
        <div className={
        bottomBorder ? "border-y border-black" : "border-t border-black"}>
            <div ref={slider} className="flex py-1 flex-row w-full relative text-nowrap text-2xl font-medium overflow-hidden">
                <p className="px-3" ref={firstText}>{textOne} {textTwo}</p>
                <p className="px-3" ref={secondText}>{textOne} {textTwo}</p>
                <p className="px-3" ref={thirdText}>{textOne} {textTwo}</p>
                <p className="px-3" ref={fourthText}>{textOne} {textTwo}</p>
            </div>
        </div>
    )
}

export default MovingText;