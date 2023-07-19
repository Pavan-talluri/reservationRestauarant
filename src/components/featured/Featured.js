import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './feature.css'

function Featured() {
    const [loc,setLoc]=useState("");
    const navigate = useNavigate();
    const handleclick = (city)=>{
        setLoc(city);
      navigate("/restaurants",{state: {loc}});
    }
  return (
    <div className='featured' onClick={()=>handleclick("Trichy")}>
        <div className='featuredItem'>
            <img src='https://b.zmtcdn.com/data/pictures/0/20236950/8bbdbc81aa50d46194326a2995e8f76b_featured_v2.jpg' alt='' className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Trichy</h1>
            </div>
        </div>
        <div className='featuredItem' onClick={()=>handleclick("Chennai")}>
            <img src='https://b.zmtcdn.com/data/pictures/7/18487737/22ab042412cdbe9d6c441789d0949427_featured_v2.jpg' alt='' className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Chennai</h1>
            </div>
        </div>
        <div className='featuredItem' onClick={()=>handleclick("Banglore")}>
            <img src='https://b.zmtcdn.com/data/pictures/2/19878202/ec8f581599c1ed36c90955bf561b32a9_featured_v2.jpg' alt='' className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Banglore</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured