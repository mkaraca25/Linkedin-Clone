import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'


function Sidebar() {
  const recentItem=(topic)=>(
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src="https://media-exp1.licdn.com/dms/image/D4D16AQGn5dRCeyOSHQ/profile-displaybackgroundimage-shrink_350_1400/0/1666311405097?e=1672272000&v=beta&t=wiUqX5uDb5Qv3aRBuLmuJ3DWj2r7xZZfd7tJSpigZ24" alt=''/>
        <Avatar className='sidebar__avatar' />
        <h2>Melik KARACA</h2>
        <p>Reactjs Nodejs Nextjs</p>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>The person viewed your profile</p>
          <p className="sidebar__statNumber">
            519
          </p>
        </div>
        <div className="sidebar__stat">
        <p>Impressions of your posts</p>
          <p className="sidebar__statNumber">
            14.458
          </p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('nextjs')}
        {recentItem('nodejs')}
      </div>
    </div>
  )
}

export default Sidebar