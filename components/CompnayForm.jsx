import { Button } from "@mui/material";
import React from "react";
import { db } from "../firebase";
import { collection, addDoc, doc } from "firebase/firestore";

const CompnayForm = ({
  comdata,
  setCompdata,
  setCompitem,
  compitem,
  changehandler,
}) => {
  const submithandler = (e) => {
    e.preventDefault();

    const newdata = { ...comdata, id: Math.random() * 100 - 20 };
    setCompitem([...compitem, newdata]);

    setCompdata({ com_name: "", disc: "", add: "", ph_num: "", email: "" });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { com_name, disc, add, ph_num, email } = comdata;

    try {
      const docRef = await addDoc(collection(db, "CompanyForm"), {
        id: Date.now().toString(),
        com_name,
        disc,
        add,
        ph_num,
        email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    console.log(db);

    //   const result = await fetch(
    //     "gs://quickbook-3c9d0.appspot.com/quickbookform.json",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "text/json",
    //       },
    //       body: JSON.stringify({
    //         com_name,
    //         disc,
    //         add,
    //         ph_num,
    //         email,
    //       }),
    //     }
    //   );
  };

  
  return (
    <div className="CompnayForm">
      <div className="Form">
        <form className="form_details" onSubmit={submithandler} method="POST">
          <h3>Create Company</h3>
          {/* 
          <h2 className="form_logo">
            <input type="file"></input>Add logo
          </h2> */}
          <label className="lable">Company Name</label>
          <input
            className="input_area"
            type="text"
            name="com_name"
            onChange={changehandler}
            value={comdata.com_name}
            placeholder="Enter Company Nmae"
            required
          ></input>
          <label className="lable">Discription</label>
          <textarea
            className="input_area"
            rea
            type="text"
            name="disc"
            onChange={changehandler}
            value={comdata.disc}
            placeholder=""
            required
            rows="3"
          >
            Enter Discription{" "}
          </textarea>
          <label className="lable">Company Address</label>
          <input
            className="input_area"
            type="text"
            name="add"
            onChange={changehandler}
            value={comdata.add}
            placeholder="Address"
            required
          ></input>
          <label className="lable">Company Contact Number</label>
          <input
            className="input_area"
            type="number"
            name="ph_num"
            onChange={changehandler}
            value={comdata.ph_num}
            placeholder="Phone Number"
            required
          ></input>
          <label className="lable">Email</label>
          <input
            className="input_area"
            type="email"
            name="email"
            onChange={changehandler}
            value={comdata.email}
            placeholder="Enter email"
            required
          ></input>
          <Button className="buton" type="submit" onClick={postData}>
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CompnayForm;
