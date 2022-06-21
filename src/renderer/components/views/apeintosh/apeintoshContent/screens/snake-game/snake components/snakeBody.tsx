import React from 'react';

export default function SnakeBody({position}:{position:number[][]}):JSX.Element{
  return  <div>
    {position.map((value, i)=>{
        const style = {
            left: `${value[0]}%`,
            top: `${value[1]}%`
          }
          return (
            <div className="snake-box" key={i} style={style}></div>
          )
    })}
</div>
}