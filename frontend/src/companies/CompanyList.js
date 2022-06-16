import React, { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "../common/LoadingSpinner";

/* List of comapnies page.
 *
 * displays list of companies from API.
 * sets filters if search form is used
 *
 */

function CompanyList(){
    const [companies, setCompanies] = useState(null);

    useEffect(function getCompaniesList(){
        search();
    }, []);

    async function search(name){
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if (!companies) return <LoadingSpinner />;

    return(
        <div className="col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {companies.length
            ? (
                <div>
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
      </div>
    );
}
export default CompanyList;