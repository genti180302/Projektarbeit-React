import React from "react";
import './HeaderDashboard.scss'
import {Link} from "react-router-dom"



const HeaderDashboard = () => {

    return(
        <>
            <div className="whole-header">
                <div className="first-burger-icon">
                    <img src={require('../../images/icon_web_burger_menu.png')} alt="burger-icon"/>
                </div>
                <div className="second-whole-text-header">
                    <img src={require('../../images/icon_web_dashboard.png')} alt="icon-dasboard"/>
                    <p className="text-header">Probearbeit - Dashboard</p>
                </div>
                <div className="user-img-dashboard">
                    <Link to='/'>
                    <img src={require('../../images/icon_web_thumbnail_user.png')} alt="foto-3"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HeaderDashboard;