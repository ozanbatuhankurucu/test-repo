import React from 'react';
import CardBottom from './CardBottom';
function Card(props){
return <div className="cardContainer">
    <div>
    <h2>{props.singerName}</h2>
    <img  src={props.img} alt="this is img"></img>
    </div>
    <CardBottom phone={props.phone} email={props.email}/>
</div>
}

export default Card;