import React from 'react';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

function Note(props){
    return <div className="noteContainer">
        <h1><AccessAlarmIcon />{props.title}</h1>
        <p>{props.content}</p>
    </div>
}

export default Note;