import React from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const Companies = ({ compitem }) => {
  console.log(compitem)
  return (
    <div className="Companies">
      <div className="companies_view">
        <div className="dashboard_menu">
          <div className="logo2">
            <h1>quickBooks</h1>
            <h4>Free Dashboard UI</h4>
          </div>

          <div className=" quickbook_menu">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/invoices"> INVOICE </NavLink>
            <NavLink to="/companies"> COMPANIES </NavLink>
          </div>
        </div>
        <div>
          <div className="company">
            <NavLink to="/companyform">

              Create Company
              <span>
                <AddIcon />
              </span>
            </NavLink>
          </div>

          <div className="companies_list">
            <h1>Lists</h1>
          </div>
 <div className="list_data">
            {compitem.map((val) => (
              <div className="item_detail" key={val.id}>
                <div className="display_item">
                  <label>Company Name</label>
                  <p>{val.com_name}</p>
                </div>

                <div className="display_item">
                  <label>Discription</label>
                  <p>{val.disc}</p>
                </div>

                <div className="display_item">
                  <label>Cpmany Address</label>
                  <p>{val.add}</p>
                </div>

                <div className="display_item">
                  <label>Phone Number</label>
                  <p>{val.ph_num}</p>
                </div>

                <div className="display_item">
                  <label>Comapny Email</label>
                  <p>{val.email}</p>
                </div>

                

              </div>
            ))}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Companies;
