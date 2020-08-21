import React from 'react';
import { Link } from 'react-router-dom';


function AboutPage() {
    return (
        <div className="aboutpage flex-container"> 
            <header className='aboutpage-header'>
                <h1 className='welcome'>Welcome to My Baby Log</h1>
            </header>

            <section>
                <p>To begin, simply click the <span className='text-style'>let's continue</span> button below.</p>
                <p>Then you will be taken to the <span className='text-style'>'My Baby Log'</span> homepage.</p>
                <p>From there you can see how much time has passed since baby was last fed...</p>
                <p>and begin keeping track of <span className='text-style'>feeding baby, changing diapers,</span> and <span className='text-style'>bath times.</span></p>
            </section>

            <section className='box-1'>
                <h2 className='center-text'>Feed Baby</h2>
                <p>Takes you to the feed baby page where you can:</p>
                <p>Click <span className='text-style'>'Feed Me!'</span> to instantly add the current feeding log entry.</p>
                <p>Click <span className='text-style'>'Logs'</span> to access the list of feeding logs.</p>
            </section>

            <section className='box-2'>
                <h2 className='center-text'>Change Diaper</h2>
                <p>Takes you to the change diaper page where you can:</p>
                <p>Click <span className='text-style'>'Change Diaper'</span> to instantly add the current diaper change log entry.</p>
                <p>Click <span className='text-style'>'Logs'</span> to access the list of diaper change logs.</p>
            </section>      

            <section className='box-3'>
                <h2 className='center-text'>Bath Time</h2>
                <p>Takes you to the bath time page where you can:</p>
                <p>See at a glance the last time baby had a bath.</p>
                <p>Click <span className='text-style'>'Bath Time'</span> to instantly add the current bath time log entry.</p>
                <p>Click <span className='text-style'>'Logs'</span> to access the list of bath time logs.</p>
            </section>  

            <h2 className='center-text just-click'>So just click...</h2>

            <Link to='/homepage' className='button'>
                Let's Continue
            </Link>
        </div>  
    )
}

export default AboutPage;