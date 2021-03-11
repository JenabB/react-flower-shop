import React from "react";

const Feature = () => {
  const feature = [
    {
      id: 1,
      name: "Indoor",
      total: 510,
    },
    {
      id: 2,
      name: "Outdoor",
      total: 530,
    },
    {
      id: 3,
      name: "Japanese",
      total: 510,
    },
    {
      id: 1,
      name: "Local",
      total: 520,
    },
  ];
  return (
    <div>
      <div>
        {feature.map((f) => (
          <div key={f.id}>
            <h1>{f.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
