import React from "react";
import { NavLink } from "react-router-dom";

const Invoices = ({ item ,show , setShow}) => {
  const data = {
    invoices: "INVOICE",
    companies: "COMPANIES",
  };

  return (
    <div className="Invoices">
      <div className="invoice_view">
        <div className="dashboard_menu">
          <div className="logo2">
            <h1>quickBooks</h1>
            <h4>Free Dashboard UI</h4>
          </div>

          <div className=" quickbook_menu">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/invoices"> {data.invoices} </NavLink>
            <NavLink to="/companies">{data.companies}</NavLink>
          </div>
        </div>

        <div className="invoice">

          <NavLink to="/invoiceform" onClick={()=>{setShow(true)}}>
            Create Invoice <span>+</span>
          </NavLink>

          <div className="list_data" style={{ width: "100%", color: "green" }}>
            {item.map((val) => (
              <div className="item_detail" key={val.id}>
                <div className="display_item">
                  <label>Item name</label>
                  <p>{val.itemname}</p>
                </div>

                <div className="display_item">
                  <label>Discription</label>
                  <p>{val.disc}</p>
                </div>

                <div className="display_item">
                  <label>Unit</label>
                  <p>{val.unit}</p>
                </div>

                <div className="display_item">
                  <label>Unit Price</label>
                  <p>{val.unitP}</p>
                </div>

                <div className="display_item">
                  <label>Ttotal</label>
                  <p>{val.total}</p>
                </div>
                <NavLink to="/invoiceform" onClick={()=>{setShow(false)}}>View Details</NavLink>
              </div>
            ))}
          </div>
        </div>

        <div className="invoice_list"></div>
      </div>
    </div>
  );
};

export default Invoices;
