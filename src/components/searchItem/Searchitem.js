import './searchitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCab } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Searchitem = ({item}) => {
  
    return(
      <div className='searchItem'>
           <img src={item.photos[0]} alt='' className='restaurantImage' />
           <div className='restaurantName'>
                {item.name}
                <div className='rating'>
                    {item.rating}
                </div>
           </div>
           <div className='distance'>

           </div>
            <div className='cuisneAvail' >
              {item.desc}
            </div>
            <div className='distance'>
            <FontAwesomeIcon icon={faCab}  className='icon'/>
                 {item.distance}
            </div>
            <Link to={`/restaurants/${item._id}`}>
            <button className='button'>
             Book table
            </button>
            </Link>
          
      </div>
    )
      
    }
  
  export default Searchitem;