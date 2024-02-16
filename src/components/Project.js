import React from 'react';

function Project(props)
{
    var animation=""
    var divCoverStyles={}
    if(props.index%2===0)
    {  
        animation="left-slide";
        divCoverStyles={right:'0'}
    }
    else 
    {
       animation="right-slide";
       divCoverStyles={left:'0'}
    }
    return (
    <div className={`${animation} gameBox`} key={props.index} style={{border:`4px solid ${props.bcolor}`}}>
        <div className='divCover' style={{...divCoverStyles ,backgroundColor:props.bcolor}}></div>
        <div>
            <img src={`assets/${props.image}`} alt={props.title} />
        </div>
        <div>
            <h2>{props.title}</h2>
            <span>{props.des}</span>
            <div>
                <button><a href={props.playLink}>Play</a></button>
                <button><a href={props.codeLink}>View Code</a></button>
            </div>
        </div>
    </div>
   )
}
export default Project