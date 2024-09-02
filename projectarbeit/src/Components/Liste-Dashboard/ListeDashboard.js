import React, {useState} from "react";
import './ListeDashboard.scss'
import Pagination from "../Pagination/Pagination";

const ListeDashboard = ({ data }) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 17;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
  };

    return (
        <>
            <div className="whole-list">
                <div className="list-title">
                    <img src={require('../../images/icon_web_liste.png')} alt="foto" />
                    <p style={{ fontSize: '19px', paddingLeft: '7px' }}> Probearbeit - Liste </p>
                </div>
                <table className="whole-list-table">
                    <thead className="list-descriptions">
                        <td style={{ width: '200px', textAlign: 'left' }} > PRODUCT </td>
                        <td> MATERIAL NUMBER </td>
                        <td> GTIN NUMBER </td>
                        <td> BATCH NUMBER </td>
                        <td> STOCK </td>
                        <td> EXPIRATION DATE </td>
                    </thead>
                    <tbody>
                        {currentItems.map((el) => {
                            return <tr key={el.id} className="whole-table-data">
                                <th style={{ textAlign: 'left' }}>
                                    <img style={{ marginRight: '7px' }} src={require('../../images/icon_web_liste.png')} alt="foto" />
                                    {el.name}
                                </th>
                                <th> {el.materialNumber} </th>
                                <th className="table-data-text" > {el.gtinNumber} </th>
                                <th> {el.batchNumber} </th>
                                <th > {el.stock} </th>
                                <th> {new Date(el.expirationDate).toLocaleDateString('de-DE', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })} </th>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
                <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        />
            </div>
        </>
    )
}

export default ListeDashboard;