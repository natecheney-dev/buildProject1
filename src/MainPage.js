import React from 'react'
import './App.css';
import { useHistory} from 'react-router-dom';

export default function MainPage(){

    const history=useHistory();

    const gotoHome = () =>{
        history.push('/');
    }
    const gotoCreate = () =>{
        history.push('./potluck-form-container');
    }
    const gotoView = () =>{
        history.push('./view-potlucks-container');
    }

    return(
        <div className = 'main-page'>
            <header>
                <nav>
                    <button id='home-button' onClick={gotoHome}>Home</button>
                    <button id='create-button' onClick={gotoCreate}>Create A Potluck</button>
                    <button id='view-button' onClick={gotoView}>View Upcoming Potlucks</button>
                </nav>
                <div className='header-text'>
                    <h1>Potluck Project</h1>
                </div>
            </header>
        <div className = 'top-stuff'>
            <img src = "https://i.stack.imgur.com/y9DpT.jpg" alt ="placeholder image" ></img>
        </div>
        </div>
    )
}