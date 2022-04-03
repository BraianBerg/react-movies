import React from "react";
import PageHeading from "./PageHeading";
import List from "./List";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Time from "./Time";

export default function App() {
  return (
    <div>
      <PageHeading />
      <Time/>
      <List />
      <Gallery />
      <Footer />
    </div>
  );
}
