import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Restaurants</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique cuisines </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Food articles </li>
          <li className="fListItem">Food communities </li>
          <li className="fListItem">Seasonal foods </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Tablebooking.</div>
    </div>
  )
}

export default Footer