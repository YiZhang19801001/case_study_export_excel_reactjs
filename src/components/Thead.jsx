import React from "react";

export default ({ ths }) => {
  return (
    <thead>
      <tr>
        {ths.map(th => {
          return <th key={`th${th}`}>{th}</th>;
        })}
      </tr>
    </thead>
  );
};
