import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";
/* Show info about company with a card  display.
 * 
 * List of companies is displayed in "card" list form
 * 
*/

function CompanyCard({ handle, name, description, logoUrl }){

    return(
        <Link className="CompanyCard card" to={`/companies/${handle}`}>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                    <span>{logoUrl && <img className="float-right ml-4" src={logoUrl}/>}</span>
                <p><small>{description}</small></p>
            </div>
        </Link>
    );
}

export default CompanyCard;