import React, { useContext, useState } from "react";
import "./JobCard.css";

/* Show salary, Job title, Company name and equity in "card" form
 * 
 * JobCard will display a card for each job in the JobList
 * 
*/

function JobCard({ id, salary, title, companyName, equity }){
    return (
        <div className="JobCard card">
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p>{companyName}</p>
             <small>Salary: {salary}</small>
            {equity !== undefined && <div><small>Equity: {equity}</small></div>}
            <button className="btn btn-danger font-weight-bold text-uppercase float-right">Apply</button>
          </div>
        </div>
    );
}

export default JobCard;