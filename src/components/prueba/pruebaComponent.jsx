import React from "react";

//Components

function pruebaComponent() {
  const data = [
    {
      name: "Luis",
      lastName: "Aznar",
    },
    {
      name: "Jose",
      lastName: "Valencia",
    },
    {
      name: "Johan",
      lastName: "Burgos",
    },
  ];
  return (
    <div>
      <ul>
        {data.map((datos) => (
          <li>
            {datos.name} {datos.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default pruebaComponent;
