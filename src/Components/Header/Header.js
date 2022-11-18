import React from 'react';

import './Header.css';
import 'animate.css';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from 'react-simple-typewriter';


const Header = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div className='Back-animation'>

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "fullScreen": {
                        "enable": false,
                        "zIndex": 1
                    },
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": true,
                                "value_area": 500
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle"
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 10,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "slow",
                                "parallax": {
                                    "enable": false,
                                    "force": 60,
                                    "smooth": 10
                                }
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 30,
                                "duration": 2,
                                "opacity": 0.8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            },
                            "slow": {
                                "radius": 100,
                                "factor": 3
                            }
                        }
                    },
                    "retina_detect": true,

                }
                }
            />
            <div className='inner-hadder'>
                <div className='img-div animate__animated animate__bounce animate__delay-1s animate__slower animate__infinite	infinite '><img src="https://i.postimg.cc/vBPtGVZv/IMG-20221114-022024.jpg" alt="" /></div>
                <div className='headder-in-text animate__animated animate__bounce animate__delay-1s animate__slower animate__infinite	infinite'>
                    <h1>SUDIPTA BISWAS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Earum vero obcaecati dolor porro, fugit eligendi <br /> officia alias quisquam fuga rerum.</p>
                    <h4> I Know <Typewriter
                        words={['Basic Html', 'Basic Css', 'Basic Javascript', 'Vanela Javascript!']}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        typeSpeed={150}
                        deleteSpeed={150}
                        delaySpeed={1000}
                      /></h4>
                </div>
            </div>

        </div>
    );
};

export default Header;