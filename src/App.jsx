import { Routes, Route } from "react-router-dom";
import {Sidebar, Header, Basket} from "components";
import { About, Dashboard, Home } from "pages";

function App() {
  return (
    <div className="wrapper">
      <div className="inner-wrap">
        <Sidebar className="sidebar-item" />
        <div className="page-wrap">
          <Header className="header-item" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discount" element={<About />} />
            <Route path= "/dashboard" element={<Dashboard/>}/>
          </Routes>
        </div>
      </div>
      <div className="box">
        <Basket className="basket-item" />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
