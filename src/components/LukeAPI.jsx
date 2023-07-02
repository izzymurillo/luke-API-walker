import React from "react";
import { Outlet } from "react-router-dom";
import Form from "./Form";

function LukeAPI() {
  return (
    <>
      {/* <Form /> */}
      <Outlet />
    </>
  );
}

export default LukeAPI;
