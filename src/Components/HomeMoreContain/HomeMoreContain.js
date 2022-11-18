import React from 'react';
import './HomeMoreContain.css';

import MyAllWebside from '../../Components/MyAllWebside/MyAllWebside.json';
import ShowAllProject from '../ShowAllProject/ShowAllProject';

import { Typewriter } from 'react-simple-typewriter'
import ContuctAllUser from '../ContuctAllUser/ContuctAllUser';

import FakeUserData from '../FakeUserData/FakeUserData.json'
import Footer from '../../Footer/Footer';
const HomeMoreContain = () => {

    return (
        <>
            <div className='more-details'>
                <h1 data>My Create All Project</h1>
                <div className='my-project' data-aos='fade-up'>
                    {
                        MyAllWebside.map(project => <ShowAllProject project={project} key={project.id}></ShowAllProject>)
                    }
                </div>
            </div>

            <div className="profine__card">
                <div className='detles-card'>
                    <div><img src="https://i.postimg.cc/1z3NBwQk/Untitled-design-1-1.png" alt="" /></div>
                    <div>
                        <h2 className='animate__animated animate__slower 10s animate__infinite	infinite animate__rubberBand Animate'>Sudipta Biswas</h2>
                        <h6 className='animate__animated animate__slower 20s animate__infinite	animate__heartBeat Animate'>Sudipta*@gmail.com</h6>
                        <p>
                            <Typewriter
                                words={[`Make This Side I Use React Js`, 'Make This Side I Use React Boostrep', 'Make This Side I Use React Js Particles', 'Make This Side I Use React Simple Typewriter']}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={1000}
                            />
                        </p>
                    </div>
                </div>
            </div>
            <div className='Up-ImG-St'>
                <h1>My all Relative</h1>
                <h4>Please Hover This Image To Get Facebook Link</h4>
            </div>
            <div className='detles__hover'>
                {
                    FakeUserData.map(data => <ContuctAllUser data={data}></ContuctAllUser>)
                }
            </div>
            <div className='Total-Futter'>
                {
                    <Footer></Footer>
                }
            </div>
        </>
    );
};

export default HomeMoreContain;