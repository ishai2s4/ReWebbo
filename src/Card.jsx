import React from 'react';
import web from '../src/Images/2.svg';
import {NavLink} from 'react-router-dom';
const Card = (props) => {

    return(
        <>
                    <div className="col-md-4 col-10 mx-auto">
                        <div class="card">
                            <img src={props.imgsrc} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">{props.title}</h5>
                                <p class="card-text">
                                    This is my new project which build with the 
                                    help of IOT and web.
                                </p>
                                <NavLink to="" class="btn btn-primary">
                                    Check Project
                                </NavLink>
                            </div>
                        </div>
                    </div>
               
            
        </>
    );
};

export default Card;