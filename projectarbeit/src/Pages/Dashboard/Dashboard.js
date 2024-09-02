import React, { useState } from 'react';
import './Dashboard.scss'
import HeaderDashboard from "../../Components/Header-Dashboard/HeaderDashboard";
import NavigationHeaderDashboard from "../../Components/Navigation-Header-Dashboard/NavigationHeaderDashboard";
import PersonDashboard from "../../Components/Person-Dashboard/PersonDashboard";
import personData from '../../database/person.json';
import InfoDashboard from "../../Components/Info-Dashboard/InfoDashboard";
import ListeDashboard from "../../Components/Liste-Dashboard/ListeDashboard";
import cadsData from '../../database/cads.json'
import listCads from '../../database/list.json'
import Pagination from "../../Components/Pagination/Pagination";




const Dashboard = () => {


    return(
    <>
        <div className="whole-dashboard">
            <HeaderDashboard/>
            <NavigationHeaderDashboard/>
            <div style={{height:'850px',display:'flex'}}>
                <div>
                    <PersonDashboard data={personData}/>
                    <InfoDashboard data={cadsData}/>
                </div>
                <ListeDashboard data={listCads}/>
                </div>
            </div>
    </>
    )
}

export default Dashboard