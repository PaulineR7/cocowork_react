
import React from "react";
import { useState } from "react";



function Pagination({postsPerPage, totalUsers, paginate}) {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalUsers/postsPerPage); i++){
        pageNumbers.push(i);
    }

    const [activePage, setActivePage] =useState(1);

    const handlePageClick = (number) => {
        
        setActivePage(number);
        paginate(number);
    };
    return(
        <div>
            <nav>
                <ul>
                    {pageNumbers.map((number)=> {
                        return(
                        <li key={number}>
                            <a href="users" className={number === activePage ? "page-link active" : "page-link"} onClick={() => {
                                handlePageClick(number);
                                paginate(number);
                            }}
                            >{number}</a>
                        </li>
                    )})}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;