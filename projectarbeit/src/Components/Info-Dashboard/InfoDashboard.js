import React from "react";
import './InfoDashboard.scss'

const InfoDashboard = ({data}) => {

    return(
        <>
            <div className="whole-info-dashboard">
                <div className="info-title">
                    <img src={require('../../images/icon_web_info.png')} alt="foto"/>
                    <p> CADS Information </p>
                </div>
                <div className="info-all-text">
                <p className="info-text"> <p style={{fontWeight:'bold',marginRight:'130px'}}>Name</p> {data.name} </p>
                <p className="info-text"> <p style={{fontWeight:'bold',marginRight:'115px'}}> Address </p> {data.address.street} {data.address.number} {data.address.plz} {data.address.city}</p>
                <p className="info-text"> <p style={{fontWeight:'bold',marginRight:'130px'}}> Email </p> {data.email}</p>
                <p className="info-text"> <p style={{fontWeight:'bold',marginRight:'75px'}}> Phone Number </p> {data.phone}</p>
                </div>
            </div>
        </>
    )
}

export default InfoDashboard;