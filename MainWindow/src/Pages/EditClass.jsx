import '../Styles/EditClass.css'
import React, { useEffect, useState } from 'react';
import EditClassImg from "../assets/EditClassImg.png"
import { useNavigate } from 'react-router-dom'


function EditClass(){
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

        <section className='editclass-cont'>
            <div className='editclass-top'>
                <p>Edit Class</p>
            </div>

            <div className='editclass-main'>
                <div className='editclass-main-cont'>
                    <div className='editclass-main-left'>

                        <div className='editclass-main-left-top'>

                            <div className='editclass-main-left-top-input'>
                                <p>Class Name</p>
                                <input placeholder='Class Name'/>
                            </div>

                            <div className='editclass-main-left-top-input'>
                                <p>Date</p>
                                <input placeholder='Date' type='date' value={today} onChange={(e) => setToday(e.target.value)}/>
                            </div>

                            <div className='editclass-main-left-top-input'>
                                <p>Start Time</p>
                                <input placeholder='Class Starting Time' type='time'/>
                            </div>

                            <div className='editclass-main-left-top-input'>
                                <p>End Time</p>
                                <input placeholder='Class Ending Time' type='time'/>
                            </div>

                            <div className='editclass-main-left-top-input'>
                                <p>Venue</p>
                                <input placeholder='Venue of Class'/>
                            </div>

                            <div className='editclass-main-left-top-input'>
                                <p>Department</p>
                                <input placeholder='Department'/>
                            </div>

                        </div>
                        <div className='editclass-main-left-bottom'>

                            <div className='editclass-main-left-bottom-cont'>
                                <div className='editclass-main-left-bottom-row1'>
                                    <p><span>{27}</span> Students Selected</p>
                                    <div>
                                        <button>Save Preset</button>
                                        <button>Use Preset</button>
                                    </div>
                                </div>
                                <div className='editclass-main-left-bottom-row2'>

                                    <input placeholder='Name'/>
                                    <input placeholder='Reg No'/>
                                    <input placeholder='Department'/>

                                </div>
                                <div className='editclass-main-left-bottom-row3'>

                                    {/* ================================== */}

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='editclass-main-right'>

                        <div className='editclass-main-right-img'>
                            <img src={EditClassImg}/>
                        </div>
                        <div className='editclass-main-right-cont'>
                            <p className='editclass-main-right-cont-l1'>Environmental And Social Impact Assessment</p>
                            <p className='editclass-main-right-cont-l2'>Erana Veerapa Dinesh</p>
                            <p className='editclass-main-right-cont-l3'>10:30 AM - 11:20 AM At B2L03</p>
                        </div>

                        <button>Save Class</button>

                    </div>
                </div>
            </div>

        </section>
        
        </>
    )
}

export default EditClass;