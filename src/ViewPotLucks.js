import React, { useState, useEffect } from 'react'
import { useHistory} from 'react-router-dom';
import './App.css';


const ViewPotLucks = (props) =>{
    const {data} = props;
        console.log(data);
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
        <div className = 'view-potlucks-container'>
            <header>
                <nav>
                    <button id='home-button' onClick={gotoHome}>Home</button>
                    <button id='create-button' onClick={gotoCreate}>Create A Potluck</button>
                    <button id='view-button' onClick={gotoView}>View Upcoming Potlucks</button>
                </nav>
            </header>       
            <h1>Upcoming Potlucks</h1>
            <div className = 'map-potlucks'>
                {data[0].map((item,index)=>{
                    return(
                        <li key = {index}>
                            {' '}Name: {item.potLuckName} {' | '} 
                            {' '}Time: {item.potLuckTime}{' | '} 
                            {' '}Date: {item.potLuckDate.toUTCString()} {' | '} 
                            {' '}Description: {item.potLuckDescription}{' | '} 
                            </li>
                    )
                })}

            </div>

        </div>

    )
}

export default ViewPotLucks;