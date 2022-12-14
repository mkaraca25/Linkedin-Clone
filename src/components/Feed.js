import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import InputOption from './InputOption'
import  Subscriptions  from '@material-ui/icons/Subscriptions'
import EventNoteIcon  from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'

function Feed() {
  return (
    <div>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
                <form>
                    <input type="text"/>
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
            </div>
        </div>
    </div>
  )
}

export default Feed