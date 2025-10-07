import '../Styles/CreateClass.css'
import React, { useEffect, useState } from 'react';

function CreateClass(){
    const [today, setToday] = useState('');

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        setToday(currentDate);
    }, []);
    return(
        <>

        <section className='createclass-cont'>
            <div className='createclass-top'>
                <p>Create New Class</p>
            </div>

            <div className='createclass-main'>
                <div className='createclass-main-cont'>
                    <div className='createclass-main-left'>

                        <div className='createclass-main-left-top'>

                            <div className='createclass-main-left-top-input'>
                                <p>Class Name</p>
                                <input placeholder='Class Name'/>
                            </div>

                            <div className='createclass-main-left-top-input'>
                                <p>Date</p>
                                <input placeholder='Date' type='date' value={today} onChange={(e) => setToday(e.target.value)}/>
                            </div>

                            <div className='createclass-main-left-top-input'>
                                <p>Start Time</p>
                                <input placeholder='Class Starting Time' type='time'/>
                            </div>

                            <div className='createclass-main-left-top-input'>
                                <p>End Time</p>
                                <input placeholder='Class Ending Time' type='time'/>
                            </div>

                            <div className='createclass-main-left-top-input'>
                                <p>Venue</p>
                                <input placeholder='Venue of Class'/>
                            </div>

                            <div className='createclass-main-left-top-input'>
                                <p>Department</p>
                                <input placeholder='Department'/>
                            </div>

                        </div>
                        <div className='createclass-main-left-bottom'>

                        </div>

                    </div>
                    <div className='createclass-main-right'>

                    </div>
                </div>
            </div>

        </section>
        
        </>
    )
}

export default CreateClass;