import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import {useLocation} from 'react-router-dom'
import './list.css'
import Searchitem from '../../components/searchItem/Searchitem.js'
import useFetch from '../../hooks/useFetch'
import Mail from '../../components/mailList/Mail'

function List() {

  const location = useLocation();
  const [city,setCity] = useState(location.state.loc);
  console.log(location)
  const {data, loading, error, refetch} = useFetch(`/restaurants?city=${city}`)
  
  return (
    <>
        <Navbar />
        <Header type="list" />
        <div className='listResult'>
          {loading ? "loading" : <>
          {data.map(item =>(
            <Searchitem  item = {item} key={item._id}/>
          ))}
          </>}
        </div>
    
     </>   
  )
}

export default List