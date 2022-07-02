import React, {useEffect, useState} from "react";
import styled from 'styled-components';

const Star = styled.button.attrs(props => ({
    opacity: props.opacity || "50%",
    x: props.x || "0px",
    y: props.y || "0px",
    s: props.s || "4px",
}))`
  width: ${props => props.s};
  height: ${props => props.s};
  background-color: white;
  opacity: ${props => props.opacity};
  top: ${props => props.y};
  left: ${props => props.x};
  position: absolute;
`

function StarryNight(){
    const mobileBreakpoint = 480;
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : mobileBreakpoint
    );

    const [screenHeight, setScreenHeight] = useState(
        typeof window !== "undefined" ? window.innerHeight : mobileBreakpoint
    );

    var numberParticles;
    if (screenWidth > 1200){
        numberParticles = 100;
    }
    else{
        numberParticles = 50;
    }

    function GenerateStars(numberGenerated, size){
        let newStars = []
        for (var i = 0; i < numberGenerated; i++) {
            let randX = Math.floor(Math.random() * (screenWidth - 20 + 1) + 20)
            let randY = Math.floor(Math.random() * (screenHeight - 20 + 1) + 20)
            let randA = Math.floor(Math.random() * (80 - 15 + 1) + 15) // Picks random int between 15 and 100
            newStars.push(<Star opacity={`${randA}%`} x={`${randX}px`} y={`${randY}px`} s={`${size}px`} key={i} />)
        }
        return newStars
    }

    const [stars, setStars] = useState(GenerateStars(numberParticles, 4));
    const largeStars = GenerateStars(numberParticles, 8);

    useEffect(() => {
        const timer = setInterval(() => {
            let particleArr = GenerateStars(numberParticles, 4);
            setStars(particleArr);
        }, 3000);
        // clearing interval
        return () => clearInterval(timer);
    });

    return (
       <div>
           {stars}
       </div>
    )
}

export default StarryNight;