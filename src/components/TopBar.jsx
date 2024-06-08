import React from 'react'
import { IonIcon } from '@ionic/react';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            <IonIcon name="location-outline" aria-hidden="true"></IonIcon>
          </div>
          <span className="span">
            Restaurant St, Delicious City, Nairobi 9578, KE
          </span>
        </address>
        <div className="separator"></div>
        <div className="topbar-item item-2">
          <div className="icon">
            <IonIcon name="time-outline" aria-hidden="true"></IonIcon>
          </div>
          <span className="span">Daily : 8.00 am to 10.00 pm</span>
        </div>
        <a href="tel:+25476812345" className="topbar-item link">
          <div className="icon">
            <IonIcon name="call-outline" aria-hidden="true"></IonIcon>
          </div>
          <span className="span">+254 768 456 7890</span>
        </a>
        <div className="separator"></div>
        <a href="mailto:booking@restaurant.com" className="topbar-item link">
          <div className="icon">
            <IonIcon name="mail-outline" aria-hidden="true"></IonIcon>
          </div>
          <span className="span">booking@restaurant.com</span>
        </a>
      </div>
    </div>
  )
}

export default TopBar