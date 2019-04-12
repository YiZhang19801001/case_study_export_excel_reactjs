import React from "react";

export default ({ tds }) => {
  return (
    <tr>
      {tds.map(td => {
        return <td key={td}>{td}</td>;
      })}
    </tr>
  );
};
