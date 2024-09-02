import React from "react";
import './Pagination.scss'


const Pagination = ({currentPage,totalPages,onPageChange}) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
          <ul className="whole-page-list-numbers">
            <div style={{display:'flex', alignItems:'center',height:'100%'}}>
            <img src={require('../../images/icon_web_arrow_left.png')} alt="foto"/>
            </div>
            {pageNumbers.map((number) => (
              <li className="page-list-number" key={number} style={{ margin: '0 5px' }}>
                <button className="page-number-button" onClick={() => onPageChange(number)}>
                  {number}
                </button>
              </li>
            ))}
            <div style={{display:'flex', alignItems:'center',height:'100%'}}>
            <img src={require('../../images/icon_web_arrow_right.png')} alt="foto"/>
            </div>
          </ul>
        </nav>
      );
    };


export default Pagination;