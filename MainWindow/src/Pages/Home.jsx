import { useState } from 'react'
import '../Styles/Home.css'
import ProfileImg from '../assets/Profiles/profile1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="Home">
        <div className="Home-Left">

          <div className="Home-Left-Cont">

            {/* ====== PROFILE IMAGE ====== */}

            <div className="Home-Left-Profile-Image-Cont">
              <img src={ProfileImg}/>
            </div>

            {/* ======= PROFILE CONT ======== */}

            <div className="Home-Left-Profile-Info-Cont">
              <p className="Home-Left-Profile-Info-id">RIT-EVD</p>
              <div className="Home-Left-Profile-Info-Name-Cont">
                <p className="Home-Left-Profile-Info-Name">Erana Veerapa Dinesh</p>
                <p className="Home-Left-Profile-Info-Pos">Assistant Professor</p>
              </div>
              <p className="Home-Left-Profile-Info-dept">Department Of Computer Science and Business Systems</p>
              <p className="Home-Left-Profile-Info-clg">RITRJPM</p>
            </div>

            {/* ========= PROFILE BUTTONS ========== */}

            <div className="Home-Left-Profile-Buttons-Cont">
              <button className="Home-Left-Profile-Button-Contact">Contact</button>
              <button className="Home-Left-Profile-Button-Logout">Logout</button>
            </div>

          </div>
          <p className="Home-Left-Profile-Version">Version 0.1 (beta)</p>

        </div>
        <div className="Home-Right">

          <div className="Home-Right-Cont">

            <div className="Home-Right-Title-Cont">
              <p className="Home-Right-Title-Welcome">Welcome To</p>
              <p className="Home-Right-Title-App">Horizon ClassName Control !</p>
            </div>

            <div>
              <div>
                <div>
                  
                </div>
              </div>
            </div>

          </div>

          

        </div>
      </section>
    </>
  )
}

export default App
