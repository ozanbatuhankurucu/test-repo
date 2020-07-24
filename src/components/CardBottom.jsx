import React from 'react';

function CardBottom(props){
    return <div className="card-bottom">
    <p>{props.phone}</p>
    <p>{props.email}</p> 
    </div>;
}

export default CardBottom;