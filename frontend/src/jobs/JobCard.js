import React, { useContext, useState } from "react";
import "./JobCard.css";
import UserContext from "../auth/UserContext";

/* Show salary, Job title, Company name and equity in "card" form
 * 
 * JobCard will display a card for each job in the JobList
 * 
*/

function JobCard({ id, salary, title, companyName, equity }){

  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  React.useEffect(function updateAppliedStatus() {
    console.debug("JobCard useEffect updateAppliedStatus", "id=", id);

    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  async function handleApply(evt) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }
    return (
        <div className="JobCard card"> {applied}
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p>{companyName}</p>
             <small>Salary: {salary}</small>
            {equity !== undefined && <div><small>Equity: {equity}</small></div>}
            <button
                className="btn btn-danger font-weight-bold text-uppercase float-right"
                onClick={handleApply}
                disabled={applied}
            >
              {applied ? "Applied" : "Apply"}
            
            </button>
          </div>
        </div>
    );
}

export default JobCard;