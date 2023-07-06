import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
//import { StateContext } from "./context/Context";
import Dashboard from "./components/Dashboard";
import Invoices from "./components/Invoices";
import Companies from "./components/Companies";
import CompnayForm from "./components/CompnayForm";
import InvoiceForm from "./components/InvoiceForm";
import PrivateRoute from "./components/PrivateRoute";
import db from './firebase'
import { getDocFromCache } from "firebase/firestore";

// InvoiceForm localStorage
const getlocalitem = () => {
  let data = localStorage.getItem("data");
  if (data) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

// CompanyForm localStorage
const Comgetlocalitem = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  // const { state1 } = useContext(StateContext);
  // const [state] = state1;

  const [data, setData] = useState({
    itemname: "",
    disc: "",
    unit: "",
    unitP: "",
    total: "",
  });

  const [item, setItem] = useState(getlocalitem());

  const [compitem, setCompitem] = useState(Comgetlocalitem());

  const [compdata, setCompdata] = useState({
    com_name: "",
    disc: "",
    add: "",
    ph_num: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  // form show/hide
  const handelchange = () => {
    setShow(!show);
  };

  // try {
  //   const doc = await getDocFromCache(docRef);
  
  //   // Document was found in the cache. If no cached document exists,
  //   // an error will be returned to the 'catch' block below.
  //   console.log("Cached document data:", doc.data());
  // } catch (e) {
  //   console.log("Error getting cached document:", e);
  // }
  
  // InvoiceForm
  const onchanghandle = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  // companyForm
  const changehandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setCompdata({ ...compdata, [name]: value });
  };

  // InvoiceForm localStorage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(item));
  }, [item]);

  // CompnayForm localStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(compitem));
  }, [compitem]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          exact
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route exact path="/" element={<Home />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/invoices"
          element={
            <PrivateRoute>
              <Invoices item={item} show={show} setShow={setShow} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/companies"
          element={
            <PrivateRoute>
              <Companies compitem={compitem} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/companyform"
          element={
            <PrivateRoute>
              <CompnayForm
                comdata={compdata}
                setCompdata={setCompdata}
                setCompitem={setCompitem}
                compitem={compitem}
                changehandler={changehandler}
              />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/invoiceform"
          element={
            <PrivateRoute>
              <InvoiceForm
                item={item}
                data={data}
                changehandler={onchanghandle}
                setItem={setItem}
                setData={setData}
                compitem={compitem}
                show={show}
                setShow={setShow}
                handelchange={handelchange}
              />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
