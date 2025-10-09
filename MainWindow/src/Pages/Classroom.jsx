import '../Styles/Classroom.css'
import React, { useEffect, useState } from 'react';
import ClassroomImg from "../assets/ClassroomImg.png"
import { useNavigate } from 'react-router-dom'


function Classroom(){
    const [today, setToday] = useState('');
    const navigate = useNavigate(); 

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        setToday(currentDate);
    }, []);
    return(
        <>

        <div className='createclass-back-cont'>
            <a className='createclass-back' onClick={() => navigate('/')}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="122.883px"
                    height="122.882px"
                    viewBox="0 0 122.883 122.882"
                    >
                    <g>
                        <path
                        fill="white"
                        d="M61.441,0L61.441,0l0.001,0.018c16.974,0,32.335,6.872,43.443,17.98s17.98,26.467,17.98,43.441h0.018v0.002l0,0h-0.018 
                        c0,16.976-6.873,32.335-17.98,43.443c-11.109,11.107-26.467,17.979-43.442,17.979v0.018h-0.002l0,0v-0.018 
                        c-16.975,0-32.335-6.872-43.443-17.98C6.89,93.775,0.018,78.417,0.018,61.442H0v-0.001V61.44h0.018 
                        c0-16.975,6.872-32.334,17.98-43.443C29.106,6.89,44.465,0.018,61.44,0.018L61.441,0L61.441,0L61.441,0z 
                        M71.701,42.48c1.908-1.962,1.863-5.101-0.098-7.009c-1.963-1.909-5.102-1.865-7.01,0.097L42.755,58.088l3.553,3.456
                        l-3.568-3.46c-1.911,1.971-1.863,5.118,0.108,7.029c0.058,0.056,0.116,0.109,0.175,0.162l21.571,22.057
                        c1.908,1.962,5.047,2.006,7.01,0.097c1.961-1.908,2.006-5.047,0.098-7.01L53.227,61.529L71.701,42.48L71.701,42.48z"
                        />
                    </g>
                </svg>

            </a>
        </div>

        <section className='classroom-cont'>
            <div className='classroom-top'>
                <p>Classroom</p>
            </div>

            <div className='classroom-main'>
                <div className='classroom-main-cont'>
                    <div className='classroom-main-left'>

                        <div className='classroom-main-left-top'>

                            <p>9/76</p>

                        </div>
                        <div className='classroom-main-left-bottom'>

                            <div className='classroom-main-left-bottom-cont'>
                                {/* ================= */}
                            </div>

                        </div>

                    </div>
                    <div className='classroom-main-right'>

                        <div className='classroom-main-right-img'>
                            <img src={ClassroomImg}/>
                        </div>
                        <div className='classroom-main-right-cont'>
                            <p className='classroom-main-right-cont-l1'>Environmental And Social Impact Assessment</p>
                            <p className='classroom-main-right-cont-l2'>Erana Veerapa Dinesh</p>
                            <p className='classroom-main-right-cont-l3'>10:30 AM - 11:20 AM At B2L03</p>
                        </div>

                        <button>End Class</button>

                    </div>
                </div>
            </div>

        </section>
        
        </>
    )
}

export default Classroom;