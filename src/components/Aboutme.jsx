import React from 'react';
import sunny from '../assets/IMG_20230402_220854.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Aboutme = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className='aboutme-container' id='about' >
            <div className='hey2'>
                <div className='aboutme2-container'>


                    <div data-aos="flip-left" className='info'>
                        <div className='aboutp-container'>
                            <div className='aboutMe'>

                                <span className='aboutmeh1'>
                                    {/* <button  className='btn-skill'></button> */}
                                    <a href="#skill" className='btn-skill' ><div className='fa-minus2'></div></a>
                                    Full Stack Developer,
                                </span>

                                Programming is one of the things that I like the most and that I would like to learn a lot more about.
                                <p className='container-infoabout'> <span className='info-about'> <i className="fa-solid fa-phone fa-sm"></i>  +593 992444232 </span></p>
                                <p className='container-infoabout'><span className='info-about'> <i className="fa-solid fa-location-dot fa-lg"></i> Ecuador</span></p>
                                <p className='container-infoabout'><span className='info-about'> <i className="fa-solid fa-envelope fa-sm"></i> martinezgilersunny@gmail.com </span></p>
                                <p className='container-infoabout'> <span className='info-about'> <i className="fa-solid fa-language fa-sm"></i> English B1, Spanish</span></p>

                                {' '}

                            </div>
                            <br />
                        </div>
                        <div data-aos="flip-left" className='foto-about'>
                            <img src={sunny} className='foto' alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Aboutme;