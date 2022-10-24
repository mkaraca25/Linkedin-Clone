import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src="https://media-exp1.licdn.com/dms/image/D4D16AQGn5dRCeyOSHQ/profile-displaybackgroundimage-shrink_350_1400/0/1666311405097?e=1672272000&v=beta&t=wiUqX5uDb5Qv3aRBuLmuJ3DWj2r7xZZfd7tJSpigZ24" alt=''/>
        <Avatar className='sidebar__avatar' />
        <h2>Melik KARACA</h2>
        <h4>melikkrc25@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewd you</p>
          <p className="sidebar__statNumber">
            519
          </p>
        </div>
        <div className="sidebar__stat">
        <p>Views on post</p>
          <p className="sidebar__statNumber">
            14.458
          </p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar