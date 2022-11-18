import React from 'react';
import './ContuctAllUser.css';

const ContuctAllUser = (props) => {
    console.log(props.data)
    const { img, name, link} = props.data;
    return (
        <div>
                <div className="outer">
                    <div className="one">
                        <div>
                            <span><img src={img} alt="" /></span>
                            <span><h5>{name}</h5></span>
                        </div>
                    </div>
                    <div className="two">
                        <div>
                        <span><img src={img} alt="" /></span>
                            <span><h5><a target={`_blank`} href={link}>Facebook Link</a></h5></span>
                        </div>
                    </div>
                </div>
        </div>

    );
};

export default ContuctAllUser;