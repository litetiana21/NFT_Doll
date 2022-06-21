import React from 'react';
export default function SnakeFood({position}:{position:number[]}):JSX.Element {
    const style = {
        left: `${position[0]}%`,
        top: `${position[1]}%`
      }
    
      return (
        <div className="snake-food" style={style}></div>
      )
    
}