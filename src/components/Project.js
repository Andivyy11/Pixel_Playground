import React from 'react';

function Project(props)
{
    var animation=""
    if(props.index%2===0)
       animation="left-slide"
    else 
       animation="right-slide"
    return (
    <div className={`${animation} gameBox`} key={props.index}>
        <div>
            <img src={`assets/${props.image}`} alt={props.title} />
        </div>
        <div>
            <h2>{props.title}</h2>
            <span>{props.des}</span>
            <div>
                <button>Play</button>
                <button>View Code</button>
            </div>
        </div>
    </div>
   )
}
export default Project