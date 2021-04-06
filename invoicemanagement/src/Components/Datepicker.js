import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import DateView from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import getAction from "./../redux/actions/getAction"

import { useSelector, useDispatch } from "react-redux";



const Datepicker = () => {
    const [value, setValue] = useState(new Date());
    
    const dispatch = useDispatch()
    const onChange = e => {
        setValue(new Date(e))
        console.log(new Date(e))
        console.log(value)
        
        dispatch(getAction(value))
        console.log(state)
    }

    const state = useSelector(state => state)
    
    return (
        <div>
            <DateView 
        onChange={onChange }
         selected={value}
        
      />
      
        </div>
    )
}

export default Datepicker
