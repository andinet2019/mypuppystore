import { Create, Person } from "@material-ui/icons";
import React, { createElement } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { data } from "./clothes";
import Cloth from "./Cloth";
import Header from "./Header";
import Footer from "./Footer";

function ClothList() {
  return (
    <div>
      <Header />
      <section className="clothList">
        {data.map((cloth) => {
          return <Cloth key={cloth.id} {...cloth}></Cloth>;
        })}
      </section>
      <Footer />
    </div>
  );
}

ReactDOM.render(<ClothList />, document.getElementById("root"));
