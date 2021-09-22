import React, { useState, useEffect } from 'react'
import './App.css';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import 'react-calendar/dist/Calendar.css';
import { useHistory} from 'react-router-dom';

export default function PotLuckForm(props){
    const [dateValue, setDateChange] = useState(new Date());
    const [show, setShow] =useState(false);
     
    

    const{
        add,
        values,
        change,
        submit
    } = props;
    
    const onChange = evt => {
        const {name, value, checked, type} = evt.target;
        const useValue = type === 'checkbox' ? checked:value;
        change(name, useValue)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    const dateChange = evt =>{
        setDateChange(evt);
        showHide();
        change('potLuckDate', dateValue)
    }
    //hide/show calendar
    const showHide = () => {
        setShow(!show);
    }
    //add food items on create
    const addFood = () =>{
        add(values.placeHolderFood);
    }
   
    const history=useHistory();

    // goto links
    const gotoHome = () =>{
        history.push('/');
    }
    const gotoCreate = () =>{
        history.push('./potluck-form-container');
    }
    const gotoView = () =>{
        history.push('./view-potlucks-container');
    }


    return (
        <div className = 'potluck-form-container' onSubmit={onSubmit}>
            <header>
                <nav>
                    <button id='home-button' onClick={gotoHome}>Home</button>
                    <button id='create-button' onClick={gotoCreate}>Create A Potluck</button>
                    <button id='view-button' onClick={gotoView}>View Upcoming Potlucks</button>
                </nav>
            </header>

        <div className = 'name-text'>
            <label id = "name-text" >Potluck's Name:&nbsp;
                <input
                    value={values.potLuckName}
                    onChange={onChange}
                    name='potLuckName'
                    type='text'
                    />
            </label>
        <label id = "special-text" >Potluck Description:&nbsp;
                    <textarea
                        value={values.potLuckDescription}
                        onChange={onChange}
                        name='potLuckDescription'
                        type='text'
                        />
                </label>
        <div> {/* add food items */}
        <label id = "food-items" >Add Food Item:&nbsp;
            <input
                value={values.placeHolderFood}
                onChange={onChange}
                name='placeHolderFood'
                type='text'
                />
            </label>

            <button id="addFoodButton" onClick={addFood}>Add</button>
            
            </div>
        </div>
        {/* Calendar */}
        <div className = 'date-time-container'>
            <div>
            <button id = 'calendar-button' onClick={showHide}>Select A Date</button>
            {show ? <Calendar onChange={dateChange}/> : null}
            
            </div>
            {/* Time */}
            <div>
            <label id = 'time-dropdown'>Select A Time: </label>
                <select
                    onChange={onChange}
                    values={values.potLuckTime}
                    name={'potLuckTime'}
                    >   
                        <option value=''>-Select-</option>
                        <option value='800'>8:00AM</option>
                        <option value='900'>9:00AM</option>
                        <option value='1000'>10:00AM</option>
                        <option value='1100'>11:00AM</option>
                        <option value='1200'>12:00PM</option>
                        <option value='1300'>1:00PM</option>
                        <option value='1400'>2:00PM</option>
                        <option value='1500'>3:00PM</option>
                        <option value='1600'>4:00PM</option>
                        <option value='1700'>5:00PM</option>
                        <option value='1800'>6:00PM</option>
                        <option value='1900'>7:00PM</option>
                        <option value='2000'>8:00PM</option>
                </select>
              </div>      
            <button id = 'sumbit-button' onClick={onSubmit}>Create Potluck</button>
        </div>



        </div>
    )
}