import React from "react";
import Tr from "./Tr";
export default ({ values }) => {
  return (
    <tbody>
      {values.map(value => {
        return <Tr tds={value} />;
      })}
    </tbody>
  );
};
