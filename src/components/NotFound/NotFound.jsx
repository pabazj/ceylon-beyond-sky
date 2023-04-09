import React from 'react'
import './notFound.css'
import { Link, useLocation } from 'react-router-dom'

function NotFound() {
    return (
        <div name='notFound' className='nf-container'>
            <div className='nf-wrapper'>
                <div className="page_404">
                    <div className="nf-inner-container">
                        <div className="row">
                            <div className="col-sm-12 ">
                                <div className="col-sm-10 col-sm-offset-1  text-center">
                                    <div className="four_zero_four_bg">
                                        <h1 className="text-center ">404</h1>


                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                        <div className="contant_box_404">
                                        <h3 className="h2">
                                            Look like you're lost ...
                                        </h3>

                                        <p> The page you are looking for not avaible! </p>

                                        <p><Link to={'/'} >
                                            Go to Home
                                        </Link ></p>
                                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
