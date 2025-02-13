import './Main.css'
import profileIcon from '../../assets/profile.jpg'
import compassIcon from '../../assets/compass.svg'
import bulbIcon from '../../assets/lightbulb.svg'
import chatIcon from '../../assets/chat.svg'
import codeIcon from '../../assets/code-slash.svg'
import imageIcon from '../../assets/image.svg'
import micIcon from '../../assets/mic.svg'
import sendIcon from '../../assets/send.svg'
import geminiIcon from '../../assets/gemini.svg'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={profileIcon} alt="" />
        </div>
        <div className="main-container">

            {!showResult ? 
                <>
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
                </> : 
                <div className="result">
                    <div className="result-title">
                        <img src={profileIcon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={geminiIcon} alt="" />
                        {loading? 
                        <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                </div>
            }

            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={imageIcon} alt="" />
                        <img src={micIcon} alt="" />
                        {input? <img onClick={()=>onSent()} src={sendIcon} alt="" /> : null}
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