import React from 'react';
var today = new Date().getHours();
var dayColour= {
  color:null,
  message:null
};
function dayCreater(currentHour){
if(currentHour>=0 && currentHour<12){
  dayColour.color="red";
  dayColour.message="Günaydın";
}else if(currentHour>=12 && currentHour<18){
dayColour.color="green";
dayColour.message="Tünaydın";

}else{
  dayColour.color="blue";
  dayColour.message="İyi akşamlar";
}
}
dayCreater(today);

function Day(){
    return <h1 style={dayColour} >{dayColour.message}</h1>;
}


export default Day;