import './Sidebar.css'
import activityIcon from '../../assets/activity.svg'
import addIcon from '../../assets/add.svg'
import chatIcon from '../../assets/chat.svg'
import gemIcon from '../../assets/gem.svg'
import helpIcon from '../../assets/help.svg'
import listIcon from '../../assets/list.svg'
import settingIcon from '../../assets/setting.svg'
import { useState } from 'react'

const Sidebar = () => {
    const [expand, setExpand] = useState(false)

  return (
    <div className="sidebar">
        <div className="top">
            <img className='menu' src={listIcon} onClick={() => setExpand(prev => !prev)} alt="" />
            <div className="new-chat">
                <img src={addIcon} alt="" />
                {expand? <p>New Chat</p> : null}
            </div>
            {expand? 
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={chatIcon} alt="" />
                        <p>Lorem ipsum dolor sit ...</p>
                    </div>
                </div> : null
            }
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={gemIcon} alt="" />
                {expand? <p>Gem Manager</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={helpIcon} alt="" />
                {expand? <p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={activityIcon} alt="" />
                {expand? <p>Activity</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={settingIcon} alt="" />
                {expand? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar