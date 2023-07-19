import React from 'react'
import useFetch from '../../hooks/useFetch'
import './cuisine.css'

function Cuisinelist() {

  const {data,loading,error} = useFetch("/restaurants/countbyCuisine");
  const images = [
        "https://www.chilitochoc.com/wp-content/uploads/2021/03/Desi-Chow-Mein-featured-500x375.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQObwKQccfiPqMnpp1Dh529FgigOdqlYJgFOQ&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Ix0isbbEQ1pVtKP7VVkUAT9ycLKGqnKd6f2nVnI1vhNrGL3s-cCbDg&s=0"
  ];
  console.log(data) 
  return (
    <div className='cList'>
         {loading ? "loading" : (<>
      { data &&  
          images.map((imgi,i)=> ( 
         <div className='cListItem' key={i}>
               <img src={imgi} alt='im' className='cListImg' />
               <div className='cListTitles'>
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} dinein</h2> 
               </div>
         </div> 
        ) ) }
         </>)}
    </div>
  )
}

export default Cuisinelist