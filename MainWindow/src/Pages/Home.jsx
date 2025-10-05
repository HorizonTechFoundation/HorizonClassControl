import '../Styles/Home.css'
import logo from '../assets/logo.png'

function Home() {

  let classes=[
    {
      "name":"Environmental And Social Impact Assessment",
      "faculty":"Chocka D Lingam",
      "start":"11:00 AM",
      "end":"12:00 AM",
      "venue":"B2L04",
      "status":"Not Started"
    },
    {
      "name":"Class 2",
      "faculty":"Faculty 2",
      "start":"11:00 AM",
      "end":"12:00 AM",
      "venue":"Venue 2",
      "status":"Not Started"
    },
    {
      "name":"Class 3",
      "faculty":"Faculty 3",
      "start":"11:00 AM",
      "end":"12:00 AM",
      "venue":"Venue 3",
      "status":"Not Started"
    }
  ]

  return (
    <>
    {/* ===== HOME ===== */}
    <section className='home'>

      {/* ===== HOME LEFT ===== */}
      <div className='home-left'>

         {/* ===== HOME LEFT CONTENT ===== */}
        <div className='home-left-cont'>

          {/* ===== HOME LEFT TOP ===== */}
          <div className='home-left-top'>

            {/* ===== HOME LEFT TOP LOGO ===== */}
            <div className='home-left-top-logo'>
              <img src={logo} alt='HORIZON CLASS CONTROL'/>
            </div>
            

          </div>

          {/* ===== HOME LEFT BOTTOM ===== */}
          <div className='home-left-bottom'>

            {/* ===== HOME LEFT BOTTOM MENU ===== */}
            <div className='home-left-bottom-menu'>

              {/* ===== HOME LEFT BOTTOM MENU HOME ===== */}
              <a className='home-left-bottom-menu-home'>
                <p>Home</p>
              </a>

              {/* ===== HOME LEFT BOTTOM MENU OTHER ===== */}
              <div className='home-left-bottom-menu-other'>

                {/* ===== HOME LEFT BOTTOM MENU CREATE ===== */}
                <a className='home-left-bottom-menu-create'>
                  <p>Create Class</p>
                </a>

                {/* ===== HOME LEFT BOTTOM MENU MANAGE ===== */}
                <a className='home-left-bottom-menu-manage'>
                  <p>Manage</p>
                </a>

                {/* ===== HOME LEFT BOTTOM MENU PROFILE ===== */}
                <a className='home-left-bottom-menu-profile'>
                  <p>Profile</p>
                </a>

                {/* ===== HOME LEFT BOTTOM MENU CONTACT ===== */}
                <a className='home-left-bottom-menu-contact'>
                  <p>Contact</p>
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* ===== HOME LEFT VERSION ===== */}
        <p className='home-left-version'>Version 0.1</p>

      </div>

      {/* ===== HOME RIGHT ===== */}
      <div className='home-right'>

        {/* ===== HOME RIGHT WELCOME CONT ===== */}
        <div className='home-right-welcome-cont'>

          {/* ===== HOME RIGHT WELCOME BAR ===== */}
          <div className='home-right-welcome-bar'></div>

          {/* ===== HOME RIGHT WELCOME TEXT ===== */}
          <div className='home-right-welcome'>
            <p className='home-right-welcome-line1'>Welcome To</p>
            <p className='home-right-welcome-line2'>Horizon Class Control !</p>
          </div>

        </div>

        {/* ===== HOME RIGHT CARD CONT ===== */}
        <div className='home-right-card-cont'>
          
          {/* ===== HOME RIGHT CARD ===== */}
          <div className='home-right-card'>
            <div className='home-right-card-status'>
              <div></div>
              <p>{classes[0]['status']}</p>
            </div>
            <p className='home-right-card-name'>{classes[0]['name']}</p>
            <p className='home-right-card-faculty'>{classes[0]['faculty']}</p>
            <p className='home-right-card-time'>{classes[0]['start']} - {classes[0]['end']} at {classes[0]['venue']}</p>
          </div>

          {/* ===== HOME RIGHT CARD ===== */}
          <div className='home-right-card'>
            <div className='home-right-card-status'>
              <div></div>
              <p>{classes[1]['status']}</p>
            </div>
            <p className='home-right-card-name'>{classes[1]['name']}</p>
            <p className='home-right-card-faculty'>{classes[1]['faculty']}</p>
            <p className='home-right-card-time'>{classes[1]['start']} - {classes[1]['end']} at {classes[1]['venue']}</p>
          </div>

          {/* ===== HOME RIGHT CARD ===== */}
          <div className='home-right-card'>
            <div className='home-right-card-status'>
              <div></div>
              <p>{classes[2]['status']}</p>
            </div>
            <p className='home-right-card-name'>{classes[2]['name']}</p>
            <p className='home-right-card-faculty'>{classes[2]['faculty']}</p>
            <p className='home-right-card-time'>{classes[2]['start']} - {classes[2]['end']} at {classes[2]['venue']}</p>
          </div>

        </div>

        {/* ===== HOME RIGHT INFO ===== */}
        <div className='home-right-info'>

          <p>Horizon Classroom is a mobile-first solution designed to minimize distractions during class or test hours. By enforcing in-app presence, the app automatically tracks student attention. If a student closes or minimizes the app, they are instantly marked as absent—encouraging full participation and minimizing mobile misuse.</p>

        </div>

        {/* ===== HOME RIGHT BUTTON CONT ===== */}
        <div className='home-right-button-cont'>

          <button className='home-right-button'>Create Class</button>
          <button className='home-right-button'>Manage Class</button>

        </div>

      </div>

    </section>
    </>
  )
}

export default Home
