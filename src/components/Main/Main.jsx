import './Main.css'
import profileIcon from '../../assets/profile.jpg'
import compassIcon from '../../assets/compass.svg'
import bulbIcon from '../../assets/lightbulb.svg'
import chatIcon from '../../assets/chat.svg'
import codeIcon from '../../assets/code-slash.svg'
import imageIcon from '../../assets/image.svg'
import micIcon from '../../assets/mic.svg'
import sendIcon from '../../assets/send.svg'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={profileIcon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={compassIcon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={bulbIcon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team banding activities for our work retreat</p>
                    <img src={chatIcon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={codeIcon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={imageIcon} alt="" />
                        <img src={micIcon} alt="" />
                        <img src={sendIcon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main