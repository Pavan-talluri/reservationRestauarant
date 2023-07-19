import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot,faCircleXmark,faCircleArrowLeft,faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import './restaurant.css';
import Mail from '../../components/mailList/Mail';
import Footer from '../../components/Footer/Footer';
import {useLocation} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import emailjs from '@emailjs/browser'

function Restaurant() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);
  const [submit,setSubmit]= useState(false);

  const {data,loading,error} = useFetch(`/restaurants/find/${id}`);
   const photos = [
       "https://b.zmtcdn.com/data/menus/170/18795170/8396e13a99b8188a1e1dbff7aff8ee1d.jpg",
       "https://b.zmtcdn.com/data/menus/170/18795170/b3b641282a9880942a36918a19b2d389.jpg",
       "https://b.zmtcdn.com/data/menus/170/18795170/a19c3741057c309e63bb54967e92166b.jpg",
       "https://b.zmtcdn.com/data/menus/170/18795170/dc099911b31ad69fd613a4465f460a70.jpg"
   ];
  const handleopen = (i)=>{
     setSlideNumber(i);
     setOpen(true);
  }

  const handleMove = (direction)=>{
    let newslidenumber;

    if(direction==="l"){
       newslidenumber = slideNumber===0 ? 3 : slideNumber-1;
    }
    else{
      newslidenumber = slideNumber===3 ? 0 : slideNumber+1;
    }

    setSlideNumber(newslidenumber);
  }
  
    
     const sendEmail = (e) => {
      e.preventDefault();
      setSubmit(true);
      emailjs.sendForm('service_q952q7h', 'template_8fiiq2w', form.current, 'b-o-as85FdXtaNbD2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      { loading ? "loading" : <div className='hotelContainer'>
        {open && <div className='slider'>
            <FontAwesomeIcon icon={faCircleXmark}  className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
            <div className='sliderwrapper'>
               <img src={photos[slideNumber]} alt=''  className='sliderImg'/>
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
          </div>}
          <div className='hotelWrapper'>
             <h1 className='hotelTitle'>{data.name}</h1>
             <div className='hotelAddress'>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address},{data.city}</span>
             </div>
             <span className='hotelDistance'>
                {data.distance}
             </span>
             <div className='hotelImages'>
                {photos.map((photo,i)=>(
                  <div className='hotelImgWrapper'>
                    <img src={photos[i]} alt='' onClick={()=>handleopen(i)} className='hotelImg'/>
                  </div>
                ))}
             </div>
             <h1>Enter your order and Book a Table</h1>
             <div className='orderDetails'>
                <textarea type="textarea"  className='order' placeholder=' Enter the Order....'>
                </textarea>
                { submit ?  <div className='done'>Check your email for order details</div> :<button  onClick={()=>sendEmail()} className='booking'>Book a Table</button>}
             </div>
          </div>
          <Mail />
         <Footer />
      </div>}
    </div>
  )
}

export default Restaurant