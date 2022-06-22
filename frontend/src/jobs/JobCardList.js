import React from "react";
import JobCard from "./JobCard";

/* Show list of job cards.
 *
 * Shows list of jobCards that for both JobList and CompanyDetails
 * 
 */

function JobCardList({ jobs }) {

  return (
      <div>
        {jobs.map(job => (
            <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
                companyName={job.companyName}
            />
        ))}
      </div>
  );
}

export default JobCardList;