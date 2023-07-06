import React from "react";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


const Dashboard = () => {
  // const [show, setShow] = useState(false);
  // const [showcom, setShowcom] = useState(false);

  const data  = {
    invoices: "INVOICE",
    companies: "COMPANIES",
  };

  return (
    <div className="Dashboard">
      <div className="dashbord_view">
        <div className="dashboard_menu">
          <div className="logo2">
            <h1>quickBooks</h1>
            <h4>Free Dashboard UI</h4>
          </div>

          <div className=" quickbook_menu">
            <NavLink to="/dashboard" >Dashboard</NavLink>
            <NavLink to="/invoices" > {data.invoices} </NavLink>
            <NavLink to="/companies" >{data.companies}</NavLink>

          </div>
        </div>
        <div className="dashboard_home">
          <div className="dashboard_home_bg">
            <img
              src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_row/quickbooks/web/image/other/sbseg-en-row-main-oa-global-hero-desktop-extra.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    

    </div>
  );
};

export default Dashboard;
