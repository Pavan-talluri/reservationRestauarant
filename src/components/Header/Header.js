import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { faPerson, faPlateWheat } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import DateTimePicker from 'react-datetime-picker'
import { type } from '@testing-library/user-event/dist/type'
import { useNavigate } from 'react-router-dom'

function Header({type}) {
    const[loc,setLoc]= useState("");
    const [date, setDate] = useState( new Date());
    const [openOptions,setOpenoptions] = useState(false);
    const [options,setOptions] = useState({
        People: 3,
    });

  const navigate = useNavigate()
     const handleOption = (name,operation) =>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]: operation === "i" ? options[name]+1 : options[name]-1.
            };
        }
        )
     };

    const handleSearch = () => {
           navigate("/restaurants", {state: {loc,date,options}});
    }
  return (
    <div className='header'>
      <div className={type === "list" ?'headerContainer listmode': "headerContainer"}>
        <div className='headerList'>
            <div className='headerListItem active'>
            <FontAwesomeIcon icon={faPlateWheat} />
            <span>Eat</span>
            </div>
        </div>
        {type !="list" &&
        <><h1 className='headerTitle'>Enjoy the cuisine</h1>
        <p className='headerDesc'>Get rewarded for your active participation</p>
        <div className='headerSearch'>
         <div className='headerSearchItem'>
         <FontAwesomeIcon icon={faPlateWheat} className="headerIcon" />
         <input type="text" placeholder="Ur Geography" className='headerSearchInput'
          onChange={e=>setLoc(e.target.value)}
         />
         </div>
         <div className='headerSearchItem'>
         <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
          <input type="datetime-local" onChange={e=>setDate(e.target.value)} className='headerSearchInput'/>
         </div>
         <div className='headerSearchItem'>
         <FontAwesomeIcon icon={faPerson} className="headerIcon" />
         <span  onClick={()=>setOpenoptions(!openOptions)} className='headerSearchText'>{`${options.People}`}</span>
         {openOptions && <div className='options'>
             <span className='optionText'>People</span>
             <button className='optionCounterButton' 
              disabled={options.People <= 1 }
             onClick={()=>handleOption("People","d")}>-</button>
             <span className='optionCounterNumber'>{options.People}</span>
             <button className='optionCounterButton' onClick={()=>handleOption("People","i")}>+</button>

          </div>
        } 
         </div>
         <div className='headerSearchItem'>
           <button className='headerBtn' onClick={handleSearch}>Search</button>
         </div>
      </div></>}
      </div>
      
    </div>
  )
}

export default Header