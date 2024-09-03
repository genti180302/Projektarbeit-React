import React from "react";
import './MainLogin.scss'
import {Link} from "react-router-dom"


const MainLogin = () => {

    return (
        <>
            <section className="Main-Login-Section">
                <div>
                <img src={require('/Users/gentianlatifi/React-Projects/Projektarbeit-React/projectarbeit/src/images/logo_app_icon.png')} alt="Foto 1" />
                <img src={require('../../images/logo_login_grey.png')} alt="Foto2"/>
                <Link to='/Dashboard'>
                    <button style={{cursor:'pointer'}}> Login </button>
                </Link>
                </div>
            </section>
        </>
    )
}

export default MainLogin;