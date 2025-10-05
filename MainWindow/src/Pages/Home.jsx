import '../Styles/Home.css'
import logo from '../assets/logo.png'

function Home() {

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

      </div>

    </section>
    </>
  )
}

export default Home
