/* eslint-disable react/jsx-key */
import './Sidebar.css'
import activityIcon from '../../assets/activity.svg'
import addIcon from '../../assets/add.svg'
import chatIcon from '../../assets/chat.svg'
import gemIcon from '../../assets/gem.svg'
import helpIcon from '../../assets/help.svg'
import listIcon from '../../assets/list.svg'
import settingIcon from '../../assets/setting.svg'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'

const Sidebar = () => {
    const [expand, setExpand] = useState(false)
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className="sidebar">
        <div className="top">
            <img className='menu' src={listIcon} onClick={() => setExpand(prev => !prev)} alt="" />
            <div onClick={() => newChat()} className="new-chat">
                <img src={addIcon} alt="" />
                {expand? <p>New Chat</p> : null}
            </div>
            {expand? 
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item) => {
                        return (
                            <div onClick={() => loadPrompt(item)} className="recent-entry">
                                <img src={chatIcon} alt="" />
                                <p>{item.slice(0, 18)} ...</p>
                            </div>
                        )
                    })}
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