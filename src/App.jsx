import React from "react";
import "./App.css";
import ReactToExcel from "react-html-table-to-excel";
import { Thead, Tbody } from "./components/";

const App = () => {
  const ths = ["Firstname", "Lastname", "Age"];
  const values = [
    ["Jill", "Smith", 50],
    ["Eve", "Jackson", 18],
    ["Bob", "wilson", 34]
  ];

  return (
    <div className="App">
      <table id="table-to-xls">
        <Thead ths={ths} />
        <Tbody values={values} />
      </table>
      <ReactToExcel
        className="btn"
        table="table-to-xls"
        filename="excelFile"
        sheet="sheet 1"
        buttonText="EXPORT"
      />
    </div>
  );
};

export default App;
