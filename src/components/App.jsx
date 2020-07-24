import React from 'react';
import "../App.css";
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';


function App(){
    return <div>
    <Header />
<div className="main-container">
    
    
    {notes.map( (note)=>{
        return <Note 
            key={note.key}
            title={note.title}
            content={note.content}
        />
    })}
  
    </div>
    </div>;
}

export default App;