import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const InvoiceForm = ({
  compitem,
  item,
  setItem,
  data,
  changehandler,
  setData,
  show,
  setShow,
  handelchange,
}) => {
  const [edit, setEdititem] = useState(null);
  const [toggale, setToggale] = useState(false);
  const [select, setSelect] = useState(compitem[0].com_name);

  const handlesubmit = (e) => {
    e.preventDefault();

    const newData = { ...data, id: Math.random() * 1000 };
    newData['itemname'] = select;
  
    //console.log(newData);
    setItem([...item, newData]);

    setData({ itemname: "", disc: "", unit: "", unitP: "", total: "" });
  };

  const handelselect = (e) => {
    // const newArray = compitem;
    // const index = newArray.findIndex((val) => {
    //   return val.id === select;
    // })

    // setSelect([...newArray])
    // newArray[index] = select;
    // setItem(select);
    setSelect(e.target.value);
  };


  const edititem = (id) => {
    let eddititem = item.find((val) => {
      //console.log(val);
      return val.id === id;
    });

    setData(eddititem);
    setEdititem(id);
    setToggale(!toggale);
    setShow(true);
  };

  const update = () => {
    const newArr = item;
    const index = newArr.findIndex((val) => {
      return val.id === edit;
    });

    newArr[index] = data;

    setItem([...newArr]);
    setToggale(!toggale)
    setData({ itemname: "", disc: "", unit: "", unitP: "", total: "" });
  };

  const deleteitem = (index) => {
    const deletitem = item.filter((val) => {
      return index !== val.id;
    });

    setItem(deletitem);
  };
  console.log(item, select);

  return (
    <div className="Invoiceform">
      <div className="Invoice">
        <form className="invoice_details" onSubmit={handlesubmit}>
          <h3>Company</h3>

          <Button onClick={handelchange} color="success">
            Create new invoice
            <span >
              <ArrowDropDownIcon />
            </span>
          </Button>

          {show && (
            <div className="list_item">
              <div
                className="invoice_form">
                <select className="select_tag" onChange={handelselect}>
                  {compitem.map((val) => (
                    <><option key={val.id}> {val.com_name}</option>
               
                  </>))}
               
                </select>

                <input
                  type="text"
                  placeholder="Discription"
                  onChange={changehandler}
                  name="disc"
                  value={data.disc}
                  required
                ></input>
                <input
                  type="text"
                  placeholder="Unit"
                  onChange={changehandler}
                  name="unit"
                  value={data.unit}
                  required
                ></input>
                <input
                  type="text"
                  placeholder="Unit price"
                  onChange={changehandler}
                  name="unitP"
                  value={data.unitP}
                  required
                ></input>
                <input
                  type="number"
                  placeholder="Total"
                  onChange={changehandler}
                  name="total"
                  value={data.total}
                  required
                ></input>

                {!toggale ? (
                  <div className="buttons">
                    <button
                    className="buttons"
                      type="submit"
                      onClick={() => {
                      }}
                    >
                      Add
                    </button>
                    <NavLink to="/invoices">
                      <button type="submit">Save</button>
                    </NavLink>
                  </div>
                ) : (
                  <button className="btnupdate" type="button" onClick={update}>
                    Update
                  </button>
                )}
              </div>
            </div>
          )}
        </form>

        <div className="list_data" style={{ width: "100%", color: "green" }}>
          {item.map((val) => (
            <div className="item_detail" key={val.id}>
              <div className="display_item">
                <label>Item name</label>
                  <p key={val.id}>{val.itemname}</p>
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

              <button className="edit_btn" onClick={() => edititem(val.id)}>
                Edit
              </button>
              <button className="delet_btn" onClick={() => deleteitem(val.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
