import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import JobCardList from "../jobs/JobCardList";


/* Page containing company details
 * 
 * Company information is displayed, including company bio and jobs at the company
 * 
 * 
*/

function CompanyDetail(){
    const { handle } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(function getCompanyDetailAndJobs(){
        async function getCompany(){
            setCompany(await JoblyApi.getCompany(handle))
        }
        getCompany();
    }, [handle]);

    if (!company) return <LoadingSpinner />;

    return (
        <div className="col-md-8 offset-md-2">
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs} />
        </div>
    ) 
}

export default CompanyDetail;